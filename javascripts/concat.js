"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.3",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a) {
      return n.each(this, a);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;for (b in a) {}return void 0 === b || k.call(a, b);
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
              r[h] = l + " " + qa(r[h]);
            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Y.test(a.nodeName);
        }, input: function input(a) {
          return X.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = la(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = ma(b);
    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }m.push(c);
        }
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }u = ua(u);
          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return u(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    }, next: function next(a) {
      return F(a, "nextSibling");
    }, prev: function prev(a) {
      return F(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return v(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();var K = function K(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) {
        K(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function L(a) {
    return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
  };function M() {
    this.expando = n.expando + M.uid++;
  }M.uid = 1, M.prototype = { register: function register(a, b) {
      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
    }, cache: function cache(a) {
      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) {
        e[d] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    }, access: function access(a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d,
          e,
          f = a[this.expando];if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) {
            delete f[d[c]];
          }
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
    } };var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;function R(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}O.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function hasData(a) {
      return O.hasData(a) || N.hasData(a);
    }, data: function data(a, b, c) {
      return O.access(a, b, c);
    }, removeData: function removeData(a, b) {
      O.remove(a, b);
    }, _data: function _data(a, b, c) {
      return N.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      N.remove(a, b);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
          }N.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        O.remove(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function V(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
      if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", o = 0;while (f = m[o++]) {
      if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
        k = 0;while (f = g[k++]) {
          Z.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
    return !0;
  }function ha() {
    return !1;
  }function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ja(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ja(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;while (j--) {
          h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) {
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
        c = e[b], a[c] = g[c];
      }return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ga, a && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ga, a && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), n.fn.extend({ on: function on(a, b, c, d) {
      return ja(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function ra(a) {
    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function sa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }function ta(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function ua(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
        j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      }if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
        j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
      }
    }return a;
  }function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ka, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
        ta(f[d], g[d]);
      }if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
        sa(f[d], g[d]);
      } else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (L(c)) {
          if (b = c[N.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            }c[N.expando] = void 0;
          }c[O.expando] && (c[O.expando] = void 0);
        }
      }
    } }), n.fn.extend({ domManip: ua, detach: function detach(a) {
      return va(this, a, !0);
    }, remove: function remove(a) {
      return va(this, a);
    }, text: function text(a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return ua(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
        c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var wa,
      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function za(a) {
    var b = d,
        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function Ca(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function Da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  },
      Ea = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      (function () {
        var i = function i() {
          h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
        };

        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
            return i(), b;
          }, boxSizingReliable: function boxSizingReliable() {
            return null == c && i(), c;
          }, pixelMarginRight: function pixelMarginRight() {
            return null == c && i(), e;
          }, reliableMarginLeft: function reliableMarginLeft() {
            return null == c && i(), f;
          }, reliableMarginRight: function reliableMarginRight() {
            var b,
                c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
          } });
      })();
    }
  }();function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
  }function Ga(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = { position: "absolute", visibility: "hidden", display: "block" },
      Ja = { letterSpacing: "0", fontWeight: "400" },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;function Ma(a) {
    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;while (c--) {
      if (a = Ka[c] + b, a in La) return a;
    }
  }function Na(a, b, c) {
    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    }return g;
  }function Pa(b, c, e) {
    var f = !0,
        g = "width" === c ? b.offsetWidth : b.offsetHeight,
        h = Ca(b),
        i = "border-box" === n.css(b, "boxSizing", !1, h);if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
      if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
    }return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Fa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      } };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({ css: function css(a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Qa(this, !0);
    }, hide: function hide() {
      return Qa(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    } });function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }function Xa(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = U[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], Ua.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;N.remove(a, "fxshow");for (b in m) {
          n.style(a, b, m[b]);
        }
      });for (d in m) {
        g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function $a(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) {
      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
      }
    }, prefilters: [Za], prefilter: function prefilter(a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Va.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (Sa = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var ab,
      bb = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    } }), ab = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var eb = /[\t\r\n\f]/g;function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var gb = /\r/g,
      hb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var ib = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
            p.push(h), i = h;
          }i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    } }), n.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      } };
  });var jb = a.location,
      kb = n.now(),
      lb = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };var mb = /#.*$/,
      nb = /([?&])_=[^&]*/,
      ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      qb = /^(?:GET|HEAD)$/,
      rb = /^\/\//,
      sb = {},
      tb = {},
      ub = "*/".concat("*"),
      vb = d.createElement("a");vb.href = jb.href;function wb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function xb(a, b, c, d) {
    var e = {},
        f = a === tb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function yb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && n.extend(!0, a, d), a;
  }function zb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Ab(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === v) {
            if (!h) {
              h = {};while (b = ob.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === v ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return v || (m.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > v) for (b in a) {
            s[b] = [s[b], a[b]];
          } else x.always(a[x.status]);return this;
        }, abort: function abort(a) {
          var b = a || w;return e && e.abort(b), z(0, b), this;
        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");try {
          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) {
        x.setRequestHeader(l, m.headers[l]);
      }if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
        x[l](m[l]);
      }if (e = xb(tb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;z(-1, y);
        }
      } else z(-1, "No Transport");function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this);
    }, wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };var Bb = /%20/g,
      Cb = /\[\]$/,
      Db = /\r?\n/g,
      Eb = /^(?:submit|button|image|reset|file)$/i,
      Fb = /^(?:input|select|textarea|keygen)/i;function Gb(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Gb(a + "[" + e + "]", b[e], c, d);
    }
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Gb(c, a[c], b, e);
    }return d.join("&").replace(Bb, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(Db, "\r\n") };
        }) : { name: b.name, value: c.replace(Db, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Hb = { 0: 200, 1223: 204 },
      Ib = n.ajaxSettings.xhr();l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
    var _c, d;return l.cors || Ib && !b.crossDomain ? { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Jb = [],
      Kb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Jb.pop() || n.expando + "_" + kb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var Lb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }return a || Ea;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Mb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }, size: function size() {
      return this.length;
    } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var Nb = a.jQuery,
      Ob = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
  }, b || (a.jQuery = a.$ = n), n;
});
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

var Util = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments);
        }
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var _name in TransitionEndEvent) {
      if (el.style[_name] !== undefined) {
        return { end: TransitionEndEvent[_name] };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        prefix += ~ ~(Math.random() * 1000000); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      return prefix;
    },

    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },

    reflow: function reflow(element) {
      new Function('bs', 'return bs')(element.offsetHeight);
    },

    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },

    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },

    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = undefined;

          if (value && isElement(value)) {
            valueType = 'element';
          } else {
            valueType = toType(value);
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
}(jQuery);
//# sourceMappingURL=util.js.map
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.0.0-alpha';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };

  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    RESIZE: 'resize' + EVENT_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in'
  };

  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = function () {
    function Modal(element, config) {
      _classCallCheck(this, Modal);

      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Modal, [{
      key: 'toggle',

      // public

      value: function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: 'show',
      value: function show(relatedTarget) {
        var _this = this;

        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });

        $(this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();
        this._setScrollbar();

        $(document.body).addClass(ClassName.OPEN);

        this._setEscapeEvent();
        this._setResizeEvent();

        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

        $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
          $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($(event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
      }
    }, {
      key: 'hide',
      value: function hide(event) {
        if (event) {
          event.preventDefault();
        }

        var hideEvent = $.Event(Event.HIDE);

        $(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;

        this._setEscapeEvent();
        this._setResizeEvent();

        $(document).off(Event.FOCUSIN);

        $(this._element).removeClass(ClassName.IN);

        $(this._element).off(Event.CLICK_DISMISS);
        $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {

          $(this._element).one(Util.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          this._hideModal();
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);

        $(window).off(EVENT_KEY);
        $(document).off(EVENT_KEY);
        $(this._element).off(EVENT_KEY);
        $(this._backdrop).off(EVENT_KEY);

        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._originalBodyPadding = null;
        this._scrollbarWidth = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_showElement',
      value: function _showElement(relatedTarget) {
        var _this2 = this;

        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // don't move modals dom position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';
        this._element.scrollTop = 0;

        if (transition) {
          Util.reflow(this._element);
        }

        $(this._element).addClass(ClassName.IN);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          if (_this2._config.focus) {
            _this2._element.focus();
          }
          $(_this2._element).trigger(shownEvent);
        };

        if (transition) {
          $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        }
      }
    }, {
      key: '_enforceFocus',
      value: function _enforceFocus() {
        var _this3 = this;

        $(document).off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (_this3._element !== event.target && !$(_this3._element).has(event.target).length) {
            _this3._element.focus();
          }
        });
      }
    }, {
      key: '_setEscapeEvent',
      value: function _setEscapeEvent() {
        var _this4 = this;

        if (this._isShown && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === 27) {
              _this4.hide();
            }
          });
        } else if (!this._isShown) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      }
    }, {
      key: '_setResizeEvent',
      value: function _setResizeEvent() {
        if (this._isShown) {
          $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
        } else {
          $(window).off(Event.RESIZE);
        }
      }
    }, {
      key: '_hideModal',
      value: function _hideModal() {
        var _this5 = this;

        this._element.style.display = 'none';
        this._showBackdrop(function () {
          $(document.body).removeClass(ClassName.OPEN);
          _this5._resetAdjustments();
          _this5._resetScrollbar();
          $(_this5._element).trigger(Event.HIDDEN);
        });
      }
    }, {
      key: '_removeBackdrop',
      value: function _removeBackdrop() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        }
      }
    }, {
      key: '_showBackdrop',
      value: function _showBackdrop(callback) {
        var _this6 = this;

        var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

        if (this._isShown && this._config.backdrop) {
          var doAnimate = Util.supportsTransitionEnd() && animate;

          this._backdrop = document.createElement('div');
          this._backdrop.className = ClassName.BACKDROP;

          if (animate) {
            $(this._backdrop).addClass(animate);
          }

          $(this._backdrop).appendTo(document.body);

          $(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this6._ignoreBackdropClick) {
              _this6._ignoreBackdropClick = false;
              return;
            }
            if (event.target !== event.currentTarget) {
              return;
            }
            if (_this6._config.backdrop === 'static') {
              _this6._element.focus();
            } else {
              _this6.hide();
            }
          });

          if (doAnimate) {
            Util.reflow(this._backdrop);
          }

          $(this._backdrop).addClass(ClassName.IN);

          if (!callback) {
            return;
          }

          if (!doAnimate) {
            callback();
            return;
          }

          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else if (!this._isShown && this._backdrop) {
          $(this._backdrop).removeClass(ClassName.IN);

          var callbackRemove = function callbackRemove() {
            _this6._removeBackdrop();
            if (callback) {
              callback();
            }
          };

          if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      }

      // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------

    }, {
      key: '_handleUpdate',
      value: function _handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: '_adjustDialog',
      value: function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + 'px';
        }

        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + 'px~';
        }
      }
    }, {
      key: '_resetAdjustments',
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      }
    }, {
      key: '_checkScrollbar',
      value: function _checkScrollbar() {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
          // workaround for missing window.innerWidth in IE8
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      }
    }, {
      key: '_setScrollbar',
      value: function _setScrollbar() {
        var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);

        this._originalBodyPadding = document.body.style.paddingRight || '';

        if (this._isBodyOverflowing) {
          document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';
        }
      }
    }, {
      key: '_resetScrollbar',
      value: function _resetScrollbar() {
        document.body.style.paddingRight = this._originalBodyPadding;
      }
    }, {
      key: '_getScrollbarWidth',
      value: function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data) {
            data = new Modal(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this7 = this;

    var target = undefined;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this7).is(':visible')) {
          _this7.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}(jQuery);
//# sourceMappingURL=modal.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJ1dGlsLmpzIiwibW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLHNCQUFpQix1REFBakIsSUFBeUIsb0JBQWlCLE9BQU8sT0FBUCxDQUFqQixHQUFnQyxPQUFPLE9BQVAsR0FBZSxFQUFFLFFBQUYsR0FBVyxFQUFFLENBQUYsRUFBSSxDQUFDLENBQUQsQ0FBZixHQUFtQixVQUFTLENBQVQsRUFBVztBQUFDLFFBQUcsQ0FBQyxFQUFFLFFBQUYsRUFBVyxNQUFNLElBQUksS0FBSixDQUFVLDBDQUFWLENBQU4sQ0FBZixPQUFrRixFQUFFLENBQUYsQ0FBUCxDQUE1RTtHQUFYLEdBQW9HLEVBQUUsQ0FBRixDQUEvTCxDQUFEO0NBQWIsQ0FBbU4sZUFBYSxPQUFPLE1BQVAsR0FBYyxNQUEzQixZQUFuTixFQUEwUCxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxNQUFJLElBQUUsRUFBRjtNQUFLLElBQUUsRUFBRSxRQUFGO01BQVcsSUFBRSxFQUFFLEtBQUY7TUFBUSxJQUFFLEVBQUUsTUFBRjtNQUFTLElBQUUsRUFBRSxJQUFGO01BQU8sSUFBRSxFQUFFLE9BQUY7TUFBVSxJQUFFLEVBQUY7TUFBSyxJQUFFLEVBQUUsUUFBRjtNQUFXLElBQUUsRUFBRSxjQUFGO01BQWlCLElBQUUsRUFBRjtNQUFLLElBQUUsT0FBRjtNQUFVLElBQUUsU0FBRixDQUFFLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFdBQU8sSUFBSSxFQUFFLEVBQUYsQ0FBSyxJQUFMLENBQVUsQ0FBZCxFQUFnQixDQUFoQixDQUFQLENBQUQ7R0FBYjtNQUF5QyxJQUFFLG9DQUFGO01BQXVDLElBQUUsT0FBRjtNQUFVLElBQUUsY0FBRjtNQUFpQixJQUFFLFNBQUYsQ0FBRSxDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxXQUFPLEVBQUUsV0FBRixFQUFQLENBQUQ7R0FBYixDQUFwTyxDQUEwUSxDQUFFLEVBQUYsR0FBSyxFQUFFLFNBQUYsR0FBWSxFQUFDLFFBQU8sQ0FBUCxFQUFTLGFBQVksQ0FBWixFQUFjLFVBQVMsRUFBVCxFQUFZLFFBQU8sQ0FBUCxFQUFTLFNBQVEsbUJBQVU7QUFBQyxhQUFPLEVBQUUsSUFBRixDQUFPLElBQVAsQ0FBUCxDQUFEO0tBQVYsRUFBZ0MsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sUUFBTSxDQUFOLEdBQVEsSUFBRSxDQUFGLEdBQUksS0FBSyxJQUFFLEtBQUssTUFBTCxDQUFYLEdBQXdCLEtBQUssQ0FBTCxDQUF4QixHQUFnQyxFQUFFLElBQUYsQ0FBTyxJQUFQLENBQXhDLENBQVI7S0FBWCxFQUF5RSxXQUFVLG1CQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLEtBQUYsQ0FBUSxLQUFLLFdBQUwsRUFBUixFQUEyQixDQUEzQixDQUFGLENBQUwsT0FBNEMsRUFBRSxVQUFGLEdBQWEsSUFBYixFQUFrQixFQUFFLE9BQUYsR0FBVSxLQUFLLE9BQUwsRUFBYSxDQUF6QyxDQUE1QztLQUFYLEVBQW1HLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsSUFBRixDQUFPLElBQVAsRUFBWSxDQUFaLENBQVAsQ0FBRDtLQUFYLEVBQW1DLEtBQUksYUFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEtBQUssU0FBTCxDQUFlLEVBQUUsR0FBRixDQUFNLElBQU4sRUFBVyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxlQUFPLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQUFQLENBQUQ7T0FBYixDQUExQixDQUFQLENBQUQ7S0FBWCxFQUFvRixPQUFNLGlCQUFVO0FBQUMsYUFBTyxLQUFLLFNBQUwsQ0FBZSxFQUFFLEtBQUYsQ0FBUSxJQUFSLEVBQWEsU0FBYixDQUFmLENBQVAsQ0FBRDtLQUFWLEVBQTJELE9BQU0saUJBQVU7QUFBQyxhQUFPLEtBQUssRUFBTCxDQUFRLENBQVIsQ0FBUCxDQUFEO0tBQVYsRUFBOEIsTUFBSyxnQkFBVTtBQUFDLGFBQU8sS0FBSyxFQUFMLENBQVEsQ0FBQyxDQUFELENBQWYsQ0FBRDtLQUFWLEVBQStCLElBQUcsWUFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLElBQUUsS0FBSyxNQUFMO1VBQVksSUFBRSxDQUFDLENBQUQsSUFBSSxJQUFFLENBQUYsR0FBSSxDQUFKLEdBQU0sQ0FBTixDQUFKLENBQXJCLE9BQXlDLEtBQUssU0FBTCxDQUFlLEtBQUcsQ0FBSCxJQUFNLElBQUUsQ0FBRixHQUFJLENBQUMsS0FBSyxDQUFMLENBQUQsQ0FBVixHQUFvQixFQUFwQixDQUF0QixDQUFsQztLQUFYLEVBQTRGLEtBQUksZUFBVTtBQUFDLGFBQU8sS0FBSyxVQUFMLElBQWlCLEtBQUssV0FBTCxFQUFqQixDQUFSO0tBQVYsRUFBdUQsTUFBSyxDQUFMLEVBQU8sTUFBSyxFQUFFLElBQUYsRUFBTyxRQUFPLEVBQUUsTUFBRixFQUF4dEIsRUFBa3VCLEVBQUUsTUFBRixHQUFTLEVBQUUsRUFBRixDQUFLLE1BQUwsR0FBWSxZQUFVO0FBQUMsUUFBSSxDQUFKO1FBQU0sQ0FBTjtRQUFRLENBQVI7UUFBVSxDQUFWO1FBQVksQ0FBWjtRQUFjLENBQWQ7UUFBZ0IsSUFBRSxVQUFVLENBQVYsS0FBYyxFQUFkO1FBQWlCLElBQUUsQ0FBRjtRQUFJLElBQUUsVUFBVSxNQUFWO1FBQWlCLElBQUUsQ0FBQyxDQUFELENBQTdELEtBQW9FLGFBQVcsT0FBTyxDQUFQLEtBQVcsSUFBRSxDQUFGLEVBQUksSUFBRSxVQUFVLENBQVYsS0FBYyxFQUFkLEVBQWlCLEdBQXZCLENBQXRCLEVBQWtELG9CQUFpQiw2Q0FBakIsSUFBb0IsRUFBRSxVQUFGLENBQWEsQ0FBYixDQUFwQixLQUFzQyxJQUFFLEVBQUYsQ0FBdEMsRUFBNEMsTUFBSSxDQUFKLEtBQVEsSUFBRSxJQUFGLEVBQU8sR0FBUCxDQUFSLEVBQW9CLElBQUUsQ0FBRixFQUFJLEdBQTFIO0FBQThILFVBQUcsU0FBTyxJQUFFLFVBQVUsQ0FBVixDQUFGLENBQVAsRUFBdUIsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFlBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sTUFBSSxDQUFKLEtBQVEsS0FBRyxDQUFILEtBQU8sRUFBRSxhQUFGLENBQWdCLENBQWhCLE1BQXFCLElBQUUsRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFGLENBQXJCLENBQVAsSUFBOEMsS0FBRyxJQUFFLENBQUMsQ0FBRCxFQUFHLElBQUUsS0FBRyxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQUgsR0FBZ0IsQ0FBaEIsR0FBa0IsRUFBbEIsQ0FBVixHQUFnQyxJQUFFLEtBQUcsRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQUgsR0FBc0IsQ0FBdEIsR0FBd0IsRUFBeEIsRUFBMkIsRUFBRSxDQUFGLElBQUssRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQUwsQ0FBM0csR0FBaUksS0FBSyxDQUFMLEtBQVMsQ0FBVCxLQUFhLEVBQUUsQ0FBRixJQUFLLENBQUwsQ0FBYixDQUF6STtPQUF6QjtLQUF4SixPQUF1VixDQUFQLENBQWhaO0dBQVYsRUFBb2EsRUFBRSxNQUFGLENBQVMsRUFBQyxTQUFRLFdBQVMsQ0FBQyxJQUFFLEtBQUssTUFBTCxFQUFGLENBQUQsQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBZ0MsRUFBaEMsQ0FBVCxFQUE2QyxTQUFRLENBQUMsQ0FBRCxFQUFHLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxZQUFNLElBQUksS0FBSixDQUFVLENBQVYsQ0FBTixDQUFEO0tBQVgsRUFBZ0MsTUFBSyxnQkFBVSxFQUFWLEVBQWEsWUFBVyxvQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFNLGVBQWEsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFiLENBQVA7S0FBWCxFQUEwQyxTQUFRLE1BQU0sT0FBTixFQUFjLFVBQVMsa0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxRQUFNLENBQU4sSUFBUyxNQUFJLEVBQUUsTUFBRixDQUFyQjtLQUFYLEVBQTBDLFdBQVUsbUJBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxJQUFFLEtBQUcsRUFBRSxRQUFGLEVBQUgsQ0FBUCxPQUE2QixDQUFDLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBRCxJQUFlLElBQUUsV0FBVyxDQUFYLENBQUYsR0FBZ0IsQ0FBaEIsSUFBbUIsQ0FBbkIsQ0FBNUM7S0FBWCxFQUE2RSxlQUFjLHVCQUFTLENBQVQsRUFBVztBQUFDLFVBQUksQ0FBSixDQUFELElBQVUsYUFBVyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVgsSUFBc0IsRUFBRSxRQUFGLElBQVksRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUFsQyxFQUFnRCxPQUFNLENBQUMsQ0FBRCxDQUF6RCxJQUErRCxFQUFFLFdBQUYsSUFBZSxDQUFDLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxhQUFULENBQUQsSUFBMEIsQ0FBQyxFQUFFLElBQUYsQ0FBTyxFQUFFLFdBQUYsQ0FBYyxTQUFkLElBQXlCLEVBQXpCLEVBQTRCLGVBQW5DLENBQUQsRUFBcUQsT0FBTSxDQUFDLENBQUQsQ0FBdkcsS0FBOEcsQ0FBSixJQUFTLENBQVQsSUFBN0ssT0FBZ00sS0FBSyxDQUFMLEtBQVMsQ0FBVCxJQUFZLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxDQUFULENBQVosQ0FBaE07S0FBWCxFQUFvTyxlQUFjLHVCQUFTLENBQVQsRUFBVztBQUFDLFVBQUksQ0FBSixDQUFELEtBQVcsQ0FBSixJQUFTLENBQVQ7QUFBVyxlQUFNLENBQUMsQ0FBRDtPQUFqQixPQUEwQixDQUFDLENBQUQsQ0FBakM7S0FBWCxFQUFnRCxNQUFLLGNBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxRQUFNLENBQU4sR0FBUSxJQUFFLEVBQUYsR0FBSyxvQkFBaUIsNkNBQWpCLElBQW9CLGNBQVksT0FBTyxDQUFQLEdBQVMsRUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUYsS0FBYyxRQUFkLFVBQThCLDRDQUF2RSxDQUFyQjtLQUFYLEVBQTBHLFlBQVcsb0JBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxDQUFKO1VBQU0sSUFBRSxJQUFGLENBQVAsQ0FBYyxHQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBRixFQUFZLE1BQUksTUFBSSxFQUFFLE9BQUYsQ0FBVSxZQUFWLENBQUosSUFBNkIsSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsUUFBaEIsQ0FBRixFQUE0QixFQUFFLElBQUYsR0FBTyxDQUFQLEVBQVMsRUFBRSxJQUFGLENBQU8sV0FBUCxDQUFtQixDQUFuQixFQUFzQixVQUF0QixDQUFpQyxXQUFqQyxDQUE2QyxDQUE3QyxDQUFyQyxDQUE3QixHQUFtSCxFQUFFLENBQUYsQ0FBbkgsQ0FBSixDQUExQjtLQUFYLEVBQW1LLFdBQVUsbUJBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksS0FBWixFQUFtQixPQUFuQixDQUEyQixDQUEzQixFQUE2QixDQUE3QixDQUFQLENBQUQ7S0FBWCxFQUFvRCxVQUFTLGtCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLEVBQUUsUUFBRixJQUFZLEVBQUUsUUFBRixDQUFXLFdBQVgsT0FBMkIsRUFBRSxXQUFGLEVBQTNCLENBQXBCO0tBQWIsRUFBNkUsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLENBQUo7VUFBTSxJQUFFLENBQUYsQ0FBUCxJQUFjLEVBQUUsQ0FBRixDQUFILEVBQVE7QUFBQyxhQUFJLElBQUUsRUFBRSxNQUFGLEVBQVMsSUFBRSxDQUFGLEVBQUksR0FBbkI7QUFBdUIsY0FBRyxFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxFQUFZLENBQVosRUFBYyxFQUFFLENBQUYsQ0FBZCxNQUFzQixDQUFDLENBQUQsRUFBRyxNQUE1QjtTQUF2QjtPQUFULE1BQXVFLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxZQUFHLEVBQUUsSUFBRixDQUFPLEVBQUUsQ0FBRixDQUFQLEVBQVksQ0FBWixFQUFjLEVBQUUsQ0FBRixDQUFkLE1BQXNCLENBQUMsQ0FBRCxFQUFHLE1BQTVCO09BQVgsT0FBb0QsQ0FBUCxDQUEvSDtLQUFiLEVBQXNKLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxhQUFPLFFBQU0sQ0FBTixHQUFRLEVBQVIsR0FBVyxDQUFDLElBQUUsRUFBRixDQUFELENBQU8sT0FBUCxDQUFlLENBQWYsRUFBaUIsRUFBakIsQ0FBWCxDQUFSO0tBQVgsRUFBb0QsV0FBVSxtQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxJQUFFLEtBQUcsRUFBSCxDQUFQLE9BQW9CLFFBQU0sQ0FBTixLQUFVLEVBQUUsT0FBTyxDQUFQLENBQUYsSUFBYSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsWUFBVSxPQUFPLENBQVAsR0FBUyxDQUFDLENBQUQsQ0FBbkIsR0FBdUIsQ0FBdkIsQ0FBdkIsR0FBaUQsRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBakQsQ0FBVixFQUF3RSxDQUF4RSxDQUFwQjtLQUFiLEVBQTRHLFNBQVEsaUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLFFBQU0sQ0FBTixHQUFRLENBQUMsQ0FBRCxHQUFHLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQUFYLENBQVI7S0FBZixFQUFpRCxPQUFNLGVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFdBQUksSUFBSSxJQUFFLENBQUMsRUFBRSxNQUFGLEVBQVMsSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLENBQUYsRUFBSSxHQUF2QztBQUEyQyxVQUFFLEdBQUYsSUFBTyxFQUFFLENBQUYsQ0FBUDtPQUEzQyxPQUE4RCxFQUFFLE1BQUYsR0FBUyxDQUFULEVBQVcsQ0FBWCxDQUEvRDtLQUFiLEVBQTBGLE1BQUssY0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFdBQUksSUFBSSxDQUFKLEVBQU0sSUFBRSxFQUFGLEVBQUssSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLENBQUMsQ0FBRCxFQUFHLElBQUUsQ0FBRixFQUFJLEdBQXZDO0FBQTJDLFlBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sQ0FBUCxDQUFELEVBQVcsTUFBSSxDQUFKLElBQU8sRUFBRSxJQUFGLENBQU8sRUFBRSxDQUFGLENBQVAsQ0FBUDtPQUF4RCxPQUFtRixDQUFQLENBQTdFO0tBQWYsRUFBc0csS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLElBQUUsQ0FBRjtVQUFJLElBQUUsRUFBRixDQUFiLElBQXFCLEVBQUUsQ0FBRixDQUFILEVBQVEsS0FBSSxJQUFFLEVBQUUsTUFBRixFQUFTLElBQUUsQ0FBRixFQUFJLEdBQW5CO0FBQXVCLFlBQUUsRUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLENBQVAsRUFBUyxDQUFULENBQUYsRUFBYyxRQUFNLENBQU4sSUFBUyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVQ7T0FBckMsTUFBNkQsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFlBQUUsRUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLENBQVAsRUFBUyxDQUFULENBQUYsRUFBYyxRQUFNLENBQU4sSUFBUyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVQ7T0FBekIsT0FBbUQsRUFBRSxLQUFGLENBQVEsRUFBUixFQUFXLENBQVgsQ0FBUCxDQUFuSTtLQUFmLEVBQXdLLE1BQUssQ0FBTCxFQUFPLE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsQ0FBRCxPQUFpQixZQUFVLE9BQU8sQ0FBUCxLQUFXLElBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxJQUFFLENBQUYsRUFBSSxJQUFFLENBQUYsQ0FBaEMsRUFBcUMsRUFBRSxVQUFGLENBQWEsQ0FBYixLQUFpQixJQUFFLEVBQUUsSUFBRixDQUFPLFNBQVAsRUFBaUIsQ0FBakIsQ0FBRixFQUFzQixJQUFFLGFBQVU7QUFBQyxlQUFPLEVBQUUsS0FBRixDQUFRLEtBQUcsSUFBSCxFQUFRLEVBQUUsTUFBRixDQUFTLEVBQUUsSUFBRixDQUFPLFNBQVAsQ0FBVCxDQUFoQixDQUFQLENBQUQ7T0FBVixFQUFnRSxFQUFFLElBQUYsR0FBTyxFQUFFLElBQUYsR0FBTyxFQUFFLElBQUYsSUFBUSxFQUFFLElBQUYsRUFBUixFQUFpQixDQUF2SCxDQUFqQixHQUEySSxLQUFLLENBQUwsQ0FBak07S0FBYixFQUFzTixLQUFJLEtBQUssR0FBTCxFQUFTLFNBQVEsQ0FBUixFQUFsaUUsQ0FBaHFDLEVBQThzRyxjQUFZLE9BQU8sTUFBUCxLQUFnQixFQUFFLEVBQUYsQ0FBSyxPQUFPLFFBQVAsQ0FBTCxHQUFzQixFQUFFLE9BQU8sUUFBUCxDQUF4QixDQUE1QixFQUFzRSxFQUFFLElBQUYsQ0FBTyx1RUFBdUUsS0FBdkUsQ0FBNkUsR0FBN0UsQ0FBUCxFQUF5RixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxNQUFFLGFBQVcsQ0FBWCxHQUFhLEdBQWIsQ0FBRixHQUFvQixFQUFFLFdBQUYsRUFBcEIsQ0FBRDtHQUFiLENBQTcyRyxDQUExUSxTQUFvckgsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLFFBQUksSUFBRSxDQUFDLENBQUMsQ0FBRCxJQUFJLFlBQVcsQ0FBWCxJQUFjLEVBQUUsTUFBRjtRQUFTLElBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFGLENBQW5DLE9BQXFELGVBQWEsQ0FBYixJQUFnQixFQUFFLFFBQUYsQ0FBVyxDQUFYLENBQWhCLEdBQThCLENBQUMsQ0FBRCxHQUFHLFlBQVUsQ0FBVixJQUFhLE1BQUksQ0FBSixJQUFPLFlBQVUsT0FBTyxDQUFQLElBQVUsSUFBRSxDQUFGLElBQUssSUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFuSTtHQUFiLElBQTZKLElBQUUsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFJLENBQUo7UUFBTSxDQUFOO1FBQVEsQ0FBUjtRQUFVLENBQVY7UUFBWSxDQUFaO1FBQWMsQ0FBZDtRQUFnQixDQUFoQjtRQUFrQixDQUFsQjtRQUFvQixDQUFwQjtRQUFzQixDQUF0QjtRQUF3QixDQUF4QjtRQUEwQixDQUExQjtRQUE0QixDQUE1QjtRQUE4QixDQUE5QjtRQUFnQyxDQUFoQztRQUFrQyxDQUFsQztRQUFvQyxDQUFwQztRQUFzQyxDQUF0QztRQUF3QyxDQUF4QztRQUEwQyxJQUFFLFdBQVMsSUFBRSxJQUFJLElBQUosRUFBRjtRQUFXLElBQUUsRUFBRSxRQUFGO1FBQVcsSUFBRSxDQUFGO1FBQUksSUFBRSxDQUFGO1FBQUksSUFBRSxJQUFGO1FBQU8sSUFBRSxJQUFGO1FBQU8sSUFBRSxJQUFGO1FBQU8sSUFBRSxXQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLE1BQUksQ0FBSixLQUFRLElBQUUsQ0FBQyxDQUFELENBQVYsRUFBYyxDQUFkLENBQVI7S0FBYjtRQUFzQyxJQUFFLEtBQUcsRUFBSDtRQUFNLElBQUUsR0FBRyxjQUFIO1FBQWtCLElBQUUsRUFBRjtRQUFLLElBQUUsRUFBRSxHQUFGO1FBQU0sSUFBRSxFQUFFLElBQUY7UUFBTyxJQUFFLEVBQUUsSUFBRjtRQUFPLElBQUUsRUFBRSxLQUFGO1FBQVEsSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsV0FBSSxJQUFJLElBQUUsQ0FBRixFQUFJLElBQUUsRUFBRSxNQUFGLEVBQVMsSUFBRSxDQUFGLEVBQUksR0FBM0I7QUFBK0IsWUFBRyxFQUFFLENBQUYsTUFBTyxDQUFQLEVBQVMsT0FBTyxDQUFQLENBQVo7T0FBL0IsT0FBMEQsQ0FBQyxDQUFELENBQTNEO0tBQWI7UUFBNEUsSUFBRSw0SEFBRjtRQUErSCxJQUFFLHFCQUFGO1FBQXdCLElBQUUsa0NBQUY7UUFBcUMsSUFBRSxRQUFNLENBQU4sR0FBUSxJQUFSLEdBQWEsQ0FBYixHQUFlLE1BQWYsR0FBc0IsQ0FBdEIsR0FBd0IsZUFBeEIsR0FBd0MsQ0FBeEMsR0FBMEMsMERBQTFDLEdBQXFHLENBQXJHLEdBQXVHLE1BQXZHLEdBQThHLENBQTlHLEdBQWdILE1BQWhIO1FBQXVILElBQUUsT0FBSyxDQUFMLEdBQU8sdUZBQVAsR0FBK0YsQ0FBL0YsR0FBaUcsY0FBakc7UUFBZ0gsSUFBRSxJQUFJLE1BQUosQ0FBVyxJQUFFLEdBQUYsRUFBTSxHQUFqQixDQUFGO1FBQXdCLElBQUUsSUFBSSxNQUFKLENBQVcsTUFBSSxDQUFKLEdBQU0sNkJBQU4sR0FBb0MsQ0FBcEMsR0FBc0MsSUFBdEMsRUFBMkMsR0FBdEQsQ0FBRjtRQUE2RCxJQUFFLElBQUksTUFBSixDQUFXLE1BQUksQ0FBSixHQUFNLElBQU4sR0FBVyxDQUFYLEdBQWEsR0FBYixDQUFiO1FBQStCLElBQUUsSUFBSSxNQUFKLENBQVcsTUFBSSxDQUFKLEdBQU0sVUFBTixHQUFpQixDQUFqQixHQUFtQixHQUFuQixHQUF1QixDQUF2QixHQUF5QixHQUF6QixDQUFiO1FBQTJDLElBQUUsSUFBSSxNQUFKLENBQVcsTUFBSSxDQUFKLEdBQU0sZ0JBQU4sR0FBdUIsQ0FBdkIsR0FBeUIsTUFBekIsRUFBZ0MsR0FBM0MsQ0FBRjtRQUFrRCxJQUFFLElBQUksTUFBSixDQUFXLENBQVgsQ0FBRjtRQUFnQixJQUFFLElBQUksTUFBSixDQUFXLE1BQUksQ0FBSixHQUFNLEdBQU4sQ0FBYjtRQUF3QixJQUFFLEVBQUMsSUFBRyxJQUFJLE1BQUosQ0FBVyxRQUFNLENBQU4sR0FBUSxHQUFSLENBQWQsRUFBMkIsT0FBTSxJQUFJLE1BQUosQ0FBVyxVQUFRLENBQVIsR0FBVSxHQUFWLENBQWpCLEVBQWdDLEtBQUksSUFBSSxNQUFKLENBQVcsT0FBSyxDQUFMLEdBQU8sT0FBUCxDQUFmLEVBQStCLE1BQUssSUFBSSxNQUFKLENBQVcsTUFBSSxDQUFKLENBQWhCLEVBQXVCLFFBQU8sSUFBSSxNQUFKLENBQVcsTUFBSSxDQUFKLENBQWxCLEVBQXlCLE9BQU0sSUFBSSxNQUFKLENBQVcsMkRBQXlELENBQXpELEdBQTJELDhCQUEzRCxHQUEwRixDQUExRixHQUE0RixhQUE1RixHQUEwRyxDQUExRyxHQUE0RyxZQUE1RyxHQUF5SCxDQUF6SCxHQUEySCxRQUEzSCxFQUFvSSxHQUEvSSxDQUFOLEVBQTBKLE1BQUssSUFBSSxNQUFKLENBQVcsU0FBTyxDQUFQLEdBQVMsSUFBVCxFQUFjLEdBQXpCLENBQUwsRUFBbUMsY0FBYSxJQUFJLE1BQUosQ0FBVyxNQUFJLENBQUosR0FBTSxrREFBTixHQUF5RCxDQUF6RCxHQUEyRCxrQkFBM0QsR0FBOEUsQ0FBOUUsR0FBZ0Ysa0JBQWhGLEVBQW1HLEdBQTlHLENBQWIsRUFBMVU7UUFBMmMsSUFBRSxxQ0FBRjtRQUF3QyxJQUFFLFFBQUY7UUFBVyxJQUFFLHdCQUFGO1FBQTJCLElBQUUsa0NBQUY7UUFBcUMsSUFBRSxNQUFGO1FBQVMsS0FBRyxPQUFIO1FBQVcsS0FBRyxJQUFJLE1BQUosQ0FBVyx1QkFBcUIsQ0FBckIsR0FBdUIsS0FBdkIsR0FBNkIsQ0FBN0IsR0FBK0IsTUFBL0IsRUFBc0MsSUFBakQsQ0FBSDtRQUEwRCxLQUFHLFNBQUgsRUFBRyxDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxJQUFFLE9BQUssQ0FBTCxHQUFPLEtBQVAsQ0FBUCxPQUEyQixNQUFJLENBQUosSUFBTyxDQUFQLEdBQVMsQ0FBVCxHQUFXLElBQUUsQ0FBRixHQUFJLE9BQU8sWUFBUCxDQUFvQixJQUFFLEtBQUYsQ0FBeEIsR0FBaUMsT0FBTyxZQUFQLENBQW9CLEtBQUcsRUFBSCxHQUFNLEtBQU4sRUFBWSxPQUFLLENBQUwsR0FBTyxLQUFQLENBQWpFLENBQXRDO0tBQWY7UUFBcUksS0FBRyxTQUFILEVBQUcsR0FBVTtBQUFDLFVBQUQ7S0FBVixDQUE3dEQsSUFBZ3ZEO0FBQUMsUUFBRSxLQUFGLENBQVEsSUFBRSxFQUFFLElBQUYsQ0FBTyxFQUFFLFVBQUYsQ0FBVCxFQUF1QixFQUFFLFVBQUYsQ0FBL0IsRUFBNkMsRUFBRSxFQUFFLFVBQUYsQ0FBYSxNQUFiLENBQUYsQ0FBdUIsUUFBdkIsQ0FBOUM7S0FBSCxDQUFpRixPQUFNLEVBQU4sRUFBUztBQUFDLFVBQUUsRUFBQyxPQUFNLEVBQUUsTUFBRixHQUFTLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVYsRUFBRDtTQUFiLEdBQW9DLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGNBQUksSUFBRSxFQUFFLE1BQUY7Y0FBUyxJQUFFLENBQUYsQ0FBaEIsT0FBMEIsRUFBRSxHQUFGLElBQU8sRUFBRSxHQUFGLENBQVAsSUFBTixDQUFxQixDQUFFLE1BQUYsR0FBUyxJQUFFLENBQUYsQ0FBbEQ7U0FBYixFQUF0RCxDQUFEO0tBQVQsU0FBOEksRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLENBQVI7VUFBVSxDQUFWO1VBQVksQ0FBWjtVQUFjLENBQWQ7VUFBZ0IsQ0FBaEI7VUFBa0IsQ0FBbEI7VUFBb0IsSUFBRSxLQUFHLEVBQUUsYUFBRjtVQUFnQixJQUFFLElBQUUsRUFBRSxRQUFGLEdBQVcsQ0FBYixDQUE1QyxJQUE4RCxJQUFFLEtBQUcsRUFBSCxFQUFNLFlBQVUsT0FBTyxDQUFQLElBQVUsQ0FBQyxDQUFELElBQUksTUFBSSxDQUFKLElBQU8sTUFBSSxDQUFKLElBQU8sT0FBSyxDQUFMLEVBQU8sT0FBTyxDQUFQLENBQXhELElBQW9FLENBQUMsQ0FBRCxLQUFLLENBQUMsSUFBRSxFQUFFLGFBQUYsSUFBaUIsQ0FBakIsR0FBbUIsQ0FBckIsQ0FBRCxLQUEyQixDQUEzQixJQUE4QixFQUFFLENBQUYsQ0FBOUIsRUFBbUMsSUFBRSxLQUFHLENBQUgsRUFBSyxDQUExQyxDQUFMLEVBQWtEO0FBQUMsWUFBRyxPQUFLLENBQUwsS0FBUyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBRixDQUFULEVBQXNCLElBQUcsSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPO0FBQUMsY0FBRyxNQUFJLENBQUosRUFBTTtBQUFDLGdCQUFHLEVBQUUsSUFBRSxFQUFFLGNBQUYsQ0FBaUIsQ0FBakIsQ0FBRixDQUFGLEVBQXlCLE9BQU8sQ0FBUCxDQUE1QixJQUF3QyxFQUFFLEVBQUYsS0FBTyxDQUFQLEVBQVMsT0FBTyxFQUFFLElBQUYsQ0FBTyxDQUFQLEdBQVUsQ0FBVixDQUFuQjtXQUEvQyxNQUFtRixJQUFHLE1BQUksSUFBRSxFQUFFLGNBQUYsQ0FBaUIsQ0FBakIsQ0FBRixDQUFKLElBQTRCLEVBQUUsQ0FBRixFQUFJLENBQUosQ0FBNUIsSUFBb0MsRUFBRSxFQUFGLEtBQU8sQ0FBUCxFQUFTLE9BQU8sRUFBRSxJQUFGLENBQU8sQ0FBUCxHQUFVLENBQVYsQ0FBdkQ7U0FBOUYsTUFBcUs7QUFBQyxjQUFHLEVBQUUsQ0FBRixDQUFILEVBQVEsT0FBTyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsRUFBRSxvQkFBRixDQUF1QixDQUF2QixDQUFWLEdBQXFDLENBQXJDLENBQWYsSUFBeUQsQ0FBQyxJQUFFLEVBQUUsQ0FBRixDQUFGLENBQUQsSUFBVSxFQUFFLHNCQUFGLElBQTBCLEVBQUUsc0JBQUYsRUFBeUIsT0FBTyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsRUFBRSxzQkFBRixDQUF5QixDQUF6QixDQUFWLEdBQXVDLENBQXZDLENBQXZFO1NBQTVOLElBQStVLEVBQUUsR0FBRixJQUFPLENBQUMsRUFBRSxJQUFFLEdBQUYsQ0FBSCxLQUFZLENBQUMsQ0FBRCxJQUFJLENBQUMsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFELENBQXZCLEVBQW1DO0FBQUMsY0FBRyxNQUFJLENBQUosRUFBTSxJQUFFLENBQUYsRUFBSSxJQUFFLENBQUYsQ0FBYixLQUFzQixJQUFHLGFBQVcsRUFBRSxRQUFGLENBQVcsV0FBWCxFQUFYLEVBQW9DO0FBQUMsYUFBQyxJQUFFLEVBQUUsWUFBRixDQUFlLElBQWYsQ0FBRixDQUFELEdBQXlCLElBQUUsRUFBRSxPQUFGLENBQVUsRUFBVixFQUFhLE1BQWIsQ0FBRixHQUF1QixFQUFFLFlBQUYsQ0FBZSxJQUFmLEVBQW9CLElBQUUsQ0FBRixDQUFwRSxFQUF5RSxJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsSUFBVSxNQUFJLENBQUosR0FBTSxVQUFRLENBQVIsR0FBVSxJQUFWLENBQTlHLE9BQW1JLEdBQU47QUFBVSxnQkFBRSxDQUFGLElBQUssSUFBRSxHQUFGLEdBQU0sR0FBRyxFQUFFLENBQUYsQ0FBSCxDQUFOO2FBQWYsQ0FBOEIsR0FBRSxFQUFFLElBQUYsQ0FBTyxHQUFQLENBQUYsRUFBYyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsS0FBVyxHQUFHLEVBQUUsVUFBRixDQUFkLElBQTZCLENBQTdCLENBQTNLO1dBQXZDLElBQW9QLENBQUgsRUFBSyxJQUFHO0FBQUMsbUJBQU8sRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLEVBQUUsZ0JBQUYsQ0FBbUIsQ0FBbkIsQ0FBVixHQUFpQyxDQUFqQyxDQUFSO1dBQUgsQ0FBOEMsT0FBTSxDQUFOLEVBQVEsRUFBUixTQUFpQjtBQUFDLGtCQUFJLENBQUosSUFBTyxFQUFFLGVBQUYsQ0FBa0IsSUFBbEIsQ0FBUCxDQUFEO1dBQS9EO1NBQW5UO09BQTNaLE9BQXN6QixFQUFFLEVBQUUsT0FBRixDQUFVLENBQVYsRUFBWSxJQUFaLENBQUYsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsQ0FBUCxDQUEzNkI7S0FBcEIsU0FBMCtCLEVBQVQsR0FBYTtBQUFDLFVBQUksSUFBRSxFQUFGLENBQUwsU0FBbUIsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxlQUFPLEVBQUUsSUFBRixDQUFPLElBQUUsR0FBRixDQUFQLEdBQWMsRUFBRSxXQUFGLElBQWUsT0FBTyxFQUFFLEVBQUUsS0FBRixFQUFGLENBQVAsRUFBb0IsRUFBRSxJQUFFLEdBQUYsQ0FBRixHQUFTLENBQVQsQ0FBekQ7T0FBZixPQUEwRixDQUFQLENBQTdGO0tBQWIsU0FBNEgsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLGFBQU8sRUFBRSxDQUFGLElBQUssQ0FBQyxDQUFELEVBQUcsQ0FBUixDQUFSO0tBQWQsU0FBeUMsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLFVBQUksSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FBRixDQUFMLElBQWlDO0FBQUMsZUFBTSxDQUFDLENBQUMsRUFBRSxDQUFGLENBQUQsQ0FBUjtPQUFILENBQWlCLE9BQU0sQ0FBTixFQUFRO0FBQUMsZUFBTSxDQUFDLENBQUQsQ0FBUDtPQUFSLFNBQXlCO0FBQUMsVUFBRSxVQUFGLElBQWMsRUFBRSxVQUFGLENBQWEsV0FBYixDQUF5QixDQUF6QixDQUFkLEVBQTBDLElBQUUsSUFBRixDQUEzQztPQUExQztLQUE1QyxTQUFrSixFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0I7QUFBQyxVQUFJLElBQUUsRUFBRSxLQUFGLENBQVEsR0FBUixDQUFGO1VBQWUsSUFBRSxFQUFFLE1BQUYsQ0FBdEIsT0FBcUMsR0FBTjtBQUFVLFVBQUUsVUFBRixDQUFhLEVBQUUsQ0FBRixDQUFiLElBQW1CLENBQW5CO09BQVY7S0FBL0MsU0FBdUYsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsVUFBSSxJQUFFLEtBQUcsQ0FBSDtVQUFLLElBQUUsS0FBRyxNQUFJLEVBQUUsUUFBRixJQUFZLE1BQUksRUFBRSxRQUFGLElBQVksQ0FBQyxDQUFDLEVBQUUsV0FBRixJQUFlLENBQWhCLENBQUQsSUFBcUIsQ0FBQyxFQUFFLFdBQUYsSUFBZSxDQUFoQixDQUFyQixDQUFqRCxJQUE0RixDQUFILEVBQUssT0FBTyxDQUFQLENBQUwsSUFBaUIsQ0FBSCxFQUFLLE9BQU0sSUFBRSxFQUFFLFdBQUY7QUFBYyxZQUFHLE1BQUksQ0FBSixFQUFNLE9BQU0sQ0FBQyxDQUFELENBQWY7T0FBdEIsT0FBK0MsSUFBRSxDQUFGLEdBQUksQ0FBQyxDQUFELENBQS9KO0tBQWhCLFNBQTJMLEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxhQUFPLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxJQUFFLEVBQUUsUUFBRixDQUFXLFdBQVgsRUFBRixDQUFMLE9BQXNDLFlBQVUsQ0FBVixJQUFhLEVBQUUsSUFBRixLQUFTLENBQVQsQ0FBbkQ7T0FBWCxDQUFSO0tBQWQsU0FBeUcsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLGFBQU8sVUFBUyxDQUFULEVBQVc7QUFBQyxZQUFJLElBQUUsRUFBRSxRQUFGLENBQVcsV0FBWCxFQUFGLENBQUwsT0FBc0MsQ0FBQyxZQUFVLENBQVYsSUFBYSxhQUFXLENBQVgsQ0FBZCxJQUE2QixFQUFFLElBQUYsS0FBUyxDQUFULENBQW5FO09BQVgsQ0FBUjtLQUFkLFNBQXlILEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxhQUFPLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxlQUFPLElBQUUsQ0FBQyxDQUFELEVBQUcsR0FBRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFJLENBQUo7Y0FBTSxJQUFFLEVBQUUsRUFBRixFQUFLLEVBQUUsTUFBRixFQUFTLENBQWQsQ0FBRjtjQUFtQixJQUFFLEVBQUUsTUFBRixDQUE1QixPQUEyQyxHQUFOO0FBQVUsY0FBRSxJQUFFLEVBQUUsQ0FBRixDQUFGLENBQUYsS0FBWSxFQUFFLENBQUYsSUFBSyxFQUFFLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixDQUFMLENBQUYsQ0FBakI7V0FBVjtTQUFsRCxDQUFSLENBQVI7T0FBWCxDQUFWLENBQUQ7S0FBZCxTQUE0SixFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsYUFBTyxLQUFHLGVBQWEsT0FBTyxFQUFFLG9CQUFGLElBQXdCLENBQS9DLENBQVI7S0FBZCxDQUF1RSxHQUFFLEdBQUcsT0FBSCxHQUFXLEVBQVgsRUFBYyxJQUFFLEdBQUcsS0FBSCxHQUFTLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxJQUFFLEtBQUcsQ0FBQyxFQUFFLGFBQUYsSUFBaUIsQ0FBakIsQ0FBRCxDQUFxQixlQUFyQixDQUFWLE9BQXNELElBQUUsV0FBUyxFQUFFLFFBQUYsR0FBVyxDQUFDLENBQUQsQ0FBNUU7S0FBWCxFQUEyRixJQUFFLEdBQUcsV0FBSCxHQUFlLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLElBQUUsSUFBRSxFQUFFLGFBQUYsSUFBaUIsQ0FBakIsR0FBbUIsQ0FBckIsQ0FBWCxPQUF5QyxNQUFJLENBQUosSUFBTyxNQUFJLEVBQUUsUUFBRixJQUFZLEVBQUUsZUFBRixJQUFtQixJQUFFLENBQUYsRUFBSSxJQUFFLEVBQUUsZUFBRixFQUFrQixJQUFFLENBQUMsRUFBRSxDQUFGLENBQUQsRUFBTSxDQUFDLElBQUUsRUFBRSxXQUFGLENBQUgsSUFBbUIsRUFBRSxHQUFGLEtBQVEsQ0FBUixLQUFZLEVBQUUsZ0JBQUYsR0FBbUIsRUFBRSxnQkFBRixDQUFtQixRQUFuQixFQUE0QixFQUE1QixFQUErQixDQUFDLENBQUQsQ0FBbEQsR0FBc0QsRUFBRSxXQUFGLElBQWUsRUFBRSxXQUFGLENBQWMsVUFBZCxFQUF5QixFQUF6QixDQUFmLENBQXJGLEVBQWtJLEVBQUUsVUFBRixHQUFhLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxlQUFPLEVBQUUsU0FBRixHQUFZLEdBQVosRUFBZ0IsQ0FBQyxFQUFFLFlBQUYsQ0FBZSxXQUFmLENBQUQsQ0FBeEI7T0FBWCxDQUFoQixFQUFrRixFQUFFLG9CQUFGLEdBQXVCLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxlQUFPLEVBQUUsV0FBRixDQUFjLEVBQUUsYUFBRixDQUFnQixFQUFoQixDQUFkLEdBQW1DLENBQUMsRUFBRSxvQkFBRixDQUF1QixHQUF2QixFQUE0QixNQUE1QixDQUE1QztPQUFYLENBQTFCLEVBQXNILEVBQUUsc0JBQUYsR0FBeUIsRUFBRSxJQUFGLENBQU8sRUFBRSxzQkFBRixDQUFoQyxFQUEwRCxFQUFFLE9BQUYsR0FBVSxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsZUFBTyxFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWlCLEVBQWpCLEdBQW9CLENBQXBCLEVBQXNCLENBQUMsRUFBRSxpQkFBRixJQUFxQixDQUFDLEVBQUUsaUJBQUYsQ0FBb0IsQ0FBcEIsRUFBdUIsTUFBdkIsQ0FBckQ7T0FBWCxDQUFiLEVBQTZHLEVBQUUsT0FBRixJQUFXLEVBQUUsSUFBRixDQUFPLEVBQVAsR0FBVSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFHLGVBQWEsT0FBTyxFQUFFLGNBQUYsSUFBa0IsQ0FBdEMsRUFBd0M7QUFBQyxjQUFJLElBQUUsRUFBRSxjQUFGLENBQWlCLENBQWpCLENBQUYsQ0FBTCxPQUFrQyxJQUFFLENBQUMsQ0FBRCxDQUFGLEdBQU0sRUFBTixDQUFsQztTQUEzQztPQUFkLEVBQXNHLEVBQUUsTUFBRixDQUFTLEVBQVQsR0FBWSxVQUFTLENBQVQsRUFBVztBQUFDLFlBQUksSUFBRSxFQUFFLE9BQUYsQ0FBVSxFQUFWLEVBQWEsRUFBYixDQUFGLENBQUwsT0FBK0IsVUFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxFQUFFLFlBQUYsQ0FBZSxJQUFmLE1BQXVCLENBQXZCLENBQVI7U0FBWCxDQUEvQjtPQUFYLENBQXZJLElBQWlPLE9BQU8sRUFBRSxJQUFGLENBQU8sRUFBUCxFQUFVLEVBQUUsTUFBRixDQUFTLEVBQVQsR0FBWSxVQUFTLENBQVQsRUFBVztBQUFDLFlBQUksSUFBRSxFQUFFLE9BQUYsQ0FBVSxFQUFWLEVBQWEsRUFBYixDQUFGLENBQUwsT0FBK0IsVUFBUyxDQUFULEVBQVc7QUFBQyxjQUFJLElBQUUsZUFBYSxPQUFPLEVBQUUsZ0JBQUYsSUFBb0IsRUFBRSxnQkFBRixDQUFtQixJQUFuQixDQUF4QyxDQUFQLE9BQStFLEtBQUcsRUFBRSxLQUFGLEtBQVUsQ0FBVixDQUFsRjtTQUFYLENBQS9CO09BQVgsQ0FBOVAsRUFBb1osRUFBRSxJQUFGLENBQU8sR0FBUCxHQUFXLEVBQUUsb0JBQUYsR0FBdUIsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsZUFBTSxlQUFhLE9BQU8sRUFBRSxvQkFBRixHQUF1QixFQUFFLG9CQUFGLENBQXVCLENBQXZCLENBQTNDLEdBQXFFLEVBQUUsR0FBRixHQUFNLEVBQUUsZ0JBQUYsQ0FBbUIsQ0FBbkIsQ0FBTixHQUE0QixLQUFLLENBQUwsQ0FBeEc7T0FBYixHQUE2SCxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFJLENBQUo7WUFBTSxJQUFFLEVBQUY7WUFBSyxJQUFFLENBQUY7WUFBSSxJQUFFLEVBQUUsb0JBQUYsQ0FBdUIsQ0FBdkIsQ0FBRixDQUFoQixJQUErQyxRQUFNLENBQU4sRUFBUTtBQUFDLGlCQUFNLElBQUUsRUFBRSxHQUFGLENBQUY7QUFBUyxrQkFBSSxFQUFFLFFBQUYsSUFBWSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQWhCO1dBQWYsT0FBZ0QsQ0FBUCxDQUExQztTQUFYLE9BQXFFLENBQVAsQ0FBMUc7T0FBYixFQUFpSSxFQUFFLElBQUYsQ0FBTyxLQUFQLEdBQWEsRUFBRSxzQkFBRixJQUEwQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxlQUFNLGVBQWEsT0FBTyxFQUFFLHNCQUFGLElBQTBCLENBQTlDLEdBQWdELEVBQUUsc0JBQUYsQ0FBeUIsQ0FBekIsQ0FBaEQsR0FBNEUsS0FBSyxDQUFMLENBQW5GO09BQWIsRUFBd0csSUFBRSxFQUFGLEVBQUssSUFBRSxFQUFGLEVBQUssQ0FBQyxFQUFFLEdBQUYsR0FBTSxFQUFFLElBQUYsQ0FBTyxFQUFFLGdCQUFGLENBQWIsQ0FBRCxLQUFxQyxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRSxXQUFGLENBQWMsQ0FBZCxFQUFpQixTQUFqQixHQUEyQixZQUFVLENBQVYsR0FBWSxvQkFBWixHQUFpQyxDQUFqQyxHQUFtQyxpRUFBbkMsRUFBcUcsRUFBRSxnQkFBRixDQUFtQixzQkFBbkIsRUFBMkMsTUFBM0MsSUFBbUQsRUFBRSxJQUFGLENBQU8sV0FBUyxDQUFULEdBQVcsY0FBWCxDQUExRCxFQUFxRixFQUFFLGdCQUFGLENBQW1CLFlBQW5CLEVBQWlDLE1BQWpDLElBQXlDLEVBQUUsSUFBRixDQUFPLFFBQU0sQ0FBTixHQUFRLFlBQVIsR0FBcUIsQ0FBckIsR0FBdUIsR0FBdkIsQ0FBaEQsRUFBNEUsRUFBRSxnQkFBRixDQUFtQixVQUFRLENBQVIsR0FBVSxJQUFWLENBQW5CLENBQW1DLE1BQW5DLElBQTJDLEVBQUUsSUFBRixDQUFPLElBQVAsQ0FBM0MsRUFBd0QsRUFBRSxnQkFBRixDQUFtQixVQUFuQixFQUErQixNQUEvQixJQUF1QyxFQUFFLElBQUYsQ0FBTyxVQUFQLENBQXZDLEVBQTBELEVBQUUsZ0JBQUYsQ0FBbUIsT0FBSyxDQUFMLEdBQU8sSUFBUCxDQUFuQixDQUFnQyxNQUFoQyxJQUF3QyxFQUFFLElBQUYsQ0FBTyxVQUFQLENBQXhDLENBQXBaO09BQVgsQ0FBSCxFQUErZCxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxJQUFFLEVBQUUsYUFBRixDQUFnQixPQUFoQixDQUFGLENBQUwsQ0FBZ0MsQ0FBRSxZQUFGLENBQWUsTUFBZixFQUFzQixRQUF0QixHQUFnQyxFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWlCLFlBQWpCLENBQThCLE1BQTlCLEVBQXFDLEdBQXJDLENBQWhDLEVBQTBFLEVBQUUsZ0JBQUYsQ0FBbUIsVUFBbkIsRUFBK0IsTUFBL0IsSUFBdUMsRUFBRSxJQUFGLENBQU8sU0FBTyxDQUFQLEdBQVMsYUFBVCxDQUE5QyxFQUFzRSxFQUFFLGdCQUFGLENBQW1CLFVBQW5CLEVBQStCLE1BQS9CLElBQXVDLEVBQUUsSUFBRixDQUFPLFVBQVAsRUFBa0IsV0FBbEIsQ0FBdkMsRUFBc0UsRUFBRSxnQkFBRixDQUFtQixNQUFuQixDQUF0TixFQUFpUCxFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWpQLENBQWhDO09BQVgsQ0FBbGUsQ0FBckMsRUFBcXpCLENBQUMsRUFBRSxlQUFGLEdBQWtCLEVBQUUsSUFBRixDQUFPLElBQUUsRUFBRSxPQUFGLElBQVcsRUFBRSxxQkFBRixJQUF5QixFQUFFLGtCQUFGLElBQXNCLEVBQUUsZ0JBQUYsSUFBb0IsRUFBRSxpQkFBRixDQUF6RyxDQUFELElBQWlJLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFFLGlCQUFGLEdBQW9CLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxLQUFULENBQXBCLEVBQW9DLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxXQUFULENBQXBDLEVBQTBELEVBQUUsSUFBRixDQUFPLElBQVAsRUFBWSxDQUFaLENBQTFELENBQUQ7T0FBWCxDQUFwSSxFQUEyTixJQUFFLEVBQUUsTUFBRixJQUFVLElBQUksTUFBSixDQUFXLEVBQUUsSUFBRixDQUFPLEdBQVAsQ0FBWCxDQUFWLEVBQWtDLElBQUUsRUFBRSxNQUFGLElBQVUsSUFBSSxNQUFKLENBQVcsRUFBRSxJQUFGLENBQU8sR0FBUCxDQUFYLENBQVYsRUFBa0MsSUFBRSxFQUFFLElBQUYsQ0FBTyxFQUFFLHVCQUFGLENBQVQsRUFBb0MsSUFBRSxLQUFHLEVBQUUsSUFBRixDQUFPLEVBQUUsUUFBRixDQUFWLEdBQXNCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUksSUFBRSxNQUFJLEVBQUUsUUFBRixHQUFXLEVBQUUsZUFBRixHQUFrQixDQUFqQztZQUFtQyxJQUFFLEtBQUcsRUFBRSxVQUFGLENBQS9DLE9BQW1FLE1BQUksQ0FBSixJQUFPLEVBQUUsQ0FBQyxDQUFELElBQUksTUFBSSxFQUFFLFFBQUYsSUFBWSxFQUFFLEVBQUUsUUFBRixHQUFXLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBWCxHQUF5QixFQUFFLHVCQUFGLElBQTJCLEtBQUcsRUFBRSx1QkFBRixDQUEwQixDQUExQixDQUFILENBQXRELENBQXRCLENBQTFFO09BQWIsR0FBc00sVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBRyxDQUFILEVBQUssT0FBTSxJQUFFLEVBQUUsVUFBRjtBQUFhLGNBQUcsTUFBSSxDQUFKLEVBQU0sT0FBTSxDQUFDLENBQUQsQ0FBZjtTQUFyQixPQUE2QyxDQUFDLENBQUQsQ0FBbkQ7T0FBYixFQUFvRSxJQUFFLElBQUUsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBRyxNQUFJLENBQUosRUFBTSxPQUFPLElBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBTCxDQUFoQixJQUEyQixJQUFFLENBQUMsRUFBRSx1QkFBRixHQUEwQixDQUFDLEVBQUUsdUJBQUYsQ0FBMUQsT0FBMkYsSUFBRSxDQUFGLElBQUssSUFBRSxDQUFDLEVBQUUsYUFBRixJQUFpQixDQUFqQixDQUFELE1BQXdCLEVBQUUsYUFBRixJQUFpQixDQUFqQixDQUF4QixHQUE0QyxFQUFFLHVCQUFGLENBQTBCLENBQTFCLENBQTVDLEdBQXlFLENBQXpFLEVBQTJFLElBQUUsQ0FBRixJQUFLLENBQUMsRUFBRSxZQUFGLElBQWdCLEVBQUUsdUJBQUYsQ0FBMEIsQ0FBMUIsTUFBK0IsQ0FBL0IsR0FBaUMsTUFBSSxDQUFKLElBQU8sRUFBRSxhQUFGLEtBQWtCLENBQWxCLElBQXFCLEVBQUUsQ0FBRixFQUFJLENBQUosQ0FBckIsR0FBNEIsQ0FBQyxDQUFELEdBQUcsTUFBSSxDQUFKLElBQU8sRUFBRSxhQUFGLEtBQWtCLENBQWxCLElBQXFCLEVBQUUsQ0FBRixFQUFJLENBQUosQ0FBckIsR0FBNEIsQ0FBbkMsR0FBcUMsSUFBRSxFQUFFLENBQUYsRUFBSSxDQUFKLElBQU8sRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFQLEdBQWMsQ0FBaEIsR0FBa0IsSUFBRSxDQUFGLEdBQUksQ0FBQyxDQUFELEdBQUcsQ0FBUCxDQUF0TyxDQUEzRjtPQUFiLEdBQXlWLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUcsTUFBSSxDQUFKLEVBQU0sT0FBTyxJQUFFLENBQUMsQ0FBRCxFQUFHLENBQUwsQ0FBaEIsSUFBMkIsQ0FBSjtZQUFNLElBQUUsQ0FBRjtZQUFJLElBQUUsRUFBRSxVQUFGO1lBQWEsSUFBRSxFQUFFLFVBQUY7WUFBYSxJQUFFLENBQUMsQ0FBRCxDQUFGO1lBQU0sSUFBRSxDQUFDLENBQUQsQ0FBRixDQUF0RSxJQUErRSxDQUFDLENBQUQsSUFBSSxDQUFDLENBQUQsRUFBRyxPQUFPLE1BQUksQ0FBSixHQUFNLENBQUMsQ0FBRCxHQUFHLE1BQUksQ0FBSixHQUFNLENBQU4sR0FBUSxJQUFFLENBQUMsQ0FBRCxHQUFHLElBQUUsQ0FBRixHQUFJLElBQUUsRUFBRSxDQUFGLEVBQUksQ0FBSixJQUFPLEVBQUUsQ0FBRixFQUFJLENBQUosQ0FBUCxHQUFjLENBQWhCLENBQTNDLElBQWdFLE1BQUksQ0FBSixFQUFNLE9BQU8sR0FBRyxDQUFILEVBQUssQ0FBTCxDQUFQLENBQVQsQ0FBd0IsR0FBRSxDQUFGLENBQWpLLE9BQTJLLElBQUUsRUFBRSxVQUFGO0FBQWEsWUFBRSxPQUFGLENBQVUsQ0FBVjtTQUFyQixDQUFrQyxHQUFFLENBQUYsQ0FBdk0sT0FBaU4sSUFBRSxFQUFFLFVBQUY7QUFBYSxZQUFFLE9BQUYsQ0FBVSxDQUFWO1NBQXJCLE9BQXdDLEVBQUUsQ0FBRixNQUFPLEVBQUUsQ0FBRixDQUFQO0FBQVk7U0FBbEIsT0FBNkIsSUFBRSxHQUFHLEVBQUUsQ0FBRixDQUFILEVBQVEsRUFBRSxDQUFGLENBQVIsQ0FBRixHQUFnQixFQUFFLENBQUYsTUFBTyxDQUFQLEdBQVMsQ0FBQyxDQUFELEdBQUcsRUFBRSxDQUFGLE1BQU8sQ0FBUCxHQUFTLENBQVQsR0FBVyxDQUFYLENBQXRTO09BQWIsRUFBaVUsQ0FBMTVHLENBQTFDLEdBQXU4RyxDQUF2OEcsQ0FBekM7S0FBWCxFQUE4L0csR0FBRyxPQUFILEdBQVcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxHQUFHLENBQUgsRUFBSyxJQUFMLEVBQVUsSUFBVixFQUFlLENBQWYsQ0FBUCxDQUFEO0tBQWIsRUFBd0MsR0FBRyxlQUFILEdBQW1CLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUcsQ0FBQyxFQUFFLGFBQUYsSUFBaUIsQ0FBakIsQ0FBRCxLQUF1QixDQUF2QixJQUEwQixFQUFFLENBQUYsQ0FBMUIsRUFBK0IsSUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksUUFBWixDQUFGLEVBQXdCLEVBQUUsZUFBRixJQUFtQixDQUFuQixJQUFzQixDQUFDLEVBQUUsSUFBRSxHQUFGLENBQUgsS0FBWSxDQUFDLENBQUQsSUFBSSxDQUFDLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBRCxDQUF0QyxLQUFvRCxDQUFDLENBQUQsSUFBSSxDQUFDLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBRCxDQUF4RCxFQUFvRSxJQUFHO0FBQUMsWUFBSSxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxDQUFULENBQUYsQ0FBTCxJQUFzQixLQUFHLEVBQUUsaUJBQUYsSUFBcUIsRUFBRSxRQUFGLElBQVksT0FBSyxFQUFFLFFBQUYsQ0FBVyxRQUFYLEVBQW9CLE9BQU8sQ0FBUCxDQUFoRTtPQUF0QixDQUErRixPQUFNLENBQU4sRUFBUSxFQUFSLE9BQWlCLEdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxJQUFQLEVBQVksQ0FBQyxDQUFELENBQVosRUFBaUIsTUFBakIsR0FBd0IsQ0FBeEIsQ0FBL087S0FBYixFQUF1UixHQUFHLFFBQUgsR0FBWSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFNLENBQUMsRUFBRSxhQUFGLElBQWlCLENBQWpCLENBQUQsS0FBdUIsQ0FBdkIsSUFBMEIsRUFBRSxDQUFGLENBQTFCLEVBQStCLEVBQUUsQ0FBRixFQUFJLENBQUosQ0FBL0IsQ0FBUDtLQUFiLEVBQTJELEdBQUcsSUFBSCxHQUFRLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE9BQUMsRUFBRSxhQUFGLElBQWlCLENBQWpCLENBQUQsS0FBdUIsQ0FBdkIsSUFBMEIsRUFBRSxDQUFGLENBQTFCLENBQUQsSUFBb0MsSUFBRSxFQUFFLFVBQUYsQ0FBYSxFQUFFLFdBQUYsRUFBYixDQUFGO1VBQWdDLElBQUUsS0FBRyxFQUFFLElBQUYsQ0FBTyxFQUFFLFVBQUYsRUFBYSxFQUFFLFdBQUYsRUFBcEIsQ0FBSCxHQUF3QyxFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBQyxDQUFELENBQTlDLEdBQWtELEtBQUssQ0FBTCxDQUF4SCxPQUFzSSxLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsQ0FBWCxHQUFhLEVBQUUsVUFBRixJQUFjLENBQUMsQ0FBRCxHQUFHLEVBQUUsWUFBRixDQUFlLENBQWYsQ0FBakIsR0FBbUMsQ0FBQyxJQUFFLEVBQUUsZ0JBQUYsQ0FBbUIsQ0FBbkIsQ0FBRixDQUFELElBQTJCLEVBQUUsU0FBRixHQUFZLEVBQUUsS0FBRixHQUFRLElBQS9DLENBQXRMO0tBQWIsRUFBd1AsR0FBRyxLQUFILEdBQVMsVUFBUyxDQUFULEVBQVc7QUFBQyxZQUFNLElBQUksS0FBSixDQUFVLDRDQUEwQyxDQUExQyxDQUFoQixDQUFEO0tBQVgsRUFBMEUsR0FBRyxVQUFILEdBQWMsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLENBQUo7VUFBTSxJQUFFLEVBQUY7VUFBSyxJQUFFLENBQUY7VUFBSSxJQUFFLENBQUYsQ0FBaEIsSUFBdUIsSUFBRSxDQUFDLEVBQUUsZ0JBQUYsRUFBbUIsSUFBRSxDQUFDLEVBQUUsVUFBRixJQUFjLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBZixFQUEwQixFQUFFLElBQUYsQ0FBTyxDQUFQLENBQWxELEVBQTRELENBQTVELEVBQThEO0FBQUMsZUFBTSxJQUFFLEVBQUUsR0FBRixDQUFGO0FBQVMsZ0JBQUksRUFBRSxDQUFGLENBQUosS0FBVyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBRixDQUFYO1NBQWYsT0FBNkMsR0FBTjtBQUFVLFlBQUUsTUFBRixDQUFTLEVBQUUsQ0FBRixDQUFULEVBQWMsQ0FBZDtTQUFWO09BQXpHLE9BQTJJLElBQUUsSUFBRixFQUFPLENBQVAsQ0FBL0o7S0FBWCxFQUFvTCxJQUFFLEdBQUcsT0FBSCxHQUFXLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxDQUFKO1VBQU0sSUFBRSxFQUFGO1VBQUssSUFBRSxDQUFGO1VBQUksSUFBRSxFQUFFLFFBQUYsQ0FBbEIsSUFBZ0MsQ0FBSCxFQUFLO0FBQUMsWUFBRyxNQUFJLENBQUosSUFBTyxNQUFJLENBQUosSUFBTyxPQUFLLENBQUwsRUFBTztBQUFDLGNBQUcsWUFBVSxPQUFPLEVBQUUsV0FBRixFQUFjLE9BQU8sRUFBRSxXQUFGLENBQXpDLEtBQTJELElBQUUsRUFBRSxVQUFGLEVBQWEsQ0FBbkIsRUFBcUIsSUFBRSxFQUFFLFdBQUY7QUFBYyxpQkFBRyxFQUFFLENBQUYsQ0FBSDtXQUFyQztTQUFoRixNQUFrSSxJQUFHLE1BQUksQ0FBSixJQUFPLE1BQUksQ0FBSixFQUFNLE9BQU8sRUFBRSxTQUFGLENBQXZCO09BQXhJLE1BQWdMLE9BQU0sSUFBRSxFQUFFLEdBQUYsQ0FBRjtBQUFTLGFBQUcsRUFBRSxDQUFGLENBQUg7T0FBZixPQUE4QixDQUFQLENBQXBPO0tBQVgsRUFBeVAsSUFBRSxHQUFHLFNBQUgsR0FBYSxFQUFDLGFBQVksRUFBWixFQUFlLGNBQWEsRUFBYixFQUFnQixPQUFNLENBQU4sRUFBUSxZQUFXLEVBQVgsRUFBYyxNQUFLLEVBQUwsRUFBUSxVQUFTLEVBQUMsS0FBSSxFQUFDLEtBQUksWUFBSixFQUFpQixPQUFNLENBQUMsQ0FBRCxFQUE1QixFQUFnQyxLQUFJLEVBQUMsS0FBSSxZQUFKLEVBQUwsRUFBdUIsS0FBSSxFQUFDLEtBQUksaUJBQUosRUFBc0IsT0FBTSxDQUFDLENBQUQsRUFBakMsRUFBcUMsS0FBSSxFQUFDLEtBQUksaUJBQUosRUFBTCxFQUF0RyxFQUFtSSxXQUFVLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixFQUFLLE9BQUwsQ0FBYSxFQUFiLEVBQWdCLEVBQWhCLENBQUwsRUFBeUIsRUFBRSxDQUFGLElBQUssQ0FBQyxFQUFFLENBQUYsS0FBTSxFQUFFLENBQUYsQ0FBTixJQUFZLEVBQUUsQ0FBRixDQUFaLElBQWtCLEVBQWxCLENBQUQsQ0FBdUIsT0FBdkIsQ0FBK0IsRUFBL0IsRUFBa0MsRUFBbEMsQ0FBTCxFQUEyQyxTQUFPLEVBQUUsQ0FBRixDQUFQLEtBQWMsRUFBRSxDQUFGLElBQUssTUFBSSxFQUFFLENBQUYsQ0FBSixHQUFTLEdBQVQsQ0FBbkIsRUFBaUMsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBckcsQ0FBUjtTQUFYLEVBQXNJLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsRUFBSyxXQUFMLEVBQUwsRUFBd0IsVUFBUSxFQUFFLENBQUYsRUFBSyxLQUFMLENBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBUixJQUF5QixFQUFFLENBQUYsS0FBTSxHQUFHLEtBQUgsQ0FBUyxFQUFFLENBQUYsQ0FBVCxDQUFOLEVBQXFCLEVBQUUsQ0FBRixJQUFLLEVBQUUsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEtBQU0sRUFBRSxDQUFGLEtBQU0sQ0FBTixDQUFOLEdBQWUsS0FBRyxXQUFTLEVBQUUsQ0FBRixDQUFULElBQWUsVUFBUSxFQUFFLENBQUYsQ0FBUixDQUFsQixDQUF0QixFQUF1RCxFQUFFLENBQUYsSUFBSyxFQUFFLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixDQUFMLElBQVcsVUFBUSxFQUFFLENBQUYsQ0FBUixDQUFiLENBQS9HLEdBQTJJLEVBQUUsQ0FBRixLQUFNLEdBQUcsS0FBSCxDQUFTLEVBQUUsQ0FBRixDQUFULENBQU4sRUFBcUIsQ0FBeEwsQ0FBUjtTQUFYLEVBQThNLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxDQUFKO2NBQU0sSUFBRSxDQUFDLEVBQUUsQ0FBRixDQUFELElBQU8sRUFBRSxDQUFGLENBQVAsQ0FBVCxPQUE0QixFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsRUFBRSxDQUFGLENBQWIsSUFBbUIsSUFBbkIsSUFBeUIsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEtBQU0sRUFBRSxDQUFGLENBQU4sSUFBWSxFQUFaLEdBQWUsS0FBRyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUgsS0FBZSxJQUFFLEVBQUUsQ0FBRixFQUFJLENBQUMsQ0FBRCxDQUFOLENBQWYsS0FBNEIsSUFBRSxFQUFFLE9BQUYsQ0FBVSxHQUFWLEVBQWMsRUFBRSxNQUFGLEdBQVMsQ0FBVCxDQUFkLEdBQTBCLEVBQUUsTUFBRixDQUF4RCxLQUFvRSxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsRUFBSyxLQUFMLENBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBTCxFQUFxQixFQUFFLENBQUYsSUFBSyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFMLENBQXpGLEVBQTRHLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLENBQXJJLENBQXpCLENBQTVCO1NBQVgsRUFBalgsRUFBc2tCLFFBQU8sRUFBQyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxJQUFFLEVBQUUsT0FBRixDQUFVLEVBQVYsRUFBYSxFQUFiLEVBQWlCLFdBQWpCLEVBQUYsQ0FBTCxPQUE0QyxRQUFNLENBQU4sR0FBUSxZQUFVO0FBQUMsbUJBQU0sQ0FBQyxDQUFELENBQVA7V0FBVixHQUFxQixVQUFTLENBQVQsRUFBVztBQUFDLG1CQUFPLEVBQUUsUUFBRixJQUFZLEVBQUUsUUFBRixDQUFXLFdBQVgsT0FBMkIsQ0FBM0IsQ0FBcEI7V0FBWCxDQUF6RTtTQUFYLEVBQWtKLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxjQUFJLElBQUUsRUFBRSxJQUFFLEdBQUYsQ0FBSixDQUFMLE9BQXVCLEtBQUcsQ0FBQyxJQUFFLElBQUksTUFBSixDQUFXLFFBQU0sQ0FBTixHQUFRLEdBQVIsR0FBWSxDQUFaLEdBQWMsR0FBZCxHQUFrQixDQUFsQixHQUFvQixLQUFwQixDQUFiLENBQUQsSUFBMkMsRUFBRSxDQUFGLEVBQUksVUFBUyxDQUFULEVBQVc7QUFBQyxtQkFBTyxFQUFFLElBQUYsQ0FBTyxZQUFVLE9BQU8sRUFBRSxTQUFGLElBQWEsRUFBRSxTQUFGLElBQWEsZUFBYSxPQUFPLEVBQUUsWUFBRixJQUFnQixFQUFFLFlBQUYsQ0FBZSxPQUFmLENBQXBDLElBQTZELEVBQXhHLENBQWQsQ0FBRDtXQUFYLENBQS9DLENBQTFCO1NBQVgsRUFBNk4sTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsaUJBQU8sVUFBUyxDQUFULEVBQVc7QUFBQyxnQkFBSSxJQUFFLEdBQUcsSUFBSCxDQUFRLENBQVIsRUFBVSxDQUFWLENBQUYsQ0FBTCxPQUEyQixRQUFNLENBQU4sR0FBUSxTQUFPLENBQVAsR0FBUyxLQUFHLEtBQUcsRUFBSCxFQUFNLFFBQU0sQ0FBTixHQUFRLE1BQUksQ0FBSixHQUFNLFNBQU8sQ0FBUCxHQUFTLE1BQUksQ0FBSixHQUFNLFNBQU8sQ0FBUCxHQUFTLEtBQUcsTUFBSSxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQUosR0FBaUIsU0FBTyxDQUFQLEdBQVMsS0FBRyxFQUFFLE9BQUYsQ0FBVSxDQUFWLElBQWEsQ0FBQyxDQUFELEdBQUcsU0FBTyxDQUFQLEdBQVMsS0FBRyxFQUFFLEtBQUYsQ0FBUSxDQUFDLEVBQUUsTUFBRixDQUFULEtBQXFCLENBQXJCLEdBQXVCLFNBQU8sQ0FBUCxHQUFTLENBQUMsTUFBSSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksR0FBWixDQUFKLEdBQXFCLEdBQXJCLENBQUQsQ0FBMkIsT0FBM0IsQ0FBbUMsQ0FBbkMsSUFBc0MsQ0FBQyxDQUFELEdBQUcsU0FBTyxDQUFQLEdBQVMsTUFBSSxDQUFKLElBQU8sRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLEVBQUUsTUFBRixHQUFTLENBQVQsQ0FBVixLQUF3QixJQUFFLEdBQUYsR0FBTSxDQUFDLENBQUQsQ0FBbE8sR0FBc08sQ0FBQyxDQUFELENBQWxSO1dBQVgsQ0FBUjtTQUFmLEVBQXlULE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CO0FBQUMsY0FBSSxJQUFFLFVBQVEsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBUjtjQUFxQixJQUFFLFdBQVMsRUFBRSxLQUFGLENBQVEsQ0FBQyxDQUFELENBQWpCO2NBQXFCLElBQUUsY0FBWSxDQUFaLENBQXJELE9BQTBFLE1BQUksQ0FBSixJQUFPLE1BQUksQ0FBSixHQUFNLFVBQVMsQ0FBVCxFQUFXO0FBQUMsbUJBQU0sQ0FBQyxDQUFDLEVBQUUsVUFBRixDQUFUO1dBQVgsR0FBa0MsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGdCQUFJLENBQUo7Z0JBQU0sQ0FBTjtnQkFBUSxDQUFSO2dCQUFVLENBQVY7Z0JBQVksQ0FBWjtnQkFBYyxDQUFkO2dCQUFnQixJQUFFLE1BQUksQ0FBSixHQUFNLGFBQU4sR0FBb0IsaUJBQXBCO2dCQUFzQyxJQUFFLEVBQUUsVUFBRjtnQkFBYSxJQUFFLEtBQUcsRUFBRSxRQUFGLENBQVcsV0FBWCxFQUFIO2dCQUE0QixJQUFFLENBQUMsQ0FBRCxJQUFJLENBQUMsQ0FBRDtnQkFBRyxJQUFFLENBQUMsQ0FBRCxDQUFqSCxJQUF1SCxDQUFILEVBQUs7QUFBQyxrQkFBRyxDQUFILEVBQUs7QUFBQyx1QkFBTSxDQUFOLEVBQVE7QUFBQyxzQkFBRSxDQUFGLENBQUQsT0FBVyxJQUFFLEVBQUUsQ0FBRixDQUFGO0FBQU8sd0JBQUcsSUFBRSxFQUFFLFFBQUYsQ0FBVyxXQUFYLE9BQTJCLENBQTNCLEdBQTZCLE1BQUksRUFBRSxRQUFGLEVBQVcsT0FBTSxDQUFDLENBQUQsQ0FBdkQ7bUJBQWIsQ0FBdUUsR0FBRSxJQUFFLFdBQVMsQ0FBVCxJQUFZLENBQUMsQ0FBRCxJQUFJLGFBQWhCLENBQWhGO2lCQUFSLE9BQTRILENBQUMsQ0FBRCxDQUE3SDtlQUFMLElBQXdJLElBQUUsQ0FBQyxJQUFFLEVBQUUsVUFBRixHQUFhLEVBQUUsU0FBRixDQUFsQixFQUErQixLQUFHLENBQUgsRUFBSztBQUFDLG9CQUFFLENBQUYsRUFBSSxJQUFFLEVBQUUsQ0FBRixNQUFPLEVBQUUsQ0FBRixJQUFLLEVBQUwsQ0FBUCxFQUFnQixJQUFFLEVBQUUsRUFBRSxRQUFGLENBQUYsS0FBZ0IsRUFBRSxFQUFFLFFBQUYsQ0FBRixHQUFjLEVBQWQsQ0FBaEIsRUFBa0MsSUFBRSxFQUFFLENBQUYsS0FBTSxFQUFOLEVBQVMsSUFBRSxFQUFFLENBQUYsTUFBTyxDQUFQLElBQVUsRUFBRSxDQUFGLENBQVYsRUFBZSxJQUFFLEtBQUcsRUFBRSxDQUFGLENBQUgsRUFBUSxJQUFFLEtBQUcsRUFBRSxVQUFGLENBQWEsQ0FBYixDQUFILENBQW5HLE9BQTRILElBQUUsRUFBRSxDQUFGLElBQUssQ0FBTCxJQUFRLEVBQUUsQ0FBRixDQUFSLEtBQWUsSUFBRSxJQUFFLENBQUYsQ0FBakIsSUFBdUIsRUFBRSxHQUFGLEVBQXZCO0FBQStCLHNCQUFHLE1BQUksRUFBRSxRQUFGLElBQVksRUFBRSxDQUFGLElBQUssTUFBSSxDQUFKLEVBQU07QUFBQyxzQkFBRSxDQUFGLElBQUssQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBTCxDQUFEO21CQUE5QjtpQkFBdkM7ZUFBN0osTUFBNFAsSUFBRyxNQUFJLElBQUUsQ0FBRixFQUFJLElBQUUsRUFBRSxDQUFGLE1BQU8sRUFBRSxDQUFGLElBQUssRUFBTCxDQUFQLEVBQWdCLElBQUUsRUFBRSxFQUFFLFFBQUYsQ0FBRixLQUFnQixFQUFFLEVBQUUsUUFBRixDQUFGLEdBQWMsRUFBZCxDQUFoQixFQUFrQyxJQUFFLEVBQUUsQ0FBRixLQUFNLEVBQU4sRUFBUyxJQUFFLEVBQUUsQ0FBRixNQUFPLENBQVAsSUFBVSxFQUFFLENBQUYsQ0FBVixFQUFlLElBQUUsQ0FBRixDQUExRixFQUErRixNQUFJLENBQUMsQ0FBRCxFQUFHLE9BQU0sSUFBRSxFQUFFLENBQUYsSUFBSyxDQUFMLElBQVEsRUFBRSxDQUFGLENBQVIsS0FBZSxJQUFFLElBQUUsQ0FBRixDQUFqQixJQUF1QixFQUFFLEdBQUYsRUFBdkI7QUFBK0Isb0JBQUcsQ0FBQyxJQUFFLEVBQUUsUUFBRixDQUFXLFdBQVgsT0FBMkIsQ0FBM0IsR0FBNkIsTUFBSSxFQUFFLFFBQUYsQ0FBcEMsSUFBaUQsRUFBRSxDQUFGLEtBQU0sTUFBSSxJQUFFLEVBQUUsQ0FBRixNQUFPLEVBQUUsQ0FBRixJQUFLLEVBQUwsQ0FBUCxFQUFnQixJQUFFLEVBQUUsRUFBRSxRQUFGLENBQUYsS0FBZ0IsRUFBRSxFQUFFLFFBQUYsQ0FBRixHQUFjLEVBQWQsQ0FBaEIsRUFBa0MsRUFBRSxDQUFGLElBQUssQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFMLENBQTFELEVBQXNFLE1BQUksQ0FBSixDQUE3SCxFQUFvSSxNQUF2STtlQUF2QyxPQUEyTCxLQUFHLENBQUgsRUFBSyxNQUFJLENBQUosSUFBTyxJQUFFLENBQUYsS0FBTSxDQUFOLElBQVMsSUFBRSxDQUFGLElBQUssQ0FBTCxDQUEzckI7YUFBTDtXQUFuSSxDQUF6SDtTQUFuQixFQUF5OUIsUUFBTyxnQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsY0FBSSxDQUFKO2NBQU0sSUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEtBQWMsRUFBRSxVQUFGLENBQWEsRUFBRSxXQUFGLEVBQWIsQ0FBZCxJQUE2QyxHQUFHLEtBQUgsQ0FBUyx5QkFBdUIsQ0FBdkIsQ0FBdEQsQ0FBVCxPQUFnRyxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsQ0FBTCxHQUFVLEVBQUUsTUFBRixHQUFTLENBQVQsSUFBWSxJQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxFQUFMLEVBQVEsQ0FBUixDQUFGLEVBQWEsRUFBRSxVQUFGLENBQWEsY0FBYixDQUE0QixFQUFFLFdBQUYsRUFBNUIsSUFBNkMsR0FBRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxnQkFBSSxDQUFKO2dCQUFNLElBQUUsRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFGO2dCQUFTLElBQUUsRUFBRSxNQUFGLENBQWxCLE9BQWlDLEdBQU47QUFBVSxrQkFBRSxFQUFFLENBQUYsRUFBSSxFQUFFLENBQUYsQ0FBSixDQUFGLEVBQVksRUFBRSxDQUFGLElBQUssRUFBRSxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsQ0FBTCxDQUFGO2FBQTNCO1dBQXhDLENBQWhELEdBQWtJLFVBQVMsQ0FBVCxFQUFXO0FBQUMsbUJBQU8sRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sQ0FBUCxDQUFEO1dBQVgsQ0FBM0osR0FBeUwsQ0FBekwsQ0FBMUc7U0FBYixFQUFycUQsRUFBeTlELFNBQVEsRUFBQyxLQUFJLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxjQUFJLElBQUUsRUFBRjtjQUFLLElBQUUsRUFBRjtjQUFLLElBQUUsRUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksSUFBWixDQUFGLENBQUYsQ0FBZixPQUE2QyxFQUFFLENBQUYsSUFBSyxHQUFHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLGdCQUFJLENBQUo7Z0JBQU0sSUFBRSxFQUFFLENBQUYsRUFBSSxJQUFKLEVBQVMsQ0FBVCxFQUFXLEVBQVgsQ0FBRjtnQkFBaUIsSUFBRSxFQUFFLE1BQUYsQ0FBMUIsT0FBeUMsR0FBTjtBQUFVLGVBQUMsSUFBRSxFQUFFLENBQUYsQ0FBRixDQUFELEtBQVcsRUFBRSxDQUFGLElBQUssRUFBRSxFQUFFLENBQUYsSUFBSyxDQUFMLENBQUYsQ0FBaEI7YUFBVjtXQUFwRCxDQUFSLEdBQW1HLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxtQkFBTyxFQUFFLENBQUYsSUFBSyxDQUFMLEVBQU8sRUFBRSxDQUFGLEVBQUksSUFBSixFQUFTLENBQVQsRUFBVyxDQUFYLENBQVAsRUFBcUIsRUFBRSxDQUFGLElBQUssSUFBTCxFQUFVLENBQUMsRUFBRSxHQUFGLEVBQUQsQ0FBdkM7V0FBZixDQUFoSjtTQUFYLENBQVAsRUFBb08sS0FBSSxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sVUFBUyxDQUFULEVBQVc7QUFBQyxtQkFBTyxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQVEsTUFBUixHQUFlLENBQWYsQ0FBUjtXQUFYLENBQVI7U0FBWCxDQUFQLEVBQWlFLFVBQVMsR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLElBQUUsRUFBRSxPQUFGLENBQVUsRUFBVixFQUFhLEVBQWIsQ0FBRixFQUFtQixVQUFTLENBQVQsRUFBVztBQUFDLG1CQUFNLENBQUMsRUFBRSxXQUFGLElBQWUsRUFBRSxTQUFGLElBQWEsRUFBRSxDQUFGLENBQTVCLENBQUQsQ0FBbUMsT0FBbkMsQ0FBMkMsQ0FBM0MsSUFBOEMsQ0FBQyxDQUFELENBQXJEO1dBQVgsQ0FBM0I7U0FBWCxDQUFaLEVBQXdILE1BQUssR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLEVBQUUsSUFBRixDQUFPLEtBQUcsRUFBSCxDQUFQLElBQWUsR0FBRyxLQUFILENBQVMsdUJBQXFCLENBQXJCLENBQXhCLEVBQWdELElBQUUsRUFBRSxPQUFGLENBQVUsRUFBVixFQUFhLEVBQWIsRUFBaUIsV0FBakIsRUFBRixFQUFpQyxVQUFTLENBQVQsRUFBVztBQUFDLGdCQUFJLENBQUosQ0FBRDtBQUFVLGtCQUFHLElBQUUsSUFBRSxFQUFFLElBQUYsR0FBTyxFQUFFLFlBQUYsQ0FBZSxVQUFmLEtBQTRCLEVBQUUsWUFBRixDQUFlLE1BQWYsQ0FBNUIsRUFBbUQsT0FBTyxJQUFFLEVBQUUsV0FBRixFQUFGLEVBQWtCLE1BQUksQ0FBSixJQUFPLE1BQUksRUFBRSxPQUFGLENBQVUsSUFBRSxHQUFGLENBQWQsQ0FBakc7YUFBSCxRQUErSCxDQUFDLElBQUUsRUFBRSxVQUFGLENBQUgsSUFBa0IsTUFBSSxFQUFFLFFBQUYsRUFBNUosT0FBOEssQ0FBQyxDQUFELENBQTlLO1dBQVgsQ0FBekY7U0FBWCxDQUFSLEVBQTJTLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxJQUFFLEVBQUUsUUFBRixJQUFZLEVBQUUsUUFBRixDQUFXLElBQVgsQ0FBbkIsT0FBMEMsS0FBRyxFQUFFLEtBQUYsQ0FBUSxDQUFSLE1BQWEsRUFBRSxFQUFGLENBQTFEO1NBQVgsRUFBMkUsTUFBSyxjQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLE1BQUksQ0FBSixDQUFSO1NBQVgsRUFBMEIsT0FBTSxlQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLE1BQUksRUFBRSxhQUFGLEtBQWtCLENBQUMsRUFBRSxRQUFGLElBQVksRUFBRSxRQUFGLEVBQWIsQ0FBdEIsSUFBa0QsQ0FBQyxFQUFFLEVBQUUsSUFBRixJQUFRLEVBQUUsSUFBRixJQUFRLENBQUMsRUFBRSxRQUFGLENBQW5CLENBQTNEO1NBQVgsRUFBc0csU0FBUSxpQkFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxFQUFFLFFBQUYsS0FBYSxDQUFDLENBQUQsQ0FBckI7U0FBWCxFQUFvQyxVQUFTLGtCQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLEVBQUUsUUFBRixLQUFhLENBQUMsQ0FBRCxDQUFyQjtTQUFYLEVBQW9DLFNBQVEsaUJBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxJQUFFLEVBQUUsUUFBRixDQUFXLFdBQVgsRUFBRixDQUFMLE9BQXNDLFlBQVUsQ0FBVixJQUFhLENBQUMsQ0FBQyxFQUFFLE9BQUYsSUFBVyxhQUFXLENBQVgsSUFBYyxDQUFDLENBQUMsRUFBRSxRQUFGLENBQWhGO1NBQVgsRUFBdUcsVUFBUyxrQkFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxFQUFFLFVBQUYsSUFBYyxFQUFFLFVBQUYsQ0FBYSxhQUFiLEVBQTJCLEVBQUUsUUFBRixLQUFhLENBQUMsQ0FBRCxDQUE5RDtTQUFYLEVBQTZFLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxlQUFJLElBQUUsRUFBRSxVQUFGLEVBQWEsQ0FBbkIsRUFBcUIsSUFBRSxFQUFFLFdBQUY7QUFBYyxnQkFBRyxFQUFFLFFBQUYsR0FBVyxDQUFYLEVBQWEsT0FBTSxDQUFDLENBQUQsQ0FBdEI7V0FBckMsT0FBb0UsQ0FBQyxDQUFELENBQXJFO1NBQVgsRUFBb0YsUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTSxDQUFDLEVBQUUsT0FBRixDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBRCxDQUFQO1NBQVgsRUFBdUMsUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxFQUFFLElBQUYsQ0FBTyxFQUFFLFFBQUYsQ0FBZCxDQUFEO1NBQVgsRUFBdUMsT0FBTSxlQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLEVBQUUsSUFBRixDQUFPLEVBQUUsUUFBRixDQUFkLENBQUQ7U0FBWCxFQUF1QyxRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLGNBQUksSUFBRSxFQUFFLFFBQUYsQ0FBVyxXQUFYLEVBQUYsQ0FBTCxPQUFzQyxZQUFVLENBQVYsSUFBYSxhQUFXLEVBQUUsSUFBRixJQUFRLGFBQVcsQ0FBWCxDQUF0RTtTQUFYLEVBQStGLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxjQUFJLENBQUosQ0FBRCxPQUFhLFlBQVUsRUFBRSxRQUFGLENBQVcsV0FBWCxFQUFWLElBQW9DLFdBQVMsRUFBRSxJQUFGLEtBQVMsU0FBTyxJQUFFLEVBQUUsWUFBRixDQUFlLE1BQWYsQ0FBRixDQUFQLElBQWtDLFdBQVMsRUFBRSxXQUFGLEVBQVQsQ0FBeEYsQ0FBYjtTQUFYLEVBQTJJLE9BQU0sR0FBRyxZQUFVO0FBQUMsaUJBQU0sQ0FBQyxDQUFELENBQU4sQ0FBRDtTQUFWLENBQVQsRUFBZ0MsTUFBSyxHQUFHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGlCQUFNLENBQUMsSUFBRSxDQUFGLENBQVAsQ0FBRDtTQUFiLENBQVIsRUFBb0MsSUFBRyxHQUFHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxpQkFBTSxDQUFDLElBQUUsQ0FBRixHQUFJLElBQUUsQ0FBRixHQUFJLENBQVIsQ0FBUCxDQUFEO1NBQWYsQ0FBTixFQUEwQyxNQUFLLEdBQUcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsZUFBSSxJQUFJLElBQUUsQ0FBRixFQUFJLElBQUUsQ0FBRixFQUFJLEtBQUcsQ0FBSDtBQUFLLGNBQUUsSUFBRixDQUFPLENBQVA7V0FBckIsT0FBc0MsQ0FBUCxDQUFoQztTQUFiLENBQVIsRUFBZ0UsS0FBSSxHQUFHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGVBQUksSUFBSSxJQUFFLENBQUYsRUFBSSxJQUFFLENBQUYsRUFBSSxLQUFHLENBQUg7QUFBSyxjQUFFLElBQUYsQ0FBTyxDQUFQO1dBQXJCLE9BQXNDLENBQVAsQ0FBaEM7U0FBYixDQUFQLEVBQStELElBQUcsR0FBRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsZUFBSSxJQUFJLElBQUUsSUFBRSxDQUFGLEdBQUksSUFBRSxDQUFGLEdBQUksQ0FBUixFQUFVLEVBQUUsQ0FBRixJQUFLLENBQUw7QUFBUSxjQUFFLElBQUYsQ0FBTyxDQUFQO1dBQTVCLE9BQTZDLENBQVAsQ0FBdkM7U0FBZixDQUFOLEVBQXVFLElBQUcsR0FBRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsZUFBSSxJQUFJLElBQUUsSUFBRSxDQUFGLEdBQUksSUFBRSxDQUFGLEdBQUksQ0FBUixFQUFVLEVBQUUsQ0FBRixHQUFJLENBQUo7QUFBTyxjQUFFLElBQUYsQ0FBTyxDQUFQO1dBQTNCLE9BQTRDLENBQVAsQ0FBdEM7U0FBZixDQUFOLEVBQXo5RCxFQUE3dUYsRUFBOHdKLEVBQUUsT0FBRixDQUFVLEdBQVYsR0FBYyxFQUFFLE9BQUYsQ0FBVSxFQUFWLENBQTU4YSxLQUE2OWEsQ0FBSixJQUFRLEVBQUMsT0FBTSxDQUFDLENBQUQsRUFBRyxVQUFTLENBQUMsQ0FBRCxFQUFHLE1BQUssQ0FBQyxDQUFELEVBQUcsVUFBUyxDQUFDLENBQUQsRUFBRyxPQUFNLENBQUMsQ0FBRCxFQUF4RDtBQUE0RCxRQUFFLE9BQUYsQ0FBVSxDQUFWLElBQWEsR0FBRyxDQUFILENBQWI7S0FBNUQsS0FBbUYsQ0FBSixJQUFRLEVBQUMsUUFBTyxDQUFDLENBQUQsRUFBRyxPQUFNLENBQUMsQ0FBRCxFQUF6QjtBQUE2QixRQUFFLE9BQUYsQ0FBVSxDQUFWLElBQWEsR0FBRyxDQUFILENBQWI7S0FBN0IsU0FBeUQsRUFBVCxHQUFhLEVBQWIsRUFBZSxDQUFHLFNBQUgsR0FBYSxFQUFFLE9BQUYsR0FBVSxFQUFFLE9BQUYsRUFBVSxFQUFFLFVBQUYsR0FBYSxJQUFJLEVBQUosRUFBYixFQUFvQixJQUFFLEdBQUcsUUFBSCxHQUFZLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksQ0FBSjtVQUFNLENBQU47VUFBUSxDQUFSO1VBQVUsQ0FBVjtVQUFZLENBQVo7VUFBYyxDQUFkO1VBQWdCLENBQWhCO1VBQWtCLElBQUUsRUFBRSxJQUFFLEdBQUYsQ0FBSixDQUFuQixJQUFpQyxDQUFILEVBQUssT0FBTyxJQUFFLENBQUYsR0FBSSxFQUFFLEtBQUYsQ0FBUSxDQUFSLENBQUosQ0FBWixDQUEyQixHQUFFLENBQUYsRUFBSSxJQUFFLEVBQUYsRUFBSyxJQUFFLEVBQUUsU0FBRixDQUFwRSxPQUFzRixDQUFOLEVBQVE7QUFBQyxhQUFHLEVBQUUsSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUYsQ0FBRixLQUFpQixNQUFJLElBQUUsRUFBRSxLQUFGLENBQVEsRUFBRSxDQUFGLEVBQUssTUFBTCxDQUFSLElBQXNCLENBQXRCLENBQU4sRUFBK0IsRUFBRSxJQUFGLENBQU8sSUFBRSxFQUFGLENBQXRDLENBQXBCLEVBQWlFLElBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBQyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBRixDQUFELEtBQWdCLElBQUUsRUFBRSxLQUFGLEVBQUYsRUFBWSxFQUFFLElBQUYsQ0FBTyxFQUFDLE9BQU0sQ0FBTixFQUFRLE1BQUssRUFBRSxDQUFGLEVBQUssT0FBTCxDQUFhLENBQWIsRUFBZSxHQUFmLENBQUwsRUFBaEIsQ0FBWixFQUF1RCxJQUFFLEVBQUUsS0FBRixDQUFRLEVBQUUsTUFBRixDQUFWLENBQXZFLENBQXZFLEtBQXVLLENBQUosSUFBUyxFQUFFLE1BQUY7QUFBUyxZQUFFLElBQUUsRUFBRSxDQUFGLEVBQUssSUFBTCxDQUFVLENBQVYsQ0FBRixDQUFGLElBQW1CLEVBQUUsQ0FBRixLQUFNLEVBQUUsSUFBRSxFQUFFLENBQUYsRUFBSyxDQUFMLENBQUYsQ0FBRixLQUFlLElBQUUsRUFBRSxLQUFGLEVBQUYsRUFBWSxFQUFFLElBQUYsQ0FBTyxFQUFDLE9BQU0sQ0FBTixFQUFRLE1BQUssQ0FBTCxFQUFPLFNBQVEsQ0FBUixFQUF2QixDQUFaLEVBQStDLElBQUUsRUFBRSxLQUFGLENBQVEsRUFBRSxNQUFGLENBQVYsQ0FBdkY7U0FBbEIsSUFBaUksQ0FBQyxDQUFELEVBQUcsTUFBTjtPQUF6UyxPQUE0VCxJQUFFLEVBQUUsTUFBRixHQUFTLElBQUUsR0FBRyxLQUFILENBQVMsQ0FBVCxDQUFGLEdBQWMsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFPLEtBQVAsQ0FBYSxDQUFiLENBQWQsQ0FBdlo7S0FBYixDQUExcWIsU0FBc25jLEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxXQUFJLElBQUksSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLEVBQUYsRUFBSyxJQUFFLENBQUYsRUFBSSxHQUFoQztBQUFvQyxhQUFHLEVBQUUsQ0FBRixFQUFLLEtBQUw7T0FBdkMsT0FBeUQsQ0FBUCxDQUFuRDtLQUFkLFNBQW1GLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQjtBQUFDLFVBQUksSUFBRSxFQUFFLEdBQUY7VUFBTSxJQUFFLEtBQUcsaUJBQWUsQ0FBZjtVQUFpQixJQUFFLEdBQUYsQ0FBbkMsT0FBZ0QsRUFBRSxLQUFGLEdBQVEsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGVBQU0sSUFBRSxFQUFFLENBQUYsQ0FBRjtBQUFPLGNBQUcsTUFBSSxFQUFFLFFBQUYsSUFBWSxDQUFoQixFQUFrQixPQUFPLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxDQUFOLENBQVAsQ0FBckI7U0FBYjtPQUFoQixHQUFtRSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsWUFBSSxDQUFKO1lBQU0sQ0FBTjtZQUFRLENBQVI7WUFBVSxJQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRixDQUFYLElBQXNCLENBQUgsRUFBSztBQUFDLGlCQUFNLElBQUUsRUFBRSxDQUFGLENBQUY7QUFBTyxnQkFBRyxDQUFDLE1BQUksRUFBRSxRQUFGLElBQVksQ0FBaEIsQ0FBRCxJQUFxQixFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFyQixFQUE4QixPQUFNLENBQUMsQ0FBRCxDQUF2QztXQUFiO1NBQU4sTUFBa0UsT0FBTSxJQUFFLEVBQUUsQ0FBRixDQUFGO0FBQU8sY0FBRyxNQUFJLEVBQUUsUUFBRixJQUFZLENBQWhCLEVBQWtCO0FBQUMsZ0JBQUcsSUFBRSxFQUFFLENBQUYsTUFBTyxFQUFFLENBQUYsSUFBSyxFQUFMLENBQVAsRUFBZ0IsSUFBRSxFQUFFLEVBQUUsUUFBRixDQUFGLEtBQWdCLEVBQUUsRUFBRSxRQUFGLENBQUYsR0FBYyxFQUFkLENBQWhCLEVBQWtDLENBQUMsSUFBRSxFQUFFLENBQUYsQ0FBRixDQUFELElBQVUsRUFBRSxDQUFGLE1BQU8sQ0FBUCxJQUFVLEVBQUUsQ0FBRixNQUFPLENBQVAsRUFBUyxPQUFPLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixDQUFMLENBQTdGLElBQTBHLEVBQUUsQ0FBRixJQUFLLENBQUwsRUFBTyxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFMLEVBQWMsT0FBTSxDQUFDLENBQUQsQ0FBOUI7V0FBN0g7U0FBYjtPQUFwRyxDQUEzSDtLQUFsQixTQUF1YSxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsYUFBTyxFQUFFLE1BQUYsR0FBUyxDQUFULEdBQVcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFlBQUksSUFBRSxFQUFFLE1BQUYsQ0FBUCxPQUFzQixHQUFOO0FBQVUsY0FBRyxDQUFDLEVBQUUsQ0FBRixFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxDQUFELEVBQWEsT0FBTSxDQUFDLENBQUQsQ0FBdEI7U0FBVixPQUF5QyxDQUFDLENBQUQsQ0FBekQ7T0FBZixHQUE0RSxFQUFFLENBQUYsQ0FBdkYsQ0FBUjtLQUFkLFNBQTJILEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQjtBQUFDLFdBQUksSUFBSSxJQUFFLENBQUYsRUFBSSxJQUFFLEVBQUUsTUFBRixFQUFTLElBQUUsQ0FBRixFQUFJLEdBQTNCO0FBQStCLFdBQUcsQ0FBSCxFQUFLLEVBQUUsQ0FBRixDQUFMLEVBQVUsQ0FBVjtPQUEvQixPQUFtRCxDQUFQLENBQTdDO0tBQWxCLFNBQWlGLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQjtBQUFDLFdBQUksSUFBSSxDQUFKLEVBQU0sSUFBRSxFQUFGLEVBQUssSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLFFBQU0sQ0FBTixFQUFRLElBQUUsQ0FBRixFQUFJLEdBQTVDO0FBQWdELFNBQUMsSUFBRSxFQUFFLENBQUYsQ0FBRixDQUFELEtBQVcsS0FBRyxDQUFDLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxDQUFOLENBQUQsS0FBWSxFQUFFLElBQUYsQ0FBTyxDQUFQLEdBQVUsS0FBRyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUgsQ0FBekIsQ0FBWDtPQUFoRCxPQUEwRyxDQUFQLENBQXBHO0tBQXRCLFNBQTRJLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQixDQUF0QixFQUF3QjtBQUFDLGFBQU8sS0FBRyxDQUFDLEVBQUUsQ0FBRixDQUFELEtBQVEsSUFBRSxHQUFHLENBQUgsQ0FBRixDQUFYLEVBQW9CLEtBQUcsQ0FBQyxFQUFFLENBQUYsQ0FBRCxLQUFRLElBQUUsR0FBRyxDQUFILEVBQUssQ0FBTCxDQUFGLENBQVgsRUFBc0IsR0FBRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxZQUFJLENBQUo7WUFBTSxDQUFOO1lBQVEsQ0FBUjtZQUFVLElBQUUsRUFBRjtZQUFLLElBQUUsRUFBRjtZQUFLLElBQUUsRUFBRSxNQUFGO1lBQVMsSUFBRSxLQUFHLEdBQUcsS0FBRyxHQUFILEVBQU8sRUFBRSxRQUFGLEdBQVcsQ0FBQyxDQUFELENBQVgsR0FBZSxDQUFmLEVBQWlCLEVBQTNCLENBQUg7WUFBa0MsSUFBRSxDQUFDLENBQUQsSUFBSSxDQUFDLENBQUQsSUFBSSxDQUFKLEdBQU0sQ0FBVixHQUFZLEdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWjtZQUEwQixJQUFFLElBQUUsTUFBSSxJQUFFLENBQUYsR0FBSSxLQUFHLENBQUgsQ0FBUixHQUFjLEVBQWQsR0FBaUIsQ0FBakIsR0FBbUIsQ0FBckIsQ0FBbEcsSUFBNEgsS0FBRyxFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsQ0FBSCxFQUFjLENBQWQsRUFBZ0I7QUFBQyxjQUFFLEdBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBRixFQUFVLEVBQUUsQ0FBRixFQUFJLEVBQUosRUFBTyxDQUFQLEVBQVMsQ0FBVCxDQUFWLEVBQXNCLElBQUUsRUFBRSxNQUFGLENBQXpCLE9BQXdDLEdBQU47QUFBVSxhQUFDLElBQUUsRUFBRSxDQUFGLENBQUYsQ0FBRCxLQUFXLEVBQUUsRUFBRSxDQUFGLENBQUYsSUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFGLENBQUYsSUFBUSxDQUFSLENBQUYsQ0FBbkI7V0FBVjtTQUFyRCxJQUFtRyxDQUFILEVBQUs7QUFBQyxjQUFHLEtBQUcsQ0FBSCxFQUFLO0FBQUMsZ0JBQUcsQ0FBSCxFQUFLO0FBQUMsa0JBQUUsRUFBRixFQUFLLElBQUUsRUFBRSxNQUFGLENBQVIsT0FBdUIsR0FBTjtBQUFVLGlCQUFDLElBQUUsRUFBRSxDQUFGLENBQUYsQ0FBRCxJQUFVLEVBQUUsSUFBRixDQUFPLEVBQUUsQ0FBRixJQUFLLENBQUwsQ0FBakI7ZUFBVixDQUFtQyxDQUFFLElBQUYsRUFBTyxJQUFFLEVBQUYsRUFBSyxDQUFaLEVBQWMsQ0FBZCxFQUFwRDthQUFMLENBQTBFLEdBQUUsRUFBRSxNQUFGLENBQTdFLE9BQTRGLEdBQU47QUFBVSxlQUFDLElBQUUsRUFBRSxDQUFGLENBQUYsQ0FBRCxJQUFVLENBQUMsSUFBRSxJQUFFLEVBQUUsQ0FBRixFQUFJLENBQUosQ0FBRixHQUFTLEVBQUUsQ0FBRixDQUFULENBQUgsR0FBa0IsQ0FBQyxDQUFELEtBQUssRUFBRSxDQUFGLElBQUssRUFBRSxFQUFFLENBQUYsSUFBSyxDQUFMLENBQUYsQ0FBdEM7YUFBVjtXQUE5RjtTQUFOLE1BQXFLLElBQUUsR0FBRyxNQUFJLENBQUosR0FBTSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsRUFBRSxNQUFGLENBQWpCLEdBQTJCLENBQTNCLENBQUwsRUFBbUMsSUFBRSxFQUFFLElBQUYsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBRixHQUFnQixFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFoQixDQUF4TTtPQUExTyxDQUE3QyxDQUFSO0tBQXhCLFNBQXVpQixFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsV0FBSSxJQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLElBQUUsRUFBRSxNQUFGLEVBQVMsSUFBRSxFQUFFLFFBQUYsQ0FBVyxFQUFFLENBQUYsRUFBSyxJQUFMLENBQWIsRUFBd0IsSUFBRSxLQUFHLEVBQUUsUUFBRixDQUFXLEdBQVgsQ0FBSCxFQUFtQixJQUFFLElBQUUsQ0FBRixHQUFJLENBQUosRUFBTSxJQUFFLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxlQUFPLE1BQUksQ0FBSixDQUFSO09BQVgsRUFBMEIsQ0FBN0IsRUFBK0IsQ0FBQyxDQUFELENBQWpDLEVBQXFDLElBQUUsR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLGVBQU8sRUFBRSxDQUFGLEVBQUksQ0FBSixJQUFPLENBQUMsQ0FBRCxDQUFmO09BQVgsRUFBOEIsQ0FBakMsRUFBbUMsQ0FBQyxDQUFELENBQXJDLEVBQXlDLElBQUUsQ0FBQyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsWUFBSSxJQUFFLENBQUMsQ0FBRCxLQUFLLEtBQUcsTUFBSSxDQUFKLENBQVIsS0FBaUIsQ0FBQyxJQUFFLENBQUYsQ0FBRCxDQUFNLFFBQU4sR0FBZSxFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFmLEdBQXdCLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxDQUFOLENBQXhCLENBQWpCLENBQVAsT0FBaUUsSUFBRSxJQUFGLEVBQU8sQ0FBUCxDQUFqRTtPQUFmLENBQUgsRUFBOEYsSUFBRSxDQUFGLEVBQUksR0FBOVA7QUFBa1EsWUFBRyxJQUFFLEVBQUUsUUFBRixDQUFXLEVBQUUsQ0FBRixFQUFLLElBQUwsQ0FBYixFQUF3QixJQUFFLENBQUMsR0FBRyxHQUFHLENBQUgsQ0FBSCxFQUFTLENBQVQsQ0FBRCxDQUFGLENBQTNCLEtBQStDO0FBQUMsY0FBRyxJQUFFLEVBQUUsTUFBRixDQUFTLEVBQUUsQ0FBRixFQUFLLElBQUwsQ0FBVCxDQUFvQixLQUFwQixDQUEwQixJQUExQixFQUErQixFQUFFLENBQUYsRUFBSyxPQUFMLENBQWpDLEVBQStDLEVBQUUsQ0FBRixDQUEvQyxFQUFvRDtBQUFDLGlCQUFJLElBQUUsRUFBRSxDQUFGLEVBQUksSUFBRSxDQUFGLEVBQUksR0FBZDtBQUFrQixrQkFBRyxFQUFFLFFBQUYsQ0FBVyxFQUFFLENBQUYsRUFBSyxJQUFMLENBQWQsRUFBeUIsTUFBekI7YUFBbEIsT0FBd0QsR0FBRyxJQUFFLENBQUYsSUFBSyxHQUFHLENBQUgsQ0FBTCxFQUFXLElBQUUsQ0FBRixJQUFLLEdBQUcsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLElBQUUsQ0FBRixDQUFWLENBQWUsTUFBZixDQUFzQixFQUFDLE9BQU0sUUFBTSxFQUFFLElBQUUsQ0FBRixDQUFGLENBQU8sSUFBUCxHQUFZLEdBQWxCLEdBQXNCLEVBQXRCLEVBQTdCLENBQUgsRUFBNEQsT0FBNUQsQ0FBb0UsQ0FBcEUsRUFBc0UsSUFBdEUsQ0FBTCxFQUFpRixDQUEvRixFQUFpRyxJQUFFLENBQUYsSUFBSyxHQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLENBQUgsQ0FBTCxFQUFzQixJQUFFLENBQUYsSUFBSyxHQUFHLElBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFGLENBQVIsRUFBc0IsSUFBRSxDQUFGLElBQUssR0FBRyxDQUFILENBQUwsQ0FBcEosQ0FBbEQ7V0FBdkQsQ0FBeVEsQ0FBRSxJQUFGLENBQU8sQ0FBUCxFQUExUTtTQUEvQztPQUFsUSxPQUE0a0IsR0FBRyxDQUFILENBQVAsQ0FBdGtCO0tBQWQsU0FBMG1CLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQjtBQUFDLFVBQUksSUFBRSxFQUFFLE1BQUYsR0FBUyxDQUFUO1VBQVcsSUFBRSxFQUFFLE1BQUYsR0FBUyxDQUFUO1VBQVcsSUFBRSxXQUFTLEVBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUI7QUFBQyxZQUFJLENBQUo7WUFBTSxDQUFOO1lBQVEsQ0FBUjtZQUFVLElBQUUsQ0FBRjtZQUFJLElBQUUsR0FBRjtZQUFNLElBQUUsTUFBRyxFQUFIO1lBQU0sSUFBRSxFQUFGO1lBQUssSUFBRSxDQUFGO1lBQUksSUFBRSxNQUFHLEtBQUcsRUFBRSxJQUFGLENBQU8sR0FBUCxDQUFXLEdBQVgsRUFBZSxDQUFmLENBQUg7WUFBcUIsSUFBRSxLQUFHLFFBQU0sQ0FBTixHQUFRLENBQVIsR0FBVSxLQUFLLE1BQUwsTUFBZSxFQUFmO1lBQWtCLElBQUUsRUFBRSxNQUFGLENBQW5HLEtBQWdILE1BQUksSUFBRSxNQUFJLENBQUosSUFBTyxDQUFQLElBQVUsQ0FBVixDQUFOLEVBQW1CLE1BQUksQ0FBSixJQUFPLFNBQU8sSUFBRSxFQUFFLENBQUYsQ0FBRixDQUFQLEVBQWUsR0FBN0MsRUFBaUQ7QUFBQyxjQUFHLEtBQUcsQ0FBSCxFQUFLO0FBQUMsZ0JBQUUsQ0FBRixFQUFJLEtBQUcsRUFBRSxhQUFGLEtBQWtCLENBQWxCLEtBQXNCLEVBQUUsQ0FBRixHQUFLLElBQUUsQ0FBQyxDQUFELENBQWhDLENBQUwsT0FBK0MsSUFBRSxFQUFFLEdBQUYsQ0FBRjtBQUFTLGtCQUFHLEVBQUUsQ0FBRixFQUFJLEtBQUcsQ0FBSCxFQUFLLENBQVQsQ0FBSCxFQUFlO0FBQUMsa0JBQUUsSUFBRixDQUFPLENBQVAsRUFBRDtlQUFmO2FBQWYsQ0FBK0MsS0FBSSxJQUFFLENBQUYsQ0FBSixDQUF4RjtXQUFSLENBQXlHLEtBQUksQ0FBQyxJQUFFLENBQUMsQ0FBRCxJQUFJLENBQUosQ0FBSCxJQUFXLEdBQVgsRUFBZSxNQUFHLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBSCxDQUFuQixDQUExRztTQUFqRCxJQUErTCxLQUFHLENBQUgsRUFBSyxLQUFHLE1BQUksQ0FBSixFQUFNO0FBQUMsY0FBRSxDQUFGLENBQUQsT0FBVyxJQUFFLEVBQUUsR0FBRixDQUFGO0FBQVMsY0FBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSO1dBQWYsSUFBNkIsRUFBSCxFQUFLO0FBQUMsZ0JBQUcsSUFBRSxDQUFGLEVBQUksT0FBTSxHQUFOO0FBQVUsZ0JBQUUsQ0FBRixLQUFNLEVBQUUsQ0FBRixDQUFOLEtBQWEsRUFBRSxDQUFGLElBQUssRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFMLENBQWI7YUFBVixDQUF1QyxHQUFFLEdBQUcsQ0FBSCxDQUFGLENBQS9DO1dBQUwsQ0FBNEQsQ0FBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsR0FBYSxLQUFHLENBQUMsRUFBRCxJQUFJLEVBQUUsTUFBRixHQUFTLENBQVQsSUFBWSxJQUFFLEVBQUUsTUFBRixHQUFTLENBQVgsSUFBYyxHQUFHLFVBQUgsQ0FBYyxDQUFkLENBQWpDLENBQXhHO1NBQWpCLE9BQWtMLE1BQUksSUFBRSxDQUFGLEVBQUksSUFBRSxDQUFGLENBQVIsRUFBYSxDQUFiLENBQTFkO09BQW5CLENBQWpDLE9BQXFpQixJQUFFLEdBQUcsQ0FBSCxDQUFGLEdBQVEsQ0FBUixDQUFyaUI7S0FBaEIsT0FBc2tCLElBQUUsR0FBRyxPQUFILEdBQVcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxDQUFKO1VBQU0sSUFBRSxFQUFGO1VBQUssSUFBRSxFQUFGO1VBQUssSUFBRSxFQUFFLElBQUUsR0FBRixDQUFKLENBQWpCLElBQStCLENBQUMsQ0FBRCxFQUFHO0FBQUMsY0FBSSxJQUFFLEVBQUUsQ0FBRixDQUFGLENBQUosRUFBWSxJQUFFLEVBQUUsTUFBRixDQUFmLE9BQThCLEdBQU47QUFBVSxjQUFFLEdBQUcsRUFBRSxDQUFGLENBQUgsQ0FBRixFQUFXLEVBQUUsQ0FBRixJQUFLLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBTCxHQUFlLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBZjtTQUFyQixDQUE4QyxHQUFFLEVBQUUsQ0FBRixFQUFJLEdBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBSixDQUFGLEVBQWUsRUFBRSxRQUFGLEdBQVcsQ0FBWCxDQUFyRjtPQUFOLE9BQStHLENBQVAsQ0FBcEk7S0FBYixFQUEySixJQUFFLEdBQUcsTUFBSCxHQUFVLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFVBQUksQ0FBSjtVQUFNLENBQU47VUFBUSxDQUFSO1VBQVUsQ0FBVjtVQUFZLENBQVo7VUFBYyxJQUFFLGNBQVksT0FBTyxDQUFQLElBQVUsQ0FBdEI7VUFBd0IsSUFBRSxDQUFDLENBQUQsSUFBSSxFQUFFLElBQUUsRUFBRSxRQUFGLElBQVksQ0FBWixDQUFSLENBQTNDLElBQXFFLElBQUUsS0FBRyxFQUFILEVBQU0sTUFBSSxFQUFFLE1BQUYsRUFBUztBQUFDLFlBQUcsSUFBRSxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsRUFBSyxLQUFMLENBQVcsQ0FBWCxDQUFMLEVBQW1CLEVBQUUsTUFBRixHQUFTLENBQVQsSUFBWSxTQUFPLENBQUMsSUFBRSxFQUFFLENBQUYsQ0FBRixDQUFELENBQVMsSUFBVCxJQUFlLEVBQUUsT0FBRixJQUFXLE1BQUksRUFBRSxRQUFGLElBQVksQ0FBN0QsSUFBZ0UsRUFBRSxRQUFGLENBQVcsRUFBRSxDQUFGLEVBQUssSUFBTCxDQUEzRSxFQUFzRjtBQUFDLGNBQUcsSUFBRSxDQUFDLEVBQUUsSUFBRixDQUFPLEVBQVAsQ0FBVSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQWEsT0FBYixDQUFxQixFQUFyQixFQUF3QixFQUF4QixDQUFWLEVBQXNDLENBQXRDLEtBQTBDLEVBQTFDLENBQUQsQ0FBK0MsQ0FBL0MsQ0FBRixFQUFvRCxDQUFDLENBQUQsRUFBRyxPQUFPLENBQVAsQ0FBMUQsQ0FBbUUsS0FBSSxJQUFFLEVBQUUsVUFBRixDQUFOLEVBQW9CLElBQUUsRUFBRSxLQUFGLENBQVEsRUFBRSxLQUFGLEdBQVUsS0FBVixDQUFnQixNQUFoQixDQUFWLENBQXhGO1NBQTlHLENBQXdPLEdBQUUsRUFBRSxZQUFGLENBQWUsSUFBZixDQUFvQixDQUFwQixJQUF1QixDQUF2QixHQUF5QixFQUFFLE1BQUYsQ0FBcFEsT0FBbVIsR0FBTixFQUFVO0FBQUMsY0FBRyxJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sRUFBRSxRQUFGLENBQVcsSUFBRSxFQUFFLElBQUYsQ0FBcEIsRUFBNEIsTUFBL0IsSUFBd0MsQ0FBQyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBRixDQUFELEtBQWdCLElBQUUsRUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQWEsT0FBYixDQUFxQixFQUFyQixFQUF3QixFQUF4QixDQUFGLEVBQThCLEVBQUUsSUFBRixDQUFPLEVBQUUsQ0FBRixFQUFLLElBQUwsQ0FBUCxJQUFtQixHQUFHLEVBQUUsVUFBRixDQUF0QixJQUFxQyxDQUFyQyxDQUFoQyxDQUFoQixFQUF5RjtBQUFDLGdCQUFHLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLEdBQWMsSUFBRSxFQUFFLE1BQUYsSUFBVSxHQUFHLENBQUgsQ0FBVixFQUFnQixDQUFDLENBQUQsRUFBRyxPQUFPLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLEdBQWEsQ0FBYixDQUE3QyxNQUFEO1dBQTVGO1NBQWhEO09BQXJTLE9BQTRmLENBQUMsS0FBRyxFQUFFLENBQUYsRUFBSSxDQUFKLENBQUgsQ0FBRCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQUMsQ0FBRCxFQUFHLENBQW5CLEVBQXFCLENBQUMsQ0FBRCxJQUFJLEVBQUUsSUFBRixDQUFPLENBQVAsS0FBVyxHQUFHLEVBQUUsVUFBRixDQUFkLElBQTZCLENBQWpDLENBQXJCLEVBQXlELENBQXpELENBQTlqQjtLQUFqQixFQUEyb0IsRUFBRSxVQUFGLEdBQWEsRUFBRSxLQUFGLENBQVEsRUFBUixFQUFZLElBQVosQ0FBaUIsQ0FBakIsRUFBb0IsSUFBcEIsQ0FBeUIsRUFBekIsTUFBK0IsQ0FBL0IsRUFBaUMsRUFBRSxnQkFBRixHQUFtQixDQUFDLENBQUMsQ0FBRCxFQUFHLEdBQXA0QixFQUF3NEIsRUFBRSxZQUFGLEdBQWUsR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sSUFBRSxFQUFFLHVCQUFGLENBQTBCLEVBQUUsYUFBRixDQUFnQixLQUFoQixDQUExQixDQUFGLENBQVI7S0FBWCxDQUFsQixFQUEyRixHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLFNBQUYsR0FBWSxrQkFBWixFQUErQixRQUFNLEVBQUUsVUFBRixDQUFhLFlBQWIsQ0FBMEIsTUFBMUIsQ0FBTixDQUF2QztLQUFYLENBQUgsSUFBZ0csR0FBRyx3QkFBSCxFQUE0QixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsYUFBTyxJQUFFLEtBQUssQ0FBTCxHQUFPLEVBQUUsWUFBRixDQUFlLENBQWYsRUFBaUIsV0FBUyxFQUFFLFdBQUYsRUFBVCxHQUF5QixDQUF6QixHQUEyQixDQUEzQixDQUExQixDQUFSO0tBQWYsQ0FBNUgsRUFBNk0sRUFBRSxVQUFGLElBQWMsR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxTQUFGLEdBQVksVUFBWixFQUF1QixFQUFFLFVBQUYsQ0FBYSxZQUFiLENBQTBCLE9BQTFCLEVBQWtDLEVBQWxDLENBQXZCLEVBQTZELE9BQUssRUFBRSxVQUFGLENBQWEsWUFBYixDQUEwQixPQUExQixDQUFMLENBQXJFO0tBQVgsQ0FBakIsSUFBNEksR0FBRyxPQUFILEVBQVcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGFBQU8sS0FBRyxZQUFVLEVBQUUsUUFBRixDQUFXLFdBQVgsRUFBVixHQUFtQyxLQUFLLENBQUwsR0FBTyxFQUFFLFlBQUYsQ0FBckQ7S0FBZixDQUF2SixFQUE0TyxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxRQUFNLEVBQUUsWUFBRixDQUFlLFVBQWYsQ0FBTixDQUFSO0tBQVgsQ0FBSCxJQUEwRCxHQUFHLENBQUgsRUFBSyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxDQUFKLENBQUQsT0FBYyxJQUFFLEtBQUssQ0FBTCxHQUFPLEVBQUUsQ0FBRixNQUFPLENBQUMsQ0FBRCxHQUFHLEVBQUUsV0FBRixFQUFWLEdBQTBCLENBQUMsSUFBRSxFQUFFLGdCQUFGLENBQW1CLENBQW5CLENBQUYsQ0FBRCxJQUEyQixFQUFFLFNBQUYsR0FBWSxFQUFFLEtBQUYsR0FBUSxJQUEvQyxDQUFqRDtLQUFmLENBQS9ELEVBQXFMLEVBQWpsRCxDQUF2bGhCO0dBQVgsQ0FBdXJrQixDQUF2cmtCLENBQUYsQ0FBeDBILENBQW9nc0IsQ0FBRSxJQUFGLEdBQU8sQ0FBUCxFQUFTLEVBQUUsSUFBRixHQUFPLEVBQUUsU0FBRixFQUFZLEVBQUUsSUFBRixDQUFPLEdBQVAsSUFBWSxFQUFFLElBQUYsQ0FBTyxPQUFQLEVBQWUsRUFBRSxVQUFGLEdBQWEsRUFBRSxNQUFGLEdBQVMsRUFBRSxVQUFGLEVBQWEsRUFBRSxJQUFGLEdBQU8sRUFBRSxPQUFGLEVBQVUsRUFBRSxRQUFGLEdBQVcsRUFBRSxLQUFGLEVBQVEsRUFBRSxRQUFGLEdBQVcsRUFBRSxRQUFGLENBQTdvc0IsSUFBNHBzQixJQUFFLFNBQUYsQ0FBRSxDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBSSxJQUFFLEVBQUY7UUFBSyxJQUFFLEtBQUssQ0FBTCxLQUFTLENBQVQsQ0FBWixPQUE2QixDQUFDLElBQUUsRUFBRSxDQUFGLENBQUYsQ0FBRCxJQUFVLE1BQUksRUFBRSxRQUFGO0FBQVcsVUFBRyxNQUFJLEVBQUUsUUFBRixFQUFXO0FBQUMsWUFBRyxLQUFHLEVBQUUsQ0FBRixFQUFLLEVBQUwsQ0FBUSxDQUFSLENBQUgsRUFBYyxNQUFqQixDQUF1QixDQUFFLElBQUYsQ0FBTyxDQUFQLEVBQXhCO09BQWxCO0tBQS9CLE9BQTBGLENBQVAsQ0FBMUc7R0FBZjtNQUFtSSxJQUFFLFNBQUYsQ0FBRSxDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxTQUFJLElBQUksSUFBRSxFQUFGLEVBQUssQ0FBYixFQUFlLElBQUUsRUFBRSxXQUFGO0FBQWMsWUFBSSxFQUFFLFFBQUYsSUFBWSxNQUFJLENBQUosSUFBTyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQXZCO0tBQS9CLE9BQXVFLENBQVAsQ0FBakU7R0FBYjtNQUF3RixJQUFFLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxZQUFiO01BQTBCLElBQUUsK0JBQUY7TUFBa0MsSUFBRSxnQkFBRixDQUF6N3NCLFNBQXE5c0IsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFFBQUcsRUFBRSxVQUFGLENBQWEsQ0FBYixDQUFILEVBQW1CLE9BQU8sRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU0sQ0FBQyxDQUFDLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQUFELEtBQWlCLENBQWxCLENBQVA7S0FBYixDQUFoQixDQUFuQixJQUFnRixFQUFFLFFBQUYsRUFBVyxPQUFPLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sTUFBSSxDQUFKLEtBQVEsQ0FBUixDQUFSO0tBQVgsQ0FBaEIsQ0FBZCxJQUFnRSxZQUFVLE9BQU8sQ0FBUCxFQUFTO0FBQUMsVUFBRyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUgsRUFBYSxPQUFPLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFQLENBQWIsQ0FBb0MsR0FBRSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxDQUFGLENBQXJDO0tBQXRCLE9BQWtGLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLENBQVQsSUFBWSxDQUFDLENBQUQsS0FBSyxDQUFqQixDQUFSO0tBQVgsQ0FBaEIsQ0FBdE47R0FBakIsQ0FBK1IsQ0FBRSxNQUFGLEdBQVMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUYsQ0FBRixDQUFMLE9BQW1CLE1BQUksSUFBRSxVQUFRLENBQVIsR0FBVSxHQUFWLENBQU4sRUFBcUIsTUFBSSxFQUFFLE1BQUYsSUFBVSxNQUFJLEVBQUUsUUFBRixHQUFXLEVBQUUsSUFBRixDQUFPLGVBQVAsQ0FBdUIsQ0FBdkIsRUFBeUIsQ0FBekIsSUFBNEIsQ0FBQyxDQUFELENBQTVCLEdBQWdDLEVBQWhDLEdBQW1DLEVBQUUsSUFBRixDQUFPLE9BQVAsQ0FBZSxDQUFmLEVBQWlCLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sTUFBSSxFQUFFLFFBQUYsQ0FBWjtLQUFYLENBQTFCLENBQWhFLENBQXhDO0dBQWYsRUFBdUwsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVztBQUFDLFVBQUksQ0FBSjtVQUFNLElBQUUsS0FBSyxNQUFMO1VBQVksSUFBRSxFQUFGO1VBQUssSUFBRSxJQUFGLENBQTFCLElBQW9DLFlBQVUsT0FBTyxDQUFQLEVBQVMsT0FBTyxLQUFLLFNBQUwsQ0FBZSxFQUFFLENBQUYsRUFBSyxNQUFMLENBQVksWUFBVTtBQUFDLGFBQUksSUFBRSxDQUFGLEVBQUksSUFBRSxDQUFGLEVBQUksR0FBWjtBQUFnQixjQUFHLEVBQUUsUUFBRixDQUFXLEVBQUUsQ0FBRixDQUFYLEVBQWdCLElBQWhCLENBQUgsRUFBeUIsT0FBTSxDQUFDLENBQUQsQ0FBL0I7U0FBaEI7T0FBWCxDQUEzQixDQUFQLENBQXRCLEtBQTRILElBQUUsQ0FBRixFQUFJLElBQUUsQ0FBRixFQUFJLEdBQVo7QUFBZ0IsVUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLEVBQUUsQ0FBRixDQUFULEVBQWMsQ0FBZDtPQUFoQixPQUF3QyxJQUFFLEtBQUssU0FBTCxDQUFlLElBQUUsQ0FBRixHQUFJLEVBQUUsTUFBRixDQUFTLENBQVQsQ0FBSixHQUFnQixDQUFoQixDQUFqQixFQUFvQyxFQUFFLFFBQUYsR0FBVyxLQUFLLFFBQUwsR0FBYyxLQUFLLFFBQUwsR0FBYyxHQUFkLEdBQWtCLENBQWxCLEdBQW9CLENBQWxDLEVBQW9DLENBQW5GLENBQWpNO0tBQVgsRUFBa1MsUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEtBQUssU0FBTCxDQUFlLEVBQUUsSUFBRixFQUFPLEtBQUcsRUFBSCxFQUFNLENBQUMsQ0FBRCxDQUE1QixDQUFQLENBQUQ7S0FBWCxFQUFxRCxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLLFNBQUwsQ0FBZSxFQUFFLElBQUYsRUFBTyxLQUFHLEVBQUgsRUFBTSxDQUFDLENBQUQsQ0FBNUIsQ0FBUCxDQUFEO0tBQVgsRUFBcUQsSUFBRyxZQUFTLENBQVQsRUFBVztBQUFDLGFBQU0sQ0FBQyxDQUFDLEVBQUUsSUFBRixFQUFPLFlBQVUsT0FBTyxDQUFQLElBQVUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFwQixHQUE4QixFQUFFLENBQUYsQ0FBOUIsR0FBbUMsS0FBRyxFQUFILEVBQU0sQ0FBQyxDQUFELENBQWhELENBQW9ELE1BQXBELENBQVQ7S0FBWCxFQUE1YSxDQUFoTSxDQUEzdXRCLElBQTY2dUIsQ0FBSjtNQUFNLElBQUUscUNBQUY7TUFBd0MsSUFBRSxFQUFFLEVBQUYsQ0FBSyxJQUFMLEdBQVUsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFFBQUksQ0FBSixFQUFNLENBQU4sQ0FBRCxJQUFZLENBQUMsQ0FBRCxFQUFHLE9BQU8sSUFBUCxDQUFOLElBQXFCLElBQUUsS0FBRyxDQUFILEVBQUssWUFBVSxPQUFPLENBQVAsRUFBUztBQUFDLFVBQUcsSUFBRSxRQUFNLEVBQUUsQ0FBRixDQUFOLElBQVksUUFBTSxFQUFFLEVBQUUsTUFBRixHQUFTLENBQVQsQ0FBUixJQUFxQixFQUFFLE1BQUYsSUFBVSxDQUFWLEdBQVksQ0FBQyxJQUFELEVBQU0sQ0FBTixFQUFRLElBQVIsQ0FBN0MsR0FBMkQsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUEzRCxFQUFxRSxDQUFDLENBQUQsSUFBSSxDQUFDLEVBQUUsQ0FBRixDQUFELElBQU8sQ0FBUCxFQUFTLE9BQU0sQ0FBQyxDQUFELElBQUksRUFBRSxNQUFGLEdBQVMsQ0FBQyxLQUFHLENBQUgsQ0FBRCxDQUFPLElBQVAsQ0FBWSxDQUFaLENBQWIsR0FBNEIsS0FBSyxXQUFMLENBQWlCLENBQWpCLEVBQW9CLElBQXBCLENBQXlCLENBQXpCLENBQTVCLENBQTdGLElBQXdKLEVBQUUsQ0FBRixDQUFILEVBQVE7QUFBQyxZQUFHLElBQUUsYUFBYSxDQUFiLEdBQWUsRUFBRSxDQUFGLENBQWYsR0FBb0IsQ0FBcEIsRUFBc0IsRUFBRSxLQUFGLENBQVEsSUFBUixFQUFhLEVBQUUsU0FBRixDQUFZLEVBQUUsQ0FBRixDQUFaLEVBQWlCLEtBQUcsRUFBRSxRQUFGLEdBQVcsRUFBRSxhQUFGLElBQWlCLENBQWpCLEdBQW1CLENBQWpDLEVBQW1DLENBQUMsQ0FBRCxDQUFqRSxDQUF4QixFQUE4RixFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxLQUFjLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUFkLEVBQWlDLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxZQUFFLFVBQUYsQ0FBYSxLQUFLLENBQUwsQ0FBYixJQUFzQixLQUFLLENBQUwsRUFBUSxFQUFFLENBQUYsQ0FBUixDQUF0QixHQUFvQyxLQUFLLElBQUwsQ0FBVSxDQUFWLEVBQVksRUFBRSxDQUFGLENBQVosQ0FBcEM7U0FBWCxPQUF3RSxJQUFQLENBQXBNO09BQVIsT0FBK04sSUFBRSxFQUFFLGNBQUYsQ0FBaUIsRUFBRSxDQUFGLENBQWpCLENBQUYsRUFBeUIsS0FBRyxFQUFFLFVBQUYsS0FBZSxLQUFLLE1BQUwsR0FBWSxDQUFaLEVBQWMsS0FBSyxDQUFMLElBQVEsQ0FBUixDQUFoQyxFQUEyQyxLQUFLLE9BQUwsR0FBYSxDQUFiLEVBQWUsS0FBSyxRQUFMLEdBQWMsQ0FBZCxFQUFnQixJQUFuRyxDQUFyWDtLQUE3QixPQUFpZ0IsRUFBRSxRQUFGLElBQVksS0FBSyxPQUFMLEdBQWEsS0FBSyxDQUFMLElBQVEsQ0FBUixFQUFVLEtBQUssTUFBTCxHQUFZLENBQVosRUFBYyxJQUFyQyxDQUFaLEdBQXVELEVBQUUsVUFBRixDQUFhLENBQWIsSUFBZ0IsS0FBSyxDQUFMLEtBQVMsRUFBRSxLQUFGLEdBQVEsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFqQixHQUE0QixFQUFFLENBQUYsQ0FBNUIsSUFBa0MsS0FBSyxDQUFMLEtBQVMsRUFBRSxRQUFGLEtBQWEsS0FBSyxRQUFMLEdBQWMsRUFBRSxRQUFGLEVBQVcsS0FBSyxPQUFMLEdBQWEsRUFBRSxPQUFGLENBQTVELEVBQXVFLEVBQUUsU0FBRixDQUFZLENBQVosRUFBYyxJQUFkLENBQXZFLENBQWxELENBQW5sQjtHQUFmLENBQW4rdUIsQ0FBb3R3QixDQUFFLFNBQUYsR0FBWSxFQUFFLEVBQUYsRUFBSyxJQUFFLEVBQUUsQ0FBRixDQUFGLENBQXJ1d0IsSUFBZ3Z3QixJQUFFLGdDQUFGO01BQW1DLElBQUUsRUFBQyxVQUFTLENBQUMsQ0FBRCxFQUFHLFVBQVMsQ0FBQyxDQUFELEVBQUcsTUFBSyxDQUFDLENBQUQsRUFBRyxNQUFLLENBQUMsQ0FBRCxFQUF4QyxDQUFueHdCLENBQSt6d0IsQ0FBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLENBQUYsRUFBSSxJQUFKLENBQUY7VUFBWSxJQUFFLEVBQUUsTUFBRixDQUFuQixPQUFtQyxLQUFLLE1BQUwsQ0FBWSxZQUFVO0FBQUMsYUFBSSxJQUFJLElBQUUsQ0FBRixFQUFJLElBQUUsQ0FBRixFQUFJLEdBQWhCO0FBQW9CLGNBQUcsRUFBRSxRQUFGLENBQVcsSUFBWCxFQUFnQixFQUFFLENBQUYsQ0FBaEIsQ0FBSCxFQUF5QixPQUFNLENBQUMsQ0FBRCxDQUEvQjtTQUFwQjtPQUFYLENBQW5CLENBQTVCO0tBQVgsRUFBOEgsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsV0FBSSxJQUFJLENBQUosRUFBTSxJQUFFLENBQUYsRUFBSSxJQUFFLEtBQUssTUFBTCxFQUFZLElBQUUsRUFBRixFQUFLLElBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxLQUFXLFlBQVUsT0FBTyxDQUFQLEdBQVMsRUFBRSxDQUFGLEVBQUksS0FBRyxLQUFLLE9BQUwsQ0FBckMsR0FBbUQsQ0FBbkQsRUFBcUQsSUFBRSxDQUFGLEVBQUksR0FBNUY7QUFBZ0csYUFBSSxJQUFFLEtBQUssQ0FBTCxDQUFGLEVBQVUsS0FBRyxNQUFJLENBQUosRUFBTSxJQUFFLEVBQUUsVUFBRjtBQUFhLGNBQUcsRUFBRSxRQUFGLEdBQVcsRUFBWCxLQUFnQixJQUFFLEVBQUUsS0FBRixDQUFRLENBQVIsSUFBVyxDQUFDLENBQUQsR0FBRyxNQUFJLEVBQUUsUUFBRixJQUFZLEVBQUUsSUFBRixDQUFPLGVBQVAsQ0FBdUIsQ0FBdkIsRUFBeUIsQ0FBekIsQ0FBaEIsQ0FBaEMsRUFBNkU7QUFBQyxjQUFFLElBQUYsQ0FBTyxDQUFQLEVBQUQ7V0FBaEY7U0FBdEM7T0FBaEcsT0FBOE8sS0FBSyxTQUFMLENBQWUsRUFBRSxNQUFGLEdBQVMsQ0FBVCxHQUFXLEVBQUUsVUFBRixDQUFhLENBQWIsQ0FBWCxHQUEyQixDQUEzQixDQUF0QixDQUF4TztLQUFiLEVBQTBTLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLElBQUUsWUFBVSxPQUFPLENBQVAsR0FBUyxFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxFQUFZLEtBQUssQ0FBTCxDQUFaLENBQW5CLEdBQXdDLEVBQUUsSUFBRixDQUFPLElBQVAsRUFBWSxFQUFFLE1BQUYsR0FBUyxFQUFFLENBQUYsQ0FBVCxHQUFjLENBQWQsQ0FBcEQsR0FBcUUsS0FBSyxDQUFMLEtBQVMsS0FBSyxDQUFMLEVBQVEsVUFBUixHQUFtQixLQUFLLEtBQUwsR0FBYSxPQUFiLEdBQXVCLE1BQXZCLEdBQThCLENBQUMsQ0FBRCxDQUF6STtLQUFYLEVBQXdKLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFLLFNBQUwsQ0FBZSxFQUFFLFVBQUYsQ0FBYSxFQUFFLEtBQUYsQ0FBUSxLQUFLLEdBQUwsRUFBUixFQUFtQixFQUFFLENBQUYsRUFBSSxDQUFKLENBQW5CLENBQWIsQ0FBZixDQUFQLENBQUQ7S0FBYixFQUErRSxTQUFRLGlCQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sS0FBSyxHQUFMLENBQVMsUUFBTSxDQUFOLEdBQVEsS0FBSyxVQUFMLEdBQWdCLEtBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixDQUF2QixDQUF4QixDQUFoQixDQUFEO0tBQVgsRUFBMXJCLEVBQS96d0IsU0FBb2x5QixDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFdBQU0sQ0FBQyxJQUFFLEVBQUUsQ0FBRixDQUFGLENBQUQsSUFBVSxNQUFJLEVBQUUsUUFBRixJQUFwQixPQUF1QyxDQUFQLENBQWpDO0dBQWYsQ0FBeUQsQ0FBRSxJQUFGLENBQU8sRUFBQyxRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLFVBQUYsQ0FBUCxPQUEyQixLQUFHLE9BQUssRUFBRSxRQUFGLEdBQVcsQ0FBbkIsR0FBcUIsSUFBckIsQ0FBM0I7S0FBWCxFQUFpRSxTQUFRLGlCQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxDQUFGLEVBQUksWUFBSixDQUFQLENBQUQ7S0FBWCxFQUFzQyxjQUFhLHNCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsYUFBTyxFQUFFLENBQUYsRUFBSSxZQUFKLEVBQWlCLENBQWpCLENBQVAsQ0FBRDtLQUFmLEVBQTRDLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsQ0FBRixFQUFJLGFBQUosQ0FBUCxDQUFEO0tBQVgsRUFBdUMsTUFBSyxjQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxDQUFGLEVBQUksaUJBQUosQ0FBUCxDQUFEO0tBQVgsRUFBMkMsU0FBUSxpQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsQ0FBRixFQUFJLGFBQUosQ0FBUCxDQUFEO0tBQVgsRUFBdUMsU0FBUSxpQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsQ0FBRixFQUFJLGlCQUFKLENBQVAsQ0FBRDtLQUFYLEVBQTJDLFdBQVUsbUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLEVBQUUsQ0FBRixFQUFJLGFBQUosRUFBa0IsQ0FBbEIsQ0FBUCxDQUFEO0tBQWYsRUFBNkMsV0FBVSxtQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGFBQU8sRUFBRSxDQUFGLEVBQUksaUJBQUosRUFBc0IsQ0FBdEIsQ0FBUCxDQUFEO0tBQWYsRUFBaUQsVUFBUyxrQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQUYsSUFBYyxFQUFkLENBQUQsQ0FBbUIsVUFBbkIsRUFBOEIsQ0FBaEMsQ0FBUCxDQUFEO0tBQVgsRUFBdUQsVUFBUyxrQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsRUFBRSxVQUFGLENBQVQsQ0FBRDtLQUFYLEVBQW9DLFVBQVMsa0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLGVBQUYsSUFBbUIsRUFBRSxLQUFGLENBQVEsRUFBUixFQUFXLEVBQUUsVUFBRixDQUE5QixDQUFSO0tBQVgsRUFBN2xCLEVBQThwQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxNQUFFLEVBQUYsQ0FBSyxDQUFMLElBQVEsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxJQUFFLEVBQUUsR0FBRixDQUFNLElBQU4sRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFGLENBQUwsT0FBNkIsWUFBVSxFQUFFLEtBQUYsQ0FBUSxDQUFDLENBQUQsQ0FBbEIsS0FBd0IsSUFBRSxDQUFGLENBQXhCLEVBQTZCLEtBQUcsWUFBVSxPQUFPLENBQVAsS0FBVyxJQUFFLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQUYsQ0FBeEIsRUFBeUMsS0FBSyxNQUFMLEdBQVksQ0FBWixLQUFnQixFQUFFLENBQUYsS0FBTSxFQUFFLFVBQUYsQ0FBYSxDQUFiLENBQU4sRUFBc0IsRUFBRSxJQUFGLENBQU8sQ0FBUCxLQUFXLEVBQUUsT0FBRixFQUFYLENBQXRDLEVBQThELEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBcEksQ0FBN0I7S0FBYixDQUFUO0dBQWIsQ0FBOXBCLENBQXBveUIsSUFBKy96QixJQUFFLE1BQUYsQ0FBLy96QixTQUFpaDBCLENBQVQsQ0FBVyxDQUFYLEVBQWE7QUFBQyxRQUFJLElBQUUsRUFBRixDQUFMLE9BQWlCLEVBQUUsSUFBRixDQUFPLEVBQUUsS0FBRixDQUFRLENBQVIsS0FBWSxFQUFaLEVBQWUsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBRSxDQUFGLElBQUssQ0FBQyxDQUFELENBQU47S0FBYixDQUF0QixFQUE4QyxDQUE5QyxDQUFqQjtHQUFiLENBQThFLENBQUUsU0FBRixHQUFZLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRSxZQUFVLE9BQU8sQ0FBUCxHQUFTLEVBQUUsQ0FBRixDQUFuQixHQUF3QixFQUFFLE1BQUYsQ0FBUyxFQUFULEVBQVksQ0FBWixDQUF4QixDQUFILElBQThDLENBQUo7UUFBTSxDQUFOO1FBQVEsQ0FBUjtRQUFVLENBQVY7UUFBWSxJQUFFLEVBQUY7UUFBSyxJQUFFLEVBQUY7UUFBSyxJQUFFLENBQUMsQ0FBRDtRQUFHLElBQUUsU0FBRixDQUFFLEdBQVU7QUFBQyxXQUFJLElBQUUsRUFBRSxJQUFGLEVBQU8sSUFBRSxJQUFFLENBQUMsQ0FBRCxFQUFHLEVBQUUsTUFBRixFQUFTLElBQUUsQ0FBQyxDQUFELEVBQUc7QUFBQyxZQUFFLEVBQUUsS0FBRixFQUFGLENBQUQsT0FBbUIsRUFBRSxDQUFGLEdBQUksRUFBRSxNQUFGO0FBQVMsWUFBRSxDQUFGLEVBQUssS0FBTCxDQUFXLEVBQUUsQ0FBRixDQUFYLEVBQWdCLEVBQUUsQ0FBRixDQUFoQixNQUF3QixDQUFDLENBQUQsSUFBSSxFQUFFLFdBQUYsS0FBZ0IsSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLENBQUMsQ0FBRCxDQUF6RDtTQUFuQjtPQUEvQyxDQUErSCxDQUFFLE1BQUYsS0FBVyxJQUFFLENBQUMsQ0FBRCxDQUFiLEVBQWlCLElBQUUsQ0FBQyxDQUFELEVBQUcsTUFBSSxJQUFFLElBQUUsRUFBRixHQUFLLEVBQUwsQ0FBTixDQUF0SjtLQUFWO1FBQWdMLElBQUUsRUFBQyxLQUFJLGVBQVU7QUFBQyxlQUFPLE1BQUksS0FBRyxDQUFDLENBQUQsS0FBSyxJQUFFLEVBQUUsTUFBRixHQUFTLENBQVQsRUFBVyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQWIsQ0FBUixFQUFnQyxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWE7QUFBQyxZQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsY0FBRSxVQUFGLENBQWEsQ0FBYixJQUFnQixFQUFFLE1BQUYsSUFBVSxFQUFFLEdBQUYsQ0FBTSxDQUFOLENBQVYsSUFBb0IsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFwQixHQUE4QixLQUFHLEVBQUUsTUFBRixJQUFVLGFBQVcsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFYLElBQXNCLEVBQUUsQ0FBRixDQUFuQyxDQUEvQztXQUFiLENBQVQsQ0FBRDtTQUFiLENBQThILFNBQTlILENBQWhDLEVBQXlLLEtBQUcsQ0FBQyxDQUFELElBQUksR0FBUCxDQUE3SyxFQUF5TCxJQUF6TCxDQUFSO09BQVYsRUFBaU4sUUFBTyxrQkFBVTtBQUFDLGVBQU8sRUFBRSxJQUFGLENBQU8sU0FBUCxFQUFpQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFJLENBQUosQ0FBRCxPQUFhLENBQUMsSUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksQ0FBWixFQUFjLENBQWQsQ0FBRixDQUFELEdBQXFCLENBQUMsQ0FBRDtBQUFHLGNBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLEdBQWMsS0FBRyxDQUFILElBQU0sR0FBTjtXQUE1QztTQUFwQixDQUFqQixFQUE2RixJQUE3RixDQUFSO09BQVYsRUFBcUgsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLGVBQU8sSUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksQ0FBWixJQUFlLENBQUMsQ0FBRCxHQUFHLEVBQUUsTUFBRixHQUFTLENBQVQsQ0FBNUI7T0FBWCxFQUFtRCxPQUFNLGlCQUFVO0FBQUMsZUFBTyxNQUFJLElBQUUsRUFBRixDQUFKLEVBQVUsSUFBVixDQUFSO09BQVYsRUFBa0MsU0FBUSxtQkFBVTtBQUFDLGVBQU8sSUFBRSxJQUFFLEVBQUYsRUFBSyxJQUFFLElBQUUsRUFBRixFQUFLLElBQWQsQ0FBUjtPQUFWLEVBQXNDLFVBQVMsb0JBQVU7QUFBQyxlQUFNLENBQUMsQ0FBRCxDQUFQO09BQVYsRUFBcUIsTUFBSyxnQkFBVTtBQUFDLGVBQU8sSUFBRSxJQUFFLEVBQUYsRUFBSyxNQUFJLElBQUUsSUFBRSxFQUFGLENBQU4sRUFBWSxJQUFuQixDQUFSO09BQVYsRUFBMkMsUUFBTyxrQkFBVTtBQUFDLGVBQU0sQ0FBQyxDQUFDLENBQUQsQ0FBUjtPQUFWLEVBQXNCLFVBQVMsa0JBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGVBQU8sTUFBSSxJQUFFLEtBQUcsRUFBSCxFQUFNLElBQUUsQ0FBQyxDQUFELEVBQUcsRUFBRSxLQUFGLEdBQVEsRUFBRSxLQUFGLEVBQVIsR0FBa0IsQ0FBbEIsQ0FBTCxFQUEwQixFQUFFLElBQUYsQ0FBTyxDQUFQLENBQWxDLEVBQTRDLEtBQUcsR0FBSCxDQUFoRCxFQUF3RCxJQUF4RCxDQUFSO09BQWIsRUFBbUYsTUFBSyxnQkFBVTtBQUFDLGVBQU8sRUFBRSxRQUFGLENBQVcsSUFBWCxFQUFnQixTQUFoQixHQUEyQixJQUEzQixDQUFSO09BQVYsRUFBbUQsT0FBTSxpQkFBVTtBQUFDLGVBQU0sQ0FBQyxDQUFDLENBQUQsQ0FBUjtPQUFWLEVBQXR1QixDQUF2UCxPQUEyL0IsQ0FBUCxDQUFwL0I7R0FBWCxFQUF5Z0MsRUFBRSxNQUFGLENBQVMsRUFBQyxVQUFTLGtCQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxDQUFDLENBQUMsU0FBRCxFQUFXLE1BQVgsRUFBa0IsRUFBRSxTQUFGLENBQVksYUFBWixDQUFsQixFQUE2QyxVQUE3QyxDQUFELEVBQTBELENBQUMsUUFBRCxFQUFVLE1BQVYsRUFBaUIsRUFBRSxTQUFGLENBQVksYUFBWixDQUFqQixFQUE0QyxVQUE1QyxDQUExRCxFQUFrSCxDQUFDLFFBQUQsRUFBVSxVQUFWLEVBQXFCLEVBQUUsU0FBRixDQUFZLFFBQVosQ0FBckIsQ0FBbEgsQ0FBRjtVQUFpSyxJQUFFLFNBQUY7VUFBWSxJQUFFLEVBQUMsT0FBTSxpQkFBVTtBQUFDLGlCQUFPLENBQVAsQ0FBRDtTQUFWLEVBQXFCLFFBQU8sa0JBQVU7QUFBQyxpQkFBTyxFQUFFLElBQUYsQ0FBTyxTQUFQLEVBQWtCLElBQWxCLENBQXVCLFNBQXZCLEdBQWtDLElBQWxDLENBQVI7U0FBVixFQUEwRCxNQUFLLGdCQUFVO0FBQUMsY0FBSSxJQUFFLFNBQUYsQ0FBTCxPQUF3QixFQUFFLFFBQUYsQ0FBVyxVQUFTLENBQVQsRUFBVztBQUFDLGNBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxrQkFBSSxJQUFFLEVBQUUsVUFBRixDQUFhLEVBQUUsQ0FBRixDQUFiLEtBQW9CLEVBQUUsQ0FBRixDQUFwQixDQUFQLENBQWdDLENBQUUsRUFBRSxDQUFGLENBQUYsRUFBUSxZQUFVO0FBQUMsb0JBQUksSUFBRSxLQUFHLEVBQUUsS0FBRixDQUFRLElBQVIsRUFBYSxTQUFiLENBQUgsQ0FBUCxDQUFrQyxJQUFHLEVBQUUsVUFBRixDQUFhLEVBQUUsT0FBRixDQUFoQixHQUEyQixFQUFFLE9BQUYsR0FBWSxRQUFaLENBQXFCLEVBQUUsTUFBRixDQUFyQixDQUErQixJQUEvQixDQUFvQyxFQUFFLE9BQUYsQ0FBcEMsQ0FBK0MsSUFBL0MsQ0FBb0QsRUFBRSxNQUFGLENBQS9FLEdBQXlGLEVBQUUsRUFBRSxDQUFGLElBQUssTUFBTCxDQUFGLENBQWUsU0FBTyxDQUFQLEdBQVMsRUFBRSxPQUFGLEVBQVQsR0FBcUIsSUFBckIsRUFBMEIsSUFBRSxDQUFDLENBQUQsQ0FBRixHQUFNLFNBQU4sQ0FBbEksQ0FBbEM7ZUFBVixDQUFSLENBQWhDO2FBQWIsQ0FBVCxFQUFpUSxJQUFFLElBQUYsQ0FBbFE7V0FBWCxDQUFYLENBQWlTLE9BQWpTLEVBQVAsQ0FBakI7U0FBVixFQUE4VSxTQUFRLGlCQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLFFBQU0sQ0FBTixHQUFRLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQVIsR0FBc0IsQ0FBdEIsQ0FBUjtTQUFYLEVBQTFiO1VBQXVlLElBQUUsRUFBRixDQUF6cEIsT0FBcXFCLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixFQUFPLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFGLENBQUY7WUFBTyxJQUFFLEVBQUUsQ0FBRixDQUFGLENBQVosQ0FBbUIsQ0FBRSxFQUFFLENBQUYsQ0FBRixJQUFRLEVBQUUsR0FBRixFQUFNLEtBQUcsRUFBRSxHQUFGLENBQU0sWUFBVTtBQUFDLGNBQUUsQ0FBRixDQUFEO1NBQVYsRUFBZ0IsRUFBRSxJQUFFLENBQUYsQ0FBRixDQUFPLENBQVAsRUFBVSxPQUFWLEVBQWtCLEVBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxJQUFSLENBQTNDLEVBQXlELEVBQUUsRUFBRSxDQUFGLENBQUYsSUFBUSxZQUFVO0FBQUMsaUJBQU8sRUFBRSxFQUFFLENBQUYsSUFBSyxNQUFMLENBQUYsQ0FBZSxTQUFPLENBQVAsR0FBUyxDQUFULEdBQVcsSUFBWCxFQUFnQixTQUEvQixHQUEwQyxJQUExQyxDQUFSO1NBQVYsRUFBa0UsRUFBRSxFQUFFLENBQUYsSUFBSyxNQUFMLENBQUYsR0FBZSxFQUFFLFFBQUYsQ0FBbkw7T0FBYixDQUF2QixFQUFvTyxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQXBPLEVBQWlQLEtBQUcsRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBSCxFQUFlLENBQWhRLENBQXJxQjtLQUFYLEVBQW03QixNQUFLLGNBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxJQUFFLENBQUY7VUFBSSxJQUFFLEVBQUUsSUFBRixDQUFPLFNBQVAsQ0FBRjtVQUFvQixJQUFFLEVBQUUsTUFBRjtVQUFTLElBQUUsTUFBSSxDQUFKLElBQU8sS0FBRyxFQUFFLFVBQUYsQ0FBYSxFQUFFLE9BQUYsQ0FBaEIsR0FBMkIsQ0FBbEMsR0FBb0MsQ0FBcEM7VUFBc0MsSUFBRSxNQUFJLENBQUosR0FBTSxDQUFOLEdBQVEsRUFBRSxRQUFGLEVBQVI7VUFBcUIsSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGVBQU8sVUFBUyxDQUFULEVBQVc7QUFBQyxZQUFFLENBQUYsSUFBSyxJQUFMLEVBQVUsRUFBRSxDQUFGLElBQUssVUFBVSxNQUFWLEdBQWlCLENBQWpCLEdBQW1CLEVBQUUsSUFBRixDQUFPLFNBQVAsQ0FBbkIsR0FBcUMsQ0FBckMsRUFBdUMsTUFBSSxDQUFKLEdBQU0sRUFBRSxVQUFGLENBQWEsQ0FBYixFQUFlLENBQWYsQ0FBTixHQUF3QixFQUFFLENBQUYsSUFBSyxFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWdCLENBQWhCLENBQUwsQ0FBL0U7U0FBWCxDQUFSO09BQWY7VUFBMkksQ0FBblA7VUFBcVAsQ0FBclA7VUFBdVAsQ0FBdlAsQ0FBRCxJQUE2UCxJQUFFLENBQUYsRUFBSSxLQUFJLElBQUUsSUFBSSxLQUFKLENBQVUsQ0FBVixDQUFGLEVBQWUsSUFBRSxJQUFJLEtBQUosQ0FBVSxDQUFWLENBQUYsRUFBZSxJQUFFLElBQUksS0FBSixDQUFVLENBQVYsQ0FBRixFQUFlLElBQUUsQ0FBRixFQUFJLEdBQXJEO0FBQXlELFVBQUUsQ0FBRixLQUFNLEVBQUUsVUFBRixDQUFhLEVBQUUsQ0FBRixFQUFLLE9BQUwsQ0FBbkIsR0FBaUMsRUFBRSxDQUFGLEVBQUssT0FBTCxHQUFlLFFBQWYsQ0FBd0IsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sQ0FBeEIsRUFBa0MsSUFBbEMsQ0FBdUMsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sQ0FBdkMsRUFBaUQsSUFBakQsQ0FBc0QsRUFBRSxNQUFGLENBQXZGLEdBQWlHLEVBQUUsQ0FBRjtPQUExSixPQUFxSyxLQUFHLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBSCxFQUFzQixFQUFFLE9BQUYsRUFBdEIsQ0FBdGE7S0FBWCxFQUEzOEIsQ0FBcmhDLENBQXRsMEIsSUFBZ2g1QixDQUFKLENBQTVnNUIsQ0FBa2g1QixDQUFFLEVBQUYsQ0FBSyxLQUFMLEdBQVcsVUFBUyxDQUFULEVBQVc7QUFBQyxXQUFPLEVBQUUsS0FBRixDQUFRLE9BQVIsR0FBa0IsSUFBbEIsQ0FBdUIsQ0FBdkIsR0FBMEIsSUFBMUIsQ0FBUjtHQUFYLEVBQW1ELEVBQUUsTUFBRixDQUFTLEVBQUMsU0FBUSxDQUFDLENBQUQsRUFBRyxXQUFVLENBQVYsRUFBWSxXQUFVLG1CQUFTLENBQVQsRUFBVztBQUFDLFVBQUUsRUFBRSxTQUFGLEVBQUYsR0FBZ0IsRUFBRSxLQUFGLENBQVEsQ0FBQyxDQUFELENBQXhCLENBQUQ7S0FBWCxFQUF5QyxPQUFNLGVBQVMsQ0FBVCxFQUFXO0FBQUMsT0FBQyxNQUFJLENBQUMsQ0FBRCxHQUFHLEVBQUUsRUFBRSxTQUFGLEdBQVksRUFBRSxPQUFGLENBQXRCLEtBQW1DLEVBQUUsT0FBRixHQUFVLENBQUMsQ0FBRCxFQUFHLE1BQUksQ0FBQyxDQUFELElBQUksRUFBRSxFQUFFLFNBQUYsR0FBWSxDQUFkLEtBQWtCLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBQyxDQUFELENBQWhCLEdBQXFCLEVBQUUsRUFBRixDQUFLLGNBQUwsS0FBc0IsRUFBRSxDQUFGLEVBQUssY0FBTCxDQUFvQixPQUFwQixHQUE2QixFQUFFLENBQUYsRUFBSyxHQUFMLENBQVMsT0FBVCxDQUE3QixDQUF0QixDQUEvQyxDQUFoRCxDQUFEO0tBQVgsRUFBMUYsQ0FBOUQsQ0FBbGg1QixTQUF5MjVCLENBQVQsR0FBWTtBQUFDLE1BQUUsbUJBQUYsQ0FBc0Isa0JBQXRCLEVBQXlDLENBQXpDLEdBQTRDLEVBQUUsbUJBQUYsQ0FBc0IsTUFBdEIsRUFBNkIsQ0FBN0IsQ0FBNUMsRUFBNEUsRUFBRSxLQUFGLEVBQTVFLENBQUQ7R0FBWixDQUFtRyxDQUFFLEtBQUYsQ0FBUSxPQUFSLEdBQWdCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxNQUFJLElBQUUsRUFBRSxRQUFGLEVBQUYsRUFBZSxlQUFhLEVBQUUsVUFBRixJQUFjLGNBQVksRUFBRSxVQUFGLElBQWMsQ0FBQyxFQUFFLGVBQUYsQ0FBa0IsUUFBbEIsR0FBMkIsRUFBRSxVQUFGLENBQWEsRUFBRSxLQUFGLENBQTlGLElBQXdHLEVBQUUsZ0JBQUYsQ0FBbUIsa0JBQW5CLEVBQXNDLENBQXRDLEdBQXlDLEVBQUUsZ0JBQUYsQ0FBbUIsTUFBbkIsRUFBMEIsQ0FBMUIsQ0FBekMsQ0FBeEcsQ0FBbkIsRUFBbU0sRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFuTSxDQUFSO0dBQVgsRUFBb08sRUFBRSxLQUFGLENBQVEsT0FBUixFQUFwUCxDQUFuODVCLElBQTZzNkIsSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCO0FBQUMsUUFBSSxJQUFFLENBQUY7UUFBSSxJQUFFLEVBQUUsTUFBRjtRQUFTLElBQUUsUUFBTSxDQUFOLENBQXRCLElBQWlDLGFBQVcsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFYLEVBQXFCO0FBQUMsVUFBRSxDQUFDLENBQUQsQ0FBSCxLQUFVLENBQUosSUFBUyxDQUFUO0FBQVcsVUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxFQUFFLENBQUYsQ0FBUixFQUFhLENBQUMsQ0FBRCxFQUFHLENBQWhCLEVBQWtCLENBQWxCO09BQVg7S0FBOUIsTUFBbUUsSUFBRyxLQUFLLENBQUwsS0FBUyxDQUFULEtBQWEsSUFBRSxDQUFDLENBQUQsRUFBRyxFQUFFLFVBQUYsQ0FBYSxDQUFiLE1BQWtCLElBQUUsQ0FBQyxDQUFELENBQXBCLEVBQXdCLE1BQUksS0FBRyxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxHQUFZLElBQUUsSUFBRixDQUFmLElBQXdCLElBQUUsQ0FBRixFQUFJLElBQUUsV0FBUyxDQUFULEVBQVcsRUFBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGFBQU8sRUFBRSxJQUFGLENBQU8sRUFBRSxDQUFGLENBQVAsRUFBWSxDQUFaLENBQVAsQ0FBRDtLQUFmLENBQTlCLENBQUosRUFBMkUsQ0FBeEcsQ0FBYixFQUF3SCxPQUFLLElBQUUsQ0FBRixFQUFJLEdBQVQ7QUFBYSxRQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sQ0FBUCxFQUFTLElBQUUsQ0FBRixHQUFJLEVBQUUsSUFBRixDQUFPLEVBQUUsQ0FBRixDQUFQLEVBQVksQ0FBWixFQUFjLEVBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxDQUFQLENBQWQsQ0FBSixDQUFUO0tBQWIsT0FBMkQsSUFBRSxDQUFGLEdBQUksSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUYsR0FBWSxJQUFFLEVBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxDQUFQLENBQUYsR0FBWSxDQUFaLENBQXZTO0dBQXZCO01BQTZVLElBQUUsU0FBRixDQUFFLENBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxNQUFJLEVBQUUsUUFBRixJQUFZLE1BQUksRUFBRSxRQUFGLElBQVksRUFBQyxDQUFDLEVBQUUsUUFBRixDQUExQztHQUFYLENBQTloN0IsU0FBd203QixDQUFULEdBQVk7QUFBQyxTQUFLLE9BQUwsR0FBYSxFQUFFLE9BQUYsR0FBVSxFQUFFLEdBQUYsRUFBVixDQUFkO0dBQVosQ0FBNEMsQ0FBRSxHQUFGLEdBQU0sQ0FBTixFQUFRLEVBQUUsU0FBRixHQUFZLEVBQUMsVUFBUyxrQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxJQUFFLEtBQUcsRUFBSCxDQUFQLE9BQW9CLEVBQUUsUUFBRixHQUFXLEVBQUUsS0FBSyxPQUFMLENBQUYsR0FBZ0IsQ0FBaEIsR0FBa0IsT0FBTyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLEtBQUssT0FBTCxFQUFhLEVBQUMsT0FBTSxDQUFOLEVBQVEsVUFBUyxDQUFDLENBQUQsRUFBRyxjQUFhLENBQUMsQ0FBRCxFQUF2RSxDQUE3QixFQUF5RyxFQUFFLEtBQUssT0FBTCxDQUEzRyxDQUFwQjtLQUFiLEVBQTJKLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxVQUFHLENBQUMsRUFBRSxDQUFGLENBQUQsRUFBTSxPQUFNLEVBQU4sQ0FBVCxJQUFzQixJQUFFLEVBQUUsS0FBSyxPQUFMLENBQUosQ0FBdkIsT0FBZ0QsTUFBSSxJQUFFLEVBQUYsRUFBSyxFQUFFLENBQUYsTUFBTyxFQUFFLFFBQUYsR0FBVyxFQUFFLEtBQUssT0FBTCxDQUFGLEdBQWdCLENBQWhCLEdBQWtCLE9BQU8sY0FBUCxDQUFzQixDQUF0QixFQUF3QixLQUFLLE9BQUwsRUFBYSxFQUFDLE9BQU0sQ0FBTixFQUFRLGNBQWEsQ0FBQyxDQUFELEVBQTNELENBQTdCLENBQVAsQ0FBVCxFQUErRyxDQUEvRyxDQUFoRDtLQUFYLEVBQTZLLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksQ0FBSjtVQUFNLElBQUUsS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFGLENBQVAsSUFBMEIsWUFBVSxPQUFPLENBQVAsRUFBUyxFQUFFLENBQUYsSUFBSyxDQUFMLENBQXRCLEtBQWtDLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxVQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsQ0FBTDtPQUFYLE9BQTRCLENBQVAsQ0FBOUU7S0FBZixFQUF1RyxLQUFJLGFBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sS0FBSyxDQUFMLEtBQVMsQ0FBVCxHQUFXLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBWCxHQUF5QixFQUFFLEtBQUssT0FBTCxDQUFGLElBQWlCLEVBQUUsS0FBSyxPQUFMLENBQUYsQ0FBZ0IsQ0FBaEIsQ0FBakIsQ0FBakM7S0FBYixFQUFtRixRQUFPLGdCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxDQUFKLENBQUQsT0FBYyxLQUFLLENBQUwsS0FBUyxDQUFULElBQVksS0FBRyxZQUFVLE9BQU8sQ0FBUCxJQUFVLEtBQUssQ0FBTCxLQUFTLENBQVQsSUFBWSxJQUFFLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBVyxDQUFYLENBQUYsRUFBZ0IsS0FBSyxDQUFMLEtBQVMsQ0FBVCxHQUFXLENBQVgsR0FBYSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVcsRUFBRSxTQUFGLENBQVksQ0FBWixDQUFYLENBQWIsQ0FBL0QsSUFBeUcsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEdBQWdCLEtBQUssQ0FBTCxLQUFTLENBQVQsR0FBVyxDQUFYLEdBQWEsQ0FBYixDQUF6SCxDQUFkO0tBQWYsRUFBdUssUUFBTyxnQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLENBQVI7VUFBVSxJQUFFLEVBQUUsS0FBSyxPQUFMLENBQUosQ0FBWCxJQUFnQyxLQUFLLENBQUwsS0FBUyxDQUFULEVBQVc7QUFBQyxZQUFHLEtBQUssQ0FBTCxLQUFTLENBQVQsRUFBVyxLQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWQsS0FBbUM7QUFBQyxZQUFFLE9BQUYsQ0FBVSxDQUFWLElBQWEsSUFBRSxFQUFFLE1BQUYsQ0FBUyxFQUFFLEdBQUYsQ0FBTSxFQUFFLFNBQUYsQ0FBZixDQUFGLElBQWdDLElBQUUsRUFBRSxTQUFGLENBQVksQ0FBWixDQUFGLEVBQWlCLEtBQUssQ0FBTCxHQUFPLElBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFGLElBQVMsSUFBRSxDQUFGLEVBQUksSUFBRSxLQUFLLENBQUwsR0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFXLEVBQUUsS0FBRixDQUFRLENBQVIsS0FBWSxFQUFaLENBQWpDLENBQTlELEVBQWdILElBQUUsRUFBRSxNQUFGLENBQW5ILE9BQWtJLEdBQU47QUFBVSxtQkFBTyxFQUFFLEVBQUUsQ0FBRixDQUFGLENBQVA7V0FBVjtTQUEvSixDQUF5TCxLQUFLLENBQUwsS0FBUyxDQUFULElBQVksRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQVosQ0FBRCxLQUFtQyxFQUFFLFFBQUYsR0FBVyxFQUFFLEtBQUssT0FBTCxDQUFGLEdBQWdCLEtBQUssQ0FBTCxHQUFPLE9BQU8sRUFBRSxLQUFLLE9BQUwsQ0FBVCxDQUFyRSxDQUF6TDtPQUFkO0tBQTFDLEVBQWdWLFNBQVEsaUJBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxJQUFFLEVBQUUsS0FBSyxPQUFMLENBQUosQ0FBTCxPQUE4QixLQUFLLENBQUwsS0FBUyxDQUFULElBQVksQ0FBQyxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBRCxDQUExQztLQUFYLEVBQW5qQyxDQUFucDdCLElBQXF4OUIsSUFBRSxJQUFJLENBQUosRUFBRjtNQUFRLElBQUUsSUFBSSxDQUFKLEVBQUY7TUFBUSxJQUFFLCtCQUFGO01BQWtDLElBQUUsUUFBRixDQUF2MDlCLFNBQTIxOUIsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFFBQUksQ0FBSixDQUFELElBQVUsS0FBSyxDQUFMLEtBQVMsQ0FBVCxJQUFZLE1BQUksRUFBRSxRQUFGLEVBQVcsSUFBRyxJQUFFLFVBQVEsRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFZLEtBQVosRUFBbUIsV0FBbkIsRUFBUixFQUF5QyxJQUFFLEVBQUUsWUFBRixDQUFlLENBQWYsQ0FBRixFQUFvQixZQUFVLE9BQU8sQ0FBUCxFQUFTO0FBQUMsVUFBRztBQUFDLFlBQUUsV0FBUyxDQUFULEdBQVcsQ0FBQyxDQUFELEdBQUcsWUFBVSxDQUFWLEdBQVksQ0FBQyxDQUFELEdBQUcsV0FBUyxDQUFULEdBQVcsSUFBWCxHQUFnQixDQUFDLENBQUQsR0FBRyxFQUFILEtBQVEsQ0FBUixHQUFVLENBQUMsQ0FBRCxHQUFHLEVBQUUsSUFBRixDQUFPLENBQVAsSUFBVSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQVYsR0FBeUIsQ0FBekIsQ0FBN0Q7T0FBSCxDQUNydStCLE9BQU0sQ0FBTixFQUFRLEVBQVIsQ0FBVSxDQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLENBQVYsRUFEMHQrQjtLQUFyRixNQUNubitCLElBQUUsS0FBSyxDQUFMLENBRGluK0IsT0FDbm0rQixDQUFQLENBRHFrK0I7R0FBakIsQ0FDM2krQixDQUFFLE1BQUYsQ0FBUyxFQUFDLFNBQVEsaUJBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLE9BQUYsQ0FBVSxDQUFWLEtBQWMsRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFkLENBQVI7S0FBWCxFQUErQyxNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFQLENBQUQ7S0FBZixFQUF3QyxZQUFXLG9CQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxRQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFEO0tBQWIsRUFBNkIsT0FBTSxlQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsYUFBTyxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBUCxDQUFEO0tBQWYsRUFBd0MsYUFBWSxxQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBRDtLQUFiLEVBQWhOLEdBQStPLEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLE1BQUssY0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLENBQVI7VUFBVSxJQUFFLEtBQUssQ0FBTCxDQUFGO1VBQVUsSUFBRSxLQUFHLEVBQUUsVUFBRixDQUExQixJQUEwQyxLQUFLLENBQUwsS0FBUyxDQUFULEVBQVc7QUFBQyxZQUFHLEtBQUssTUFBTCxLQUFjLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixDQUFGLEVBQVcsTUFBSSxFQUFFLFFBQUYsSUFBWSxDQUFDLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxjQUFSLENBQUQsQ0FBekMsRUFBbUU7QUFBQyxjQUFFLEVBQUUsTUFBRixDQUFILE9BQWtCLEdBQU47QUFBVSxjQUFFLENBQUYsTUFBTyxJQUFFLEVBQUUsQ0FBRixFQUFLLElBQUwsRUFBVSxNQUFJLEVBQUUsT0FBRixDQUFVLE9BQVYsQ0FBSixLQUF5QixJQUFFLEVBQUUsU0FBRixDQUFZLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBWixDQUFGLEVBQTBCLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxFQUFFLENBQUYsQ0FBTixDQUExQixDQUF6QixDQUFuQjtXQUFWLENBQThGLENBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxjQUFSLEVBQXVCLENBQUMsQ0FBRCxDQUF2QixDQUExRztTQUF0RSxPQUFrTixDQUFQLENBQTVNO09BQWQsT0FBeU8sb0JBQWlCLDZDQUFqQixHQUFtQixLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsVUFBRSxHQUFGLENBQU0sSUFBTixFQUFXLENBQVgsRUFBRDtPQUFWLENBQTdCLEdBQXdELEVBQUUsSUFBRixFQUFPLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFELElBQVksS0FBRyxLQUFLLENBQUwsS0FBUyxDQUFULEVBQVc7QUFBQyxjQUFHLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsS0FBWSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFZLEtBQVosRUFBbUIsV0FBbkIsRUFBUixDQUFaLEVBQXNELEtBQUssQ0FBTCxLQUFTLENBQVQsRUFBVyxPQUFPLENBQVAsQ0FBdEUsSUFBa0YsSUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQUYsRUFBaUIsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFGLEVBQWEsS0FBSyxDQUFMLEtBQVMsQ0FBVCxFQUFXLE9BQU8sQ0FBUCxDQUE1QyxJQUF3RCxJQUFFLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxLQUFLLENBQUwsQ0FBUixFQUFnQixLQUFLLENBQUwsS0FBUyxDQUFULEVBQVcsT0FBTyxDQUFQLENBQTlCO1NBQXRKLE1BQWtNLElBQUUsRUFBRSxTQUFGLENBQVksQ0FBWixDQUFGLEVBQWlCLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxjQUFJLElBQUUsRUFBRSxHQUFGLENBQU0sSUFBTixFQUFXLENBQVgsQ0FBRixDQUFMLENBQXFCLENBQUUsR0FBRixDQUFNLElBQU4sRUFBVyxDQUFYLEVBQWEsQ0FBYixHQUFnQixFQUFFLE9BQUYsQ0FBVSxHQUFWLElBQWUsQ0FBQyxDQUFELElBQUksS0FBSyxDQUFMLEtBQVMsQ0FBVCxJQUFZLEVBQUUsR0FBRixDQUFNLElBQU4sRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUEvQixDQUFyQztTQUFWLENBQTNCLENBQWxNO09BQXBCLEVBQWtWLElBQXpWLEVBQThWLENBQTlWLEVBQWdXLFVBQVUsTUFBVixHQUFpQixDQUFqQixFQUFtQixJQUFuWCxFQUF3WCxDQUFDLENBQUQsQ0FBaGIsQ0FBaFI7S0FBYixFQUFrdEIsWUFBVyxvQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxVQUFFLE1BQUYsQ0FBUyxJQUFULEVBQWMsQ0FBZCxFQUFEO09BQVYsQ0FBakIsQ0FBRDtLQUFYLEVBQS91QixDQUEvTyxFQUE0aEMsRUFBRSxNQUFGLENBQVMsRUFBQyxPQUFNLGVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxVQUFJLENBQUosQ0FBRCxPQUFjLEtBQUcsSUFBRSxDQUFDLEtBQUcsSUFBSCxDQUFELEdBQVUsT0FBVixFQUFrQixJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLENBQUYsRUFBYSxNQUFJLENBQUMsQ0FBRCxJQUFJLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBSixHQUFpQixJQUFFLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsRUFBRSxTQUFGLENBQVksQ0FBWixDQUFiLENBQUYsR0FBK0IsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFoRCxDQUFKLEVBQStELEtBQUcsRUFBSCxDQUFuRyxHQUEwRyxLQUFLLENBQUwsQ0FBeEg7S0FBZixFQUErSSxTQUFRLGlCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFFLEtBQUcsSUFBSCxDQUFILElBQWUsSUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFGO1VBQWUsSUFBRSxFQUFFLE1BQUY7VUFBUyxJQUFFLEVBQUUsS0FBRixFQUFGO1VBQVksSUFBRSxFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWdCLENBQWhCLENBQUY7VUFBcUIsSUFBRSxTQUFGLENBQUUsR0FBVTtBQUFDLFVBQUUsT0FBRixDQUFVLENBQVYsRUFBWSxDQUFaLEVBQUQ7T0FBVixDQUE1RSxZQUF1RyxLQUFlLENBQWYsS0FBbUIsSUFBRSxFQUFFLEtBQUYsRUFBRixFQUFZLEdBQVosQ0FBbkIsRUFBb0MsTUFBSSxTQUFPLENBQVAsSUFBVSxFQUFFLE9BQUYsQ0FBVSxZQUFWLENBQVYsRUFBa0MsT0FBTyxFQUFFLElBQUYsRUFBTyxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBaEQsQ0FBSixFQUFtRSxDQUFDLENBQUQsSUFBSSxDQUFKLElBQU8sRUFBRSxLQUFGLENBQVEsSUFBUixFQUFQLENBQTlNO0tBQWIsRUFBa1AsYUFBWSxxQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxJQUFFLElBQUUsWUFBRixDQUFQLE9BQTZCLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLEtBQVksRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxFQUFDLE9BQU0sRUFBRSxTQUFGLENBQVksYUFBWixFQUEyQixHQUEzQixDQUErQixZQUFVO0FBQUMsWUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQUMsSUFBRSxPQUFGLEVBQVUsQ0FBWCxDQUFYLEVBQUQ7U0FBVixDQUFyQyxFQUFkLENBQVosQ0FBN0I7S0FBYixFQUFyYSxDQUE1aEMsRUFBc2xELEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxJQUFFLENBQUYsQ0FBTCxPQUFlLFlBQVUsT0FBTyxDQUFQLEtBQVcsSUFBRSxDQUFGLEVBQUksSUFBRSxJQUFGLEVBQU8sR0FBWCxDQUFyQixFQUFxQyxVQUFVLE1BQVYsR0FBaUIsQ0FBakIsR0FBbUIsRUFBRSxLQUFGLENBQVEsS0FBSyxDQUFMLENBQVIsRUFBZ0IsQ0FBaEIsQ0FBbkIsR0FBc0MsS0FBSyxDQUFMLEtBQVMsQ0FBVCxHQUFXLElBQVgsR0FBZ0IsS0FBSyxJQUFMLENBQVUsWUFBVTtBQUFDLFlBQUksSUFBRSxFQUFFLEtBQUYsQ0FBUSxJQUFSLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBRixDQUFMLENBQXlCLENBQUUsV0FBRixDQUFjLElBQWQsRUFBbUIsQ0FBbkIsR0FBc0IsU0FBTyxDQUFQLElBQVUsaUJBQWUsRUFBRSxDQUFGLENBQWYsSUFBcUIsRUFBRSxPQUFGLENBQVUsSUFBVixFQUFlLENBQWYsQ0FBL0IsQ0FBL0M7T0FBVixDQUExQixDQUExRjtLQUFiLEVBQThPLFNBQVEsaUJBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsVUFBRSxPQUFGLENBQVUsSUFBVixFQUFlLENBQWYsRUFBRDtPQUFWLENBQWpCLENBQUQ7S0FBWCxFQUE2RCxZQUFXLG9CQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sS0FBSyxLQUFMLENBQVcsS0FBRyxJQUFILEVBQVEsRUFBbkIsQ0FBUCxDQUFEO0tBQVgsRUFBMkMsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxDQUFKO1VBQU0sSUFBRSxDQUFGO1VBQUksSUFBRSxFQUFFLFFBQUYsRUFBRjtVQUFlLElBQUUsSUFBRjtVQUFPLElBQUUsS0FBSyxNQUFMO1VBQVksSUFBRSxTQUFGLENBQUUsR0FBVTtBQUFDLFVBQUUsQ0FBRixJQUFLLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBQyxDQUFELENBQWhCLENBQUwsQ0FBRDtPQUFWLENBQWpELFFBQXVGLElBQVUsT0FBTyxDQUFQLEtBQVcsSUFBRSxDQUFGLEVBQUksSUFBRSxLQUFLLENBQUwsQ0FBM0IsRUFBbUMsSUFBRSxLQUFHLElBQUgsQ0FBNUgsT0FBMEksR0FBTjtBQUFVLFlBQUUsRUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBVyxJQUFFLFlBQUYsQ0FBYixFQUE2QixLQUFHLEVBQUUsS0FBRixLQUFVLEtBQUksRUFBRSxLQUFGLENBQVEsR0FBUixDQUFZLENBQVosQ0FBSixDQUFiO09BQXZDLE9BQStFLEtBQUksRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFKLENBQW5OO0tBQWIsRUFBcFksQ0FBdGxELENBRHlOLElBQ3kvRCxJQUFFLHNDQUFzQyxNQUF0QztNQUE2QyxJQUFFLElBQUksTUFBSixDQUFXLG1CQUFpQixDQUFqQixHQUFtQixhQUFuQixFQUFpQyxHQUE1QyxDQUFGO01BQW1ELElBQUUsQ0FBQyxLQUFELEVBQU8sT0FBUCxFQUFlLFFBQWYsRUFBd0IsTUFBeEIsQ0FBRjtNQUFrQyxJQUFFLFNBQUYsQ0FBRSxDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxXQUFPLElBQUUsS0FBRyxDQUFILEVBQUssV0FBUyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsU0FBUixDQUFULElBQTZCLENBQUMsRUFBRSxRQUFGLENBQVcsRUFBRSxhQUFGLEVBQWdCLENBQTNCLENBQUQsQ0FBNUM7R0FBYixDQUQvbkUsU0FDaXVFLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUI7QUFBQyxRQUFJLENBQUo7UUFBTSxJQUFFLENBQUY7UUFBSSxJQUFFLEVBQUY7UUFBSyxJQUFFLElBQUUsWUFBVTtBQUFDLGFBQU8sRUFBRSxHQUFGLEVBQVAsQ0FBRDtLQUFWLEdBQTJCLFlBQVU7QUFBQyxhQUFPLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsRUFBVixDQUFQLENBQUQ7S0FBVjtRQUFpQyxJQUFFLEdBQUY7UUFBTSxJQUFFLEtBQUcsRUFBRSxDQUFGLENBQUgsS0FBVSxFQUFFLFNBQUYsQ0FBWSxDQUFaLElBQWUsRUFBZixHQUFrQixJQUFsQixDQUFWO1FBQWtDLElBQUUsQ0FBQyxFQUFFLFNBQUYsQ0FBWSxDQUFaLEtBQWdCLFNBQU8sQ0FBUCxJQUFVLENBQUMsQ0FBRCxDQUEzQixJQUFnQyxFQUFFLElBQUYsQ0FBTyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFQLENBQWhDLENBQTVILElBQWtMLEtBQUcsRUFBRSxDQUFGLE1BQU8sQ0FBUCxFQUFTO0FBQUMsVUFBRSxLQUFHLEVBQUUsQ0FBRixDQUFILEVBQVEsSUFBRSxLQUFHLEVBQUgsRUFBTSxJQUFFLENBQUMsQ0FBRCxJQUFJLENBQUosQ0FBckI7QUFBOEIsWUFBRSxLQUFHLElBQUgsRUFBUSxLQUFHLENBQUgsRUFBSyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLElBQUUsQ0FBRixDQUEzQjtPQUFILFFBQXlDLE9BQUssSUFBRSxNQUFJLENBQUosQ0FBUCxJQUFlLE1BQUksQ0FBSixJQUFPLEVBQUUsQ0FBRixFQUExRjtLQUFmLE9BQXFILE1BQUksSUFBRSxDQUFDLENBQUQsSUFBSSxDQUFDLENBQUQsSUFBSSxDQUFSLEVBQVUsSUFBRSxFQUFFLENBQUYsSUFBSyxJQUFFLENBQUMsRUFBRSxDQUFGLElBQUssQ0FBTCxDQUFELEdBQVMsRUFBRSxDQUFGLENBQVQsR0FBYyxDQUFDLEVBQUUsQ0FBRixDQUFELEVBQU0sTUFBSSxFQUFFLElBQUYsR0FBTyxDQUFQLEVBQVMsRUFBRSxLQUFGLEdBQVEsQ0FBUixFQUFVLEVBQUUsR0FBRixHQUFNLENBQU4sQ0FBdkIsQ0FBN0MsRUFBOEUsQ0FBOUUsQ0FBcFM7R0FBbkIsSUFBMlksSUFBRSx1QkFBRjtNQUEwQixJQUFFLFlBQUY7TUFBZSxJQUFFLDJCQUFGO01BQThCLElBQUUsRUFBQyxRQUFPLENBQUMsQ0FBRCxFQUFHLDhCQUFILEVBQWtDLFdBQWxDLENBQVAsRUFBc0QsT0FBTSxDQUFDLENBQUQsRUFBRyxTQUFILEVBQWEsVUFBYixDQUFOLEVBQStCLEtBQUksQ0FBQyxDQUFELEVBQUcsbUJBQUgsRUFBdUIscUJBQXZCLENBQUosRUFBa0QsSUFBRyxDQUFDLENBQUQsRUFBRyxnQkFBSCxFQUFvQixrQkFBcEIsQ0FBSCxFQUEyQyxJQUFHLENBQUMsQ0FBRCxFQUFHLG9CQUFILEVBQXdCLHVCQUF4QixDQUFILEVBQW9ELFVBQVMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sQ0FBVCxFQUF6TyxDQUQxcUYsQ0FDdTZGLENBQUUsUUFBRixHQUFXLEVBQUUsTUFBRixFQUFTLEVBQUUsS0FBRixHQUFRLEVBQUUsS0FBRixHQUFRLEVBQUUsUUFBRixHQUFXLEVBQUUsT0FBRixHQUFVLEVBQUUsS0FBRixFQUFRLEVBQUUsRUFBRixHQUFLLEVBQUUsRUFBRixDQUQ3K0YsU0FDMi9GLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBSSxJQUFFLGVBQWEsT0FBTyxFQUFFLG9CQUFGLEdBQXVCLEVBQUUsb0JBQUYsQ0FBdUIsS0FBRyxHQUFILENBQWxFLEdBQTBFLGVBQWEsT0FBTyxFQUFFLGdCQUFGLEdBQW1CLEVBQUUsZ0JBQUYsQ0FBbUIsS0FBRyxHQUFILENBQTFELEdBQWtFLEVBQWxFLENBQWpGLE9BQTZKLEtBQUssQ0FBTCxLQUFTLENBQVQsSUFBWSxLQUFHLEVBQUUsUUFBRixDQUFXLENBQVgsRUFBYSxDQUFiLENBQUgsR0FBbUIsRUFBRSxLQUFGLENBQVEsQ0FBQyxDQUFELENBQVIsRUFBWSxDQUFaLENBQS9CLEdBQThDLENBQTlDLENBQTdKO0dBQWYsU0FBcU8sRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsU0FBSSxJQUFJLElBQUUsQ0FBRixFQUFJLElBQUUsRUFBRSxNQUFGLEVBQVMsSUFBRSxDQUFGLEVBQUksR0FBM0I7QUFBK0IsUUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBVyxZQUFYLEVBQXdCLENBQUMsQ0FBRCxJQUFJLEVBQUUsR0FBRixDQUFNLEVBQUUsQ0FBRixDQUFOLEVBQVcsWUFBWCxDQUFKLENBQXhCO0tBQS9CO0dBQWpCLElBQTBHLEtBQUcsV0FBSCxDQUR4ekcsU0FDZzFHLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQjtBQUFDLFNBQUksSUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsSUFBRSxFQUFFLHNCQUFGLEVBQUYsRUFBNkIsSUFBRSxFQUFGLEVBQUssSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLENBQUYsRUFBSSxHQUF6RTtBQUE2RSxVQUFHLElBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxLQUFHLE1BQUksQ0FBSixFQUFNLElBQUcsYUFBVyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVgsRUFBcUIsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLEVBQUUsUUFBRixHQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWUsQ0FBZixDQUFWLENBQXhCLEtBQXlELElBQUcsR0FBRyxJQUFILENBQVEsQ0FBUixDQUFILEVBQWM7QUFBQyxZQUFFLEtBQUcsRUFBRSxXQUFGLENBQWMsRUFBRSxhQUFGLENBQWdCLEtBQWhCLENBQWQsQ0FBSCxFQUF5QyxJQUFFLENBQUMsRUFBRSxJQUFGLENBQU8sQ0FBUCxLQUFXLENBQUMsRUFBRCxFQUFJLEVBQUosQ0FBWCxDQUFELENBQXFCLENBQXJCLEVBQXdCLFdBQXhCLEVBQUYsRUFBd0MsSUFBRSxFQUFFLENBQUYsS0FBTSxFQUFFLFFBQUYsRUFBVyxFQUFFLFNBQUYsR0FBWSxFQUFFLENBQUYsSUFBSyxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBTCxHQUF3QixFQUFFLENBQUYsQ0FBeEIsRUFBNkIsSUFBRSxFQUFFLENBQUYsQ0FBRixDQUFoSixPQUE2SixHQUFOO0FBQVUsY0FBRSxFQUFFLFNBQUY7U0FBWixDQUF3QixDQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsRUFBRSxVQUFGLENBQVYsRUFBd0IsSUFBRSxFQUFFLFVBQUYsRUFBYSxFQUFFLFdBQUYsR0FBYyxFQUFkLENBQXROO09BQWQsTUFBMFAsRUFBRSxJQUFGLENBQU8sRUFBRSxjQUFGLENBQWlCLENBQWpCLENBQVAsRUFBMVA7S0FBekosQ0FBK2EsQ0FBRSxXQUFGLEdBQWMsRUFBZCxFQUFpQixJQUFFLENBQUYsQ0FBamMsT0FBMmMsSUFBRSxFQUFFLEdBQUYsQ0FBRjtBQUFTLFVBQUcsS0FBRyxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksQ0FBWixJQUFlLENBQUMsQ0FBRCxFQUFHLEtBQUcsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFILENBQXhCLEtBQTBDLElBQUcsSUFBRSxFQUFFLFFBQUYsQ0FBVyxFQUFFLGFBQUYsRUFBZ0IsQ0FBM0IsQ0FBRixFQUFnQyxJQUFFLEVBQUUsRUFBRSxXQUFGLENBQWMsQ0FBZCxDQUFGLEVBQW1CLFFBQW5CLENBQUYsRUFBK0IsS0FBRyxHQUFHLENBQUgsQ0FBSCxFQUFTLENBQXhFLEVBQTBFO0FBQUMsWUFBRSxDQUFGLENBQUQsT0FBVyxJQUFFLEVBQUUsR0FBRixDQUFGO0FBQVMsWUFBRSxJQUFGLENBQU8sRUFBRSxJQUFGLElBQVEsRUFBUixDQUFQLElBQW9CLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBcEI7U0FBZjtPQUFsRjtLQUF6RCxPQUErTCxDQUFQLENBQTduQjtHQUF0QixDQUE2cEIsWUFBVTtBQUFDLFFBQUksSUFBRSxFQUFFLHNCQUFGLEVBQUY7UUFBNkIsSUFBRSxFQUFFLFdBQUYsQ0FBYyxFQUFFLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FBZCxDQUFGO1FBQXdDLElBQUUsRUFBRSxhQUFGLENBQWdCLE9BQWhCLENBQUYsQ0FBMUUsQ0FBcUcsQ0FBRSxZQUFGLENBQWUsTUFBZixFQUFzQixPQUF0QixHQUErQixFQUFFLFlBQUYsQ0FBZSxTQUFmLEVBQXlCLFNBQXpCLENBQS9CLEVBQW1FLEVBQUUsWUFBRixDQUFlLE1BQWYsRUFBc0IsR0FBdEIsQ0FBbkUsRUFBOEYsRUFBRSxXQUFGLENBQWMsQ0FBZCxDQUE5RixFQUErRyxFQUFFLFVBQUYsR0FBYSxFQUFFLFNBQUYsQ0FBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixTQUFoQixDQUEwQixDQUFDLENBQUQsQ0FBMUIsQ0FBOEIsU0FBOUIsQ0FBd0MsT0FBeEMsRUFBZ0QsRUFBRSxTQUFGLEdBQVksd0JBQVosRUFBcUMsRUFBRSxjQUFGLEdBQWlCLENBQUMsQ0FBQyxFQUFFLFNBQUYsQ0FBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixTQUFoQixDQUEwQixZQUExQixDQUF6VTtHQUFWLEVBQUQsQ0FEbitILElBQ3EySSxLQUFHLE1BQUg7TUFBVSxLQUFHLGdEQUFIO01BQW9ELEtBQUcscUJBQUgsQ0FEbjZJLFNBQ3E4SSxFQUFULEdBQWE7QUFBQyxXQUFNLENBQUMsQ0FBRCxDQUFQO0dBQWIsU0FBZ0MsRUFBVCxHQUFhO0FBQUMsV0FBTSxDQUFDLENBQUQsQ0FBUDtHQUFiLFNBQWdDLEVBQVQsR0FBYTtBQUFDLFFBQUc7QUFBQyxhQUFPLEVBQUUsYUFBRixDQUFSO0tBQUgsQ0FBMkIsT0FBTSxDQUFOLEVBQVEsRUFBUjtHQUF6QyxTQUE2RCxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsRUFBd0I7QUFBQyxRQUFJLENBQUosRUFBTSxDQUFOLENBQUQsSUFBWSxvQkFBaUIsNkNBQWpCLEVBQW1CO0FBQUMsa0JBQVUsT0FBTyxDQUFQLEtBQVcsSUFBRSxLQUFHLENBQUgsRUFBSyxJQUFFLEtBQUssQ0FBTCxDQUE5QixDQUFELEtBQTJDLENBQUosSUFBUyxDQUFUO0FBQVcsV0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsRUFBRSxDQUFGLENBQVgsRUFBZ0IsQ0FBaEI7T0FBWCxPQUFxQyxDQUFQLENBQXJFO0tBQXRCLElBQXVHLFFBQU0sQ0FBTixJQUFTLFFBQU0sQ0FBTixJQUFTLElBQUUsQ0FBRixFQUFJLElBQUUsSUFBRSxLQUFLLENBQUwsQ0FBMUIsR0FBa0MsUUFBTSxDQUFOLEtBQVUsWUFBVSxPQUFPLENBQVAsSUFBVSxJQUFFLENBQUYsRUFBSSxJQUFFLEtBQUssQ0FBTCxDQUExQixJQUFtQyxJQUFFLENBQUYsRUFBSSxJQUFFLENBQUYsRUFBSSxJQUFFLEtBQUssQ0FBTCxDQUE3QyxDQUFWLEVBQWdFLE1BQUksQ0FBQyxDQUFELEVBQUcsSUFBRSxFQUFGLENBQTVHLEtBQXNILElBQUcsQ0FBQyxDQUFELEVBQUcsT0FBTyxDQUFQLENBQU4sT0FBc0IsTUFBSSxDQUFKLEtBQVEsSUFBRSxDQUFGLEVBQUksSUFBRSxXQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sSUFBSSxHQUFKLENBQVEsQ0FBUixHQUFXLEVBQUUsS0FBRixDQUFRLElBQVIsRUFBYSxTQUFiLENBQVgsQ0FBUjtLQUFYLEVBQXVELEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixLQUFTLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixFQUFQLENBQVQsQ0FBNUUsRUFBdUcsRUFBRSxJQUFGLENBQU8sWUFBVTtBQUFDLFFBQUUsS0FBRixDQUFRLEdBQVIsQ0FBWSxJQUFaLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCLENBQXZCLEVBQUQ7S0FBVixDQUE5RyxDQUF6UDtHQUF4QixDQUFzYSxDQUFFLEtBQUYsR0FBUSxFQUFDLFFBQU8sRUFBUCxFQUFVLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLENBQVI7VUFBVSxDQUFWO1VBQVksQ0FBWjtVQUFjLENBQWQ7VUFBZ0IsQ0FBaEI7VUFBa0IsQ0FBbEI7VUFBb0IsQ0FBcEI7VUFBc0IsQ0FBdEI7VUFBd0IsQ0FBeEI7VUFBMEIsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLENBQUYsQ0FBM0IsSUFBeUMsQ0FBSCxFQUFLO0FBQUMsVUFBRSxPQUFGLEtBQVksSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLE9BQUYsRUFBVSxJQUFFLEVBQUUsUUFBRixDQUE5QixFQUEwQyxFQUFFLElBQUYsS0FBUyxFQUFFLElBQUYsR0FBTyxFQUFFLElBQUYsRUFBUCxDQUFULEVBQTBCLENBQUMsSUFBRSxFQUFFLE1BQUYsQ0FBSCxLQUFlLElBQUUsRUFBRSxNQUFGLEdBQVMsRUFBVCxDQUFqQixFQUE4QixDQUFDLElBQUUsRUFBRSxNQUFGLENBQUgsS0FBZSxJQUFFLEVBQUUsTUFBRixHQUFTLFVBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU0sZUFBYSxPQUFPLENBQVAsSUFBVSxFQUFFLEtBQUYsQ0FBUSxTQUFSLEtBQW9CLEVBQUUsSUFBRixHQUFPLEVBQUUsS0FBRixDQUFRLFFBQVIsQ0FBaUIsS0FBakIsQ0FBdUIsQ0FBdkIsRUFBeUIsU0FBekIsQ0FBbEQsR0FBc0YsS0FBSyxDQUFMLENBQTdGO1NBQVgsQ0FBMUIsRUFBMkksSUFBRSxDQUFDLEtBQUcsRUFBSCxDQUFELENBQVEsS0FBUixDQUFjLENBQWQsS0FBa0IsQ0FBQyxFQUFELENBQWxCLEVBQXVCLElBQUUsRUFBRSxNQUFGLENBQXpRLE9BQXdSLEdBQU47QUFBVSxjQUFFLEdBQUcsSUFBSCxDQUFRLEVBQUUsQ0FBRixDQUFSLEtBQWUsRUFBZixFQUFrQixJQUFFLElBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxJQUFFLENBQUMsRUFBRSxDQUFGLEtBQU0sRUFBTixDQUFELENBQVcsS0FBWCxDQUFpQixHQUFqQixFQUFzQixJQUF0QixFQUFGLEVBQStCLE1BQUksSUFBRSxFQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLENBQWhCLEtBQW9CLEVBQXBCLEVBQXVCLElBQUUsQ0FBQyxJQUFFLEVBQUUsWUFBRixHQUFlLEVBQUUsUUFBRixDQUFsQixJQUErQixDQUEvQixFQUFpQyxJQUFFLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBb0IsRUFBcEIsRUFBdUIsSUFBRSxFQUFFLE1BQUYsQ0FBUyxFQUFDLE1BQUssQ0FBTCxFQUFPLFVBQVMsQ0FBVCxFQUFXLE1BQUssQ0FBTCxFQUFPLFNBQVEsQ0FBUixFQUFVLE1BQUssRUFBRSxJQUFGLEVBQU8sVUFBUyxDQUFULEVBQVcsY0FBYSxLQUFHLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxZQUFiLENBQTBCLElBQTFCLENBQStCLENBQS9CLENBQUgsRUFBcUMsV0FBVSxFQUFFLElBQUYsQ0FBTyxHQUFQLENBQVYsRUFBdEgsRUFBNkksQ0FBN0ksQ0FBRixFQUFrSixDQUFDLElBQUUsRUFBRSxDQUFGLENBQUYsQ0FBRCxLQUFXLElBQUUsRUFBRSxDQUFGLElBQUssRUFBTCxFQUFRLEVBQUUsYUFBRixHQUFnQixDQUFoQixFQUFrQixFQUFFLEtBQUYsSUFBUyxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsTUFBd0IsQ0FBQyxDQUFELElBQUksRUFBRSxnQkFBRixJQUFvQixFQUFFLGdCQUFGLENBQW1CLENBQW5CLEVBQXFCLENBQXJCLENBQXBCLENBQTVFLEVBQXlILEVBQUUsR0FBRixLQUFRLEVBQUUsR0FBRixDQUFNLElBQU4sQ0FBVyxDQUFYLEVBQWEsQ0FBYixHQUFnQixFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQWlCLEVBQUUsT0FBRixDQUFVLElBQVYsR0FBZSxFQUFFLElBQUYsQ0FBaEMsQ0FBeEIsRUFBaUUsSUFBRSxFQUFFLE1BQUYsQ0FBUyxFQUFFLGFBQUYsRUFBVCxFQUEyQixDQUEzQixFQUE2QixDQUE3QixDQUFGLEdBQWtDLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBbEMsRUFBNEMsRUFBRSxLQUFGLENBQVEsTUFBUixDQUFlLENBQWYsSUFBa0IsQ0FBQyxDQUFELENBQW5lO1NBQXRFO09BQXZSO0tBQXpELEVBQSszQixRQUFPLGdCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUI7QUFBQyxVQUFJLENBQUo7VUFBTSxDQUFOO1VBQVEsQ0FBUjtVQUFVLENBQVY7VUFBWSxDQUFaO1VBQWMsQ0FBZDtVQUFnQixDQUFoQjtVQUFrQixDQUFsQjtVQUFvQixDQUFwQjtVQUFzQixDQUF0QjtVQUF3QixDQUF4QjtVQUEwQixJQUFFLEVBQUUsT0FBRixDQUFVLENBQVYsS0FBYyxFQUFFLEdBQUYsQ0FBTSxDQUFOLENBQWQsQ0FBN0IsSUFBdUQsTUFBSSxJQUFFLEVBQUUsTUFBRixDQUFOLEVBQWdCO0FBQUMsWUFBRSxDQUFDLEtBQUcsRUFBSCxDQUFELENBQVEsS0FBUixDQUFjLENBQWQsS0FBa0IsQ0FBQyxFQUFELENBQWxCLEVBQXVCLElBQUUsRUFBRSxNQUFGLENBQTVCLE9BQTJDLEdBQU47QUFBVSxjQUFHLElBQUUsR0FBRyxJQUFILENBQVEsRUFBRSxDQUFGLENBQVIsS0FBZSxFQUFmLEVBQWtCLElBQUUsSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLElBQUUsQ0FBQyxFQUFFLENBQUYsS0FBTSxFQUFOLENBQUQsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLEVBQXNCLElBQXRCLEVBQUYsRUFBK0IsQ0FBNUQsRUFBOEQ7QUFBQyxnQkFBRSxFQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLENBQWhCLEtBQW9CLEVBQXBCLEVBQXVCLElBQUUsQ0FBQyxJQUFFLEVBQUUsWUFBRixHQUFlLEVBQUUsUUFBRixDQUFsQixJQUErQixDQUEvQixFQUFpQyxJQUFFLEVBQUUsQ0FBRixLQUFNLEVBQU4sRUFBUyxJQUFFLEVBQUUsQ0FBRixLQUFNLElBQUksTUFBSixDQUFXLFlBQVUsRUFBRSxJQUFGLENBQU8sZUFBUCxDQUFWLEdBQWtDLFNBQWxDLENBQWpCLEVBQThELElBQUUsSUFBRSxFQUFFLE1BQUYsQ0FBNUksT0FBMkosR0FBTjtBQUFVLGtCQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sQ0FBQyxDQUFELElBQUksTUFBSSxFQUFFLFFBQUYsSUFBWSxLQUFHLEVBQUUsSUFBRixLQUFTLEVBQUUsSUFBRixJQUFRLEtBQUcsQ0FBQyxFQUFFLElBQUYsQ0FBTyxFQUFFLFNBQUYsQ0FBUixJQUFzQixLQUFHLE1BQUksRUFBRSxRQUFGLEtBQWEsU0FBTyxDQUFQLElBQVUsQ0FBQyxFQUFFLFFBQUYsQ0FBL0IsS0FBNkMsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsR0FBYyxFQUFFLFFBQUYsSUFBWSxFQUFFLGFBQUYsRUFBWixFQUE4QixFQUFFLE1BQUYsSUFBVSxFQUFFLE1BQUYsQ0FBUyxJQUFULENBQWMsQ0FBZCxFQUFnQixDQUFoQixDQUFWLENBQTFKO2FBQWpCLENBQXlNLElBQUcsQ0FBQyxFQUFFLE1BQUYsS0FBVyxFQUFFLFFBQUYsSUFBWSxFQUFFLFFBQUYsQ0FBVyxJQUFYLENBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLEVBQUUsTUFBRixDQUFwQixLQUFnQyxDQUFDLENBQUQsSUFBSSxFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLEVBQUUsTUFBRixDQUFsRSxFQUE0RSxPQUFPLEVBQUUsQ0FBRixDQUFQLENBQTNGLENBQTlWO1dBQWpFLE1BQTRnQixLQUFJLENBQUosSUFBUyxDQUFUO0FBQVcsY0FBRSxLQUFGLENBQVEsTUFBUixDQUFlLENBQWYsRUFBaUIsSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLENBQXhCLEVBQTBCLENBQTFCLEVBQTRCLENBQUMsQ0FBRCxDQUE1QjtXQUFYO1NBQXRoQixDQUFpa0IsQ0FBRSxhQUFGLENBQWdCLENBQWhCLEtBQW9CLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxlQUFYLENBQXBCLENBQXRtQjtPQUFuQjtLQUF2RSxFQUFrdkIsVUFBUyxrQkFBUyxDQUFULEVBQVc7QUFBQyxVQUFFLEVBQUUsS0FBRixDQUFRLEdBQVIsQ0FBWSxDQUFaLENBQUYsQ0FBRCxJQUFzQixDQUFKO1VBQU0sQ0FBTjtVQUFRLENBQVI7VUFBVSxDQUFWO1VBQVksQ0FBWjtVQUFjLElBQUUsRUFBRjtVQUFLLElBQUUsRUFBRSxJQUFGLENBQU8sU0FBUCxDQUFGO1VBQW9CLElBQUUsQ0FBQyxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsUUFBWCxLQUFzQixFQUF0QixDQUFELENBQTJCLEVBQUUsSUFBRixDQUEzQixJQUFvQyxFQUFwQztVQUF1QyxJQUFFLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsRUFBRSxJQUFGLENBQWhCLElBQXlCLEVBQXpCLENBQXBHLElBQW1JLEVBQUUsQ0FBRixJQUFLLENBQUwsRUFBTyxFQUFFLGNBQUYsR0FBaUIsSUFBakIsRUFBc0IsQ0FBQyxFQUFFLFdBQUYsSUFBZSxFQUFFLFdBQUYsQ0FBYyxJQUFkLENBQW1CLElBQW5CLEVBQXdCLENBQXhCLE1BQTZCLENBQUMsQ0FBRCxFQUFHO0FBQUMsWUFBRSxFQUFFLEtBQUYsQ0FBUSxRQUFSLENBQWlCLElBQWpCLENBQXNCLElBQXRCLEVBQTJCLENBQTNCLEVBQTZCLENBQTdCLENBQUYsRUFBa0MsSUFBRSxDQUFGLENBQW5DLE9BQTZDLENBQUMsSUFBRSxFQUFFLEdBQUYsQ0FBRixDQUFELElBQVksQ0FBQyxFQUFFLG9CQUFGLEVBQUQsRUFBMEI7QUFBQyxZQUFFLGFBQUYsR0FBZ0IsRUFBRSxJQUFGLEVBQU8sSUFBRSxDQUFGLENBQXhCLE9BQWtDLENBQUMsSUFBRSxFQUFFLFFBQUYsQ0FBVyxHQUFYLENBQUYsQ0FBRCxJQUFxQixDQUFDLEVBQUUsNkJBQUYsRUFBRDtBQUFtQyxjQUFFLFVBQUYsSUFBYyxDQUFDLEVBQUUsVUFBRixDQUFhLElBQWIsQ0FBa0IsRUFBRSxTQUFGLENBQW5CLEtBQWtDLEVBQUUsU0FBRixHQUFZLENBQVosRUFBYyxFQUFFLElBQUYsR0FBTyxFQUFFLElBQUYsRUFBTyxJQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLEVBQUUsUUFBRixDQUFoQixJQUE2QixFQUE3QixDQUFELENBQWtDLE1BQWxDLElBQTBDLEVBQUUsT0FBRixDQUEzQyxDQUFzRCxLQUF0RCxDQUE0RCxFQUFFLElBQUYsRUFBTyxDQUFuRSxDQUFGLEVBQXdFLEtBQUssQ0FBTCxLQUFTLENBQVQsSUFBWSxDQUFDLEVBQUUsTUFBRixHQUFTLENBQVQsQ0FBRCxLQUFlLENBQUMsQ0FBRCxLQUFLLEVBQUUsY0FBRixJQUFtQixFQUFFLGVBQUYsRUFBbkIsQ0FBaEMsQ0FBcEo7V0FBOUQ7U0FBeEUsT0FBMFcsRUFBRSxZQUFGLElBQWdCLEVBQUUsWUFBRixDQUFlLElBQWYsQ0FBb0IsSUFBcEIsRUFBeUIsQ0FBekIsQ0FBaEIsRUFBNEMsRUFBRSxNQUFGLENBQTdiO09BQWhGO0tBQTNJLEVBQW1xQixVQUFTLGtCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLENBQUo7VUFBTSxDQUFOO1VBQVEsQ0FBUjtVQUFVLENBQVY7VUFBWSxJQUFFLEVBQUY7VUFBSyxJQUFFLEVBQUUsYUFBRjtVQUFnQixJQUFFLEVBQUUsTUFBRixDQUF0QyxJQUFrRCxLQUFHLEVBQUUsUUFBRixLQUFhLFlBQVUsRUFBRSxJQUFGLElBQVEsTUFBTSxFQUFFLE1BQUYsQ0FBeEIsSUFBbUMsRUFBRSxNQUFGLEdBQVMsQ0FBVCxDQUFuRCxFQUErRCxPQUFLLE1BQUksSUFBSixFQUFTLElBQUUsRUFBRSxVQUFGLElBQWMsSUFBZDtBQUFtQixZQUFHLE1BQUksRUFBRSxRQUFGLEtBQWEsRUFBRSxRQUFGLEtBQWEsQ0FBQyxDQUFELElBQUksWUFBVSxFQUFFLElBQUYsQ0FBNUMsRUFBb0Q7QUFBQyxlQUFJLElBQUUsRUFBRixFQUFLLElBQUUsQ0FBRixFQUFJLElBQUUsQ0FBRixFQUFJLEdBQWpCO0FBQXFCLGdCQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sSUFBRSxFQUFFLFFBQUYsR0FBVyxHQUFYLEVBQWUsS0FBSyxDQUFMLEtBQVMsRUFBRSxDQUFGLENBQVQsS0FBZ0IsRUFBRSxDQUFGLElBQUssRUFBRSxZQUFGLEdBQWUsRUFBRSxDQUFGLEVBQUksSUFBSixFQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsSUFBbUIsQ0FBQyxDQUFELEdBQUcsRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLElBQVQsRUFBYyxJQUFkLEVBQW1CLENBQUMsQ0FBRCxDQUFuQixFQUF3QixNQUF4QixDQUExRCxFQUEwRixFQUFFLENBQUYsS0FBTSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQU47V0FBdkksQ0FBdUosQ0FBRSxNQUFGLElBQVUsRUFBRSxJQUFGLENBQU8sRUFBQyxNQUFLLENBQUwsRUFBTyxVQUFTLENBQVQsRUFBZixDQUFWLENBQXhKO1NBQXZEO09BQW5DLE9BQStSLElBQUUsRUFBRSxNQUFGLElBQVUsRUFBRSxJQUFGLENBQU8sRUFBQyxNQUFLLElBQUwsRUFBVSxVQUFTLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBVCxFQUFsQixDQUFaLEVBQW9ELENBQXBELENBQWhaO0tBQWIsRUFBb2QsT0FBTSwrSEFBK0gsS0FBL0gsQ0FBcUksR0FBckksQ0FBTixFQUFnSixVQUFTLEVBQVQsRUFBWSxVQUFTLEVBQUMsT0FBTSw0QkFBNEIsS0FBNUIsQ0FBa0MsR0FBbEMsQ0FBTixFQUE2QyxRQUFPLGdCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxlQUFPLFFBQU0sRUFBRSxLQUFGLEtBQVUsRUFBRSxLQUFGLEdBQVEsUUFBTSxFQUFFLFFBQUYsR0FBVyxFQUFFLFFBQUYsR0FBVyxFQUFFLE9BQUYsQ0FBcEQsRUFBK0QsQ0FBL0QsQ0FBUjtPQUFiLEVBQTlELEVBQXNKLFlBQVcsRUFBQyxPQUFNLHVGQUF1RixLQUF2RixDQUE2RixHQUE3RixDQUFOLEVBQXdHLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUksQ0FBSjtZQUFNLENBQU47WUFBUSxDQUFSO1lBQVUsSUFBRSxFQUFFLE1BQUYsQ0FBYixPQUE2QixRQUFNLEVBQUUsS0FBRixJQUFTLFFBQU0sRUFBRSxPQUFGLEtBQVksSUFBRSxFQUFFLE1BQUYsQ0FBUyxhQUFULElBQXdCLENBQXhCLEVBQTBCLElBQUUsRUFBRSxlQUFGLEVBQWtCLElBQUUsRUFBRSxJQUFGLEVBQU8sRUFBRSxLQUFGLEdBQVEsRUFBRSxPQUFGLElBQVcsS0FBRyxFQUFFLFVBQUYsSUFBYyxLQUFHLEVBQUUsVUFBRixJQUFjLENBQWxDLENBQVgsSUFBaUQsS0FBRyxFQUFFLFVBQUYsSUFBYyxLQUFHLEVBQUUsVUFBRixJQUFjLENBQWxDLENBQWpELEVBQXNGLEVBQUUsS0FBRixHQUFRLEVBQUUsT0FBRixJQUFXLEtBQUcsRUFBRSxTQUFGLElBQWEsS0FBRyxFQUFFLFNBQUYsSUFBYSxDQUFoQyxDQUFYLElBQStDLEtBQUcsRUFBRSxTQUFGLElBQWEsS0FBRyxFQUFFLFNBQUYsSUFBYSxDQUFoQyxDQUEvQyxDQUFoTSxFQUFtUixFQUFFLEtBQUYsSUFBUyxLQUFLLENBQUwsS0FBUyxDQUFULEtBQWEsRUFBRSxLQUFGLEdBQVEsSUFBRSxDQUFGLEdBQUksQ0FBSixHQUFNLElBQUUsQ0FBRixHQUFJLENBQUosR0FBTSxJQUFFLENBQUYsR0FBSSxDQUFKLEdBQU0sQ0FBTixDQUExQyxFQUFtRCxDQUF0VSxDQUE3QjtPQUFiLEVBQTNILEVBQStlLEtBQUksYUFBUyxDQUFULEVBQVc7QUFBQyxVQUFHLEVBQUUsRUFBRSxPQUFGLENBQUwsRUFBZ0IsT0FBTyxDQUFQLENBQWhCLElBQTZCLENBQUo7VUFBTSxDQUFOO1VBQVEsQ0FBUjtVQUFVLElBQUUsRUFBRSxJQUFGO1VBQU8sSUFBRSxDQUFGO1VBQUksSUFBRSxLQUFLLFFBQUwsQ0FBYyxDQUFkLENBQUYsQ0FBakQsQ0FBb0UsS0FBSSxLQUFLLFFBQUwsQ0FBYyxDQUFkLElBQWlCLElBQUUsR0FBRyxJQUFILENBQVEsQ0FBUixJQUFXLEtBQUssVUFBTCxHQUFnQixHQUFHLElBQUgsQ0FBUSxDQUFSLElBQVcsS0FBSyxRQUFMLEdBQWMsRUFBekIsQ0FBbEQsRUFBK0UsSUFBRSxFQUFFLEtBQUYsR0FBUSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEVBQUUsS0FBRixDQUExQixHQUFtQyxLQUFLLEtBQUwsRUFBVyxJQUFFLElBQUksRUFBRSxLQUFGLENBQVEsQ0FBWixDQUFGLEVBQWlCLElBQUUsRUFBRSxNQUFGLENBQXROLE9BQXFPLEdBQU47QUFBVSxZQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLENBQUw7T0FBakIsT0FBa0MsRUFBRSxNQUFGLEtBQVcsRUFBRSxNQUFGLEdBQVMsQ0FBVCxDQUFYLEVBQXVCLE1BQUksRUFBRSxNQUFGLENBQVMsUUFBVCxLQUFvQixFQUFFLE1BQUYsR0FBUyxFQUFFLE1BQUYsQ0FBUyxVQUFULENBQWpDLEVBQXNELEVBQUUsTUFBRixHQUFTLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQVQsR0FBdUIsQ0FBdkIsQ0FBOVU7S0FBWCxFQUFtWCxTQUFRLEVBQUMsTUFBSyxFQUFDLFVBQVMsQ0FBQyxDQUFELEVBQWYsRUFBbUIsT0FBTSxFQUFDLFNBQVEsbUJBQVU7QUFBQyxpQkFBTyxTQUFPLElBQVAsSUFBYSxLQUFLLEtBQUwsSUFBWSxLQUFLLEtBQUwsSUFBYSxDQUFDLENBQUQsQ0FBdEMsR0FBMEMsS0FBSyxDQUFMLENBQWxEO1NBQVYsRUFBb0UsY0FBYSxTQUFiLEVBQW5GLEVBQTJHLE1BQUssRUFBQyxTQUFRLG1CQUFVO0FBQUMsaUJBQU8sU0FBTyxJQUFQLElBQWEsS0FBSyxJQUFMLElBQVcsS0FBSyxJQUFMLElBQVksQ0FBQyxDQUFELENBQXBDLEdBQXdDLEtBQUssQ0FBTCxDQUFoRDtTQUFWLEVBQWtFLGNBQWEsVUFBYixFQUFoRixFQUF5RyxPQUFNLEVBQUMsU0FBUSxtQkFBVTtBQUFDLGlCQUFNLGVBQWEsS0FBSyxJQUFMLElBQVcsS0FBSyxLQUFMLElBQVksRUFBRSxRQUFGLENBQVcsSUFBWCxFQUFnQixPQUFoQixDQUFwQyxJQUE4RCxLQUFLLEtBQUwsSUFBYSxDQUFDLENBQUQsQ0FBM0UsR0FBK0UsS0FBSyxDQUFMLENBQXRGO1NBQVYsRUFBd0csVUFBUyxrQkFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxFQUFFLFFBQUYsQ0FBVyxFQUFFLE1BQUYsRUFBUyxHQUFwQixDQUFQLENBQUQ7U0FBWCxFQUFoSSxFQUE4SyxjQUFhLEVBQUMsY0FBYSxzQkFBUyxDQUFULEVBQVc7QUFBQyxlQUFLLENBQUwsS0FBUyxFQUFFLE1BQUYsSUFBVSxFQUFFLGFBQUYsS0FBa0IsRUFBRSxhQUFGLENBQWdCLFdBQWhCLEdBQTRCLEVBQUUsTUFBRixDQUFqRSxDQUFEO1NBQVgsRUFBM0IsRUFBOVosRUFBaDdILEVBQW84SSxFQUFFLFdBQUYsR0FBYyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsTUFBRSxtQkFBRixJQUF1QixFQUFFLG1CQUFGLENBQXNCLENBQXRCLEVBQXdCLENBQXhCLENBQXZCLENBQUQ7R0FBZixFQUFtRSxFQUFFLEtBQUYsR0FBUSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxXQUFPLGdCQUFnQixFQUFFLEtBQUYsSUFBUyxLQUFHLEVBQUUsSUFBRixJQUFRLEtBQUssYUFBTCxHQUFtQixDQUFuQixFQUFxQixLQUFLLElBQUwsR0FBVSxFQUFFLElBQUYsRUFBTyxLQUFLLGtCQUFMLEdBQXdCLEVBQUUsZ0JBQUYsSUFBb0IsS0FBSyxDQUFMLEtBQVMsRUFBRSxnQkFBRixJQUFvQixFQUFFLFdBQUYsS0FBZ0IsQ0FBQyxDQUFELEdBQUcsRUFBcEUsR0FBdUUsRUFBdkUsQ0FBekUsR0FBb0osS0FBSyxJQUFMLEdBQVUsQ0FBVixFQUFZLEtBQUcsRUFBRSxNQUFGLENBQVMsSUFBVCxFQUFjLENBQWQsQ0FBSCxFQUFvQixLQUFLLFNBQUwsR0FBZSxLQUFHLEVBQUUsU0FBRixJQUFhLEVBQUUsR0FBRixFQUFoQixFQUF3QixNQUFLLEtBQUssRUFBRSxPQUFGLENBQUwsR0FBZ0IsQ0FBQyxDQUFELENBQXJCLENBQXBQLEdBQThRLElBQUksRUFBRSxLQUFGLENBQVEsQ0FBWixFQUFjLENBQWQsQ0FBOVEsQ0FBUjtHQUFiLEVBQXFULEVBQUUsS0FBRixDQUFRLFNBQVIsR0FBa0IsRUFBQyxhQUFZLEVBQUUsS0FBRixFQUFRLG9CQUFtQixFQUFuQixFQUFzQixzQkFBcUIsRUFBckIsRUFBd0IsK0JBQThCLEVBQTlCLEVBQWlDLGdCQUFlLDBCQUFVO0FBQUMsVUFBSSxJQUFFLEtBQUssYUFBTCxDQUFQLElBQTBCLENBQUssa0JBQUwsR0FBd0IsRUFBeEIsRUFBMkIsS0FBRyxFQUFFLGNBQUYsRUFBSCxDQUFyRDtLQUFWLEVBQXNGLGlCQUFnQiwyQkFBVTtBQUFDLFVBQUksSUFBRSxLQUFLLGFBQUwsQ0FBUCxJQUEwQixDQUFLLG9CQUFMLEdBQTBCLEVBQTFCLEVBQTZCLEtBQUcsRUFBRSxlQUFGLEVBQUgsQ0FBdkQ7S0FBVixFQUF5RiwwQkFBeUIsb0NBQVU7QUFBQyxVQUFJLElBQUUsS0FBSyxhQUFMLENBQVAsSUFBMEIsQ0FBSyw2QkFBTCxHQUFtQyxFQUFuQyxFQUFzQyxLQUFHLEVBQUUsd0JBQUYsRUFBSCxFQUFnQyxLQUFLLGVBQUwsRUFBdEUsQ0FBMUI7S0FBVixFQUE3VixFQUFnZSxFQUFFLElBQUYsQ0FBTyxFQUFDLFlBQVcsV0FBWCxFQUF1QixZQUFXLFVBQVgsRUFBc0IsY0FBYSxhQUFiLEVBQTJCLGNBQWEsWUFBYixFQUFoRixFQUEyRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxNQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLENBQWhCLElBQW1CLEVBQUMsY0FBYSxDQUFiLEVBQWUsVUFBUyxDQUFULEVBQVcsUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxZQUFJLENBQUo7WUFBTSxJQUFFLElBQUY7WUFBTyxJQUFFLEVBQUUsYUFBRjtZQUFnQixJQUFFLEVBQUUsU0FBRixDQUFsQyxPQUFxRCxNQUFJLE1BQUksQ0FBSixJQUFPLEVBQUUsUUFBRixDQUFXLENBQVgsRUFBYSxDQUFiLENBQVAsQ0FBSixLQUE4QixFQUFFLElBQUYsR0FBTyxFQUFFLFFBQUYsRUFBVyxJQUFFLEVBQUUsT0FBRixDQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBcUIsU0FBckIsQ0FBRixFQUFrQyxFQUFFLElBQUYsR0FBTyxDQUFQLENBQWxGLEVBQTRGLENBQTVGLENBQXJEO09BQVgsRUFBckQsQ0FBRDtHQUFiLENBQTc1SyxFQUFrb0wsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsSUFBRyxZQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxhQUFPLEdBQUcsSUFBSCxFQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksQ0FBWixFQUFjLENBQWQsQ0FBUCxDQUFEO0tBQWpCLEVBQTJDLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUMsYUFBTyxHQUFHLElBQUgsRUFBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLENBQVAsQ0FBRDtLQUFqQixFQUE2QyxLQUFJLGFBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxVQUFJLENBQUosRUFBTSxDQUFOLENBQUQsSUFBWSxLQUFHLEVBQUUsY0FBRixJQUFrQixFQUFFLFNBQUYsRUFBWSxPQUFPLElBQUUsRUFBRSxTQUFGLEVBQVksRUFBRSxFQUFFLGNBQUYsQ0FBRixDQUFvQixHQUFwQixDQUF3QixFQUFFLFNBQUYsR0FBWSxFQUFFLFFBQUYsR0FBVyxHQUFYLEdBQWUsRUFBRSxTQUFGLEdBQVksRUFBRSxRQUFGLEVBQVcsRUFBRSxRQUFGLEVBQVcsRUFBRSxPQUFGLENBQW5HLEVBQThHLElBQTlHLENBQTNDLElBQWlLLG9CQUFpQiw2Q0FBakIsRUFBbUI7QUFBQyxhQUFJLENBQUosSUFBUyxDQUFUO0FBQVcsZUFBSyxHQUFMLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxFQUFFLENBQUYsQ0FBYjtTQUFYLE9BQXFDLElBQVAsQ0FBL0I7T0FBdEIsT0FBd0UsTUFBSSxDQUFDLENBQUQsSUFBSSxjQUFZLE9BQU8sQ0FBUCxLQUFXLElBQUUsQ0FBRixFQUFJLElBQUUsS0FBSyxDQUFMLENBQXJDLEVBQTZDLE1BQUksQ0FBQyxDQUFELEtBQUssSUFBRSxFQUFGLENBQVQsRUFBZSxLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsVUFBRSxLQUFGLENBQVEsTUFBUixDQUFlLElBQWYsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsRUFBRDtPQUFWLENBQXRFLENBQS9PO0tBQWYsRUFBaEgsQ0FBbG9MLENBRHA4SixJQUN5aVcsS0FBRywwRUFBSDtNQUE4RSxLQUFHLHVCQUFIO01BQTJCLEtBQUcsbUNBQUg7TUFBdUMsS0FBRyxhQUFIO01BQWlCLEtBQUcsMENBQUgsQ0FEMXNXLFNBQ2l3VyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0I7QUFBQyxXQUFPLEVBQUUsUUFBRixDQUFXLENBQVgsRUFBYSxPQUFiLEtBQXVCLEVBQUUsUUFBRixDQUFXLE9BQUssRUFBRSxRQUFGLEdBQVcsQ0FBaEIsR0FBa0IsRUFBRSxVQUFGLEVBQWEsSUFBMUMsQ0FBdkIsR0FBdUUsRUFBRSxvQkFBRixDQUF1QixPQUF2QixFQUFnQyxDQUFoQyxLQUFvQyxFQUFFLFdBQUYsQ0FBYyxFQUFFLGFBQUYsQ0FBZ0IsYUFBaEIsQ0FBOEIsT0FBOUIsQ0FBZCxDQUFwQyxHQUEwRixDQUFqSyxDQUFSO0dBQWhCLFNBQW9NLEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxXQUFPLEVBQUUsSUFBRixHQUFPLENBQUMsU0FBTyxFQUFFLFlBQUYsQ0FBZSxNQUFmLENBQVAsQ0FBRCxHQUFnQyxHQUFoQyxHQUFvQyxFQUFFLElBQUYsRUFBTyxDQUFsRCxDQUFSO0dBQWQsU0FBbUYsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLFFBQUksSUFBRSxHQUFHLElBQUgsQ0FBUSxFQUFFLElBQUYsQ0FBVixDQUFMLE9BQThCLElBQUUsRUFBRSxJQUFGLEdBQU8sRUFBRSxDQUFGLENBQVAsR0FBWSxFQUFFLGVBQUYsQ0FBa0IsTUFBbEIsQ0FBZCxFQUF3QyxDQUF4QyxDQUE5QjtHQUFkLFNBQStGLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQjtBQUFDLFFBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLENBQUQsSUFBd0IsTUFBSSxFQUFFLFFBQUYsRUFBVztBQUFDLFVBQUcsRUFBRSxPQUFGLENBQVUsQ0FBVixNQUFlLElBQUUsRUFBRSxNQUFGLENBQVMsQ0FBVCxDQUFGLEVBQWMsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFGLEVBQWEsSUFBRSxFQUFFLE1BQUYsQ0FBNUMsRUFBc0Q7QUFBQyxlQUFPLEVBQUUsTUFBRixFQUFTLEVBQUUsTUFBRixHQUFTLEVBQVQsQ0FBakIsS0FBaUMsQ0FBSixJQUFTLENBQVQ7QUFBVyxlQUFJLElBQUUsQ0FBRixFQUFJLElBQUUsRUFBRSxDQUFGLEVBQUssTUFBTCxFQUFZLElBQUUsQ0FBRixFQUFJLEdBQTFCO0FBQThCLGNBQUUsS0FBRixDQUFRLEdBQVIsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixFQUFFLENBQUYsRUFBSyxDQUFMLENBQWhCO1dBQTlCO1NBQVg7T0FBdEYsQ0FBd0osQ0FBRSxPQUFGLENBQVUsQ0FBVixNQUFlLElBQUUsRUFBRSxNQUFGLENBQVMsQ0FBVCxDQUFGLEVBQWMsSUFBRSxFQUFFLE1BQUYsQ0FBUyxFQUFULEVBQVksQ0FBWixDQUFGLEVBQWlCLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLENBQS9CLENBQWYsQ0FBeko7S0FBbEI7R0FBckMsU0FBb1IsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsUUFBSSxJQUFFLEVBQUUsUUFBRixDQUFXLFdBQVgsRUFBRixDQUFMLE9BQWdDLEtBQVUsQ0FBVixJQUFhLEVBQUUsSUFBRixDQUFPLEVBQUUsSUFBRixDQUFwQixHQUE0QixFQUFFLE9BQUYsR0FBVSxFQUFFLE9BQUYsR0FBVSxZQUFVLENBQVYsSUFBYSxlQUFhLENBQWIsS0FBaUIsRUFBRSxZQUFGLEdBQWUsRUFBRSxZQUFGLENBQTdDLENBQWhGO0dBQWhCLFNBQXNLLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQjtBQUFDLFFBQUUsRUFBRSxLQUFGLENBQVEsRUFBUixFQUFXLENBQVgsQ0FBRixDQUFELElBQXFCLENBQUo7UUFBTSxDQUFOO1FBQVEsQ0FBUjtRQUFVLENBQVY7UUFBWSxDQUFaO1FBQWMsQ0FBZDtRQUFnQixJQUFFLENBQUY7UUFBSSxJQUFFLEVBQUUsTUFBRjtRQUFTLElBQUUsSUFBRSxDQUFGO1FBQUksSUFBRSxFQUFFLENBQUYsQ0FBRjtRQUFPLElBQUUsRUFBRSxVQUFGLENBQWEsQ0FBYixDQUFGLENBQTdELElBQWtGLEtBQUcsSUFBRSxDQUFGLElBQUssWUFBVSxPQUFPLENBQVAsSUFBVSxDQUFDLEVBQUUsVUFBRixJQUFjLEdBQUcsSUFBSCxDQUFRLENBQVIsQ0FBeEMsRUFBbUQsT0FBTyxFQUFFLElBQUYsQ0FBTyxVQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLEVBQUYsQ0FBSyxDQUFMLENBQUYsQ0FBTCxDQUFlLEtBQUksRUFBRSxDQUFGLElBQUssRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLENBQVosRUFBYyxFQUFFLElBQUYsRUFBZCxDQUFMLENBQUosRUFBa0MsR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQWxDLENBQWY7S0FBWCxDQUFkLENBQXpELElBQW9KLE1BQUksSUFBRSxHQUFHLENBQUgsRUFBSyxFQUFFLENBQUYsRUFBSyxhQUFMLEVBQW1CLENBQUMsQ0FBRCxFQUFHLENBQTNCLEVBQTZCLENBQTdCLENBQUYsRUFBa0MsSUFBRSxFQUFFLFVBQUYsRUFBYSxNQUFJLEVBQUUsVUFBRixDQUFhLE1BQWIsS0FBc0IsSUFBRSxDQUFGLENBQTFCLEVBQStCLEtBQUcsQ0FBSCxDQUFwRixFQUEwRjtBQUFDLFdBQUksSUFBRSxFQUFFLEdBQUYsQ0FBTSxFQUFFLENBQUYsRUFBSSxRQUFKLENBQU4sRUFBb0IsRUFBcEIsQ0FBRixFQUEwQixJQUFFLEVBQUUsTUFBRixFQUFTLElBQUUsQ0FBRixFQUFJLEdBQTdDO0FBQWlELFlBQUUsQ0FBRixFQUFJLE1BQUksQ0FBSixLQUFRLElBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQUMsQ0FBRCxFQUFHLENBQUMsQ0FBRCxDQUFmLEVBQW1CLEtBQUcsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLEVBQUUsQ0FBRixFQUFJLFFBQUosQ0FBVixDQUFILENBQTNCLEVBQXdELEVBQUUsSUFBRixDQUFPLEVBQUUsQ0FBRixDQUFQLEVBQVksQ0FBWixFQUFjLENBQWQsQ0FBNUQ7T0FBakQsSUFBaUksQ0FBSCxFQUFLLEtBQUksSUFBRSxFQUFFLEVBQUUsTUFBRixHQUFTLENBQVQsQ0FBRixDQUFjLGFBQWQsRUFBNEIsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLEVBQVIsQ0FBOUIsRUFBMEMsSUFBRSxDQUFGLEVBQUksSUFBRSxDQUFGLEVBQUksR0FBdEQ7QUFBMEQsWUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLEVBQUUsSUFBRixDQUFPLEVBQUUsSUFBRixJQUFRLEVBQVIsQ0FBUCxJQUFvQixDQUFDLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxZQUFYLENBQUQsSUFBMkIsRUFBRSxRQUFGLENBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBL0MsS0FBaUUsRUFBRSxHQUFGLEdBQU0sRUFBRSxRQUFGLElBQVksRUFBRSxRQUFGLENBQVcsRUFBRSxHQUFGLENBQXZCLEdBQThCLEVBQUUsVUFBRixDQUFhLEVBQUUsV0FBRixDQUFjLE9BQWQsQ0FBc0IsRUFBdEIsRUFBeUIsRUFBekIsQ0FBYixDQUFwQyxDQUFqRTtPQUFqRTtLQUFqTyxPQUEwYixDQUFQLENBQW5wQjtHQUFwQixTQUF5ckIsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCO0FBQUMsU0FBSSxJQUFJLENBQUosRUFBTSxJQUFFLElBQUUsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBRixHQUFnQixDQUFoQixFQUFrQixJQUFFLENBQUYsRUFBSSxTQUFPLElBQUUsRUFBRSxDQUFGLENBQUYsQ0FBUCxFQUFlLEdBQWpEO0FBQXFELFdBQUcsTUFBSSxFQUFFLFFBQUYsSUFBWSxFQUFFLFNBQUYsQ0FBWSxFQUFFLENBQUYsQ0FBWixDQUFuQixFQUFxQyxFQUFFLFVBQUYsS0FBZSxLQUFHLEVBQUUsUUFBRixDQUFXLEVBQUUsYUFBRixFQUFnQixDQUEzQixDQUFILElBQWtDLEdBQUcsRUFBRSxDQUFGLEVBQUksUUFBSixDQUFILENBQWxDLEVBQW9ELEVBQUUsVUFBRixDQUFhLFdBQWIsQ0FBeUIsQ0FBekIsQ0FBcEQsQ0FBZjtLQUExRixPQUFpTSxDQUFQLENBQTNMO0dBQWxCLENBQXNOLENBQUUsTUFBRixDQUFTLEVBQUMsZUFBYyx1QkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsT0FBRixDQUFVLEVBQVYsRUFBYSxXQUFiLENBQVAsQ0FBRDtLQUFYLEVBQThDLE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksQ0FBSjtVQUFNLENBQU47VUFBUSxDQUFSO1VBQVUsQ0FBVjtVQUFZLElBQUUsRUFBRSxTQUFGLENBQVksQ0FBQyxDQUFELENBQWQ7VUFBa0IsSUFBRSxFQUFFLFFBQUYsQ0FBVyxFQUFFLGFBQUYsRUFBZ0IsQ0FBM0IsQ0FBRixDQUEvQixJQUFrRSxFQUFFLEVBQUUsY0FBRixJQUFrQixNQUFJLEVBQUUsUUFBRixJQUFZLE9BQUssRUFBRSxRQUFGLElBQVksRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUFuRCxDQUFGLEVBQW9FLEtBQUksSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLElBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxJQUFFLENBQUYsRUFBSSxJQUFFLEVBQUUsTUFBRixFQUFTLElBQUUsQ0FBRixFQUFJLEdBQXJDO0FBQXlDLFdBQUcsRUFBRSxDQUFGLENBQUgsRUFBUSxFQUFFLENBQUYsQ0FBUjtPQUF6QyxJQUEwRCxDQUFILEVBQUssSUFBRyxDQUFILEVBQUssS0FBSSxJQUFFLEtBQUcsRUFBRSxDQUFGLENBQUgsRUFBUSxJQUFFLEtBQUcsRUFBRSxDQUFGLENBQUgsRUFBUSxJQUFFLENBQUYsRUFBSSxJQUFFLEVBQUUsTUFBRixFQUFTLElBQUUsQ0FBRixFQUFJLEdBQTNDO0FBQStDLFdBQUcsRUFBRSxDQUFGLENBQUgsRUFBUSxFQUFFLENBQUYsQ0FBUjtPQUEvQyxNQUFrRSxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQXZFLE9BQXNGLElBQUUsRUFBRSxDQUFGLEVBQUksUUFBSixDQUFGLEVBQWdCLEVBQUUsTUFBRixHQUFTLENBQVQsSUFBWSxHQUFHLENBQUgsRUFBSyxDQUFDLENBQUQsSUFBSSxFQUFFLENBQUYsRUFBSSxRQUFKLENBQUosQ0FBakIsRUFBb0MsQ0FBcEQsQ0FBeFI7S0FBZixFQUE4VixXQUFVLG1CQUFTLENBQVQsRUFBVztBQUFDLFdBQUksSUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxJQUFFLEVBQUUsS0FBRixDQUFRLE9BQVIsRUFBZ0IsSUFBRSxDQUFGLEVBQUksS0FBSyxDQUFMLE1BQVUsSUFBRSxFQUFFLENBQUYsQ0FBRixDQUFWLEVBQWtCLEdBQXREO0FBQTBELFlBQUcsRUFBRSxDQUFGLENBQUgsRUFBUTtBQUFDLGNBQUcsSUFBRSxFQUFFLEVBQUUsT0FBRixDQUFKLEVBQWU7QUFBQyxnQkFBRyxFQUFFLE1BQUYsRUFBUyxLQUFJLENBQUosSUFBUyxFQUFFLE1BQUY7QUFBUyxnQkFBRSxDQUFGLElBQUssRUFBRSxLQUFGLENBQVEsTUFBUixDQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBTCxHQUF5QixFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLEVBQUUsTUFBRixDQUEzQzthQUFsQixDQUF1RSxDQUFFLEVBQUUsT0FBRixDQUFGLEdBQWEsS0FBSyxDQUFMLENBQWpHO1dBQWxCLENBQTBILENBQUUsRUFBRSxPQUFGLENBQUYsS0FBZSxFQUFFLEVBQUUsT0FBRixDQUFGLEdBQWEsS0FBSyxDQUFMLENBQTVCLENBQTNIO1NBQVI7T0FBMUQ7S0FBWixFQUFwYixHQUFxcUIsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsVUFBUyxFQUFULEVBQVksUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEdBQUcsSUFBSCxFQUFRLENBQVIsRUFBVSxDQUFDLENBQUQsQ0FBakIsQ0FBRDtLQUFYLEVBQWtDLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxHQUFHLElBQUgsRUFBUSxDQUFSLENBQVAsQ0FBRDtLQUFYLEVBQStCLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsSUFBRixFQUFPLFVBQVMsQ0FBVCxFQUFXO0FBQUMsZUFBTyxLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsRUFBRSxJQUFGLENBQU8sSUFBUCxDQUFYLEdBQXdCLEtBQUssS0FBTCxHQUFhLElBQWIsQ0FBa0IsWUFBVTtBQUFDLGdCQUFJLEtBQUssUUFBTCxJQUFlLE9BQUssS0FBSyxRQUFMLElBQWUsTUFBSSxLQUFLLFFBQUwsS0FBZ0IsS0FBSyxXQUFMLEdBQWlCLENBQWpCLENBQTNELENBQUQ7U0FBVixDQUExQyxDQUFSO09BQVgsRUFBMEosSUFBakssRUFBc0ssQ0FBdEssRUFBd0ssVUFBVSxNQUFWLENBQS9LLENBQUQ7S0FBWCxFQUE4TSxRQUFPLGtCQUFVO0FBQUMsYUFBTyxHQUFHLElBQUgsRUFBUSxTQUFSLEVBQWtCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBRyxNQUFJLEtBQUssUUFBTCxJQUFlLE9BQUssS0FBSyxRQUFMLElBQWUsTUFBSSxLQUFLLFFBQUwsRUFBYztBQUFDLGNBQUksSUFBRSxHQUFHLElBQUgsRUFBUSxDQUFSLENBQUYsQ0FBTCxDQUFrQixDQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWxCO1NBQTVEO09BQVosQ0FBekIsQ0FBRDtLQUFWLEVBQW1KLFNBQVEsbUJBQVU7QUFBQyxhQUFPLEdBQUcsSUFBSCxFQUFRLFNBQVIsRUFBa0IsVUFBUyxDQUFULEVBQVc7QUFBQyxZQUFHLE1BQUksS0FBSyxRQUFMLElBQWUsT0FBSyxLQUFLLFFBQUwsSUFBZSxNQUFJLEtBQUssUUFBTCxFQUFjO0FBQUMsY0FBSSxJQUFFLEdBQUcsSUFBSCxFQUFRLENBQVIsQ0FBRixDQUFMLENBQWtCLENBQUUsWUFBRixDQUFlLENBQWYsRUFBaUIsRUFBRSxVQUFGLENBQWpCLENBQWxCO1NBQTVEO09BQVosQ0FBekIsQ0FBRDtLQUFWLEVBQWlLLFFBQU8sa0JBQVU7QUFBQyxhQUFPLEdBQUcsSUFBSCxFQUFRLFNBQVIsRUFBa0IsVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFLLFVBQUwsSUFBaUIsS0FBSyxVQUFMLENBQWdCLFlBQWhCLENBQTZCLENBQTdCLEVBQStCLElBQS9CLENBQWpCLENBQUQ7T0FBWCxDQUF6QixDQUFEO0tBQVYsRUFBeUcsT0FBTSxpQkFBVTtBQUFDLGFBQU8sR0FBRyxJQUFILEVBQVEsU0FBUixFQUFrQixVQUFTLENBQVQsRUFBVztBQUFDLGFBQUssVUFBTCxJQUFpQixLQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBNkIsQ0FBN0IsRUFBK0IsS0FBSyxXQUFMLENBQWhELENBQUQ7T0FBWCxDQUF6QixDQUFEO0tBQVYsRUFBcUgsT0FBTSxpQkFBVTtBQUFDLFdBQUksSUFBSSxDQUFKLEVBQU0sSUFBRSxDQUFGLEVBQUksU0FBTyxJQUFFLEtBQUssQ0FBTCxDQUFGLENBQVAsRUFBa0IsR0FBaEM7QUFBb0MsY0FBSSxFQUFFLFFBQUYsS0FBYSxFQUFFLFNBQUYsQ0FBWSxFQUFFLENBQUYsRUFBSSxDQUFDLENBQUQsQ0FBaEIsR0FBcUIsRUFBRSxXQUFGLEdBQWMsRUFBZCxDQUF0QztPQUFwQyxPQUFtRyxJQUFQLENBQTdGO0tBQVYsRUFBb0gsT0FBTSxlQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLElBQUUsUUFBTSxDQUFOLEdBQVEsQ0FBQyxDQUFELEdBQUcsQ0FBWCxFQUFhLElBQUUsUUFBTSxDQUFOLEdBQVEsQ0FBUixHQUFVLENBQVYsRUFBWSxLQUFLLEdBQUwsQ0FBUyxZQUFVO0FBQUMsZUFBTyxFQUFFLEtBQUYsQ0FBUSxJQUFSLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBUCxDQUFEO09BQVYsQ0FBdEMsQ0FBUjtLQUFiLEVBQWtHLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsSUFBRixFQUFPLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxJQUFFLEtBQUssQ0FBTCxLQUFTLEVBQVQ7WUFBWSxJQUFFLENBQUY7WUFBSSxJQUFFLEtBQUssTUFBTCxDQUF6QixJQUF3QyxLQUFLLENBQUwsS0FBUyxDQUFULElBQVksTUFBSSxFQUFFLFFBQUYsRUFBVyxPQUFPLEVBQUUsU0FBRixDQUFyQyxJQUFvRCxZQUFVLE9BQU8sQ0FBUCxJQUFVLENBQUMsR0FBRyxJQUFILENBQVEsQ0FBUixDQUFELElBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFGLENBQU8sQ0FBUCxLQUFXLENBQUMsRUFBRCxFQUFJLEVBQUosQ0FBWCxDQUFELENBQXFCLENBQXJCLEVBQXdCLFdBQXhCLEVBQUYsQ0FBRCxFQUEwQztBQUFDLGNBQUUsRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQUYsQ0FBRCxJQUF5QjtBQUFDLG1CQUFLLElBQUUsQ0FBRixFQUFJLEdBQVQ7QUFBYSxrQkFBRSxLQUFLLENBQUwsS0FBUyxFQUFULEVBQVksTUFBSSxFQUFFLFFBQUYsS0FBYSxFQUFFLFNBQUYsQ0FBWSxFQUFFLENBQUYsRUFBSSxDQUFDLENBQUQsQ0FBaEIsR0FBcUIsRUFBRSxTQUFGLEdBQVksQ0FBWixDQUF0QzthQUEzQixDQUFnRixHQUFFLENBQUYsQ0FBakY7V0FBSCxDQUF3RixPQUFNLENBQU4sRUFBUSxFQUFSO1NBQTVMLENBQXVNLElBQUcsS0FBSyxLQUFMLEdBQWEsTUFBYixDQUFvQixDQUFwQixDQUFILENBQTdSO09BQVgsRUFBbVUsSUFBMVUsRUFBK1UsQ0FBL1UsRUFBaVYsVUFBVSxNQUFWLENBQXhWLENBQUQ7S0FBWCxFQUF1WCxhQUFZLHVCQUFVO0FBQUMsVUFBSSxJQUFFLEVBQUYsQ0FBTCxPQUFpQixHQUFHLElBQUgsRUFBUSxTQUFSLEVBQWtCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxJQUFFLEtBQUssVUFBTCxDQUFQLENBQXVCLENBQUUsT0FBRixDQUFVLElBQVYsRUFBZSxDQUFmLElBQWtCLENBQWxCLEtBQXNCLEVBQUUsU0FBRixDQUFZLEVBQUUsSUFBRixDQUFaLEdBQXFCLEtBQUcsRUFBRSxZQUFGLENBQWUsQ0FBZixFQUFpQixJQUFqQixDQUFILENBQTNDLENBQXZCO09BQVgsRUFBeUcsQ0FBM0gsQ0FBUCxDQUFWO0tBQVYsRUFBbjlDLENBQXJxQixFQUFveEUsRUFBRSxJQUFGLENBQU8sRUFBQyxVQUFTLFFBQVQsRUFBa0IsV0FBVSxTQUFWLEVBQW9CLGNBQWEsUUFBYixFQUFzQixhQUFZLE9BQVosRUFBb0IsWUFBVyxhQUFYLEVBQXhGLEVBQWtILFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUUsRUFBRixDQUFLLENBQUwsSUFBUSxVQUFTLENBQVQsRUFBVztBQUFDLFdBQUksSUFBSSxDQUFKLEVBQU0sSUFBRSxFQUFGLEVBQUssSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLElBQUUsRUFBRSxNQUFGLEdBQVMsQ0FBVCxFQUFXLElBQUUsQ0FBRixFQUFJLEtBQUcsQ0FBSCxFQUFLLEdBQTVDO0FBQWdELFlBQUUsTUFBSSxDQUFKLEdBQU0sSUFBTixHQUFXLEtBQUssS0FBTCxDQUFXLENBQUMsQ0FBRCxDQUF0QixFQUEwQixFQUFFLEVBQUUsQ0FBRixDQUFGLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBNUIsRUFBMEMsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLEVBQUUsR0FBRixFQUFWLENBQTFDO09BQWhELE9BQW9ILEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBUCxDQUE5RztLQUFYLENBQVQ7R0FBYixDQUF0NEUsQ0FEajRaLElBQ3M3ZSxFQUFKO01BQU8sS0FBRyxFQUFDLE1BQUssT0FBTCxFQUFhLE1BQUssT0FBTCxFQUFqQixDQUR6N2UsU0FDaStlLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQjtBQUFDLFFBQUksSUFBRSxFQUFFLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUFGLEVBQXNCLFFBQXRCLENBQStCLEVBQUUsSUFBRixDQUFqQztRQUF5QyxJQUFFLEVBQUUsR0FBRixDQUFNLEVBQUUsQ0FBRixDQUFOLEVBQVcsU0FBWCxDQUFGLENBQTlDLE9BQTZFLEVBQUUsTUFBRixJQUFXLENBQVgsQ0FBN0U7R0FBaEIsU0FBbUgsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLFFBQUksSUFBRSxDQUFGO1FBQUksSUFBRSxHQUFHLENBQUgsQ0FBRixDQUFULE9BQXdCLE1BQUksSUFBRSxHQUFHLENBQUgsRUFBSyxDQUFMLENBQUYsRUFBVSxXQUFTLENBQVQsSUFBWSxDQUFaLEtBQWdCLEtBQUcsQ0FBQyxNQUFJLEVBQUUsZ0RBQUYsQ0FBSixDQUFELENBQTBELFFBQTFELENBQW1FLEVBQUUsZUFBRixDQUF0RSxFQUF5RixJQUFFLEdBQUcsQ0FBSCxFQUFNLGVBQU4sRUFBc0IsRUFBRSxLQUFGLEVBQWpILEVBQTJILEVBQUUsS0FBRixFQUEzSCxFQUFxSSxJQUFFLEdBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBRixFQUFVLEdBQUcsTUFBSCxFQUEvSSxDQUFoQixFQUE0SyxHQUFHLENBQUgsSUFBTSxDQUFOLENBQTFMLEVBQW1NLENBQW5NLENBQXhCO0dBQWQsSUFBK08sS0FBRyxTQUFIO01BQWEsS0FBRyxJQUFJLE1BQUosQ0FBVyxPQUFLLENBQUwsR0FBTyxpQkFBUCxFQUF5QixHQUFwQyxDQUFIO01BQTRDLEtBQUcsU0FBSCxFQUFHLENBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBSSxJQUFFLEVBQUUsYUFBRixDQUFnQixXQUFoQixDQUFQLE9BQTBDLEtBQUcsRUFBRSxNQUFGLEtBQVcsSUFBRSxDQUFGLENBQWQsRUFBbUIsRUFBRSxnQkFBRixDQUFtQixDQUFuQixDQUFuQixDQUExQztHQUFYO01BQStGLEtBQUcsU0FBSCxFQUFHLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFFBQUksQ0FBSjtRQUFNLENBQU47UUFBUSxJQUFFLEVBQUYsQ0FBVCxLQUFrQixDQUFKLElBQVMsQ0FBVDtBQUFXLFFBQUUsQ0FBRixJQUFLLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBTCxFQUFnQixFQUFFLEtBQUYsQ0FBUSxDQUFSLElBQVcsRUFBRSxDQUFGLENBQVg7S0FBM0IsQ0FBMkMsR0FBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsS0FBRyxFQUFILENBQVosQ0FBekQsS0FBZ0YsQ0FBSixJQUFTLENBQVQ7QUFBVyxRQUFFLEtBQUYsQ0FBUSxDQUFSLElBQVcsRUFBRSxDQUFGLENBQVg7S0FBWCxPQUFrQyxDQUFQLENBQXZHO0dBQWpCO01BQWtJLEtBQUcsRUFBRSxlQUFGLENBRHBsZ0IsQ0FDdW1nQixZQUFVO0FBQUMsUUFBSSxDQUFKO1FBQU0sQ0FBTjtRQUFRLENBQVI7UUFBVSxDQUFWO1FBQVksSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FBRjtRQUF5QixJQUFFLEVBQUUsYUFBRixDQUFnQixLQUFoQixDQUFGLENBQXRDLElBQWtFLEVBQUUsS0FBRixFQUFROztZQUE2USxJQUFULFNBQVMsQ0FBVCxHQUFZO0FBQUMsWUFBRSxLQUFGLENBQVEsT0FBUixHQUFnQixvS0FBaEIsRUFBcUwsRUFBRSxTQUFGLEdBQVksRUFBWixFQUFlLEdBQUcsV0FBSCxDQUFlLENBQWYsQ0FBcE0sQ0FBRCxJQUEyTixJQUFFLEVBQUUsZ0JBQUYsQ0FBbUIsQ0FBbkIsQ0FBRixDQUEzTixDQUFtUCxHQUFFLFNBQU8sRUFBRSxHQUFGLEVBQU0sSUFBRSxVQUFRLEVBQUUsVUFBRixFQUFhLElBQUUsVUFBUSxFQUFFLEtBQUYsRUFBUSxFQUFFLEtBQUYsQ0FBUSxXQUFSLEdBQW9CLEtBQXBCLEVBQTBCLElBQUUsVUFBUSxFQUFFLFdBQUYsRUFBYyxHQUFHLFdBQUgsQ0FBZSxDQUFmLENBQTFHLENBQW5QO1NBQVo7O0FBQW5RLFVBQUUsS0FBRixDQUFRLGNBQVIsR0FBdUIsYUFBdkIsRUFBcUMsRUFBRSxTQUFGLENBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsS0FBaEIsQ0FBc0IsY0FBdEIsR0FBcUMsRUFBckMsRUFBd0MsRUFBRSxlQUFGLEdBQWtCLGtCQUFnQixFQUFFLEtBQUYsQ0FBUSxjQUFSLEVBQXVCLEVBQUUsS0FBRixDQUFRLE9BQVIsR0FBZ0IsMkZBQWhCLEVBQTRHLEVBQUUsV0FBRixDQUFjLENBQWQsQ0FBbFAsQ0FBOG5CLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxFQUFDLGVBQWMseUJBQVU7QUFBQyxtQkFBTyxLQUFJLENBQUosQ0FBUjtXQUFWLEVBQXlCLG1CQUFrQiw2QkFBVTtBQUFDLG1CQUFPLFFBQU0sQ0FBTixJQUFTLEdBQVQsRUFBYSxDQUFiLENBQVI7V0FBVixFQUFrQyxrQkFBaUIsNEJBQVU7QUFBQyxtQkFBTyxRQUFNLENBQU4sSUFBUyxHQUFULEVBQWEsQ0FBYixDQUFSO1dBQVYsRUFBa0Msb0JBQW1CLDhCQUFVO0FBQUMsbUJBQU8sUUFBTSxDQUFOLElBQVMsR0FBVCxFQUFhLENBQWIsQ0FBUjtXQUFWLEVBQWtDLHFCQUFvQiwrQkFBVTtBQUFDLGdCQUFJLENBQUo7Z0JBQU0sSUFBRSxFQUFFLFdBQUYsQ0FBYyxFQUFFLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FBZCxDQUFGLENBQVAsT0FBc0QsRUFBRSxLQUFGLENBQVEsT0FBUixHQUFnQixFQUFFLEtBQUYsQ0FBUSxPQUFSLEdBQWdCLGlHQUFoQixFQUFrSCxFQUFFLEtBQUYsQ0FBUSxXQUFSLEdBQW9CLEVBQUUsS0FBRixDQUFRLEtBQVIsR0FBYyxHQUFkLEVBQWtCLEVBQUUsS0FBRixDQUFRLEtBQVIsR0FBYyxLQUFkLEVBQW9CLEdBQUcsV0FBSCxDQUFlLENBQWYsQ0FBNUwsRUFBOE0sSUFBRSxDQUFDLFdBQVcsRUFBRSxnQkFBRixDQUFtQixDQUFuQixFQUFzQixXQUF0QixDQUFaLEVBQStDLEdBQUcsV0FBSCxDQUFlLENBQWYsQ0FBL1AsRUFBaVIsRUFBRSxXQUFGLENBQWMsQ0FBZCxDQUFqUixFQUFrUyxDQUFsUyxDQUF0RDtXQUFWLEVBQW5PO1dBQS9uQjtLQUFYO0dBQXpFLEVBQUQsQ0FEdG1nQixTQUNpNWlCLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQjtBQUFDLFFBQUksQ0FBSjtRQUFNLENBQU47UUFBUSxDQUFSO1FBQVUsQ0FBVjtRQUFZLElBQUUsRUFBRSxLQUFGLENBQWYsT0FBOEIsSUFBRSxLQUFHLEdBQUcsQ0FBSCxDQUFILEVBQVMsSUFBRSxJQUFFLEVBQUUsZ0JBQUYsQ0FBbUIsQ0FBbkIsS0FBdUIsRUFBRSxDQUFGLENBQXZCLEdBQTRCLEtBQUssQ0FBTCxFQUFPLE9BQUssQ0FBTCxJQUFRLEtBQUssQ0FBTCxLQUFTLENBQVQsSUFBWSxFQUFFLFFBQUYsQ0FBVyxFQUFFLGFBQUYsRUFBZ0IsQ0FBM0IsQ0FBcEIsS0FBb0QsSUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFGLENBQXBELEVBQW9FLEtBQUcsQ0FBQyxFQUFFLGdCQUFGLEVBQUQsSUFBdUIsR0FBRyxJQUFILENBQVEsQ0FBUixDQUExQixJQUFzQyxHQUFHLElBQUgsQ0FBUSxDQUFSLENBQXRDLEtBQW1ELElBQUUsRUFBRSxLQUFGLEVBQVEsSUFBRSxFQUFFLFFBQUYsRUFBVyxJQUFFLEVBQUUsUUFBRixFQUFXLEVBQUUsUUFBRixHQUFXLEVBQUUsUUFBRixHQUFXLEVBQUUsS0FBRixHQUFRLENBQVIsRUFBVSxJQUFFLEVBQUUsS0FBRixFQUFRLEVBQUUsS0FBRixHQUFRLENBQVIsRUFBVSxFQUFFLFFBQUYsR0FBVyxDQUFYLEVBQWEsRUFBRSxRQUFGLEdBQVcsQ0FBWCxDQUF4SixFQUFzSyxLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsSUFBRSxFQUFGLEdBQUssQ0FBaEIsQ0FBMVQ7R0FBbEIsU0FBdVcsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsV0FBTSxFQUFDLEtBQUksZUFBVTtBQUFDLGVBQU8sTUFBSSxLQUFLLE9BQU8sS0FBSyxHQUFMLEdBQVMsQ0FBQyxLQUFLLEdBQUwsR0FBUyxDQUFULENBQUQsQ0FBYSxLQUFiLENBQW1CLElBQW5CLEVBQXdCLFNBQXhCLENBQXpCLENBQVI7T0FBVixFQUFYLENBQUQ7R0FBaEIsSUFBZ0gsS0FBRywyQkFBSDtNQUErQixLQUFHLEVBQUMsVUFBUyxVQUFULEVBQW9CLFlBQVcsUUFBWCxFQUFvQixTQUFRLE9BQVIsRUFBNUM7TUFBNkQsS0FBRyxFQUFDLGVBQWMsR0FBZCxFQUFrQixZQUFXLEtBQVgsRUFBdEI7TUFBd0MsS0FBRyxDQUFDLFFBQUQsRUFBVSxHQUFWLEVBQWMsS0FBZCxFQUFvQixJQUFwQixDQUFIO01BQTZCLEtBQUcsRUFBRSxhQUFGLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLENBRDEvakIsU0FDZ2lrQixFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsUUFBRyxLQUFLLEVBQUwsRUFBUSxPQUFPLENBQVAsQ0FBWCxJQUF3QixJQUFFLEVBQUUsQ0FBRixFQUFLLFdBQUwsS0FBbUIsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFuQjtRQUE4QixJQUFFLEdBQUcsTUFBSCxDQUEzRCxPQUEyRSxHQUFOO0FBQVUsVUFBRyxJQUFFLEdBQUcsQ0FBSCxJQUFNLENBQU4sRUFBUSxLQUFLLEVBQUwsRUFBUSxPQUFPLENBQVAsQ0FBckI7S0FBVjtHQUFuRixTQUFvSSxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0I7QUFBQyxRQUFJLElBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFGLENBQUwsT0FBd0IsSUFBRSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVcsRUFBRSxDQUFGLEtBQU0sS0FBRyxDQUFILENBQU4sQ0FBWCxJQUF5QixFQUFFLENBQUYsS0FBTSxJQUFOLENBQXpCLEdBQXFDLENBQXZDLENBQXhCO0dBQWxCLFNBQTRGLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQjtBQUFDLFNBQUksSUFBSSxJQUFFLE9BQUssSUFBRSxRQUFGLEdBQVcsU0FBWCxDQUFMLEdBQTJCLENBQTNCLEdBQTZCLFlBQVUsQ0FBVixHQUFZLENBQVosR0FBYyxDQUFkLEVBQWdCLElBQUUsQ0FBRixFQUFJLElBQUUsQ0FBRixFQUFJLEtBQUcsQ0FBSDtBQUFLLG1CQUFXLENBQVgsS0FBZSxLQUFHLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sQ0FBQyxDQUFELEVBQUcsQ0FBbEIsQ0FBSCxDQUFmLEVBQXdDLEtBQUcsY0FBWSxDQUFaLEtBQWdCLEtBQUcsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFlBQVUsRUFBRSxDQUFGLENBQVYsRUFBZSxDQUFDLENBQUQsRUFBRyxDQUExQixDQUFILENBQWhCLEVBQWlELGFBQVcsQ0FBWCxLQUFlLEtBQUcsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFdBQVMsRUFBRSxDQUFGLENBQVQsR0FBYyxPQUFkLEVBQXNCLENBQUMsQ0FBRCxFQUFHLENBQWpDLENBQUgsQ0FBZixDQUFwRCxJQUE2RyxLQUFHLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxZQUFVLEVBQUUsQ0FBRixDQUFWLEVBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBMUIsQ0FBSCxFQUFnQyxjQUFZLENBQVosS0FBZ0IsS0FBRyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsV0FBUyxFQUFFLENBQUYsQ0FBVCxHQUFjLE9BQWQsRUFBc0IsQ0FBQyxDQUFELEVBQUcsQ0FBakMsQ0FBSCxDQUFoQixDQUE3STtLQUE1RyxPQUF5VCxDQUFQLENBQW5UO0dBQXRCLFNBQTJWLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQjtBQUFDLFFBQUksSUFBRSxDQUFDLENBQUQ7UUFBRyxJQUFFLFlBQVUsQ0FBVixHQUFZLEVBQUUsV0FBRixHQUFjLEVBQUUsWUFBRjtRQUFlLElBQUUsR0FBRyxDQUFILENBQUY7UUFBUSxJQUFFLGlCQUFlLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxXQUFSLEVBQW9CLENBQUMsQ0FBRCxFQUFHLENBQXZCLENBQWYsQ0FBL0QsSUFBMkcsRUFBRSxtQkFBRixJQUF1QixFQUFFLEdBQUYsS0FBUSxDQUFSLElBQVcsRUFBRSxjQUFGLEdBQW1CLE1BQW5CLEtBQTRCLElBQUUsS0FBSyxLQUFMLENBQVcsTUFBSSxFQUFFLHFCQUFGLEdBQTBCLENBQTFCLENBQUosQ0FBYixDQUE5RCxFQUE4RyxLQUFHLENBQUgsSUFBTSxRQUFNLENBQU4sRUFBUTtBQUFDLFVBQUcsSUFBRSxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFGLEVBQVksQ0FBQyxJQUFFLENBQUYsSUFBSyxRQUFNLENBQU4sQ0FBTixLQUFpQixJQUFFLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBRixDQUFqQixFQUErQixHQUFHLElBQUgsQ0FBUSxDQUFSLENBQTNDLEVBQXNELE9BQU8sQ0FBUCxDQUF6RCxDQUFrRSxHQUFFLE1BQUksRUFBRSxpQkFBRixNQUF1QixNQUFJLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBSixDQUEzQixFQUEyQyxJQUFFLFdBQVcsQ0FBWCxLQUFlLENBQWYsQ0FBbEg7S0FBL0gsT0FBeVEsSUFBRSxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sTUFBSSxJQUFFLFFBQUYsR0FBVyxTQUFYLENBQUosRUFBMEIsQ0FBakMsRUFBbUMsQ0FBbkMsQ0FBRixHQUF3QyxJQUF4QyxDQUFqWDtHQUFsQixTQUF5YixFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0I7QUFBQyxTQUFJLElBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsSUFBRSxFQUFGLEVBQUssSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLENBQUYsRUFBSSxHQUF0QztBQUEwQyxVQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sRUFBRSxLQUFGLEtBQVUsRUFBRSxDQUFGLElBQUssRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFlBQVIsQ0FBTCxFQUEyQixJQUFFLEVBQUUsS0FBRixDQUFRLE9BQVIsRUFBZ0IsS0FBRyxFQUFFLENBQUYsS0FBTSxXQUFTLENBQVQsS0FBYSxFQUFFLEtBQUYsQ0FBUSxPQUFSLEdBQWdCLEVBQWhCLENBQW5CLEVBQXVDLE9BQUssRUFBRSxLQUFGLENBQVEsT0FBUixJQUFpQixFQUFFLENBQUYsQ0FBdEIsS0FBNkIsRUFBRSxDQUFGLElBQUssRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLFlBQVgsRUFBd0IsR0FBRyxFQUFFLFFBQUYsQ0FBM0IsQ0FBTCxDQUE3QixDQUExQyxJQUF1SCxJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sV0FBUyxDQUFULElBQVksQ0FBWixJQUFlLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxZQUFSLEVBQXFCLElBQUUsQ0FBRixHQUFJLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxTQUFSLENBQUosQ0FBcEMsQ0FBOUgsQ0FBdkQ7S0FBakQsS0FBd1MsSUFBRSxDQUFGLEVBQUksSUFBRSxDQUFGLEVBQUksR0FBWjtBQUFnQixVQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sRUFBRSxLQUFGLEtBQVUsS0FBRyxXQUFTLEVBQUUsS0FBRixDQUFRLE9BQVIsSUFBaUIsT0FBSyxFQUFFLEtBQUYsQ0FBUSxPQUFSLEtBQWtCLEVBQUUsS0FBRixDQUFRLE9BQVIsR0FBZ0IsSUFBRSxFQUFFLENBQUYsS0FBTSxFQUFOLEdBQVMsTUFBWCxDQUFwRSxDQUFWO0tBQXZCLE9BQWdJLENBQVAsQ0FBOVo7R0FBaEIsQ0FBdWIsQ0FBRSxNQUFGLENBQVMsRUFBQyxVQUFTLEVBQUMsU0FBUSxFQUFDLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsY0FBRyxDQUFILEVBQUs7QUFBQyxnQkFBSSxJQUFFLEdBQUcsQ0FBSCxFQUFLLFNBQUwsQ0FBRixDQUFMLE9BQTZCLE9BQUssQ0FBTCxHQUFPLEdBQVAsR0FBVyxDQUFYLENBQTdCO1dBQUw7U0FBZCxFQUFiLEVBQVYsRUFBd0YsV0FBVSxFQUFDLHlCQUF3QixDQUFDLENBQUQsRUFBRyxhQUFZLENBQUMsQ0FBRCxFQUFHLGFBQVksQ0FBQyxDQUFELEVBQUcsVUFBUyxDQUFDLENBQUQsRUFBRyxZQUFXLENBQUMsQ0FBRCxFQUFHLFlBQVcsQ0FBQyxDQUFELEVBQUcsWUFBVyxDQUFDLENBQUQsRUFBRyxTQUFRLENBQUMsQ0FBRCxFQUFHLE9BQU0sQ0FBQyxDQUFELEVBQUcsU0FBUSxDQUFDLENBQUQsRUFBRyxRQUFPLENBQUMsQ0FBRCxFQUFHLFFBQU8sQ0FBQyxDQUFELEVBQUcsTUFBSyxDQUFDLENBQUQsRUFBbEwsRUFBc0wsVUFBUyxFQUFDLFNBQVEsVUFBUixFQUFWLEVBQThCLE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUMsVUFBRyxLQUFHLE1BQUksRUFBRSxRQUFGLElBQVksTUFBSSxFQUFFLFFBQUYsSUFBWSxFQUFFLEtBQUYsRUFBUTtBQUFDLFlBQUksQ0FBSjtZQUFNLENBQU47WUFBUSxDQUFSO1lBQVUsSUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQUY7WUFBaUIsSUFBRSxFQUFFLEtBQUYsQ0FBOUIsT0FBNkMsSUFBRSxFQUFFLFFBQUYsQ0FBVyxDQUFYLE1BQWdCLEVBQUUsUUFBRixDQUFXLENBQVgsSUFBYyxHQUFHLENBQUgsS0FBTyxDQUFQLENBQTlCLEVBQXdDLElBQUUsRUFBRSxRQUFGLENBQVcsQ0FBWCxLQUFlLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBZixFQUE2QixLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsS0FBRyxTQUFRLENBQVIsSUFBVyxLQUFLLENBQUwsTUFBVSxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFDLENBQUQsRUFBRyxDQUFYLENBQUYsQ0FBVixHQUEyQixDQUF6QyxHQUEyQyxFQUFFLENBQUYsQ0FBM0MsSUFBaUQsV0FBUyw0Q0FBVCxFQUFXLGFBQVcsQ0FBWCxLQUFlLElBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFGLENBQWYsSUFBNkIsRUFBRSxDQUFGLENBQTdCLEtBQW9DLElBQUUsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sQ0FBRixFQUFXLElBQUUsUUFBRixDQUEvQyxFQUEyRCxRQUFNLENBQU4sSUFBUyxNQUFJLENBQUosS0FBUSxhQUFXLENBQVgsS0FBZSxLQUFHLEtBQUcsRUFBRSxDQUFGLENBQUgsS0FBVSxFQUFFLFNBQUYsQ0FBWSxDQUFaLElBQWUsRUFBZixHQUFrQixJQUFsQixDQUFWLENBQWxCLEVBQXFELEVBQUUsZUFBRixJQUFtQixPQUFLLENBQUwsSUFBUSxNQUFJLEVBQUUsT0FBRixDQUFVLFlBQVYsQ0FBSixLQUE4QixFQUFFLENBQUYsSUFBSyxTQUFMLENBQXpELEVBQXlFLEtBQUcsU0FBUSxDQUFSLElBQVcsS0FBSyxDQUFMLE1BQVUsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLENBQVYsQ0FBRixDQUFWLEtBQTRCLEVBQUUsQ0FBRixJQUFLLENBQUwsQ0FBMUMsQ0FBL0ksRUFBa00sS0FBSyxDQUFMLENBQXBVLENBQXRIO09BQTlDO0tBQWxCLEVBQW9nQixLQUFJLGFBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFVBQUksQ0FBSjtVQUFNLENBQU47VUFBUSxDQUFSO1VBQVUsSUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQUYsQ0FBWCxPQUFtQyxJQUFFLEVBQUUsUUFBRixDQUFXLENBQVgsTUFBZ0IsRUFBRSxRQUFGLENBQVcsQ0FBWCxJQUFjLEdBQUcsQ0FBSCxLQUFPLENBQVAsQ0FBOUIsRUFBd0MsSUFBRSxFQUFFLFFBQUYsQ0FBVyxDQUFYLEtBQWUsRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUFmLEVBQTZCLEtBQUcsU0FBUSxDQUFSLEtBQVksSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBQyxDQUFELEVBQUcsQ0FBWCxDQUFGLENBQWYsRUFBZ0MsS0FBSyxDQUFMLEtBQVMsQ0FBVCxLQUFhLElBQUUsR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBRixDQUFiLEVBQTBCLGFBQVcsQ0FBWCxJQUFjLEtBQUssRUFBTCxLQUFVLElBQUUsR0FBRyxDQUFILENBQUYsQ0FBeEIsRUFBaUMsT0FBSyxDQUFMLElBQVEsQ0FBUixJQUFXLElBQUUsV0FBVyxDQUFYLENBQUYsRUFBZ0IsTUFBSSxDQUFDLENBQUQsSUFBSSxTQUFTLENBQVQsQ0FBUixHQUFvQixLQUFHLENBQUgsR0FBSyxDQUF6QixDQUEzQixHQUF1RCxDQUF2RCxDQUF2TTtLQUFqQixFQUFwMEIsR0FBd2xDLEVBQUUsSUFBRixDQUFPLENBQUMsUUFBRCxFQUFVLE9BQVYsQ0FBUCxFQUEwQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxNQUFFLFFBQUYsQ0FBVyxDQUFYLElBQWMsRUFBQyxLQUFJLGFBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxlQUFPLElBQUUsR0FBRyxJQUFILENBQVEsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFNBQVIsQ0FBUixLQUE2QixNQUFJLEVBQUUsV0FBRixHQUFjLEdBQUcsQ0FBSCxFQUFLLEVBQUwsRUFBUSxZQUFVO0FBQUMsaUJBQU8sR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBUCxDQUFEO1NBQVYsQ0FBdkQsR0FBcUYsR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBckYsR0FBK0YsS0FBSyxDQUFMLENBQXpHO09BQWYsRUFBZ0ksS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsWUFBSSxDQUFKO1lBQU0sSUFBRSxLQUFHLEdBQUcsQ0FBSCxDQUFIO1lBQVMsSUFBRSxLQUFHLEdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsaUJBQWUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFdBQVIsRUFBb0IsQ0FBQyxDQUFELEVBQUcsQ0FBdkIsQ0FBZixFQUF5QyxDQUFsRCxDQUFILENBQXBCLE9BQW1GLE1BQUksSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUYsQ0FBSixJQUFrQixVQUFRLEVBQUUsQ0FBRixLQUFNLElBQU4sQ0FBUixLQUFzQixFQUFFLEtBQUYsQ0FBUSxDQUFSLElBQVcsQ0FBWCxFQUFhLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBRixDQUFyRCxFQUFtRSxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFuRSxDQUFuRjtPQUFmLEVBQXZKLENBQUQ7R0FBYixDQUFsbkMsRUFBMDhDLEVBQUUsUUFBRixDQUFXLFVBQVgsR0FBc0IsR0FBRyxFQUFFLGtCQUFGLEVBQXFCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFdBQU8sSUFBRSxDQUFDLFdBQVcsR0FBRyxDQUFILEVBQUssWUFBTCxDQUFYLEtBQWdDLEVBQUUscUJBQUYsR0FBMEIsSUFBMUIsR0FBK0IsR0FBRyxDQUFILEVBQUssRUFBQyxZQUFXLENBQVgsRUFBTixFQUFvQixZQUFVO0FBQUMsYUFBTyxFQUFFLHFCQUFGLEdBQTBCLElBQTFCLENBQVI7S0FBVixDQUFuRCxDQUFqQyxHQUF3SSxJQUF4SSxHQUE2SSxLQUFLLENBQUwsQ0FBdko7R0FBYixDQUE5QyxFQUEyTixFQUFFLFFBQUYsQ0FBVyxXQUFYLEdBQXVCLEdBQUcsRUFBRSxtQkFBRixFQUFzQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxXQUFPLElBQUUsR0FBRyxDQUFILEVBQUssRUFBQyxTQUFRLGNBQVIsRUFBTixFQUE4QixFQUE5QixFQUFpQyxDQUFDLENBQUQsRUFBRyxhQUFILENBQWpDLENBQUYsR0FBc0QsS0FBSyxDQUFMLENBQTlEO0dBQWIsQ0FBaEQsRUFBb0ksRUFBRSxJQUFGLENBQU8sRUFBQyxRQUFPLEVBQVAsRUFBVSxTQUFRLEVBQVIsRUFBVyxRQUFPLE9BQVAsRUFBN0IsRUFBNkMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxRQUFGLENBQVcsSUFBRSxDQUFGLENBQVgsR0FBZ0IsRUFBQyxRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLGFBQUksSUFBSSxJQUFFLENBQUYsRUFBSSxJQUFFLEVBQUYsRUFBSyxJQUFFLFlBQVUsT0FBTyxDQUFQLEdBQVMsRUFBRSxLQUFGLENBQVEsR0FBUixDQUFuQixHQUFnQyxDQUFDLENBQUQsQ0FBaEMsRUFBb0MsSUFBRSxDQUFGLEVBQUksR0FBM0Q7QUFBK0QsWUFBRSxJQUFFLEVBQUUsQ0FBRixDQUFGLEdBQU8sQ0FBUCxDQUFGLEdBQVksRUFBRSxDQUFGLEtBQU0sRUFBRSxJQUFFLENBQUYsQ0FBUixJQUFjLEVBQUUsQ0FBRixDQUFkO1NBQTNFLE9BQXFHLENBQVAsQ0FBL0Y7T0FBWCxFQUF4QixFQUE2SSxHQUFHLElBQUgsQ0FBUSxDQUFSLE1BQWEsRUFBRSxRQUFGLENBQVcsSUFBRSxDQUFGLENBQVgsQ0FBZ0IsR0FBaEIsR0FBb0IsRUFBcEIsQ0FBYixDQUE5STtHQUFiLENBQXQxRCxFQUF3aEUsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLEVBQUUsSUFBRixFQUFPLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxZQUFJLENBQUo7WUFBTSxDQUFOO1lBQVEsSUFBRSxFQUFGO1lBQUssSUFBRSxDQUFGLENBQWQsSUFBcUIsRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFILEVBQWdCO0FBQUMsZUFBSSxJQUFFLEdBQUcsQ0FBSCxDQUFGLEVBQVEsSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLENBQUYsRUFBSSxHQUEzQjtBQUErQixjQUFFLEVBQUUsQ0FBRixDQUFGLElBQVEsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLEVBQUUsQ0FBRixDQUFSLEVBQWEsQ0FBQyxDQUFELEVBQUcsQ0FBaEIsQ0FBUjtXQUEvQixPQUFpRSxDQUFQLENBQTNEO1NBQWhCLE9BQTJGLEtBQUssQ0FBTCxLQUFTLENBQVQsR0FBVyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLENBQVosQ0FBWCxHQUEwQixFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUExQixDQUE3RztPQUFmLEVBQWtLLENBQXpLLEVBQTJLLENBQTNLLEVBQTZLLFVBQVUsTUFBVixHQUFpQixDQUFqQixDQUFwTCxDQUFEO0tBQWIsRUFBdU4sTUFBSyxnQkFBVTtBQUFDLGFBQU8sR0FBRyxJQUFILEVBQVEsQ0FBQyxDQUFELENBQWYsQ0FBRDtLQUFWLEVBQStCLE1BQUssZ0JBQVU7QUFBQyxhQUFPLEdBQUcsSUFBSCxDQUFQLENBQUQ7S0FBVixFQUE0QixRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLGFBQU0sYUFBVyxPQUFPLENBQVAsR0FBUyxJQUFFLEtBQUssSUFBTCxFQUFGLEdBQWMsS0FBSyxJQUFMLEVBQWQsR0FBMEIsS0FBSyxJQUFMLENBQVUsWUFBVTtBQUFDLFVBQUUsSUFBRixJQUFRLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBUixHQUF1QixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQXZCLENBQUQ7T0FBVixDQUF4RCxDQUFQO0tBQVgsRUFBcFQsQ0FBeGhFLENBRDk1bUIsU0FDbTNyQixFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0I7QUFBQyxXQUFPLElBQUksR0FBRyxTQUFILENBQWEsSUFBYixDQUFrQixDQUF0QixFQUF3QixDQUF4QixFQUEwQixDQUExQixFQUE0QixDQUE1QixFQUE4QixDQUE5QixDQUFQLENBQUQ7R0FBdEIsQ0FBK0QsQ0FBRSxLQUFGLEdBQVEsRUFBUixFQUFXLEdBQUcsU0FBSCxHQUFhLEVBQUMsYUFBWSxFQUFaLEVBQWUsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUI7QUFBQyxXQUFLLElBQUwsR0FBVSxDQUFWLEVBQVksS0FBSyxJQUFMLEdBQVUsQ0FBVixFQUFZLEtBQUssTUFBTCxHQUFZLEtBQUcsRUFBRSxNQUFGLENBQVMsUUFBVCxFQUFrQixLQUFLLE9BQUwsR0FBYSxDQUFiLEVBQWUsS0FBSyxLQUFMLEdBQVcsS0FBSyxHQUFMLEdBQVMsS0FBSyxHQUFMLEVBQVQsRUFBb0IsS0FBSyxHQUFMLEdBQVMsQ0FBVCxFQUFXLEtBQUssSUFBTCxHQUFVLE1BQUksRUFBRSxTQUFGLENBQVksQ0FBWixJQUFlLEVBQWYsR0FBa0IsSUFBbEIsQ0FBSixDQUE3SDtLQUFyQixFQUErSyxLQUFJLGVBQVU7QUFBQyxVQUFJLElBQUUsR0FBRyxTQUFILENBQWEsS0FBSyxJQUFMLENBQWYsQ0FBTCxPQUFzQyxLQUFHLEVBQUUsR0FBRixHQUFNLEVBQUUsR0FBRixDQUFNLElBQU4sQ0FBVCxHQUFxQixHQUFHLFNBQUgsQ0FBYSxRQUFiLENBQXNCLEdBQXRCLENBQTBCLElBQTFCLENBQXJCLENBQXRDO0tBQVYsRUFBc0csS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLFVBQUksQ0FBSjtVQUFNLElBQUUsR0FBRyxTQUFILENBQWEsS0FBSyxJQUFMLENBQWYsQ0FBUCxPQUF3QyxLQUFLLE9BQUwsQ0FBYSxRQUFiLEdBQXNCLEtBQUssR0FBTCxHQUFTLElBQUUsRUFBRSxNQUFGLENBQVMsS0FBSyxNQUFMLENBQVQsQ0FBc0IsQ0FBdEIsRUFBd0IsS0FBSyxPQUFMLENBQWEsUUFBYixHQUFzQixDQUF0QixFQUF3QixDQUFoRCxFQUFrRCxDQUFsRCxFQUFvRCxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXRELEdBQTZFLEtBQUssR0FBTCxHQUFTLElBQUUsQ0FBRixFQUFJLEtBQUssR0FBTCxHQUFTLENBQUMsS0FBSyxHQUFMLEdBQVMsS0FBSyxLQUFMLENBQVYsR0FBc0IsQ0FBdEIsR0FBd0IsS0FBSyxLQUFMLEVBQVcsS0FBSyxPQUFMLENBQWEsSUFBYixJQUFtQixLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQXVCLEtBQUssSUFBTCxFQUFVLEtBQUssR0FBTCxFQUFTLElBQTFDLENBQW5CLEVBQW1FLEtBQUcsRUFBRSxHQUFGLEdBQU0sRUFBRSxHQUFGLENBQU0sSUFBTixDQUFULEdBQXFCLEdBQUcsU0FBSCxDQUFhLFFBQWIsQ0FBc0IsR0FBdEIsQ0FBMEIsSUFBMUIsQ0FBckIsRUFBcUQsSUFBN1IsQ0FBeEM7S0FBWCxFQUEvVCxFQUFzcEIsR0FBRyxTQUFILENBQWEsSUFBYixDQUFrQixTQUFsQixHQUE0QixHQUFHLFNBQUgsRUFBYSxHQUFHLFNBQUgsR0FBYSxFQUFDLFVBQVMsRUFBQyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxDQUFKLENBQUQsT0FBYyxNQUFJLEVBQUUsSUFBRixDQUFPLFFBQVAsSUFBaUIsUUFBTSxFQUFFLElBQUYsQ0FBTyxFQUFFLElBQUYsQ0FBYixJQUFzQixRQUFNLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxFQUFFLElBQUYsQ0FBbkIsR0FBMkIsRUFBRSxJQUFGLENBQU8sRUFBRSxJQUFGLENBQTdFLElBQXNGLElBQUUsRUFBRSxHQUFGLENBQU0sRUFBRSxJQUFGLEVBQU8sRUFBRSxJQUFGLEVBQU8sRUFBcEIsQ0FBRixFQUEwQixLQUFHLFdBQVMsQ0FBVCxHQUFXLENBQWQsR0FBZ0IsQ0FBaEIsQ0FBaEgsQ0FBZDtPQUFYLEVBQTZKLEtBQUksYUFBUyxDQUFULEVBQVc7QUFBQyxVQUFFLEVBQUYsQ0FBSyxJQUFMLENBQVUsRUFBRSxJQUFGLENBQVYsR0FBa0IsRUFBRSxFQUFGLENBQUssSUFBTCxDQUFVLEVBQUUsSUFBRixDQUFWLENBQWtCLENBQWxCLENBQWxCLEdBQXVDLE1BQUksRUFBRSxJQUFGLENBQU8sUUFBUCxJQUFpQixRQUFNLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxFQUFFLFFBQUYsQ0FBVyxFQUFFLElBQUYsQ0FBeEIsQ0FBTixJQUF3QyxDQUFDLEVBQUUsUUFBRixDQUFXLEVBQUUsSUFBRixDQUFaLEdBQW9CLEVBQUUsSUFBRixDQUFPLEVBQUUsSUFBRixDQUFQLEdBQWUsRUFBRSxHQUFGLEdBQU0sRUFBRSxLQUFGLENBQVEsRUFBRSxJQUFGLEVBQU8sRUFBRSxJQUFGLEVBQU8sRUFBRSxHQUFGLEdBQU0sRUFBRSxJQUFGLENBQWxJLENBQXhDO09BQVgsRUFBL0ssRUFBZCxFQUE2WCxHQUFHLFNBQUgsQ0FBYSxTQUFiLEdBQXVCLEdBQUcsU0FBSCxDQUFhLFVBQWIsR0FBd0IsRUFBQyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRSxJQUFGLENBQU8sUUFBUCxJQUFpQixFQUFFLElBQUYsQ0FBTyxVQUFQLEtBQW9CLEVBQUUsSUFBRixDQUFPLEVBQUUsSUFBRixDQUFQLEdBQWUsRUFBRSxHQUFGLENBQXBELENBQUQ7S0FBWCxFQUE3QixFQUFzRyxFQUFFLE1BQUYsR0FBUyxFQUFDLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxDQUFQLENBQUQ7S0FBWCxFQUFzQixPQUFNLGVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTSxLQUFHLEtBQUssR0FBTCxDQUFTLElBQUUsS0FBSyxFQUFMLENBQVgsR0FBb0IsQ0FBcEIsQ0FBVjtLQUFYLEVBQTRDLFVBQVMsT0FBVCxFQUF6RixFQUEyRyxFQUFFLEVBQUYsR0FBSyxHQUFHLFNBQUgsQ0FBYSxJQUFiLEVBQWtCLEVBQUUsRUFBRixDQUFLLElBQUwsR0FBVSxFQUFWLENBRC91dUIsSUFDZ3d1QixFQUFKO01BQU8sRUFBUDtNQUFVLEtBQUcsd0JBQUg7TUFBNEIsS0FBRyxhQUFILENBRGx5dUIsU0FDNHp1QixFQUFULEdBQWE7QUFBQyxXQUFPLEVBQUUsVUFBRixDQUFhLFlBQVU7QUFBQyxXQUFHLEtBQUssQ0FBTCxDQUFKO0tBQVYsQ0FBYixFQUFvQyxLQUFHLEVBQUUsR0FBRixFQUFILENBQTVDO0dBQWIsU0FBNkUsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsUUFBSSxDQUFKO1FBQU0sSUFBRSxDQUFGO1FBQUksSUFBRSxFQUFDLFFBQU8sQ0FBUCxFQUFILENBQVgsS0FBNEIsSUFBRSxJQUFFLENBQUYsR0FBSSxDQUFKLEVBQU0sSUFBRSxDQUFGLEVBQUksS0FBRyxJQUFFLENBQUY7QUFBSSxVQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sRUFBRSxXQUFTLENBQVQsQ0FBRixHQUFjLEVBQUUsWUFBVSxDQUFWLENBQUYsR0FBZSxDQUFmO0tBQTVDLE9BQW9FLE1BQUksRUFBRSxPQUFGLEdBQVUsRUFBRSxLQUFGLEdBQVEsQ0FBUixDQUFkLEVBQXlCLENBQXpCLENBQTVGO0dBQWhCLFNBQWdKLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQjtBQUFDLFNBQUksSUFBSSxDQUFKLEVBQU0sSUFBRSxDQUFDLEdBQUcsUUFBSCxDQUFZLENBQVosS0FBZ0IsRUFBaEIsQ0FBRCxDQUFxQixNQUFyQixDQUE0QixHQUFHLFFBQUgsQ0FBWSxHQUFaLENBQTVCLENBQUYsRUFBZ0QsSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLE1BQUYsRUFBUyxJQUFFLENBQUYsRUFBSSxHQUE3RTtBQUFpRixVQUFHLElBQUUsRUFBRSxDQUFGLEVBQUssSUFBTCxDQUFVLENBQVYsRUFBWSxDQUFaLEVBQWMsQ0FBZCxDQUFGLEVBQW1CLE9BQU8sQ0FBUCxDQUF0QjtLQUFqRjtHQUFuQixTQUE0SSxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0I7QUFBQyxRQUFJLENBQUo7UUFBTSxDQUFOO1FBQVEsQ0FBUjtRQUFVLENBQVY7UUFBWSxDQUFaO1FBQWMsQ0FBZDtRQUFnQixDQUFoQjtRQUFrQixDQUFsQjtRQUFvQixJQUFFLElBQUY7UUFBTyxJQUFFLEVBQUY7UUFBSyxJQUFFLEVBQUUsS0FBRjtRQUFRLElBQUUsRUFBRSxRQUFGLElBQVksRUFBRSxDQUFGLENBQVo7UUFBaUIsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsUUFBUixDQUFGLENBQTlELENBQWtGLENBQUUsS0FBRixLQUFVLElBQUUsRUFBRSxXQUFGLENBQWMsQ0FBZCxFQUFnQixJQUFoQixDQUFGLEVBQXdCLFFBQU0sRUFBRSxRQUFGLEtBQWEsRUFBRSxRQUFGLEdBQVcsQ0FBWCxFQUFhLElBQUUsRUFBRSxLQUFGLENBQVEsSUFBUixFQUFhLEVBQUUsS0FBRixDQUFRLElBQVIsR0FBYSxZQUFVO0FBQUMsUUFBRSxRQUFGLElBQVksR0FBWixDQUFEO0tBQVYsQ0FBNUQsRUFBeUYsRUFBRSxRQUFGLEVBQWpILEVBQThILEVBQUUsTUFBRixDQUFTLFlBQVU7QUFBQyxRQUFFLE1BQUYsQ0FBUyxZQUFVO0FBQUMsVUFBRSxRQUFGLElBQWEsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLElBQVYsRUFBZ0IsTUFBaEIsSUFBd0IsRUFBRSxLQUFGLENBQVEsSUFBUixFQUF4QixDQUFkO09BQVYsQ0FBVCxDQUFEO0tBQVYsQ0FBdkksQ0FBVixFQUF5TyxNQUFJLEVBQUUsUUFBRixLQUFhLFlBQVcsQ0FBWCxJQUFjLFdBQVUsQ0FBVixDQUEvQixLQUE4QyxFQUFFLFFBQUYsR0FBVyxDQUFDLEVBQUUsUUFBRixFQUFXLEVBQUUsU0FBRixFQUFZLEVBQUUsU0FBRixDQUFuQyxFQUFnRCxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxTQUFSLENBQUYsRUFBcUIsSUFBRSxXQUFTLENBQVQsR0FBVyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsWUFBUixLQUF1QixHQUFHLEVBQUUsUUFBRixDQUExQixHQUFzQyxDQUFqRCxFQUFtRCxhQUFXLENBQVgsSUFBYyxXQUFTLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxPQUFSLENBQVQsS0FBNEIsRUFBRSxPQUFGLEdBQVUsY0FBVixDQUExQyxDQUF4SyxFQUE2TyxFQUFFLFFBQUYsS0FBYSxFQUFFLFFBQUYsR0FBVyxRQUFYLEVBQW9CLEVBQUUsTUFBRixDQUFTLFlBQVU7QUFBQyxRQUFFLFFBQUYsR0FBVyxFQUFFLFFBQUYsQ0FBVyxDQUFYLENBQVgsRUFBeUIsRUFBRSxTQUFGLEdBQVksRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUFaLEVBQTBCLEVBQUUsU0FBRixHQUFZLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBWixDQUFwRDtLQUFWLENBQTdCLENBQWIsQ0FBeGlCLEtBQWlyQixDQUFKLElBQVMsQ0FBVDtBQUFXLFVBQUcsSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLEdBQUcsSUFBSCxDQUFRLENBQVIsQ0FBUCxFQUFrQjtBQUFDLFlBQUcsT0FBTyxFQUFFLENBQUYsQ0FBUCxFQUFZLElBQUUsS0FBRyxhQUFXLENBQVgsRUFBYSxPQUFLLElBQUUsTUFBRixHQUFTLE1BQVQsQ0FBTCxFQUFzQjtBQUFDLGNBQUcsV0FBUyxDQUFULElBQVksQ0FBQyxDQUFELElBQUksS0FBSyxDQUFMLEtBQVMsRUFBRSxDQUFGLENBQVQsRUFBYyxTQUFqQyxDQUEwQyxHQUFFLENBQUMsQ0FBRCxDQUE3QztTQUF2RCxDQUF1RyxDQUFFLENBQUYsSUFBSyxLQUFHLEVBQUUsQ0FBRixDQUFILElBQVMsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBVCxDQUE3RztPQUFyQixNQUE2SixJQUFFLEtBQUssQ0FBTCxDQUEvSjtLQUFYLElBQW9MLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUFILEVBQXNCLGNBQVksV0FBUyxDQUFULEdBQVcsR0FBRyxFQUFFLFFBQUYsQ0FBZCxHQUEwQixDQUExQixDQUFaLEtBQTJDLEVBQUUsT0FBRixHQUFVLENBQVYsQ0FBM0MsQ0FBdEIsS0FBa0Y7QUFBQyxVQUFFLFlBQVcsQ0FBWCxLQUFlLElBQUUsRUFBRSxNQUFGLENBQWpCLEdBQTJCLElBQUUsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLFFBQVgsRUFBb0IsRUFBcEIsQ0FBRixFQUEwQixNQUFJLEVBQUUsTUFBRixHQUFTLENBQUMsQ0FBRCxDQUFiLEVBQWlCLElBQUUsRUFBRSxDQUFGLEVBQUssSUFBTCxFQUFGLEdBQWMsRUFBRSxJQUFGLENBQU8sWUFBVTtBQUFDLFVBQUUsQ0FBRixFQUFLLElBQUwsR0FBRDtPQUFWLENBQXJCLEVBQThDLEVBQUUsSUFBRixDQUFPLFlBQVU7QUFBQyxZQUFJLENBQUosQ0FBRCxDQUFPLENBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxRQUFYLEVBQVAsS0FBZ0MsQ0FBSixJQUFTLENBQVQ7QUFBVyxZQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLEVBQUUsQ0FBRixDQUFaO1NBQVg7T0FBdEMsQ0FBN0gsQ0FBRCxLQUF1TSxDQUFKLElBQVMsQ0FBVDtBQUFXLFlBQUUsR0FBRyxJQUFFLEVBQUUsQ0FBRixDQUFGLEdBQU8sQ0FBUCxFQUFTLENBQVosRUFBYyxDQUFkLENBQUYsRUFBbUIsS0FBSyxDQUFMLEtBQVMsRUFBRSxDQUFGLElBQUssRUFBRSxLQUFGLEVBQVEsTUFBSSxFQUFFLEdBQUYsR0FBTSxFQUFFLEtBQUYsRUFBUSxFQUFFLEtBQUYsR0FBUSxZQUFVLENBQVYsSUFBYSxhQUFXLENBQVgsR0FBYSxDQUExQixHQUE0QixDQUE1QixDQUExQixDQUF0QjtPQUE5QjtLQUFyUjtHQUFoM0IsU0FBNnZDLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQjtBQUFDLFFBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLENBQVosQ0FBRCxLQUFtQixDQUFKLElBQVMsQ0FBVDtBQUFXLFVBQUcsSUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQUYsRUFBaUIsSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLElBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxFQUFFLE9BQUYsQ0FBVSxDQUFWLE1BQWUsSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLElBQUUsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLENBQUwsQ0FBeEIsRUFBbUMsTUFBSSxDQUFKLEtBQVEsRUFBRSxDQUFGLElBQUssQ0FBTCxFQUFPLE9BQU8sRUFBRSxDQUFGLENBQVAsQ0FBZixFQUE0QixJQUFFLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBRixFQUFnQixLQUFHLFlBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBRSxFQUFFLE1BQUYsQ0FBUyxDQUFULENBQUYsRUFBYyxPQUFPLEVBQUUsQ0FBRixDQUFQLENBQWYsS0FBK0IsQ0FBSixJQUFTLENBQVQ7QUFBVyxlQUFLLENBQUwsS0FBUyxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsQ0FBTCxFQUFVLEVBQUUsQ0FBRixJQUFLLENBQUwsQ0FBbkI7U0FBWDtPQUE1SixNQUF1TSxFQUFFLENBQUYsSUFBSyxDQUFMLENBQXZNO0tBQVg7R0FBL0IsU0FBaVEsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCO0FBQUMsUUFBSSxDQUFKO1FBQU0sQ0FBTjtRQUFRLElBQUUsQ0FBRjtRQUFJLElBQUUsR0FBRyxVQUFILENBQWMsTUFBZDtRQUFxQixJQUFFLEVBQUUsUUFBRixHQUFhLE1BQWIsQ0FBb0IsWUFBVTtBQUFDLGFBQU8sRUFBRSxJQUFGLENBQVI7S0FBVixDQUF0QjtRQUFpRCxJQUFFLGFBQVU7QUFBQyxVQUFHLENBQUgsRUFBSyxPQUFNLENBQUMsQ0FBRCxDQUFYLEtBQWtCLElBQUksSUFBRSxNQUFJLElBQUosRUFBUyxJQUFFLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBVyxFQUFFLFNBQUYsR0FBWSxFQUFFLFFBQUYsR0FBVyxDQUF2QixDQUFiLEVBQXVDLElBQUUsSUFBRSxFQUFFLFFBQUYsSUFBWSxDQUFkLEVBQWdCLElBQUUsSUFBRSxDQUFGLEVBQUksSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLE1BQUYsQ0FBUyxNQUFULEVBQWdCLElBQUUsQ0FBRixFQUFJLEdBQTVHO0FBQWdILFVBQUUsTUFBRixDQUFTLENBQVQsRUFBWSxHQUFaLENBQWdCLENBQWhCO09BQWhILE9BQTBJLEVBQUUsVUFBRixDQUFhLENBQWIsRUFBZSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFmLEdBQXdCLElBQUUsQ0FBRixJQUFLLENBQUwsR0FBTyxDQUFQLElBQVUsRUFBRSxXQUFGLENBQWMsQ0FBZCxFQUFnQixDQUFDLENBQUQsQ0FBaEIsR0FBcUIsQ0FBQyxDQUFELENBQS9CLENBQWpMO0tBQVY7UUFBK04sSUFBRSxFQUFFLE9BQUYsQ0FBVSxFQUFDLE1BQUssQ0FBTCxFQUFPLE9BQU0sRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFZLENBQVosQ0FBTixFQUFxQixNQUFLLEVBQUUsTUFBRixDQUFTLENBQUMsQ0FBRCxFQUFHLEVBQUMsZUFBYyxFQUFkLEVBQWlCLFFBQU8sRUFBRSxNQUFGLENBQVMsUUFBVCxFQUFyQyxFQUF3RCxDQUF4RCxDQUFMLEVBQWdFLG9CQUFtQixDQUFuQixFQUFxQixpQkFBZ0IsQ0FBaEIsRUFBa0IsV0FBVSxNQUFJLElBQUosRUFBUyxVQUFTLEVBQUUsUUFBRixFQUFXLFFBQU8sRUFBUCxFQUFVLGFBQVkscUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUksSUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsRUFBRSxJQUFGLEVBQU8sQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsRUFBRSxJQUFGLENBQU8sYUFBUCxDQUFxQixDQUFyQixLQUF5QixFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWhELENBQUwsT0FBMkUsRUFBRSxNQUFGLENBQVMsSUFBVCxDQUFjLENBQWQsR0FBaUIsQ0FBakIsQ0FBM0U7T0FBYixFQUE0RyxNQUFLLGNBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxJQUFFLENBQUY7WUFBSSxJQUFFLElBQUUsRUFBRSxNQUFGLENBQVMsTUFBVCxHQUFnQixDQUFsQixDQUFYLElBQWtDLENBQUgsRUFBSyxPQUFPLElBQVAsQ0FBTCxLQUFxQixJQUFFLENBQUMsQ0FBRCxFQUFHLElBQUUsQ0FBRixFQUFJLEdBQWI7QUFBaUIsWUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFZLEdBQVosQ0FBZ0IsQ0FBaEI7U0FBakIsT0FBMkMsS0FBRyxFQUFFLFVBQUYsQ0FBYSxDQUFiLEVBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBZixHQUF3QixFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWdCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBaEIsQ0FBeEIsQ0FBSCxHQUFtRCxFQUFFLFVBQUYsQ0FBYSxDQUFiLEVBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFmLENBQW5ELEVBQXlFLElBQXpFLENBQTNGO09BQVgsRUFBNVQsQ0FBRjtRQUFxZixJQUFFLEVBQUUsS0FBRixDQUE3eUIsS0FBeXpCLEdBQUcsQ0FBSCxFQUFLLEVBQUUsSUFBRixDQUFPLGFBQVAsQ0FBVCxFQUErQixJQUFFLENBQUYsRUFBSSxHQUFuQztBQUF1QyxVQUFHLElBQUUsR0FBRyxVQUFILENBQWMsQ0FBZCxFQUFpQixJQUFqQixDQUFzQixDQUF0QixFQUF3QixDQUF4QixFQUEwQixDQUExQixFQUE0QixFQUFFLElBQUYsQ0FBOUIsRUFBc0MsT0FBTyxFQUFFLFVBQUYsQ0FBYSxFQUFFLElBQUYsQ0FBYixLQUF1QixFQUFFLFdBQUYsQ0FBYyxFQUFFLElBQUYsRUFBTyxFQUFFLElBQUYsQ0FBTyxLQUFQLENBQXJCLENBQW1DLElBQW5DLEdBQXdDLEVBQUUsS0FBRixDQUFRLEVBQUUsSUFBRixFQUFPLENBQWYsQ0FBeEMsQ0FBdkIsRUFBa0YsQ0FBbEYsQ0FBaEQ7S0FBdkMsT0FBa0wsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLEVBQVIsRUFBVyxDQUFYLEdBQWMsRUFBRSxVQUFGLENBQWEsRUFBRSxJQUFGLENBQU8sS0FBUCxDQUFiLElBQTRCLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxJQUFiLENBQWtCLENBQWxCLEVBQW9CLENBQXBCLENBQTVCLEVBQW1ELEVBQUUsRUFBRixDQUFLLEtBQUwsQ0FBVyxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsRUFBQyxNQUFLLENBQUwsRUFBTyxNQUFLLENBQUwsRUFBTyxPQUFNLEVBQUUsSUFBRixDQUFPLEtBQVAsRUFBaEMsQ0FBWCxDQUFqRSxFQUE0SCxFQUFFLFFBQUYsQ0FBVyxFQUFFLElBQUYsQ0FBTyxRQUFQLENBQVgsQ0FBNEIsSUFBNUIsQ0FBaUMsRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLEVBQUUsSUFBRixDQUFPLFFBQVAsQ0FBN0MsQ0FBOEQsSUFBOUQsQ0FBbUUsRUFBRSxJQUFGLENBQU8sSUFBUCxDQUFuRSxDQUFnRixNQUFoRixDQUF1RixFQUFFLElBQUYsQ0FBTyxNQUFQLENBQW5OLENBQXYrQjtHQUFsQixDQUEydEMsQ0FBRSxTQUFGLEdBQVksRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFZLEVBQUMsVUFBUyxFQUFDLEtBQUksQ0FBQyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFJLElBQUUsS0FBSyxXQUFMLENBQWlCLENBQWpCLEVBQW1CLENBQW5CLENBQUYsQ0FBTCxPQUFvQyxFQUFFLEVBQUUsSUFBRixFQUFPLENBQVQsRUFBVyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVgsRUFBcUIsQ0FBckIsR0FBd0IsQ0FBeEIsQ0FBcEM7T0FBYixDQUFMLEVBQVYsRUFBNkYsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBRSxVQUFGLENBQWEsQ0FBYixLQUFpQixJQUFFLENBQUYsRUFBSSxJQUFFLENBQUMsR0FBRCxDQUFGLENBQXJCLEdBQThCLElBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFGLENBQS9CLEtBQWdELElBQUksQ0FBSixFQUFNLElBQUUsQ0FBRixFQUFJLElBQUUsRUFBRSxNQUFGLEVBQVMsSUFBRSxDQUFGLEVBQUksR0FBN0I7QUFBaUMsWUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLEdBQUcsUUFBSCxDQUFZLENBQVosSUFBZSxHQUFHLFFBQUgsQ0FBWSxDQUFaLEtBQWdCLEVBQWhCLEVBQW1CLEdBQUcsUUFBSCxDQUFZLENBQVosRUFBZSxPQUFmLENBQXVCLENBQXZCLENBQXpDO09BQWpDO0tBQXpELEVBQThKLFlBQVcsQ0FBQyxFQUFELENBQVgsRUFBZ0IsV0FBVSxtQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBRSxHQUFHLFVBQUgsQ0FBYyxPQUFkLENBQXNCLENBQXRCLENBQUYsR0FBMkIsR0FBRyxVQUFILENBQWMsSUFBZCxDQUFtQixDQUFuQixDQUEzQixDQUFEO0tBQWIsRUFBMVMsQ0FBWixFQUF3WCxFQUFFLEtBQUYsR0FBUSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBSSxJQUFFLEtBQUcsb0JBQWlCLDZDQUFqQixHQUFtQixFQUFFLE1BQUYsQ0FBUyxFQUFULEVBQVksQ0FBWixDQUF0QixHQUFxQyxFQUFDLFVBQVMsS0FBRyxDQUFDLENBQUQsSUFBSSxDQUFKLElBQU8sRUFBRSxVQUFGLENBQWEsQ0FBYixLQUFpQixDQUFqQixFQUFtQixVQUFTLENBQVQsRUFBVyxRQUFPLEtBQUcsQ0FBSCxJQUFNLEtBQUcsQ0FBQyxFQUFFLFVBQUYsQ0FBYSxDQUFiLENBQUQsSUFBa0IsQ0FBckIsRUFBcEcsQ0FBUCxPQUEwSSxFQUFFLFFBQUYsR0FBVyxFQUFFLEVBQUYsQ0FBSyxHQUFMLEdBQVMsQ0FBVCxHQUFXLFlBQVUsT0FBTyxFQUFFLFFBQUYsR0FBVyxFQUFFLFFBQUYsR0FBVyxFQUFFLFFBQUYsSUFBYyxFQUFFLEVBQUYsQ0FBSyxNQUFMLEdBQVksRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUUsUUFBRixDQUF0QyxHQUFrRCxFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksUUFBWixFQUFxQixRQUFNLEVBQUUsS0FBRixJQUFTLEVBQUUsS0FBRixLQUFVLENBQUMsQ0FBRCxLQUFLLEVBQUUsS0FBRixHQUFRLElBQVIsQ0FBOUIsRUFBNEMsRUFBRSxHQUFGLEdBQU0sRUFBRSxRQUFGLEVBQVcsRUFBRSxRQUFGLEdBQVcsWUFBVTtBQUFDLFFBQUUsVUFBRixDQUFhLEVBQUUsR0FBRixDQUFiLElBQXFCLEVBQUUsR0FBRixDQUFNLElBQU4sQ0FBVyxJQUFYLENBQXJCLEVBQXNDLEVBQUUsS0FBRixJQUFTLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZSxFQUFFLEtBQUYsQ0FBeEIsQ0FBdkM7S0FBVixFQUFtRixDQUEvUixDQUExSTtHQUFmLEVBQTJiLEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLGFBQU8sS0FBSyxNQUFMLENBQVksQ0FBWixFQUFlLEdBQWYsQ0FBbUIsU0FBbkIsRUFBNkIsQ0FBN0IsRUFBZ0MsSUFBaEMsR0FBdUMsR0FBdkMsR0FBNkMsT0FBN0MsQ0FBcUQsRUFBQyxTQUFRLENBQVIsRUFBdEQsRUFBaUUsQ0FBakUsRUFBbUUsQ0FBbkUsRUFBcUUsQ0FBckUsQ0FBUCxDQUFEO0tBQWpCLEVBQWtHLFNBQVEsaUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFVBQUksSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBRjtVQUFxQixJQUFFLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksQ0FBWixDQUFGO1VBQWlCLElBQUUsU0FBRixDQUFFLEdBQVU7QUFBQyxZQUFJLElBQUUsR0FBRyxJQUFILEVBQVEsRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFZLENBQVosQ0FBUixFQUF1QixDQUF2QixDQUFGLENBQUwsQ0FBa0MsS0FBRyxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsUUFBWCxDQUFILENBQUQsSUFBMkIsRUFBRSxJQUFGLENBQU8sQ0FBQyxDQUFELENBQWxDLENBQWpDO09BQVYsQ0FBN0MsT0FBc0ksRUFBRSxNQUFGLEdBQVMsQ0FBVCxFQUFXLEtBQUcsRUFBRSxLQUFGLEtBQVUsQ0FBQyxDQUFELEdBQUcsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFoQixHQUE2QixLQUFLLEtBQUwsQ0FBVyxFQUFFLEtBQUYsRUFBUSxDQUFuQixDQUE3QixDQUFqSjtLQUFqQixFQUFzTixNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxVQUFJLElBQUUsU0FBRixDQUFFLENBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxJQUFFLEVBQUUsSUFBRixDQUFQLE9BQXFCLEVBQUUsSUFBRixFQUFPLEVBQUUsQ0FBRixDQUFkLENBQWQ7T0FBWCxDQUFQLE9BQTBELFlBQVUsT0FBTyxDQUFQLEtBQVcsSUFBRSxDQUFGLEVBQUksSUFBRSxDQUFGLEVBQUksSUFBRSxLQUFLLENBQUwsQ0FBL0IsRUFBdUMsS0FBRyxNQUFJLENBQUMsQ0FBRCxJQUFJLEtBQUssS0FBTCxDQUFXLEtBQUcsSUFBSCxFQUFRLEVBQW5CLENBQVgsRUFBa0MsS0FBSyxJQUFMLENBQVUsWUFBVTtBQUFDLFlBQUksSUFBRSxDQUFDLENBQUQ7WUFBRyxJQUFFLFFBQU0sQ0FBTixJQUFTLElBQUUsWUFBRjtZQUFlLElBQUUsRUFBRSxNQUFGO1lBQVMsSUFBRSxFQUFFLEdBQUYsQ0FBTSxJQUFOLENBQUYsQ0FBL0MsSUFBZ0UsQ0FBSCxFQUFLLEVBQUUsQ0FBRixLQUFNLEVBQUUsQ0FBRixFQUFLLElBQUwsSUFBVyxFQUFFLEVBQUUsQ0FBRixDQUFGLENBQWpCLENBQUwsS0FBbUMsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFlBQUUsQ0FBRixLQUFNLEVBQUUsQ0FBRixFQUFLLElBQUwsSUFBVyxHQUFHLElBQUgsQ0FBUSxDQUFSLENBQWpCLElBQTZCLEVBQUUsRUFBRSxDQUFGLENBQUYsQ0FBN0I7U0FBWCxLQUFvRCxJQUFFLEVBQUUsTUFBRixFQUFTLEdBQWY7QUFBb0IsWUFBRSxDQUFGLEVBQUssSUFBTCxLQUFZLElBQVosSUFBa0IsUUFBTSxDQUFOLElBQVMsRUFBRSxDQUFGLEVBQUssS0FBTCxLQUFhLENBQWIsS0FBaUIsRUFBRSxDQUFGLEVBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxDQUFmLEdBQWtCLElBQUUsQ0FBQyxDQUFELEVBQUcsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBdkIsQ0FBNUM7U0FBcEIsQ0FBdUcsQ0FBRCxJQUFJLENBQUosSUFBTyxFQUFFLE9BQUYsQ0FBVSxJQUFWLEVBQWUsQ0FBZixDQUFQLENBQXRQO09BQVYsQ0FBbkYsQ0FBMUQ7S0FBZixFQUF3YixRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sTUFBSSxDQUFDLENBQUQsS0FBSyxJQUFFLEtBQUcsSUFBSCxDQUFYLEVBQW9CLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxZQUFJLENBQUo7WUFBTSxJQUFFLEVBQUUsR0FBRixDQUFNLElBQU4sQ0FBRjtZQUFjLElBQUUsRUFBRSxJQUFFLE9BQUYsQ0FBSjtZQUFlLElBQUUsRUFBRSxJQUFFLFlBQUYsQ0FBSjtZQUFvQixJQUFFLEVBQUUsTUFBRjtZQUFTLElBQUUsSUFBRSxFQUFFLE1BQUYsR0FBUyxDQUFYLENBQXJFLEtBQXNGLEVBQUUsTUFBRixHQUFTLENBQUMsQ0FBRCxFQUFHLEVBQUUsS0FBRixDQUFRLElBQVIsRUFBYSxDQUFiLEVBQWUsRUFBZixDQUFaLEVBQStCLEtBQUcsRUFBRSxJQUFGLElBQVEsRUFBRSxJQUFGLENBQU8sSUFBUCxDQUFZLElBQVosRUFBaUIsQ0FBQyxDQUFELENBQTVCLEVBQWdDLElBQUUsRUFBRSxNQUFGLEVBQVMsR0FBOUU7QUFBbUYsWUFBRSxDQUFGLEVBQUssSUFBTCxLQUFZLElBQVosSUFBa0IsRUFBRSxDQUFGLEVBQUssS0FBTCxLQUFhLENBQWIsS0FBaUIsRUFBRSxDQUFGLEVBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxDQUFDLENBQUQsQ0FBZixFQUFtQixFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxDQUFuQixDQUFuQztTQUFuRixLQUE0SixJQUFFLENBQUYsRUFBSSxJQUFFLENBQUYsRUFBSSxHQUFaO0FBQWdCLFlBQUUsQ0FBRixLQUFNLEVBQUUsQ0FBRixFQUFLLE1BQUwsSUFBYSxFQUFFLENBQUYsRUFBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQixDQUFuQjtTQUFoQixPQUFpRSxFQUFFLE1BQUYsQ0FBM1M7T0FBVixDQUE5QixDQUFSO0tBQVgsRUFBeHhCLENBQTN6QixFQUF1OEQsRUFBRSxJQUFGLENBQU8sQ0FBQyxRQUFELEVBQVUsTUFBVixFQUFpQixNQUFqQixDQUFQLEVBQWdDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFFBQUksSUFBRSxFQUFFLEVBQUYsQ0FBSyxDQUFMLENBQUYsQ0FBTCxDQUFlLENBQUUsRUFBRixDQUFLLENBQUwsSUFBUSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsYUFBTyxRQUFNLENBQU4sSUFBUyxhQUFXLE9BQU8sQ0FBUCxHQUFTLEVBQUUsS0FBRixDQUFRLElBQVIsRUFBYSxTQUFiLENBQTdCLEdBQXFELEtBQUssT0FBTCxDQUFhLEdBQUcsQ0FBSCxFQUFLLENBQUMsQ0FBRCxDQUFsQixFQUFzQixDQUF0QixFQUF3QixDQUF4QixFQUEwQixDQUExQixDQUFyRCxDQUFSO0tBQWYsQ0FBdkI7R0FBYixDQUF2K0QsRUFBdW5FLEVBQUUsSUFBRixDQUFPLEVBQUMsV0FBVSxHQUFHLE1BQUgsQ0FBVixFQUFxQixTQUFRLEdBQUcsTUFBSCxDQUFSLEVBQW1CLGFBQVksR0FBRyxRQUFILENBQVosRUFBeUIsUUFBTyxFQUFDLFNBQVEsTUFBUixFQUFSLEVBQXdCLFNBQVEsRUFBQyxTQUFRLE1BQVIsRUFBVCxFQUF5QixZQUFXLEVBQUMsU0FBUSxRQUFSLEVBQVosRUFBMUgsRUFBeUosVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxFQUFGLENBQUssQ0FBTCxJQUFRLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLEtBQUssT0FBTCxDQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLENBQVAsQ0FBRDtLQUFmLENBQVQ7R0FBYixDQUFoeEUsRUFBczFFLEVBQUUsTUFBRixHQUFTLEVBQVQsRUFBWSxFQUFFLEVBQUYsQ0FBSyxJQUFMLEdBQVUsWUFBVTtBQUFDLFFBQUksQ0FBSjtRQUFNLElBQUUsQ0FBRjtRQUFJLElBQUUsRUFBRSxNQUFGLENBQWIsS0FBMEIsS0FBRyxFQUFFLEdBQUYsRUFBSCxFQUFXLElBQUUsRUFBRSxNQUFGLEVBQVMsR0FBMUI7QUFBOEIsVUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLE9BQUssRUFBRSxDQUFGLE1BQU8sQ0FBUCxJQUFVLEVBQUUsTUFBRixDQUFTLEdBQVQsRUFBYSxDQUFiLENBQWY7S0FBckMsQ0FBb0UsQ0FBRSxNQUFGLElBQVUsRUFBRSxFQUFGLENBQUssSUFBTCxFQUFWLEVBQXNCLEtBQUcsS0FBSyxDQUFMLENBQW5IO0dBQVYsRUFBcUksRUFBRSxFQUFGLENBQUssS0FBTCxHQUFXLFVBQVMsQ0FBVCxFQUFXO0FBQUMsTUFBRSxNQUFGLENBQVMsSUFBVCxDQUFjLENBQWQsR0FBaUIsTUFBSSxFQUFFLEVBQUYsQ0FBSyxLQUFMLEVBQUosR0FBaUIsRUFBRSxNQUFGLENBQVMsR0FBVCxFQUFqQixDQUFsQjtHQUFYLEVBQThELEVBQUUsRUFBRixDQUFLLFFBQUwsR0FBYyxFQUFkLEVBQWlCLEVBQUUsRUFBRixDQUFLLEtBQUwsR0FBVyxZQUFVO0FBQUMsV0FBSyxLQUFHLEVBQUUsV0FBRixDQUFjLEVBQUUsRUFBRixDQUFLLElBQUwsRUFBVSxFQUFFLEVBQUYsQ0FBSyxRQUFMLENBQTNCLENBQUwsQ0FBRDtHQUFWLEVBQTRELEVBQUUsRUFBRixDQUFLLElBQUwsR0FBVSxZQUFVO0FBQUMsTUFBRSxhQUFGLENBQWdCLEVBQWhCLEdBQW9CLEtBQUcsSUFBSCxDQUFyQjtHQUFWLEVBQXdDLEVBQUUsRUFBRixDQUFLLE1BQUwsR0FBWSxFQUFDLE1BQUssR0FBTCxFQUFTLE1BQUssR0FBTCxFQUFTLFVBQVMsR0FBVCxFQUEvQixFQUE2QyxFQUFFLEVBQUYsQ0FBSyxLQUFMLEdBQVcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsV0FBTyxJQUFFLEVBQUUsRUFBRixHQUFLLEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxDQUFaLEtBQWdCLENBQWhCLEdBQWtCLENBQXZCLEVBQXlCLElBQUUsS0FBRyxJQUFILEVBQVEsS0FBSyxLQUFMLENBQVcsQ0FBWCxFQUFhLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksSUFBRSxFQUFFLFVBQUYsQ0FBYSxDQUFiLEVBQWUsQ0FBZixDQUFGLENBQUwsQ0FBeUIsQ0FBRSxJQUFGLEdBQU8sWUFBVTtBQUFDLFVBQUUsWUFBRixDQUFlLENBQWYsRUFBRDtPQUFWLENBQWhDO0tBQWIsQ0FBbEQsQ0FBUjtHQUFiLEVBQXFKLFlBQVU7QUFBQyxRQUFJLElBQUUsRUFBRSxhQUFGLENBQWdCLE9BQWhCLENBQUY7UUFBMkIsSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsUUFBaEIsQ0FBRjtRQUE0QixJQUFFLEVBQUUsV0FBRixDQUFjLEVBQUUsYUFBRixDQUFnQixRQUFoQixDQUFkLENBQUYsQ0FBNUQsQ0FBdUcsQ0FBRSxJQUFGLEdBQU8sVUFBUCxFQUFrQixFQUFFLE9BQUYsR0FBVSxPQUFLLEVBQUUsS0FBRixFQUFRLEVBQUUsV0FBRixHQUFjLEVBQUUsUUFBRixFQUFXLEVBQUUsUUFBRixHQUFXLENBQUMsQ0FBRCxFQUFHLEVBQUUsV0FBRixHQUFjLENBQUMsRUFBRSxRQUFGLEVBQVcsSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsT0FBaEIsQ0FBRixFQUEyQixFQUFFLEtBQUYsR0FBUSxHQUFSLEVBQVksRUFBRSxJQUFGLEdBQU8sT0FBUCxFQUFlLEVBQUUsVUFBRixHQUFhLFFBQU0sRUFBRSxLQUFGLENBQTFSO0dBQVYsRUFBajVGLENBRHgwMEIsSUFDNGc3QixFQUFKO01BQU8sS0FBRyxFQUFFLElBQUYsQ0FBTyxVQUFQLENBRGxoN0IsQ0FDb2k3QixDQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sRUFBRSxJQUFGLEVBQU8sRUFBRSxJQUFGLEVBQU8sQ0FBZCxFQUFnQixDQUFoQixFQUFrQixVQUFVLE1BQVYsR0FBaUIsQ0FBakIsQ0FBekIsQ0FBRDtLQUFiLEVBQTRELFlBQVcsb0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsVUFBRSxVQUFGLENBQWEsSUFBYixFQUFrQixDQUFsQixFQUFEO09BQVYsQ0FBakIsQ0FBRDtLQUFYLEVBQXpGLEdBQTJKLEVBQUUsTUFBRixDQUFTLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLElBQUUsRUFBRSxRQUFGLENBQVgsSUFBeUIsTUFBSSxDQUFKLElBQU8sTUFBSSxDQUFKLElBQU8sTUFBSSxDQUFKLEVBQU0sT0FBTSxlQUFhLE9BQU8sRUFBRSxZQUFGLEdBQWUsRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBQW5DLElBQWtELE1BQUksQ0FBSixJQUFPLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBUCxLQUF1QixJQUFFLEVBQUUsV0FBRixFQUFGLEVBQWtCLElBQUUsRUFBRSxTQUFGLENBQVksQ0FBWixNQUFpQixFQUFFLElBQUYsQ0FBTyxLQUFQLENBQWEsSUFBYixDQUFrQixJQUFsQixDQUF1QixDQUF2QixJQUEwQixFQUExQixHQUE2QixLQUFLLENBQUwsQ0FBOUMsQ0FBM0MsRUFBa0csS0FBSyxDQUFMLEtBQVMsQ0FBVCxHQUFXLFNBQU8sQ0FBUCxHQUFTLEtBQUssRUFBRSxVQUFGLENBQWEsQ0FBYixFQUFlLENBQWYsQ0FBTCxHQUF1QixLQUFHLFNBQVEsQ0FBUixJQUFXLEtBQUssQ0FBTCxNQUFVLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLENBQUYsQ0FBVixHQUEwQixDQUF4QyxJQUEyQyxFQUFFLFlBQUYsQ0FBZSxDQUFmLEVBQWlCLElBQUUsRUFBRixDQUFqQixFQUF1QixDQUF2QixDQUEzQyxHQUFxRSxLQUFHLFNBQVEsQ0FBUixJQUFXLFVBQVEsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFGLENBQVIsR0FBc0IsQ0FBcEMsSUFBdUMsSUFBRSxFQUFFLElBQUYsQ0FBTyxJQUFQLENBQVksQ0FBWixFQUFjLENBQWQsQ0FBRixFQUFtQixRQUFNLENBQU4sR0FBUSxLQUFLLENBQUwsR0FBTyxDQUFmLENBQTFELENBQXBRLENBQTdCO0tBQXJDLEVBQW9aLFdBQVUsRUFBQyxNQUFLLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFHLENBQUMsRUFBRSxVQUFGLElBQWMsWUFBVSxDQUFWLElBQWEsRUFBRSxRQUFGLENBQVcsQ0FBWCxFQUFhLE9BQWIsQ0FBNUIsRUFBa0Q7QUFBQyxnQkFBSSxJQUFFLEVBQUUsS0FBRixDQUFQLE9BQXNCLEVBQUUsWUFBRixDQUFlLE1BQWYsRUFBc0IsQ0FBdEIsR0FBeUIsTUFBSSxFQUFFLEtBQUYsR0FBUSxDQUFSLENBQUosRUFBZSxDQUF4QyxDQUF0QjtXQUFyRDtTQUFkLEVBQVYsRUFBWCxFQUE0SixZQUFXLG9CQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLENBQUo7VUFBTSxDQUFOO1VBQVEsSUFBRSxDQUFGO1VBQUksSUFBRSxLQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBSCxDQUFmLElBQWdDLEtBQUcsTUFBSSxFQUFFLFFBQUYsRUFBVyxPQUFNLElBQUUsRUFBRSxHQUFGLENBQUY7QUFBUyxZQUFFLEVBQUUsT0FBRixDQUFVLENBQVYsS0FBYyxDQUFkLEVBQWdCLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQXVCLENBQXZCLE1BQTRCLEVBQUUsQ0FBRixJQUFLLENBQUMsQ0FBRCxDQUFqQyxFQUFxQyxFQUFFLGVBQUYsQ0FBa0IsQ0FBbEIsQ0FBdkQ7T0FBZjtLQUEvRCxFQUExa0IsQ0FBM0osRUFBazRCLEtBQUcsRUFBQyxLQUFJLGFBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLE1BQUksQ0FBQyxDQUFELEdBQUcsRUFBRSxVQUFGLENBQWEsQ0FBYixFQUFlLENBQWYsQ0FBUCxHQUF5QixFQUFFLFlBQUYsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLENBQXpCLEVBQTZDLENBQTdDLENBQVI7S0FBZixFQUFSLEVBQWdGLEVBQUUsSUFBRixDQUFPLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxJQUFiLENBQWtCLE1BQWxCLENBQXlCLEtBQXpCLENBQStCLE1BQS9CLENBQVAsRUFBOEMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBSSxJQUFFLEdBQUcsQ0FBSCxLQUFPLEVBQUUsSUFBRixDQUFPLElBQVAsQ0FBZCxFQUEwQixDQUFHLENBQUgsSUFBTSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFELE9BQWdCLE1BQUksSUFBRSxHQUFHLENBQUgsQ0FBRixFQUFRLEdBQUcsQ0FBSCxJQUFNLENBQU4sRUFBUSxJQUFFLFFBQU0sRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sQ0FBTixHQUFlLEVBQUUsV0FBRixFQUFmLEdBQStCLElBQS9CLEVBQW9DLEdBQUcsQ0FBSCxJQUFNLENBQU4sQ0FBMUQsRUFBbUUsQ0FBbkUsQ0FBaEI7S0FBZixDQUFoQztHQUFiLENBQWhnQyxDQURwaTdCLElBQzRyOUIsS0FBRyxxQ0FBSDtNQUF5QyxLQUFHLGVBQUgsQ0FEcnU5QixDQUN3djlCLENBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLE1BQUssY0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxFQUFFLElBQUYsRUFBTyxFQUFFLElBQUYsRUFBTyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLFVBQVUsTUFBVixHQUFpQixDQUFqQixDQUF6QixDQUFEO0tBQWIsRUFBNEQsWUFBVyxvQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxlQUFPLEtBQUssRUFBRSxPQUFGLENBQVUsQ0FBVixLQUFjLENBQWQsQ0FBWixDQUFEO09BQVYsQ0FBakIsQ0FBRDtLQUFYLEVBQXpGLEdBQW1LLEVBQUUsTUFBRixDQUFTLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLElBQUUsRUFBRSxRQUFGLENBQVgsSUFBeUIsTUFBSSxDQUFKLElBQU8sTUFBSSxDQUFKLElBQU8sTUFBSSxDQUFKLEVBQU0sT0FBTyxNQUFJLENBQUosSUFBTyxFQUFFLFFBQUYsQ0FBVyxDQUFYLENBQVAsS0FBdUIsSUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEtBQWMsQ0FBZCxFQUM5dytCLElBQUUsRUFBRSxTQUFGLENBQVksQ0FBWixDQUFGLENBRHF2K0IsRUFDbnUrQixLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsS0FBRyxTQUFRLENBQVIsSUFBVyxLQUFLLENBQUwsTUFBVSxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsQ0FBVixDQUFGLENBQVYsR0FBMEIsQ0FBeEMsR0FBMEMsRUFBRSxDQUFGLElBQUssQ0FBTCxHQUFPLEtBQUcsU0FBUSxDQUFSLElBQVcsVUFBUSxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLENBQUYsQ0FBUixHQUFzQixDQUFwQyxHQUFzQyxFQUFFLENBQUYsQ0FBdEMsQ0FEeW8rQjtLQUFyQyxFQUN4aitCLFdBQVUsRUFBQyxVQUFTLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLGNBQUksSUFBRSxFQUFFLElBQUYsQ0FBTyxJQUFQLENBQVksQ0FBWixFQUFjLFVBQWQsQ0FBRixDQUFMLE9BQXdDLElBQUUsU0FBUyxDQUFULEVBQVcsRUFBWCxDQUFGLEdBQWlCLEdBQUcsSUFBSCxDQUFRLEVBQUUsUUFBRixDQUFSLElBQXFCLEdBQUcsSUFBSCxDQUFRLEVBQUUsUUFBRixDQUFSLElBQXFCLEVBQUUsSUFBRixHQUFPLENBQWpELEdBQW1ELENBQUMsQ0FBRCxDQUE1RztTQUFYLEVBQWQsRUFBWCxFQUFzSixTQUFRLEVBQUMsT0FBTSxTQUFOLEVBQWdCLFNBQVEsV0FBUixFQUF6QixFQURtNTlCLENBQW5LLEVBQ2hzOUIsRUFBRSxXQUFGLEtBQWdCLEVBQUUsU0FBRixDQUFZLFFBQVosR0FBcUIsRUFBQyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxJQUFFLEVBQUUsVUFBRixDQUFQLE9BQTJCLEtBQUcsRUFBRSxVQUFGLElBQWMsRUFBRSxVQUFGLENBQWEsYUFBYixFQUEyQixJQUE1QyxDQUEzQjtLQUFYLEVBQXdGLEtBQUksYUFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLElBQUUsRUFBRSxVQUFGLENBQVAsQ0FBb0IsS0FBSSxFQUFFLGFBQUYsRUFBZ0IsRUFBRSxVQUFGLElBQWMsRUFBRSxVQUFGLENBQWEsYUFBYixDQUFsQyxDQUFwQjtLQUFYLEVBQXRILENBQWhCLEVBQXNPLEVBQUUsSUFBRixDQUFPLENBQUMsVUFBRCxFQUFZLFVBQVosRUFBdUIsV0FBdkIsRUFBbUMsYUFBbkMsRUFBaUQsYUFBakQsRUFBK0QsU0FBL0QsRUFBeUUsU0FBekUsRUFBbUYsUUFBbkYsRUFBNEYsYUFBNUYsRUFBMEcsaUJBQTFHLENBQVAsRUFBb0ksWUFBVTtBQUFDLE1BQUUsT0FBRixDQUFVLEtBQUssV0FBTCxFQUFWLElBQThCLElBQTlCLENBQUQ7R0FBVixDQURzMThCLENBRHh2OUIsSUFFc2QsS0FBRyxhQUFILENBRnRkLFNBRWdmLEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxXQUFPLEVBQUUsWUFBRixJQUFnQixFQUFFLFlBQUYsQ0FBZSxPQUFmLENBQWhCLElBQXlDLEVBQXpDLENBQVI7R0FBZCxDQUFrRSxDQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxVQUFTLGtCQUFTLENBQVQsRUFBVztBQUFDLFVBQUksQ0FBSjtVQUFNLENBQU47VUFBUSxDQUFSO1VBQVUsQ0FBVjtVQUFZLENBQVo7VUFBYyxDQUFkO1VBQWdCLENBQWhCO1VBQWtCLElBQUUsQ0FBRixDQUFuQixJQUEwQixFQUFFLFVBQUYsQ0FBYSxDQUFiLENBQUgsRUFBbUIsT0FBTyxLQUFLLElBQUwsQ0FBVSxVQUFTLENBQVQsRUFBVztBQUFDLFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLENBQVosRUFBYyxHQUFHLElBQUgsQ0FBZCxDQUFqQixFQUFEO09BQVgsQ0FBakIsQ0FBbkIsSUFBK0YsWUFBVSxPQUFPLENBQVAsSUFBVSxDQUFwQixFQUFzQjtBQUFDLFlBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixLQUFZLEVBQVosQ0FBSCxPQUF3QixJQUFFLEtBQUssR0FBTCxDQUFGO0FBQVksY0FBRyxJQUFFLEdBQUcsQ0FBSCxDQUFGLEVBQVEsSUFBRSxNQUFJLEVBQUUsUUFBRixJQUFZLENBQUMsTUFBSSxDQUFKLEdBQU0sR0FBTixDQUFELENBQVksT0FBWixDQUFvQixFQUFwQixFQUF1QixHQUF2QixDQUFoQixFQUE0QztBQUFDLGdCQUFFLENBQUYsQ0FBRCxPQUFXLElBQUUsRUFBRSxHQUFGLENBQUY7QUFBUyxnQkFBRSxPQUFGLENBQVUsTUFBSSxDQUFKLEdBQU0sR0FBTixDQUFWLEdBQXFCLENBQXJCLEtBQXlCLEtBQUcsSUFBRSxHQUFGLENBQTVCO2FBQWYsQ0FBa0QsR0FBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUYsRUFBWSxNQUFJLENBQUosSUFBTyxFQUFFLFlBQUYsQ0FBZSxPQUFmLEVBQXVCLENBQXZCLENBQVAsQ0FBbkU7V0FBekQ7U0FBbEI7T0FBM0MsT0FBa08sSUFBUCxDQUE5VTtLQUFYLEVBQXNXLGFBQVkscUJBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLENBQVI7VUFBVSxDQUFWO1VBQVksQ0FBWjtVQUFjLENBQWQ7VUFBZ0IsQ0FBaEI7VUFBa0IsSUFBRSxDQUFGLENBQW5CLElBQTBCLEVBQUUsVUFBRixDQUFhLENBQWIsQ0FBSCxFQUFtQixPQUFPLEtBQUssSUFBTCxDQUFVLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQVksQ0FBWixFQUFjLEdBQUcsSUFBSCxDQUFkLENBQXBCLEVBQUQ7T0FBWCxDQUFqQixDQUFuQixJQUFrRyxDQUFDLFVBQVUsTUFBVixFQUFpQixPQUFPLEtBQUssSUFBTCxDQUFVLE9BQVYsRUFBa0IsRUFBbEIsQ0FBUCxDQUFyQixJQUFxRCxZQUFVLE9BQU8sQ0FBUCxJQUFVLENBQXBCLEVBQXNCO0FBQUMsWUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEtBQVksRUFBWixDQUFILE9BQXdCLElBQUUsS0FBSyxHQUFMLENBQUY7QUFBWSxjQUFHLElBQUUsR0FBRyxDQUFILENBQUYsRUFBUSxJQUFFLE1BQUksRUFBRSxRQUFGLElBQVksQ0FBQyxNQUFJLENBQUosR0FBTSxHQUFOLENBQUQsQ0FBWSxPQUFaLENBQW9CLEVBQXBCLEVBQXVCLEdBQXZCLENBQWhCLEVBQTRDO0FBQUMsZ0JBQUUsQ0FBRixDQUFELE9BQVcsSUFBRSxFQUFFLEdBQUYsQ0FBRjtBQUFTLHFCQUFNLEVBQUUsT0FBRixDQUFVLE1BQUksQ0FBSixHQUFNLEdBQU4sQ0FBVixHQUFxQixDQUFDLENBQUQ7QUFBRyxvQkFBRSxFQUFFLE9BQUYsQ0FBVSxNQUFJLENBQUosR0FBTSxHQUFOLEVBQVUsR0FBcEIsQ0FBRjtlQUE5QjthQUFmLENBQXdFLEdBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFGLEVBQVksTUFBSSxDQUFKLElBQU8sRUFBRSxZQUFGLENBQWUsT0FBZixFQUF1QixDQUF2QixDQUFQLENBQXpGO1dBQXpEO1NBQWxCO09BQTNDLE9BQXdQLElBQVAsQ0FBelo7S0FBWCxFQUFpYixhQUFZLHFCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLFdBQVMsNENBQVQsQ0FBTCxPQUFzQixhQUFXLE9BQU8sQ0FBUCxJQUFVLGFBQVcsQ0FBWCxHQUFhLElBQUUsS0FBSyxRQUFMLENBQWMsQ0FBZCxDQUFGLEdBQW1CLEtBQUssV0FBTCxDQUFpQixDQUFqQixDQUFuQixHQUF1QyxFQUFFLFVBQUYsQ0FBYSxDQUFiLElBQWdCLEtBQUssSUFBTCxDQUFVLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQVksQ0FBWixFQUFjLEdBQUcsSUFBSCxDQUFkLEVBQXVCLENBQXZCLENBQXBCLEVBQThDLENBQTlDLEVBQUQ7T0FBWCxDQUExQixHQUF5RixLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsWUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLENBQUQsSUFBZ0IsYUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFFLENBQUYsRUFBSSxJQUFFLEVBQUUsSUFBRixDQUFGLEVBQVUsSUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEtBQVksRUFBWixDQUFqQixPQUFzQyxJQUFFLEVBQUUsR0FBRixDQUFGO0FBQVMsY0FBRSxRQUFGLENBQVcsQ0FBWCxJQUFjLEVBQUUsV0FBRixDQUFjLENBQWQsQ0FBZCxHQUErQixFQUFFLFFBQUYsQ0FBVyxDQUFYLENBQS9CO1dBQWY7U0FBaEQsTUFBaUgsS0FBSyxDQUFMLEtBQVMsQ0FBVCxJQUFZLGNBQVksQ0FBWixLQUFnQixJQUFFLEdBQUcsSUFBSCxDQUFGLEVBQVcsS0FBRyxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsZUFBWCxFQUEyQixDQUEzQixDQUFILEVBQWlDLEtBQUssWUFBTCxJQUFtQixLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMEIsS0FBRyxNQUFJLENBQUMsQ0FBRCxHQUFHLEVBQVYsR0FBYSxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsZUFBWCxLQUE2QixFQUE3QixDQUExRCxDQUF4RSxDQUFqSDtPQUF2QixDQUFuRyxDQUEvRjtLQUFiLEVBQThmLFVBQVMsa0JBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLElBQUUsQ0FBRixDQUFULENBQWEsR0FBRSxNQUFJLENBQUosR0FBTSxHQUFOLENBQWYsT0FBK0IsSUFBRSxLQUFLLEdBQUwsQ0FBRjtBQUFZLFlBQUcsTUFBSSxFQUFFLFFBQUYsSUFBWSxDQUFDLE1BQUksR0FBRyxDQUFILENBQUosR0FBVSxHQUFWLENBQUQsQ0FBZ0IsT0FBaEIsQ0FBd0IsRUFBeEIsRUFBMkIsR0FBM0IsRUFBZ0MsT0FBaEMsQ0FBd0MsQ0FBeEMsSUFBMkMsQ0FBQyxDQUFELEVBQUcsT0FBTSxDQUFDLENBQUQsQ0FBdkU7T0FBbEIsT0FBa0csQ0FBQyxDQUFELENBQTNIO0tBQVgsRUFBNTBDLEVBRnppQixJQUVxZ0UsS0FBRyxLQUFIO01BQVMsS0FBRyxrQkFBSCxDQUY5Z0UsQ0FFb2lFLENBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLEtBQUksYUFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLENBQUo7VUFBTSxDQUFOO1VBQVEsQ0FBUjtVQUFVLElBQUUsS0FBSyxDQUFMLENBQUYsQ0FBWDtBQUFzQixZQUFHLFVBQVUsTUFBVixFQUFpQixPQUFPLElBQUUsRUFBRSxVQUFGLENBQWEsQ0FBYixDQUFGLEVBQWtCLEtBQUssSUFBTCxDQUFVLFVBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxDQUFKLENBQUQsQ0FBTyxLQUFJLEtBQUssUUFBTCxLQUFnQixJQUFFLElBQUUsRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLENBQVosRUFBYyxFQUFFLElBQUYsRUFBUSxHQUFSLEVBQWQsQ0FBRixHQUErQixDQUEvQixFQUFpQyxRQUFNLENBQU4sR0FBUSxJQUFFLEVBQUYsR0FBSyxZQUFVLE9BQU8sQ0FBUCxHQUFTLEtBQUcsRUFBSCxHQUFNLEVBQUUsT0FBRixDQUFVLENBQVYsTUFBZSxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxVQUFTLENBQVQsRUFBVztBQUFDLG1CQUFPLFFBQU0sQ0FBTixHQUFRLEVBQVIsR0FBVyxJQUFFLEVBQUYsQ0FBbkI7V0FBWCxDQUFWLENBQWYsRUFBK0QsSUFBRSxFQUFFLFFBQUYsQ0FBVyxLQUFLLElBQUwsQ0FBWCxJQUF1QixFQUFFLFFBQUYsQ0FBVyxLQUFLLFFBQUwsQ0FBYyxXQUFkLEVBQVgsQ0FBdkIsRUFBK0QsS0FBRyxTQUFRLENBQVIsSUFBVyxLQUFLLENBQUwsS0FBUyxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsQ0FBWCxFQUFhLE9BQWIsQ0FBVCxLQUFpQyxLQUFLLEtBQUwsR0FBVyxDQUFYLENBQS9DLENBQTdOLENBQVA7U0FBWCxDQUE1QixDQUEzQixJQUF5VyxDQUFILEVBQUssT0FBTyxJQUFFLEVBQUUsUUFBRixDQUFXLEVBQUUsSUFBRixDQUFYLElBQW9CLEVBQUUsUUFBRixDQUFXLEVBQUUsUUFBRixDQUFXLFdBQVgsRUFBWCxDQUFwQixFQUF5RCxLQUFHLFNBQVEsQ0FBUixJQUFXLEtBQUssQ0FBTCxNQUFVLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLE9BQVIsQ0FBRixDQUFWLEdBQThCLENBQTVDLElBQStDLElBQUUsRUFBRSxLQUFGLEVBQVEsWUFBVSxPQUFPLENBQVAsR0FBUyxFQUFFLE9BQUYsQ0FBVSxFQUFWLEVBQWEsRUFBYixDQUFuQixHQUFvQyxRQUFNLENBQU4sR0FBUSxFQUFSLEdBQVcsQ0FBWCxDQUE3RixDQUF2RTtPQUE1WDtLQUFYLEVBQWpCLEdBQThrQixFQUFFLE1BQUYsQ0FBUyxFQUFDLFVBQVMsRUFBQyxRQUFPLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLGNBQUksSUFBRSxFQUFFLElBQUYsQ0FBTyxJQUFQLENBQVksQ0FBWixFQUFjLE9BQWQsQ0FBRixDQUFMLE9BQXFDLFFBQU0sQ0FBTixHQUFRLENBQVIsR0FBVSxFQUFFLElBQUYsQ0FBTyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVAsRUFBa0IsT0FBbEIsQ0FBMEIsRUFBMUIsRUFBNkIsR0FBN0IsQ0FBVixDQUFyQztTQUFYLEVBQVosRUFBMEcsUUFBTyxFQUFDLEtBQUksYUFBUyxDQUFULEVBQVc7QUFBQyxlQUFJLElBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxJQUFFLEVBQUUsT0FBRixFQUFVLElBQUUsRUFBRSxhQUFGLEVBQWdCLElBQUUsaUJBQWUsRUFBRSxJQUFGLElBQVEsSUFBRSxDQUFGLEVBQUksSUFBRSxJQUFFLElBQUYsR0FBTyxFQUFQLEVBQVUsSUFBRSxJQUFFLElBQUUsQ0FBRixHQUFJLEVBQUUsTUFBRixFQUFTLElBQUUsSUFBRSxDQUFGLEdBQUksQ0FBSixHQUFNLElBQUUsQ0FBRixHQUFJLENBQUosRUFBTSxJQUFFLENBQUYsRUFBSSxHQUF0SDtBQUEwSCxnQkFBRyxJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sQ0FBQyxFQUFFLFFBQUYsSUFBWSxNQUFJLENBQUosQ0FBYixLQUFzQixFQUFFLFdBQUYsR0FBYyxDQUFDLEVBQUUsUUFBRixHQUFXLFNBQU8sRUFBRSxZQUFGLENBQWUsVUFBZixDQUFQLENBQWhELEtBQXFGLENBQUMsRUFBRSxVQUFGLENBQWEsUUFBYixJQUF1QixDQUFDLEVBQUUsUUFBRixDQUFXLEVBQUUsVUFBRixFQUFhLFVBQXhCLENBQUQsQ0FBN0csRUFBbUo7QUFBQyxrQkFBRyxJQUFFLEVBQUUsQ0FBRixFQUFLLEdBQUwsRUFBRixFQUFhLENBQWIsRUFBZSxPQUFPLENBQVAsQ0FBbEIsQ0FBMkIsQ0FBRSxJQUFGLENBQU8sQ0FBUCxFQUE1QjthQUE3SjtXQUExSCxPQUFvVSxDQUFQLENBQTlUO1NBQVgsRUFBbVYsS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFJLENBQUo7Y0FBTSxDQUFOO2NBQVEsSUFBRSxFQUFFLE9BQUY7Y0FBVSxJQUFFLEVBQUUsU0FBRixDQUFZLENBQVosQ0FBRjtjQUFpQixJQUFFLEVBQUUsTUFBRixDQUF4QyxPQUF1RCxHQUFOO0FBQVUsZ0JBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxDQUFDLEVBQUUsUUFBRixHQUFXLEVBQUUsT0FBRixDQUFVLEVBQUUsUUFBRixDQUFXLE1BQVgsQ0FBa0IsR0FBbEIsQ0FBc0IsQ0FBdEIsQ0FBVixFQUFtQyxDQUFuQyxJQUFzQyxDQUFDLENBQUQsQ0FBbEQsS0FBd0QsSUFBRSxDQUFDLENBQUQsQ0FBMUQ7V0FBakIsT0FBc0YsTUFBSSxFQUFFLGFBQUYsR0FBZ0IsQ0FBQyxDQUFELENBQXBCLEVBQXdCLENBQXhCLENBQXZJO1NBQWIsRUFBblcsRUFBcEgsRUFBVixDQUE5a0IsRUFBa3VDLEVBQUUsSUFBRixDQUFPLENBQUMsT0FBRCxFQUFTLFVBQVQsQ0FBUCxFQUE0QixZQUFVO0FBQUMsTUFBRSxRQUFGLENBQVcsSUFBWCxJQUFpQixFQUFDLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsZUFBTyxFQUFFLE9BQUYsQ0FBVSxDQUFWLElBQWEsRUFBRSxPQUFGLEdBQVUsRUFBRSxPQUFGLENBQVUsRUFBRSxDQUFGLEVBQUssR0FBTCxFQUFWLEVBQXFCLENBQXJCLElBQXdCLENBQUMsQ0FBRCxHQUFHLEtBQUssQ0FBTCxDQUExRDtPQUFiLEVBQXRCLEVBQXNHLEVBQUUsT0FBRixLQUFZLEVBQUUsUUFBRixDQUFXLElBQVgsRUFBaUIsR0FBakIsR0FBcUIsVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLFNBQU8sRUFBRSxZQUFGLENBQWUsT0FBZixDQUFQLEdBQStCLElBQS9CLEdBQW9DLEVBQUUsS0FBRixDQUE1QztLQUFYLENBQWpDLENBQXZHO0dBQVYsQ0FBOXZDLENBRnBpRSxJQUUyL0csS0FBRyxpQ0FBSCxDQUYzL0csQ0FFZ2lILENBQUUsTUFBRixDQUFTLEVBQUUsS0FBRixFQUFRLEVBQUMsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUMsVUFBSSxDQUFKO1VBQU0sQ0FBTjtVQUFRLENBQVI7VUFBVSxDQUFWO1VBQVksQ0FBWjtVQUFjLENBQWQ7VUFBZ0IsQ0FBaEI7VUFBa0IsSUFBRSxDQUFDLEtBQUcsQ0FBSCxDQUFIO1VBQVMsSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsTUFBVCxJQUFpQixFQUFFLElBQUYsR0FBTyxDQUF4QjtVQUEwQixJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxXQUFULElBQXNCLEVBQUUsU0FBRixDQUFZLEtBQVosQ0FBa0IsR0FBbEIsQ0FBdEIsR0FBNkMsRUFBN0MsQ0FBMUQsSUFBNkcsSUFBRSxJQUFFLElBQUUsS0FBRyxDQUFILEVBQUssTUFBSSxFQUFFLFFBQUYsSUFBWSxNQUFJLEVBQUUsUUFBRixJQUFZLENBQUMsR0FBRyxJQUFILENBQVEsSUFBRSxFQUFFLEtBQUYsQ0FBUSxTQUFSLENBQVgsS0FBZ0MsRUFBRSxPQUFGLENBQVUsR0FBVixJQUFlLENBQUMsQ0FBRCxLQUFLLElBQUUsRUFBRSxLQUFGLENBQVEsR0FBUixDQUFGLEVBQWUsSUFBRSxFQUFFLEtBQUYsRUFBRixFQUFZLEVBQUUsSUFBRixFQUEzQixDQUFwQixFQUF5RCxJQUFFLEVBQUUsT0FBRixDQUFVLEdBQVYsSUFBZSxDQUFmLElBQWtCLE9BQUssQ0FBTCxFQUFPLElBQUUsRUFBRSxFQUFFLE9BQUYsQ0FBRixHQUFhLENBQWIsR0FBZSxJQUFJLEVBQUUsS0FBRixDQUFRLENBQVosRUFBYyxvQkFBaUIsNkNBQWpCLElBQW9CLENBQXBCLENBQTdCLEVBQW9ELEVBQUUsU0FBRixHQUFZLElBQUUsQ0FBRixHQUFJLENBQUosRUFBTSxFQUFFLFNBQUYsR0FBWSxFQUFFLElBQUYsQ0FBTyxHQUFQLENBQVosRUFBd0IsRUFBRSxVQUFGLEdBQWEsRUFBRSxTQUFGLEdBQVksSUFBSSxNQUFKLENBQVcsWUFBVSxFQUFFLElBQUYsQ0FBTyxlQUFQLENBQVYsR0FBa0MsU0FBbEMsQ0FBdkIsR0FBb0UsSUFBcEUsRUFBeUUsRUFBRSxNQUFGLEdBQVMsS0FBSyxDQUFMLEVBQU8sRUFBRSxNQUFGLEtBQVcsRUFBRSxNQUFGLEdBQVMsQ0FBVCxDQUFYLEVBQXVCLElBQUUsUUFBTSxDQUFOLEdBQVEsQ0FBQyxDQUFELENBQVIsR0FBWSxFQUFFLFNBQUYsQ0FBWSxDQUFaLEVBQWMsQ0FBQyxDQUFELENBQWQsQ0FBWixFQUErQixJQUFFLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBb0IsRUFBcEIsRUFBdUIsS0FBRyxDQUFDLEVBQUUsT0FBRixJQUFXLEVBQUUsT0FBRixDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsTUFBdUIsQ0FBQyxDQUFELENBQWpkLEVBQXFkO0FBQUMsWUFBRyxDQUFDLENBQUQsSUFBSSxDQUFDLEVBQUUsUUFBRixJQUFZLENBQUMsRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUFELEVBQWU7QUFBQyxlQUFJLElBQUUsRUFBRSxZQUFGLElBQWdCLENBQWhCLEVBQWtCLEdBQUcsSUFBSCxDQUFRLElBQUUsQ0FBRixDQUFSLEtBQWUsSUFBRSxFQUFFLFVBQUYsQ0FBakIsRUFBK0IsQ0FBdkQsRUFBeUQsSUFBRSxFQUFFLFVBQUY7QUFBYSxjQUFFLElBQUYsQ0FBTyxDQUFQLEdBQVUsSUFBRSxDQUFGO1dBQWxGLENBQXNGLE1BQUssRUFBRSxhQUFGLElBQWlCLENBQWpCLENBQUwsSUFBMEIsRUFBRSxJQUFGLENBQU8sRUFBRSxXQUFGLElBQWUsRUFBRSxZQUFGLElBQWdCLENBQS9CLENBQWpDLENBQXZGO1NBQW5DLENBQTZMLEdBQUUsQ0FBRixDQUE5TCxPQUF3TSxDQUFDLElBQUUsRUFBRSxHQUFGLENBQUYsQ0FBRCxJQUFZLENBQUMsRUFBRSxvQkFBRixFQUFEO0FBQTBCLFlBQUUsSUFBRixHQUFPLElBQUUsQ0FBRixHQUFJLENBQUosR0FBTSxFQUFFLFFBQUYsSUFBWSxDQUFaLEVBQWMsSUFBRSxDQUFDLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxRQUFSLEtBQW1CLEVBQW5CLENBQUQsQ0FBd0IsRUFBRSxJQUFGLENBQXhCLElBQWlDLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxRQUFSLENBQWpDLEVBQW1ELEtBQUcsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBSCxFQUFnQixJQUFFLEtBQUcsRUFBRSxDQUFGLENBQUgsRUFBUSxLQUFHLEVBQUUsS0FBRixJQUFTLEVBQUUsQ0FBRixDQUFaLEtBQW1CLEVBQUUsTUFBRixHQUFTLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLENBQVQsRUFBc0IsRUFBRSxNQUFGLEtBQVcsQ0FBQyxDQUFELElBQUksRUFBRSxjQUFGLEVBQWYsQ0FBekM7U0FBdEosT0FBeU8sRUFBRSxJQUFGLEdBQU8sQ0FBUCxFQUFTLEtBQUcsRUFBRSxrQkFBRixFQUFILElBQTJCLEVBQUUsUUFBRixJQUFZLEVBQUUsUUFBRixDQUFXLEtBQVgsQ0FBaUIsRUFBRSxHQUFGLEVBQWpCLEVBQXlCLENBQXpCLE1BQThCLENBQUMsQ0FBRCxJQUFJLENBQUMsRUFBRSxDQUFGLENBQUQsSUFBTyxLQUFHLEVBQUUsVUFBRixDQUFhLEVBQUUsQ0FBRixDQUFiLENBQUgsSUFBdUIsQ0FBQyxFQUFFLFFBQUYsQ0FBVyxDQUFYLENBQUQsS0FBaUIsSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLE1BQUksRUFBRSxDQUFGLElBQUssSUFBTCxDQUFKLEVBQWUsRUFBRSxLQUFGLENBQVEsU0FBUixHQUFrQixDQUFsQixFQUFvQixFQUFFLENBQUYsR0FBMUMsRUFBaUQsRUFBRSxLQUFGLENBQVEsU0FBUixHQUFrQixLQUFLLENBQUwsRUFBTyxNQUFJLEVBQUUsQ0FBRixJQUFLLENBQUwsQ0FBSixDQUFsSCxFQUErSCxFQUFFLE1BQUYsQ0FBbm9CO09BQW5lO0tBQTNILEVBQTR1QyxVQUFTLGtCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxJQUFFLEVBQUUsTUFBRixDQUFTLElBQUksRUFBRSxLQUFGLEVBQWIsRUFBcUIsQ0FBckIsRUFBdUIsRUFBQyxNQUFLLENBQUwsRUFBTyxhQUFZLENBQUMsQ0FBRCxFQUEzQyxDQUFGLENBQUwsQ0FBdUQsQ0FBRSxLQUFGLENBQVEsT0FBUixDQUFnQixDQUFoQixFQUFrQixJQUFsQixFQUF1QixDQUF2QixHQUEwQixFQUFFLGtCQUFGLE1BQXdCLEVBQUUsY0FBRixFQUF4QixDQUFqRjtLQUFmLEVBQS93QyxHQUE2NUMsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsVUFBRSxLQUFGLENBQVEsT0FBUixDQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQixJQUFwQixFQUFEO09BQVYsQ0FBakIsQ0FBRDtLQUFiLEVBQXVFLGdCQUFlLHdCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLElBQUUsS0FBSyxDQUFMLENBQUYsQ0FBTCxPQUFzQixJQUFFLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBQyxDQUFELENBQXhCLEdBQTRCLEtBQUssQ0FBTCxDQUFsRDtLQUFiLEVBQTNHLENBQTc1QyxFQUFpbEQsRUFBRSxJQUFGLENBQU8sME1BQTBNLEtBQTFNLENBQWdOLEdBQWhOLENBQVAsRUFBNE4sVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxFQUFGLENBQUssQ0FBTCxJQUFRLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sVUFBVSxNQUFWLEdBQWlCLENBQWpCLEdBQW1CLEtBQUssRUFBTCxDQUFRLENBQVIsRUFBVSxJQUFWLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUFuQixHQUF1QyxLQUFLLE9BQUwsQ0FBYSxDQUFiLENBQXZDLENBQVI7S0FBYixDQUFUO0dBQWIsQ0FBN3lELEVBQWs1RCxFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxPQUFNLGVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLFVBQW5CLENBQThCLEtBQUcsQ0FBSCxDQUFyQyxDQUFEO0tBQWIsRUFBbkIsQ0FBbDVELEVBQWkrRCxFQUFFLE9BQUYsR0FBVSxlQUFjLENBQWQsRUFBZ0IsRUFBRSxPQUFGLElBQVcsRUFBRSxJQUFGLENBQU8sRUFBQyxPQUFNLFNBQU4sRUFBZ0IsTUFBSyxVQUFMLEVBQXhCLEVBQXlDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFFBQUksSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVc7QUFBQyxRQUFFLEtBQUYsQ0FBUSxRQUFSLENBQWlCLENBQWpCLEVBQW1CLEVBQUUsTUFBRixFQUFTLEVBQUUsS0FBRixDQUFRLEdBQVIsQ0FBWSxDQUFaLENBQTVCLEVBQUQ7S0FBWCxDQUFQLENBQWdFLENBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsSUFBbUIsRUFBQyxPQUFNLGlCQUFVO0FBQUMsWUFBSSxJQUFFLEtBQUssYUFBTCxJQUFvQixJQUFwQjtZQUF5QixJQUFFLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQUYsQ0FBaEMsQ0FBZ0QsSUFBRyxFQUFFLGdCQUFGLENBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCLENBQUMsQ0FBRCxDQUExQixFQUE4QixFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQUMsS0FBRyxDQUFILENBQUQsR0FBTyxDQUFQLENBQTNDLENBQWhEO09BQVYsRUFBZ0gsVUFBUyxvQkFBVTtBQUFDLFlBQUksSUFBRSxLQUFLLGFBQUwsSUFBb0IsSUFBcEI7WUFBeUIsSUFBRSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxJQUFjLENBQWQsQ0FBbEMsQ0FBa0QsR0FBRSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBRixJQUFtQixFQUFFLG1CQUFGLENBQXNCLENBQXRCLEVBQXdCLENBQXhCLEVBQTBCLENBQUMsQ0FBRCxDQUExQixFQUE4QixFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxDQUE5QixDQUFuQixDQUFsRDtPQUFWLEVBQW5KLENBQWhFO0dBQWIsQ0FBcEQsQ0FGM2hMLElBRW03TCxLQUFHLEVBQUUsUUFBRjtNQUFXLEtBQUcsRUFBRSxHQUFGLEVBQUg7TUFBVyxLQUFHLElBQUgsQ0FGNThMLENBRW85TCxDQUFFLFNBQUYsR0FBWSxVQUFTLENBQVQsRUFBVztBQUFDLFdBQU8sS0FBSyxLQUFMLENBQVcsSUFBRSxFQUFGLENBQWxCLENBQUQ7R0FBWCxFQUFxQyxFQUFFLFFBQUYsR0FBVyxVQUFTLENBQVQsRUFBVztBQUFDLFFBQUksQ0FBSixDQUFELElBQVUsQ0FBQyxDQUFELElBQUksWUFBVSxPQUFPLENBQVAsRUFBUyxPQUFPLElBQVAsQ0FBMUIsSUFBeUM7QUFBQyxVQUFFLElBQUssRUFBRSxTQUFGLEVBQUwsQ0FBa0IsZUFBbEIsQ0FBa0MsQ0FBbEMsRUFBb0MsVUFBcEMsQ0FBRixDQUFEO0tBQUgsQ0FBc0QsT0FBTSxDQUFOLEVBQVE7QUFBQyxVQUFFLEtBQUssQ0FBTCxDQUFIO0tBQVIsT0FBeUIsS0FBRyxDQUFDLEVBQUUsb0JBQUYsQ0FBdUIsYUFBdkIsRUFBc0MsTUFBdEMsSUFBOEMsRUFBRSxLQUFGLENBQVEsa0JBQWdCLENBQWhCLENBQTFELEVBQTZFLENBQTdFLENBQTVIO0dBQVgsQ0FGaGhNLElBRTJ1TSxLQUFHLE1BQUg7TUFBVSxLQUFHLGVBQUg7TUFBbUIsS0FBRyw0QkFBSDtNQUFnQyxLQUFHLDJEQUFIO01BQStELEtBQUcsZ0JBQUg7TUFBb0IsS0FBRyxPQUFIO01BQVcsS0FBRyxFQUFIO01BQU0sS0FBRyxFQUFIO01BQU0sS0FBRyxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQUg7TUFBb0IsS0FBRyxFQUFFLGFBQUYsQ0FBZ0IsR0FBaEIsQ0FBSCxDQUZ0Nk0sRUFFODdNLENBQUcsSUFBSCxHQUFRLEdBQUcsSUFBSCxDQUZ0OE0sU0FFdTlNLEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxXQUFPLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGtCQUFVLE9BQU8sQ0FBUCxLQUFXLElBQUUsQ0FBRixFQUFJLElBQUUsR0FBRixDQUF6QixDQUFELElBQXFDLENBQUo7VUFBTSxJQUFFLENBQUY7VUFBSSxJQUFFLEVBQUUsV0FBRixHQUFnQixLQUFoQixDQUFzQixDQUF0QixLQUEwQixFQUExQixDQUE3QyxJQUE2RSxFQUFFLFVBQUYsQ0FBYSxDQUFiLENBQUgsRUFBbUIsT0FBTSxJQUFFLEVBQUUsR0FBRixDQUFGO0FBQVMsZ0JBQU0sRUFBRSxDQUFGLENBQU4sSUFBWSxJQUFFLEVBQUUsS0FBRixDQUFRLENBQVIsS0FBWSxHQUFaLEVBQWdCLENBQUMsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEtBQU0sRUFBTixDQUFOLENBQWdCLE9BQWhCLENBQXdCLENBQXhCLENBQWxCLENBQVosR0FBMEQsQ0FBQyxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsS0FBTSxFQUFOLENBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUIsQ0FBckIsQ0FBMUQ7T0FBZjtLQUExRyxDQUFSO0dBQWQsU0FBMk8sRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CO0FBQUMsUUFBSSxJQUFFLEVBQUY7UUFBSyxJQUFFLE1BQUksRUFBSixDQUFaLFNBQTRCLENBQVQsQ0FBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLENBQUosQ0FBRCxPQUFjLEVBQUUsQ0FBRixJQUFLLENBQUMsQ0FBRCxFQUFHLEVBQUUsSUFBRixDQUFPLEVBQUUsQ0FBRixLQUFNLEVBQU4sRUFBUyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sQ0FBRixDQUFMLE9BQXNCLFlBQVUsT0FBTyxDQUFQLElBQVUsQ0FBcEIsSUFBdUIsRUFBRSxDQUFGLENBQXZCLEdBQTRCLElBQUUsRUFBRSxJQUFFLENBQUYsQ0FBRixHQUFPLEtBQUssQ0FBTCxJQUFRLEVBQUUsU0FBRixDQUFZLE9BQVosQ0FBb0IsQ0FBcEIsR0FBdUIsRUFBRSxDQUFGLENBQXZCLEVBQTRCLENBQUMsQ0FBRCxDQUF6RSxDQUF0QjtPQUFiLENBQXhCLEVBQTBJLENBQTFJLENBQWQ7S0FBYixPQUE4SyxFQUFFLEVBQUUsU0FBRixDQUFZLENBQVosQ0FBRixLQUFtQixDQUFDLEVBQUUsR0FBRixDQUFELElBQVMsRUFBRSxHQUFGLENBQVQsQ0FBcE47R0FBcEIsU0FBaVEsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsUUFBSSxDQUFKO1FBQU0sQ0FBTjtRQUFRLElBQUUsRUFBRSxZQUFGLENBQWUsV0FBZixJQUE0QixFQUE1QixDQUFYLEtBQThDLENBQUosSUFBUyxDQUFUO0FBQVcsV0FBSyxDQUFMLEtBQVMsRUFBRSxDQUFGLENBQVQsS0FBZ0IsQ0FBQyxFQUFFLENBQUYsSUFBSyxDQUFMLEdBQU8sTUFBSSxJQUFFLEVBQUYsQ0FBSixDQUFSLENBQW1CLENBQW5CLElBQXNCLEVBQUUsQ0FBRixDQUF0QixDQUFoQjtLQUFYLE9BQThELEtBQUcsRUFBRSxNQUFGLENBQVMsQ0FBQyxDQUFELEVBQUcsQ0FBWixFQUFjLENBQWQsQ0FBSCxFQUFvQixDQUFwQixDQUF4RztHQUFoQixTQUF1SixFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0I7QUFBQyxRQUFJLENBQUo7UUFBTSxDQUFOO1FBQVEsQ0FBUjtRQUFVLENBQVY7UUFBWSxJQUFFLEVBQUUsUUFBRjtRQUFXLElBQUUsRUFBRSxTQUFGLENBQTVCLE9BQThDLFFBQU0sRUFBRSxDQUFGLENBQU47QUFBVyxRQUFFLEtBQUYsSUFBVSxLQUFLLENBQUwsS0FBUyxDQUFULEtBQWEsSUFBRSxFQUFFLFFBQUYsSUFBWSxFQUFFLGlCQUFGLENBQW9CLGNBQXBCLENBQVosQ0FBZjtLQUEzQixJQUE4RixDQUFILEVBQUssS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFVBQUcsRUFBRSxDQUFGLEtBQU0sRUFBRSxDQUFGLEVBQUssSUFBTCxDQUFVLENBQVYsQ0FBTixFQUFtQjtBQUFDLFVBQUUsT0FBRixDQUFVLENBQVYsRUFBRDtPQUF0QjtLQUFYLElBQXdELEVBQUUsQ0FBRixLQUFPLENBQVAsRUFBUyxJQUFFLEVBQUUsQ0FBRixDQUFGLENBQVosS0FBdUI7QUFBQyxXQUFJLENBQUosSUFBUyxDQUFULEVBQVc7QUFBQyxZQUFHLENBQUMsRUFBRSxDQUFGLENBQUQsSUFBTyxFQUFFLFVBQUYsQ0FBYSxJQUFFLEdBQUYsR0FBTSxFQUFFLENBQUYsQ0FBTixDQUFwQixFQUFnQztBQUFDLGNBQUUsQ0FBRixDQUFEO1NBQW5DLENBQThDLEtBQUksSUFBRSxDQUFGLENBQUosQ0FBL0M7T0FBWCxDQUFtRSxHQUFFLEtBQUcsQ0FBSCxDQUF0RTtLQUF2QixPQUF5RyxLQUFHLE1BQUksRUFBRSxDQUFGLENBQUosSUFBVSxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQVYsRUFBdUIsRUFBRSxDQUFGLENBQXZCLENBQUgsR0FBZ0MsS0FBSyxDQUFMLENBQXRVO0dBQWxCLFNBQXdXLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQjtBQUFDLFFBQUksQ0FBSjtRQUFNLENBQU47UUFBUSxDQUFSO1FBQVUsQ0FBVjtRQUFZLENBQVo7UUFBYyxJQUFFLEVBQUY7UUFBSyxJQUFFLEVBQUUsU0FBRixDQUFZLEtBQVosRUFBRixDQUFwQixJQUE2QyxFQUFFLENBQUYsQ0FBSCxFQUFRLEtBQUksQ0FBSixJQUFTLEVBQUUsVUFBRjtBQUFhLFFBQUUsRUFBRSxXQUFGLEVBQUYsSUFBbUIsRUFBRSxVQUFGLENBQWEsQ0FBYixDQUFuQjtLQUF0QixDQUF5RCxHQUFFLEVBQUUsS0FBRixFQUFGLENBQTNHLE9BQTZILENBQU47QUFBUSxVQUFHLEVBQUUsY0FBRixDQUFpQixDQUFqQixNQUFzQixFQUFFLEVBQUUsY0FBRixDQUFpQixDQUFqQixDQUFGLElBQXVCLENBQXZCLENBQXRCLEVBQWdELENBQUMsQ0FBRCxJQUFJLENBQUosSUFBTyxFQUFFLFVBQUYsS0FBZSxJQUFFLEVBQUUsVUFBRixDQUFhLENBQWIsRUFBZSxFQUFFLFFBQUYsQ0FBakIsQ0FBdEIsRUFBb0QsSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLEtBQUYsRUFBRixFQUFZLElBQUcsUUFBTSxDQUFOLEVBQVEsSUFBRSxDQUFGLENBQVgsS0FBb0IsSUFBRyxRQUFNLENBQU4sSUFBUyxNQUFJLENBQUosRUFBTTtBQUFDLFlBQUcsSUFBRSxFQUFFLElBQUUsR0FBRixHQUFNLENBQU4sQ0FBRixJQUFZLEVBQUUsT0FBSyxDQUFMLENBQWQsRUFBc0IsQ0FBQyxDQUFELEVBQUcsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLGNBQUcsSUFBRSxFQUFFLEtBQUYsQ0FBUSxHQUFSLENBQUYsRUFBZSxFQUFFLENBQUYsTUFBTyxDQUFQLEtBQVcsSUFBRSxFQUFFLElBQUUsR0FBRixHQUFNLEVBQUUsQ0FBRixDQUFOLENBQUYsSUFBZSxFQUFFLE9BQUssRUFBRSxDQUFGLENBQUwsQ0FBakIsQ0FBYixFQUEwQztBQUFDLGtCQUFJLENBQUMsQ0FBRCxHQUFHLElBQUUsRUFBRSxDQUFGLENBQUYsR0FBTyxFQUFFLENBQUYsTUFBTyxDQUFDLENBQUQsS0FBSyxJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sRUFBRSxPQUFGLENBQVUsRUFBRSxDQUFGLENBQVYsQ0FBUCxDQUFaLENBQWY7V0FBNUQ7U0FBWCxJQUFtSSxNQUFJLENBQUMsQ0FBRCxFQUFHLElBQUcsS0FBRyxFQUFFLFFBQUYsQ0FBSCxFQUFlLElBQUUsRUFBRSxDQUFGLENBQUYsQ0FBbEIsS0FBOEIsSUFBRztBQUFDLGNBQUUsRUFBRSxDQUFGLENBQUYsQ0FBRDtTQUFILENBQVcsT0FBTSxDQUFOLEVBQVE7QUFBQyxpQkFBTSxFQUFDLE9BQU0sYUFBTixFQUFvQixPQUFNLElBQUUsQ0FBRixHQUFJLHdCQUFzQixDQUF0QixHQUF3QixNQUF4QixHQUErQixDQUEvQixFQUFyQyxDQUFEO1NBQVI7T0FBcE87S0FBbkosT0FBOGMsRUFBQyxPQUFNLFNBQU4sRUFBZ0IsTUFBSyxDQUFMLEVBQXZCLENBQS9qQjtHQUFwQixDQUFrbkIsQ0FBRSxNQUFGLENBQVMsRUFBQyxRQUFPLENBQVAsRUFBUyxjQUFhLEVBQWIsRUFBZ0IsTUFBSyxFQUFMLEVBQVEsY0FBYSxFQUFDLEtBQUksR0FBRyxJQUFILEVBQVEsTUFBSyxLQUFMLEVBQVcsU0FBUSxHQUFHLElBQUgsQ0FBUSxHQUFHLFFBQUgsQ0FBaEIsRUFBNkIsUUFBTyxDQUFDLENBQUQsRUFBRyxhQUFZLENBQUMsQ0FBRCxFQUFHLE9BQU0sQ0FBQyxDQUFELEVBQUcsYUFBWSxrREFBWixFQUErRCxTQUFRLEVBQUMsS0FBSSxFQUFKLEVBQU8sTUFBSyxZQUFMLEVBQWtCLE1BQUssV0FBTCxFQUFpQixLQUFJLDJCQUFKLEVBQWdDLE1BQUssbUNBQUwsRUFBbkYsRUFBNkgsVUFBUyxFQUFDLEtBQUksU0FBSixFQUFjLE1BQUssUUFBTCxFQUFjLE1BQUssVUFBTCxFQUF0QyxFQUF1RCxnQkFBZSxFQUFDLEtBQUksYUFBSixFQUFrQixNQUFLLGNBQUwsRUFBb0IsTUFBSyxjQUFMLEVBQXRELEVBQTJFLFlBQVcsRUFBQyxVQUFTLE1BQVQsRUFBZ0IsYUFBWSxDQUFDLENBQUQsRUFBRyxhQUFZLEVBQUUsU0FBRixFQUFZLFlBQVcsRUFBRSxRQUFGLEVBQTlFLEVBQTBGLGFBQVksRUFBQyxLQUFJLENBQUMsQ0FBRCxFQUFHLFNBQVEsQ0FBQyxDQUFELEVBQTVCLEVBQTVmLEVBQTZoQixXQUFVLG1CQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLElBQUUsR0FBRyxHQUFHLENBQUgsRUFBSyxFQUFFLFlBQUYsQ0FBUixFQUF3QixDQUF4QixDQUFGLEdBQTZCLEdBQUcsRUFBRSxZQUFGLEVBQWUsQ0FBbEIsQ0FBN0IsQ0FBUjtLQUFiLEVBQXdFLGVBQWMsR0FBRyxFQUFILENBQWQsRUFBcUIsZUFBYyxHQUFHLEVBQUgsQ0FBZCxFQUFxQixNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLDBCQUFpQiw2Q0FBakIsS0FBcUIsSUFBRSxDQUFGLEVBQUksSUFBRSxLQUFLLENBQUwsQ0FBM0IsRUFBbUMsSUFBRSxLQUFHLEVBQUgsQ0FBdEMsSUFBZ0QsQ0FBSjtVQUFNLENBQU47VUFBUSxDQUFSO1VBQVUsQ0FBVjtVQUFZLENBQVo7VUFBYyxDQUFkO1VBQWdCLENBQWhCO1VBQWtCLENBQWxCO1VBQW9CLElBQUUsRUFBRSxTQUFGLENBQVksRUFBWixFQUFlLENBQWYsQ0FBRjtVQUFvQixJQUFFLEVBQUUsT0FBRixJQUFXLENBQVg7VUFBYSxJQUFFLEVBQUUsT0FBRixLQUFZLEVBQUUsUUFBRixJQUFZLEVBQUUsTUFBRixDQUF4QixHQUFrQyxFQUFFLENBQUYsQ0FBbEMsR0FBdUMsRUFBRSxLQUFGO1VBQVEsSUFBRSxFQUFFLFFBQUYsRUFBRjtVQUFlLElBQUUsRUFBRSxTQUFGLENBQVksYUFBWixDQUFGO1VBQTZCLElBQUUsRUFBRSxVQUFGLElBQWMsRUFBZDtVQUFpQixJQUFFLEVBQUY7VUFBSyxJQUFFLEVBQUY7VUFBSyxJQUFFLENBQUY7VUFBSSxJQUFFLFVBQUY7VUFBYSxJQUFFLEVBQUMsWUFBVyxDQUFYLEVBQWEsbUJBQWtCLDJCQUFTLENBQVQsRUFBVztBQUFDLGNBQUksQ0FBSixDQUFELElBQVUsTUFBSSxDQUFKLEVBQU07QUFBQyxnQkFBRyxDQUFDLENBQUQsRUFBRztBQUFDLGtCQUFFLEVBQUYsQ0FBRCxPQUFZLElBQUUsR0FBRyxJQUFILENBQVEsQ0FBUixDQUFGO0FBQWEsa0JBQUUsRUFBRSxDQUFGLEVBQUssV0FBTCxFQUFGLElBQXNCLEVBQUUsQ0FBRixDQUF0QjtlQUFuQjthQUFaLENBQTBELEdBQUUsRUFBRSxFQUFFLFdBQUYsRUFBRixDQUFGLENBQTNEO1dBQVQsT0FBZ0csUUFBTSxDQUFOLEdBQVEsSUFBUixHQUFhLENBQWIsQ0FBdkc7U0FBWCxFQUFrSSx1QkFBc0IsaUNBQVU7QUFBQyxpQkFBTyxNQUFJLENBQUosR0FBTSxDQUFOLEdBQVEsSUFBUixDQUFSO1NBQVYsRUFBZ0Msa0JBQWlCLDBCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFJLElBQUUsRUFBRSxXQUFGLEVBQUYsQ0FBTCxPQUE4QixNQUFJLElBQUUsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEtBQU0sQ0FBTixFQUFRLEVBQUUsQ0FBRixJQUFLLENBQUwsQ0FBbkIsRUFBMkIsSUFBM0IsQ0FBOUI7U0FBYixFQUE0RSxrQkFBaUIsMEJBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sTUFBSSxFQUFFLFFBQUYsR0FBVyxDQUFYLENBQUosRUFBa0IsSUFBbEIsQ0FBUjtTQUFYLEVBQTJDLFlBQVcsb0JBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxDQUFKLENBQUQsSUFBVSxDQUFILEVBQUssSUFBRyxJQUFFLENBQUYsRUFBSSxLQUFJLENBQUosSUFBUyxDQUFUO0FBQVcsY0FBRSxDQUFGLElBQUssQ0FBQyxFQUFFLENBQUYsQ0FBRCxFQUFNLEVBQUUsQ0FBRixDQUFOLENBQUw7V0FBWCxNQUFpQyxFQUFFLE1BQUYsQ0FBUyxFQUFFLEVBQUUsTUFBRixDQUFYLEVBQXhDLE9BQXFFLElBQVAsQ0FBMUU7U0FBWCxFQUFrRyxPQUFNLGVBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxJQUFFLEtBQUcsQ0FBSCxDQUFQLE9BQW1CLEtBQUcsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFILEVBQWMsRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFkLEVBQXFCLElBQXJCLENBQW5CO1NBQVgsRUFBdGUsQ0FBOU8sSUFBaXhCLEVBQUUsT0FBRixDQUFVLENBQVYsRUFBYSxRQUFiLEdBQXNCLEVBQUUsR0FBRixFQUFNLEVBQUUsT0FBRixHQUFVLEVBQUUsSUFBRixFQUFPLEVBQUUsS0FBRixHQUFRLEVBQUUsSUFBRixFQUFPLEVBQUUsR0FBRixHQUFNLENBQUMsQ0FBQyxLQUFHLEVBQUUsR0FBRixJQUFPLEdBQUcsSUFBSCxDQUFYLEdBQW9CLEVBQXBCLENBQUQsQ0FBeUIsT0FBekIsQ0FBaUMsRUFBakMsRUFBb0MsRUFBcEMsRUFBd0MsT0FBeEMsQ0FBZ0QsRUFBaEQsRUFBbUQsR0FBRyxRQUFILEdBQVksSUFBWixDQUF6RCxFQUEyRSxFQUFFLElBQUYsR0FBTyxFQUFFLE1BQUYsSUFBVSxFQUFFLElBQUYsSUFBUSxFQUFFLE1BQUYsSUFBVSxFQUFFLElBQUYsRUFBTyxFQUFFLFNBQUYsR0FBWSxFQUFFLElBQUYsQ0FBTyxFQUFFLFFBQUYsSUFBWSxHQUFaLENBQVAsQ0FBd0IsV0FBeEIsR0FBc0MsS0FBdEMsQ0FBNEMsQ0FBNUMsS0FBZ0QsQ0FBQyxFQUFELENBQWhELEVBQXFELFFBQU0sRUFBRSxXQUFGLEVBQWM7QUFBQyxZQUFFLEVBQUUsYUFBRixDQUFnQixHQUFoQixDQUFGLENBQUQsSUFBMkI7QUFBQyxZQUFFLElBQUYsR0FBTyxFQUFFLEdBQUYsRUFBTSxFQUFFLElBQUYsR0FBTyxFQUFFLElBQUYsRUFBTyxFQUFFLFdBQUYsR0FBYyxHQUFHLFFBQUgsR0FBWSxJQUFaLEdBQWlCLEdBQUcsSUFBSCxJQUFTLEVBQUUsUUFBRixHQUFXLElBQVgsR0FBZ0IsRUFBRSxJQUFGLENBQXBGO1NBQUgsQ0FBOEYsT0FBTSxDQUFOLEVBQVE7QUFBQyxZQUFFLFdBQUYsR0FBYyxDQUFDLENBQUQsQ0FBZjtTQUFSO09BQS9YLElBQTZaLEVBQUUsSUFBRixJQUFRLEVBQUUsV0FBRixJQUFlLFlBQVUsT0FBTyxFQUFFLElBQUYsS0FBUyxFQUFFLElBQUYsR0FBTyxFQUFFLEtBQUYsQ0FBUSxFQUFFLElBQUYsRUFBTyxFQUFFLFdBQUYsQ0FBdEIsQ0FBakQsRUFBdUYsR0FBRyxFQUFILEVBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLENBQXZGLEVBQW9HLE1BQUksQ0FBSixFQUFNLE9BQU8sQ0FBUCxDQUE3RyxDQUFzSCxHQUFFLEVBQUUsS0FBRixJQUFTLEVBQUUsTUFBRixFQUFTLEtBQUcsTUFBSSxFQUFFLE1BQUYsRUFBSixJQUFnQixFQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLFdBQWhCLENBQW5CLEVBQWdELEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixDQUFPLFdBQVAsRUFBUCxFQUE0QixFQUFFLFVBQUYsR0FBYSxDQUFDLEdBQUcsSUFBSCxDQUFRLEVBQUUsSUFBRixDQUFULEVBQWlCLElBQUUsRUFBRSxHQUFGLEVBQU0sRUFBRSxVQUFGLEtBQWUsRUFBRSxJQUFGLEtBQVMsSUFBRSxFQUFFLEdBQUYsSUFBTyxDQUFDLEdBQUcsSUFBSCxDQUFRLENBQVIsSUFBVyxHQUFYLEdBQWUsR0FBZixDQUFELEdBQXFCLEVBQUUsSUFBRixFQUFPLE9BQU8sRUFBRSxJQUFGLENBQXJELEVBQTZELEVBQUUsS0FBRixLQUFVLENBQUMsQ0FBRCxLQUFLLEVBQUUsR0FBRixHQUFNLEdBQUcsSUFBSCxDQUFRLENBQVIsSUFBVyxFQUFFLE9BQUYsQ0FBVSxFQUFWLEVBQWEsU0FBTyxJQUFQLENBQXhCLEdBQXFDLEtBQUcsR0FBRyxJQUFILENBQVEsQ0FBUixJQUFXLEdBQVgsR0FBZSxHQUFmLENBQUgsR0FBdUIsSUFBdkIsR0FBNEIsSUFBNUIsQ0FBMUQsQ0FBNUUsRUFBeUssRUFBRSxVQUFGLEtBQWUsRUFBRSxZQUFGLENBQWUsQ0FBZixLQUFtQixFQUFFLGdCQUFGLENBQW1CLG1CQUFuQixFQUF1QyxFQUFFLFlBQUYsQ0FBZSxDQUFmLENBQXZDLENBQW5CLEVBQTZFLEVBQUUsSUFBRixDQUFPLENBQVAsS0FBVyxFQUFFLGdCQUFGLENBQW1CLGVBQW5CLEVBQW1DLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBbkMsQ0FBWCxDQUE1RixFQUFzSixDQUFDLEVBQUUsSUFBRixJQUFRLEVBQUUsVUFBRixJQUFjLEVBQUUsV0FBRixLQUFnQixDQUFDLENBQUQsSUFBSSxFQUFFLFdBQUYsQ0FBM0MsSUFBMkQsRUFBRSxnQkFBRixDQUFtQixjQUFuQixFQUFrQyxFQUFFLFdBQUYsQ0FBN0YsRUFBNEcsRUFBRSxnQkFBRixDQUFtQixRQUFuQixFQUE0QixFQUFFLFNBQUYsQ0FBWSxDQUFaLEtBQWdCLEVBQUUsT0FBRixDQUFVLEVBQUUsU0FBRixDQUFZLENBQVosQ0FBVixDQUFoQixHQUEwQyxFQUFFLE9BQUYsQ0FBVSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQVYsS0FBMkIsUUFBTSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQU4sR0FBcUIsT0FBSyxFQUFMLEdBQVEsVUFBUixHQUFtQixFQUF4QyxDQUEzQixHQUF1RSxFQUFFLE9BQUYsQ0FBVSxHQUFWLENBQWpILENBQTdrQixDQUE5eEMsS0FBZy9ELENBQUosSUFBUyxFQUFFLE9BQUY7QUFBVSxVQUFFLGdCQUFGLENBQW1CLENBQW5CLEVBQXFCLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBckI7T0FBbkIsSUFBeUQsRUFBRSxVQUFGLEtBQWUsRUFBRSxVQUFGLENBQWEsSUFBYixDQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQixDQUF0QixNQUEyQixDQUFDLENBQUQsSUFBSSxNQUFJLENBQUosQ0FBOUMsRUFBcUQsT0FBTyxFQUFFLEtBQUYsRUFBUCxDQUF4RCxDQUF5RSxHQUFFLE9BQUYsQ0FBM21FLEtBQXluRSxDQUFKLElBQVEsRUFBQyxTQUFRLENBQVIsRUFBVSxPQUFNLENBQU4sRUFBUSxVQUFTLENBQVQsRUFBM0I7QUFBdUMsVUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLENBQUw7T0FBdkMsSUFBcUQsSUFBRSxHQUFHLEVBQUgsRUFBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLENBQVYsQ0FBRixFQUFlO0FBQUMsWUFBRyxFQUFFLFVBQUYsR0FBYSxDQUFiLEVBQWUsS0FBRyxFQUFFLE9BQUYsQ0FBVSxVQUFWLEVBQXFCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBckIsQ0FBSCxFQUErQixNQUFJLENBQUosRUFBTSxPQUFPLENBQVAsQ0FBdkQsQ0FBZ0UsQ0FBRSxLQUFGLElBQVMsRUFBRSxPQUFGLEdBQVUsQ0FBVixLQUFjLElBQUUsRUFBRSxVQUFGLENBQWEsWUFBVTtBQUFDLFlBQUUsS0FBRixDQUFRLFNBQVIsRUFBRDtTQUFWLEVBQStCLEVBQUUsT0FBRixDQUE5QyxDQUF2QixDQUFqRSxJQUFxSjtBQUFDLGNBQUUsQ0FBRixFQUFJLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxDQUFULENBQUosQ0FBRDtTQUFILENBQW9CLE9BQU0sQ0FBTixFQUFRO0FBQUMsY0FBRyxFQUFFLElBQUUsQ0FBRixDQUFGLEVBQU8sTUFBTSxDQUFOLENBQVYsQ0FBa0IsQ0FBRSxDQUFDLENBQUQsRUFBRyxDQUFMLEVBQW5CO1NBQVI7T0FBeEwsTUFBaU8sRUFBRSxDQUFDLENBQUQsRUFBRyxjQUFMLEVBQWpPLFNBQStQLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUI7QUFBQyxZQUFJLENBQUo7WUFBTSxDQUFOO1lBQVEsQ0FBUjtZQUFVLENBQVY7WUFBWSxDQUFaO1lBQWMsSUFBRSxDQUFGLENBQWYsQ0FBbUIsS0FBSSxDQUFKLEtBQVEsSUFBRSxDQUFGLEVBQUksS0FBRyxFQUFFLFlBQUYsQ0FBZSxDQUFmLENBQUgsRUFBcUIsSUFBRSxLQUFLLENBQUwsRUFBTyxJQUFFLEtBQUcsRUFBSCxFQUFNLEVBQUUsVUFBRixHQUFhLElBQUUsQ0FBRixHQUFJLENBQUosR0FBTSxDQUFOLEVBQVEsSUFBRSxLQUFHLEdBQUgsSUFBUSxNQUFJLENBQUosSUFBTyxRQUFNLENBQU4sRUFBUSxNQUFJLElBQUUsR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBRixDQUFKLEVBQWlCLElBQUUsR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQUYsRUFBYyxLQUFHLEVBQUUsVUFBRixLQUFlLElBQUUsRUFBRSxpQkFBRixDQUFvQixlQUFwQixDQUFGLEVBQXVDLE1BQUksRUFBRSxZQUFGLENBQWUsQ0FBZixJQUFrQixDQUFsQixDQUFKLEVBQXlCLElBQUUsRUFBRSxpQkFBRixDQUFvQixNQUFwQixDQUFGLEVBQThCLE1BQUksRUFBRSxJQUFGLENBQU8sQ0FBUCxJQUFVLENBQVYsQ0FBSixDQUE3RyxFQUErSCxRQUFNLENBQU4sSUFBUyxXQUFTLEVBQUUsSUFBRixHQUFPLElBQUUsV0FBRixHQUFjLFFBQU0sQ0FBTixHQUFRLElBQUUsYUFBRixJQUFpQixJQUFFLEVBQUUsS0FBRixFQUFRLElBQUUsRUFBRSxJQUFGLEVBQU8sSUFBRSxFQUFFLEtBQUYsRUFBUSxJQUFFLENBQUMsQ0FBRCxDQUF4RCxDQUF6SyxJQUF1TyxJQUFFLENBQUYsRUFBSSxDQUFDLENBQUQsSUFBSSxDQUFKLEtBQVEsSUFBRSxPQUFGLEVBQVUsSUFBRSxDQUFGLEtBQU0sSUFBRSxDQUFGLENBQU4sQ0FBbEIsQ0FBM08sRUFBMFEsRUFBRSxNQUFGLEdBQVMsQ0FBVCxFQUFXLEVBQUUsVUFBRixHQUFhLENBQUMsS0FBRyxDQUFILENBQUQsR0FBTyxFQUFQLEVBQVUsSUFBRSxFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWdCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQWhCLENBQUYsR0FBMkIsRUFBRSxVQUFGLENBQWEsQ0FBYixFQUFlLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQWYsQ0FBM0IsRUFBbUQsRUFBRSxVQUFGLENBQWEsQ0FBYixDQUF0ZCxFQUFzZSxJQUFFLEtBQUssQ0FBTCxFQUFPLEtBQUcsRUFBRSxPQUFGLENBQVUsSUFBRSxhQUFGLEdBQWdCLFdBQWhCLEVBQTRCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxJQUFFLENBQUYsR0FBSSxDQUFKLENBQTNDLENBQUgsRUFBc0QsRUFBRSxRQUFGLENBQVcsQ0FBWCxFQUFhLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBYixDQUFyaUIsRUFBeWpCLE1BQUksRUFBRSxPQUFGLENBQVUsY0FBVixFQUF5QixDQUFDLENBQUQsRUFBRyxDQUFILENBQXpCLEdBQWdDLEVBQUUsRUFBRSxNQUFGLElBQVUsRUFBRSxLQUFGLENBQVEsT0FBUixDQUFnQixVQUFoQixDQUFaLENBQXBDLENBQWprQixDQUFuQjtPQUFuQixPQUE0ckIsQ0FBUCxDQUFsbEc7S0FBYixFQUF5bUcsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGFBQU8sRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksTUFBWixDQUFQLENBQUQ7S0FBZixFQUE0QyxXQUFVLG1CQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxLQUFLLENBQUwsRUFBTyxDQUFmLEVBQWlCLFFBQWpCLENBQVAsQ0FBRDtLQUFiLEVBQWgzSCxHQUFtNkgsRUFBRSxJQUFGLENBQU8sQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUFQLEVBQXNCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUUsQ0FBRixJQUFLLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLGFBQU8sRUFBRSxVQUFGLENBQWEsQ0FBYixNQUFrQixJQUFFLEtBQUcsQ0FBSCxFQUFLLElBQUUsQ0FBRixFQUFJLElBQUUsS0FBSyxDQUFMLENBQS9CLEVBQXVDLEVBQUUsSUFBRixDQUFPLEVBQUUsTUFBRixDQUFTLEVBQUMsS0FBSSxDQUFKLEVBQU0sTUFBSyxDQUFMLEVBQU8sVUFBUyxDQUFULEVBQVcsTUFBSyxDQUFMLEVBQU8sU0FBUSxDQUFSLEVBQXpDLEVBQW9ELEVBQUUsYUFBRixDQUFnQixDQUFoQixLQUFvQixDQUFwQixDQUEzRCxDQUF2QyxDQUFSO0tBQWpCLENBQU47R0FBYixDQUF6N0gsRUFBa21JLEVBQUUsUUFBRixHQUFXLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxFQUFFLElBQUYsQ0FBTyxFQUFDLEtBQUksQ0FBSixFQUFNLE1BQUssS0FBTCxFQUFXLFVBQVMsUUFBVCxFQUFrQixPQUFNLENBQUMsQ0FBRCxFQUFHLFFBQU8sQ0FBQyxDQUFELEVBQUcsVUFBUyxDQUFDLENBQUQsRUFBdkUsQ0FBUCxDQUFEO0dBQVgsRUFBZ0csRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsU0FBUSxpQkFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLENBQUosQ0FBRCxPQUFjLEVBQUUsVUFBRixDQUFhLENBQWIsSUFBZ0IsS0FBSyxJQUFMLENBQVUsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLEVBQUUsSUFBRixDQUFPLElBQVAsRUFBWSxDQUFaLENBQWhCLEVBQUQ7T0FBWCxDQUExQixJQUF5RSxLQUFLLENBQUwsTUFBVSxJQUFFLEVBQUUsQ0FBRixFQUFJLEtBQUssQ0FBTCxFQUFRLGFBQVIsQ0FBSixDQUEyQixFQUEzQixDQUE4QixDQUE5QixFQUFpQyxLQUFqQyxDQUF1QyxDQUFDLENBQUQsQ0FBekMsRUFBNkMsS0FBSyxDQUFMLEVBQVEsVUFBUixJQUFvQixFQUFFLFlBQUYsQ0FBZSxLQUFLLENBQUwsQ0FBZixDQUFwQixFQUE0QyxFQUFFLEdBQUYsQ0FBTSxZQUFVO0FBQUMsWUFBSSxJQUFFLElBQUYsQ0FBTCxPQUFrQixFQUFFLGlCQUFGO0FBQW9CLGNBQUUsRUFBRSxpQkFBRjtTQUE1QixPQUF1RCxDQUFQLENBQTVEO09BQVYsQ0FBTixDQUF1RixNQUF2RixDQUE4RixJQUE5RixDQUF6RixDQUFWLEVBQXdNLElBQXhNLENBQXpFLENBQWQ7S0FBWCxFQUFpVCxXQUFVLG1CQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxVQUFGLENBQWEsQ0FBYixJQUFnQixLQUFLLElBQUwsQ0FBVSxVQUFTLENBQVQsRUFBVztBQUFDLFVBQUUsSUFBRixFQUFRLFNBQVIsQ0FBa0IsRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLENBQVosQ0FBbEIsRUFBRDtPQUFYLENBQTFCLEdBQTBFLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxZQUFJLElBQUUsRUFBRSxJQUFGLENBQUY7WUFBVSxJQUFFLEVBQUUsUUFBRixFQUFGLENBQWYsQ0FBOEIsQ0FBRSxNQUFGLEdBQVMsRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFULEdBQXNCLEVBQUUsTUFBRixDQUFTLENBQVQsQ0FBdEIsQ0FBOUI7T0FBVixDQUFwRixDQUFSO0tBQVgsRUFBb0wsTUFBSyxjQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLFVBQUYsQ0FBYSxDQUFiLENBQUYsQ0FBTCxPQUE4QixLQUFLLElBQUwsQ0FBVSxVQUFTLENBQVQsRUFBVztBQUFDLFVBQUUsSUFBRixFQUFRLE9BQVIsQ0FBZ0IsSUFBRSxFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQVksQ0FBWixDQUFGLEdBQWlCLENBQWpCLENBQWhCLENBQUQ7T0FBWCxDQUFqQixDQUF2QjtLQUFYLEVBQXNHLFFBQU8sa0JBQVU7QUFBQyxhQUFPLEtBQUssTUFBTCxHQUFjLElBQWQsQ0FBbUIsWUFBVTtBQUFDLFVBQUUsUUFBRixDQUFXLElBQVgsRUFBZ0IsTUFBaEIsS0FBeUIsRUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixLQUFLLFVBQUwsQ0FBN0MsQ0FBRDtPQUFWLENBQW5CLENBQThGLEdBQTlGLEVBQVAsQ0FBRDtLQUFWLEVBQXRuQixDQUE3c0ksRUFBNDdKLEVBQUUsSUFBRixDQUFPLE9BQVAsQ0FBZSxNQUFmLEdBQXNCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTSxDQUFDLEVBQUUsSUFBRixDQUFPLE9BQVAsQ0FBZSxPQUFmLENBQXVCLENBQXZCLENBQUQsQ0FBUDtHQUFYLEVBQThDLEVBQUUsSUFBRixDQUFPLE9BQVAsQ0FBZSxPQUFmLEdBQXVCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxFQUFFLFdBQUYsR0FBYyxDQUFkLElBQWlCLEVBQUUsWUFBRixHQUFlLENBQWYsSUFBa0IsRUFBRSxjQUFGLEdBQW1CLE1BQW5CLEdBQTBCLENBQTFCLENBQTNDO0dBQVgsQ0FGOWhhLElBRXFuYSxLQUFHLE1BQUg7TUFBVSxLQUFHLE9BQUg7TUFBVyxLQUFHLFFBQUg7TUFBWSxLQUFHLHVDQUFIO01BQTJDLEtBQUcsb0NBQUgsQ0FGanNhLFNBRWt2YSxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0I7QUFBQyxRQUFJLENBQUosQ0FBRCxJQUFVLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBSCxFQUFnQixFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsV0FBRyxHQUFHLElBQUgsQ0FBUSxDQUFSLENBQUgsR0FBYyxFQUFFLENBQUYsRUFBSSxDQUFKLENBQWQsR0FBcUIsR0FBRyxJQUFFLEdBQUYsSUFBTyxvQkFBaUIsNkNBQWpCLElBQW9CLFFBQU0sQ0FBTixHQUFRLENBQTVCLEdBQThCLEVBQTlCLENBQVAsR0FBeUMsR0FBekMsRUFBNkMsQ0FBaEQsRUFBa0QsQ0FBbEQsRUFBb0QsQ0FBcEQsQ0FBckIsQ0FBRDtLQUFiLENBQVQsQ0FBaEIsS0FBMEgsSUFBRyxLQUFHLGFBQVcsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFYLEVBQXFCLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBM0IsS0FBdUMsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFNBQUcsSUFBRSxHQUFGLEdBQU0sQ0FBTixHQUFRLEdBQVIsRUFBWSxFQUFFLENBQUYsQ0FBZixFQUFvQixDQUFwQixFQUFzQixDQUF0QjtLQUFYO0dBQTVMLENBQWdPLENBQUUsS0FBRixHQUFRLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFFBQUksQ0FBSjtRQUFNLElBQUUsRUFBRjtRQUFLLElBQUUsU0FBRixDQUFFLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUUsRUFBRSxVQUFGLENBQWEsQ0FBYixJQUFnQixHQUFoQixHQUFvQixRQUFNLENBQU4sR0FBUSxFQUFSLEdBQVcsQ0FBWCxFQUFhLEVBQUUsRUFBRSxNQUFGLENBQUYsR0FBWSxtQkFBbUIsQ0FBbkIsSUFBc0IsR0FBdEIsR0FBMEIsbUJBQW1CLENBQW5CLENBQTFCLENBQWhEO0tBQWIsQ0FBZCxJQUErSCxLQUFLLENBQUwsS0FBUyxDQUFULEtBQWEsSUFBRSxFQUFFLFlBQUYsSUFBZ0IsRUFBRSxZQUFGLENBQWUsV0FBZixDQUEvQixFQUEyRCxFQUFFLE9BQUYsQ0FBVSxDQUFWLEtBQWMsRUFBRSxNQUFGLElBQVUsQ0FBQyxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBRCxFQUFvQixFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsWUFBVTtBQUFDLFFBQUUsS0FBSyxJQUFMLEVBQVUsS0FBSyxLQUFMLENBQVosQ0FBRDtLQUFWLENBQVQsQ0FBMUcsS0FBNkosS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFNBQUcsQ0FBSCxFQUFLLEVBQUUsQ0FBRixDQUFMLEVBQVUsQ0FBVixFQUFZLENBQVo7S0FBWCxPQUFpQyxFQUFFLElBQUYsQ0FBTyxHQUFQLEVBQVksT0FBWixDQUFvQixFQUFwQixFQUF1QixHQUF2QixDQUFQLENBQW5UO0dBQWIsRUFBb1csRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsV0FBVSxxQkFBVTtBQUFDLGFBQU8sRUFBRSxLQUFGLENBQVEsS0FBSyxjQUFMLEVBQVIsQ0FBUCxDQUFEO0tBQVYsRUFBa0QsZ0JBQWUsMEJBQVU7QUFBQyxhQUFPLEtBQUssR0FBTCxDQUFTLFlBQVU7QUFBQyxZQUFJLElBQUUsRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLFVBQVosQ0FBRixDQUFMLE9BQXNDLElBQUUsRUFBRSxTQUFGLENBQVksQ0FBWixDQUFGLEdBQWlCLElBQWpCLENBQXRDO09BQVYsQ0FBVCxDQUFpRixNQUFqRixDQUF3RixZQUFVO0FBQUMsWUFBSSxJQUFFLEtBQUssSUFBTCxDQUFQLE9BQXdCLEtBQUssSUFBTCxJQUFXLENBQUMsRUFBRSxJQUFGLEVBQVEsRUFBUixDQUFXLFdBQVgsQ0FBRCxJQUEwQixHQUFHLElBQUgsQ0FBUSxLQUFLLFFBQUwsQ0FBN0MsSUFBNkQsQ0FBQyxHQUFHLElBQUgsQ0FBUSxDQUFSLENBQUQsS0FBYyxLQUFLLE9BQUwsSUFBYyxDQUFDLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBRCxDQUF6RixDQUF4QjtPQUFWLENBQXhGLENBQWlPLEdBQWpPLENBQXFPLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUksSUFBRSxFQUFFLElBQUYsRUFBUSxHQUFSLEVBQUYsQ0FBTCxPQUE0QixRQUFNLENBQU4sR0FBUSxJQUFSLEdBQWEsRUFBRSxPQUFGLENBQVUsQ0FBVixJQUFhLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxVQUFTLENBQVQsRUFBVztBQUFDLGlCQUFNLEVBQUMsTUFBSyxFQUFFLElBQUYsRUFBTyxPQUFNLEVBQUUsT0FBRixDQUFVLEVBQVYsRUFBYSxNQUFiLENBQU4sRUFBbkIsQ0FBRDtTQUFYLENBQXJCLEdBQWtGLEVBQUMsTUFBSyxFQUFFLElBQUYsRUFBTyxPQUFNLEVBQUUsT0FBRixDQUFVLEVBQVYsRUFBYSxNQUFiLENBQU4sRUFBL0YsQ0FBekM7T0FBYixDQUFyTyxDQUF3WixHQUF4WixFQUFQLENBQUQ7S0FBVixFQUF4RixDQUE1VyxFQUF1M0IsRUFBRSxZQUFGLENBQWUsR0FBZixHQUFtQixZQUFVO0FBQUMsUUFBRztBQUFDLGFBQU8sSUFBSSxFQUFFLGNBQUYsRUFBWCxDQUFEO0tBQUgsQ0FBZ0MsT0FBTSxDQUFOLEVBQVEsRUFBUjtHQUEzQyxDQUZuMWMsSUFFODRjLEtBQUcsRUFBQyxHQUFFLEdBQUYsRUFBTSxNQUFLLEdBQUwsRUFBVjtNQUFvQixLQUFHLEVBQUUsWUFBRixDQUFlLEdBQWYsRUFBSCxDQUZsNmMsQ0FFMDdjLENBQUUsSUFBRixHQUFPLENBQUMsQ0FBQyxFQUFELElBQUsscUJBQW9CLEVBQXBCLEVBQXVCLEVBQUUsSUFBRixHQUFPLEtBQUcsQ0FBQyxDQUFDLEVBQUQsRUFBSSxFQUFFLGFBQUYsQ0FBZ0IsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFJLEVBQUosRUFBTSxDQUFOLENBQUQsT0FBZ0IsRUFBRSxJQUFGLElBQVEsTUFBSSxDQUFDLEVBQUUsV0FBRixHQUFjLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFJLENBQUo7WUFBTSxJQUFFLEVBQUUsR0FBRixFQUFGLENBQVAsSUFBb0IsRUFBRSxJQUFGLENBQU8sRUFBRSxJQUFGLEVBQU8sRUFBRSxHQUFGLEVBQU0sRUFBRSxLQUFGLEVBQVEsRUFBRSxRQUFGLEVBQVcsRUFBRSxRQUFGLENBQXZDLEVBQW1ELEVBQUUsU0FBRixFQUFZLEtBQUksQ0FBSixJQUFTLEVBQUUsU0FBRjtBQUFZLFlBQUUsQ0FBRixJQUFLLEVBQUUsU0FBRixDQUFZLENBQVosQ0FBTDtTQUFyQixDQUF5QyxDQUFFLFFBQUYsSUFBWSxFQUFFLGdCQUFGLElBQW9CLEVBQUUsZ0JBQUYsQ0FBbUIsRUFBRSxRQUFGLENBQW5ELEVBQStELEVBQUUsV0FBRixJQUFlLEVBQUUsa0JBQUYsQ0FBZixLQUF1QyxFQUFFLGtCQUFGLElBQXNCLGdCQUF0QixDQUF2QyxDQUEzTCxLQUE4USxDQUFKLElBQVMsQ0FBVDtBQUFXLFlBQUUsZ0JBQUYsQ0FBbUIsQ0FBbkIsRUFBcUIsRUFBRSxDQUFGLENBQXJCO1NBQVgsRUFBc0MsR0FBRSxXQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLFlBQVU7QUFBQyxtQkFBSSxLQUFFLElBQUUsRUFBRSxNQUFGLEdBQVMsRUFBRSxPQUFGLEdBQVUsRUFBRSxPQUFGLEdBQVUsRUFBRSxrQkFBRixHQUFxQixJQUFyQixFQUEwQixZQUFVLENBQVYsR0FBWSxFQUFFLEtBQUYsRUFBWixHQUFzQixZQUFVLENBQVYsR0FBWSxZQUFVLE9BQU8sRUFBRSxNQUFGLEdBQVMsRUFBRSxDQUFGLEVBQUksT0FBSixDQUExQixHQUF1QyxFQUFFLEVBQUUsTUFBRixFQUFTLEVBQUUsVUFBRixDQUFsRCxHQUFnRSxFQUFFLEdBQUcsRUFBRSxNQUFGLENBQUgsSUFBYyxFQUFFLE1BQUYsRUFBUyxFQUFFLFVBQUYsRUFBYSxZQUFVLEVBQUUsWUFBRixJQUFnQixNQUFoQixDQUFWLElBQW1DLFlBQVUsT0FBTyxFQUFFLFlBQUYsR0FBZSxFQUFDLFFBQU8sRUFBRSxRQUFGLEVBQTNFLEdBQXVGLEVBQUMsTUFBSyxFQUFFLFlBQUYsRUFBN0YsRUFBNkcsRUFBRSxxQkFBRixFQUFuSixDQUE1RSxDQUFyRixDQUFEO1dBQVYsQ0FBUjtTQUFYLEVBQWdYLEVBQUUsTUFBRixHQUFTLElBQVQsRUFBYSxJQUFFLEVBQUUsT0FBRixHQUFVLEdBQUUsT0FBRixDQUFWLEVBQXFCLEtBQUssQ0FBTCxLQUFTLEVBQUUsT0FBRixHQUFVLEVBQUUsT0FBRixHQUFVLENBQVYsR0FBWSxFQUFFLGtCQUFGLEdBQXFCLFlBQVU7QUFBQyxnQkFBSSxFQUFFLFVBQUYsSUFBYyxFQUFFLFVBQUYsQ0FBYSxZQUFVO0FBQUMsa0JBQUcsR0FBSCxDQUFEO1dBQVYsQ0FBL0IsQ0FBRDtTQUFWLEVBQStELEtBQUUsR0FBRSxPQUFGLENBQUYsQ0FBenpCLElBQXkwQjtBQUFDLFlBQUUsSUFBRixDQUFPLEVBQUUsVUFBRixJQUFjLEVBQUUsSUFBRixJQUFRLElBQXRCLENBQVAsQ0FBRDtTQUFILENBQXVDLE9BQU0sQ0FBTixFQUFRO0FBQUMsY0FBRyxFQUFILEVBQUssTUFBTSxDQUFOLENBQUw7U0FBVDtPQUExM0IsRUFBazVCLE9BQU0saUJBQVU7QUFBQyxjQUFHLElBQUgsQ0FBRDtPQUFWLEVBQXo3QixHQUE2OEIsS0FBSyxDQUFMLENBQTc5QjtHQUFYLENBQW5FLEVBQW9qQyxFQUFFLFNBQUYsQ0FBWSxFQUFDLFNBQVEsRUFBQyxRQUFPLDJGQUFQLEVBQVQsRUFBNkcsVUFBUyxFQUFDLFFBQU8seUJBQVAsRUFBVixFQUE0QyxZQUFXLEVBQUMsZUFBYyxvQkFBUyxDQUFULEVBQVc7QUFBQyxlQUFPLEVBQUUsVUFBRixDQUFhLENBQWIsR0FBZ0IsQ0FBaEIsQ0FBUjtPQUFYLEVBQTFCLEVBQXRLLENBQXBqQyxFQUE2eEMsRUFBRSxhQUFGLENBQWdCLFFBQWhCLEVBQXlCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsU0FBSyxDQUFMLEtBQVMsRUFBRSxLQUFGLEtBQVUsRUFBRSxLQUFGLEdBQVEsQ0FBQyxDQUFELENBQTNCLEVBQStCLEVBQUUsV0FBRixLQUFnQixFQUFFLElBQUYsR0FBTyxLQUFQLENBQWhCLENBQWhDO0dBQVgsQ0FBdHpDLEVBQWk0QyxFQUFFLGFBQUYsQ0FBZ0IsUUFBaEIsRUFBeUIsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFHLEVBQUUsV0FBRixFQUFjO0FBQUMsVUFBSSxDQUFKLEVBQU0sR0FBTixDQUFELE9BQWUsRUFBQyxNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGNBQUUsRUFBRSxVQUFGLEVBQWMsSUFBZCxDQUFtQixFQUFDLFNBQVEsRUFBRSxhQUFGLEVBQWdCLEtBQUksRUFBRSxHQUFGLEVBQWhELEVBQXdELEVBQXhELENBQTJELFlBQTNELEVBQXdFLE1BQUUsV0FBUyxDQUFULEVBQVc7QUFBQyxjQUFFLE1BQUYsSUFBVyxNQUFFLElBQUYsRUFBTyxLQUFHLEVBQUUsWUFBVSxFQUFFLElBQUYsR0FBTyxHQUFqQixHQUFxQixHQUFyQixFQUF5QixFQUFFLElBQUYsQ0FBOUIsQ0FBbkI7V0FBWCxDQUE1RSxFQUFrSixFQUFFLElBQUYsQ0FBTyxXQUFQLENBQW1CLEVBQUUsQ0FBRixDQUFuQixDQUFsSixDQUFEO1NBQWIsRUFBMEwsT0FBTSxpQkFBVTtBQUFDLGlCQUFHLEtBQUgsQ0FBRDtTQUFWLEVBQTVNLENBQVQ7S0FBakI7R0FBWixDQUExNUMsQ0FGMTdjLElBRWltZ0IsS0FBRyxFQUFIO01BQU0sS0FBRyxtQkFBSCxDQUZ2bWdCLENBRThuZ0IsQ0FBRSxTQUFGLENBQVksRUFBQyxPQUFNLFVBQU4sRUFBaUIsZUFBYyx5QkFBVTtBQUFDLFVBQUksSUFBRSxHQUFHLEdBQUgsTUFBVSxFQUFFLE9BQUYsR0FBVSxHQUFWLEdBQWMsSUFBZCxDQUFqQixPQUEyQyxLQUFLLENBQUwsSUFBUSxDQUFDLENBQUQsRUFBRyxDQUFYLENBQTNDO0tBQVYsRUFBNUMsR0FBaUgsRUFBRSxhQUFGLENBQWdCLFlBQWhCLEVBQTZCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxRQUFJLENBQUo7UUFBTSxDQUFOO1FBQVEsQ0FBUjtRQUFVLElBQUUsRUFBRSxLQUFGLEtBQVUsQ0FBQyxDQUFELEtBQUssR0FBRyxJQUFILENBQVEsRUFBRSxHQUFGLENBQVIsR0FBZSxLQUFmLEdBQXFCLFlBQVUsT0FBTyxFQUFFLElBQUYsSUFBUSxNQUFJLENBQUMsRUFBRSxXQUFGLElBQWUsRUFBZixDQUFELENBQW9CLE9BQXBCLENBQTRCLG1DQUE1QixDQUFKLElBQXNFLEdBQUcsSUFBSCxDQUFRLEVBQUUsSUFBRixDQUF2RyxJQUFnSCxNQUFoSCxDQUFwQyxDQUFiLE9BQWdMLEtBQUcsWUFBVSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQVYsSUFBMEIsSUFBRSxFQUFFLGFBQUYsR0FBZ0IsRUFBRSxVQUFGLENBQWEsRUFBRSxhQUFGLENBQWIsR0FBOEIsRUFBRSxhQUFGLEVBQTlCLEdBQWdELEVBQUUsYUFBRixFQUFnQixJQUFFLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixFQUFLLE9BQUwsQ0FBYSxFQUFiLEVBQWdCLE9BQUssQ0FBTCxDQUFyQixHQUE2QixFQUFFLEtBQUYsS0FBVSxDQUFDLENBQUQsS0FBSyxFQUFFLEdBQUYsSUFBTyxDQUFDLEdBQUcsSUFBSCxDQUFRLEVBQUUsR0FBRixDQUFSLEdBQWUsR0FBZixHQUFtQixHQUFuQixDQUFELEdBQXlCLEVBQUUsS0FBRixHQUFRLEdBQWpDLEdBQXFDLENBQXJDLENBQXRCLEVBQThELEVBQUUsVUFBRixDQUFhLGFBQWIsSUFBNEIsWUFBVTtBQUFDLGFBQU8sS0FBRyxFQUFFLEtBQUYsQ0FBUSxJQUFFLGlCQUFGLENBQVgsRUFBZ0MsRUFBRSxDQUFGLENBQWhDLENBQVI7S0FBVixFQUF3RCxFQUFFLFNBQUYsQ0FBWSxDQUFaLElBQWUsTUFBZixFQUFzQixJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sRUFBRSxDQUFGLElBQUssWUFBVTtBQUFDLFVBQUUsU0FBRixDQUFEO0tBQVYsRUFBd0IsRUFBRSxNQUFGLENBQVMsWUFBVTtBQUFDLFdBQUssQ0FBTCxLQUFTLENBQVQsR0FBVyxFQUFFLENBQUYsRUFBSyxVQUFMLENBQWdCLENBQWhCLENBQVgsR0FBOEIsRUFBRSxDQUFGLElBQUssQ0FBTCxFQUFPLEVBQUUsQ0FBRixNQUFPLEVBQUUsYUFBRixHQUFnQixFQUFFLGFBQUYsRUFBZ0IsR0FBRyxJQUFILENBQVEsQ0FBUixDQUFoQyxDQUFQLEVBQW1ELEtBQUcsRUFBRSxVQUFGLENBQWEsQ0FBYixDQUFILElBQW9CLEVBQUUsRUFBRSxDQUFGLENBQUYsQ0FBcEIsRUFBNEIsSUFBRSxJQUFFLEtBQUssQ0FBTCxDQUF6SDtLQUFWLENBQXRVLEVBQWtkLFFBQWxkLENBQTdCLEdBQXlmLEtBQUssQ0FBTCxDQUF6cUI7R0FBZixDQUE5SSxFQUErMEIsRUFBRSxTQUFGLEdBQVksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFFBQUcsQ0FBQyxDQUFELElBQUksWUFBVSxPQUFPLENBQVAsRUFBUyxPQUFPLElBQVAsQ0FBMUIsU0FBc0MsSUFBVyxPQUFPLENBQVAsS0FBVyxJQUFFLENBQUYsRUFBSSxJQUFFLENBQUMsQ0FBRCxDQUE1QixFQUFnQyxJQUFFLEtBQUcsQ0FBSCxDQUF6RSxJQUFrRixJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBRjtRQUFZLElBQUUsQ0FBQyxDQUFELElBQUksRUFBSixDQUFoRyxPQUE4RyxJQUFFLENBQUMsRUFBRSxhQUFGLENBQWdCLEVBQUUsQ0FBRixDQUFoQixDQUFELENBQUYsSUFBMkIsSUFBRSxHQUFHLENBQUMsQ0FBRCxDQUFILEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBRixFQUFjLEtBQUcsRUFBRSxNQUFGLElBQVUsRUFBRSxDQUFGLEVBQUssTUFBTCxFQUFiLEVBQTJCLEVBQUUsS0FBRixDQUFRLEVBQVIsRUFBVyxFQUFFLFVBQUYsQ0FBcEQsQ0FBM0IsQ0FBOUc7R0FBZixDQUZ6OWhCLElBRXlyaUIsS0FBRyxFQUFFLEVBQUYsQ0FBSyxJQUFMLENBRjVyaUIsQ0FFc3NpQixDQUFFLEVBQUYsQ0FBSyxJQUFMLEdBQVUsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFFBQUcsWUFBVSxPQUFPLENBQVAsSUFBVSxFQUFwQixFQUF1QixPQUFPLEdBQUcsS0FBSCxDQUFTLElBQVQsRUFBYyxTQUFkLENBQVAsQ0FBMUIsSUFBOEQsQ0FBSjtRQUFNLENBQU47UUFBUSxDQUFSO1FBQVUsSUFBRSxJQUFGO1FBQU8sSUFBRSxFQUFFLE9BQUYsQ0FBVSxHQUFWLENBQUYsQ0FBNUUsT0FBb0csSUFBRSxDQUFDLENBQUQsS0FBSyxJQUFFLEVBQUUsSUFBRixDQUFPLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBUCxDQUFGLEVBQXFCLElBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBRixDQUE1QixFQUE0QyxFQUFFLFVBQUYsQ0FBYSxDQUFiLEtBQWlCLElBQUUsQ0FBRixFQUFJLElBQUUsS0FBSyxDQUFMLENBQXZCLEdBQStCLEtBQUcsb0JBQWlCLDZDQUFqQixLQUFxQixJQUFFLE1BQUYsQ0FBeEIsRUFBa0MsRUFBRSxNQUFGLEdBQVMsQ0FBVCxJQUFZLEVBQUUsSUFBRixDQUFPLEVBQUMsS0FBSSxDQUFKLEVBQU0sTUFBSyxLQUFHLEtBQUgsRUFBUyxVQUFTLE1BQVQsRUFBZ0IsTUFBSyxDQUFMLEVBQTVDLEVBQXFELElBQXJELENBQTBELFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRSxTQUFGLEVBQVksRUFBRSxJQUFGLENBQU8sSUFBRSxFQUFFLE9BQUYsRUFBVyxNQUFYLENBQWtCLEVBQUUsU0FBRixDQUFZLENBQVosQ0FBbEIsRUFBa0MsSUFBbEMsQ0FBdUMsQ0FBdkMsQ0FBRixHQUE0QyxDQUE1QyxDQUFuQixDQUFEO0tBQVgsQ0FBMUQsQ0FBMEksTUFBMUksQ0FBaUosS0FBRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxRQUFFLElBQUYsQ0FBTyxZQUFVO0FBQUMsVUFBRSxLQUFGLENBQVEsSUFBUixFQUFhLEtBQUcsQ0FBQyxFQUFFLFlBQUYsRUFBZSxDQUFoQixFQUFrQixDQUFsQixDQUFILENBQWIsQ0FBRDtPQUFWLENBQVAsQ0FBRDtLQUFiLENBQWhLLEVBQTBPLElBQXZWLENBQXBHO0dBQWYsRUFBZ2QsRUFBRSxJQUFGLENBQU8sQ0FBQyxXQUFELEVBQWEsVUFBYixFQUF3QixjQUF4QixFQUF1QyxXQUF2QyxFQUFtRCxhQUFuRCxFQUFpRSxVQUFqRSxDQUFQLEVBQW9GLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUUsRUFBRixDQUFLLENBQUwsSUFBUSxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sS0FBSyxFQUFMLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBUCxDQUFEO0tBQVgsQ0FBVDtHQUFiLENBQTlpQixFQUF1bUIsRUFBRSxJQUFGLENBQU8sT0FBUCxDQUFlLFFBQWYsR0FBd0IsVUFBUyxDQUFULEVBQVc7QUFBQyxXQUFPLEVBQUUsSUFBRixDQUFPLEVBQUUsTUFBRixFQUFTLFVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxNQUFJLEVBQUUsSUFBRixDQUFaO0tBQVgsQ0FBaEIsQ0FBZ0QsTUFBaEQsQ0FBUjtHQUFYLENBRnIwakIsU0FFeTVqQixFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsV0FBTyxFQUFFLFFBQUYsQ0FBVyxDQUFYLElBQWMsQ0FBZCxHQUFnQixNQUFJLEVBQUUsUUFBRixJQUFZLEVBQUUsV0FBRixDQUF4QztHQUFkLENBQW9FLENBQUUsTUFBRixHQUFTLEVBQUMsV0FBVSxtQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksQ0FBSjtVQUFNLENBQU47VUFBUSxDQUFSO1VBQVUsQ0FBVjtVQUFZLENBQVo7VUFBYyxDQUFkO1VBQWdCLENBQWhCO1VBQWtCLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFVBQVIsQ0FBRjtVQUFzQixJQUFFLEVBQUUsQ0FBRixDQUFGO1VBQU8sSUFBRSxFQUFGLENBQWhELFFBQXFELEtBQVcsQ0FBWCxLQUFlLEVBQUUsS0FBRixDQUFRLFFBQVIsR0FBaUIsVUFBakIsQ0FBZixFQUE0QyxJQUFFLEVBQUUsTUFBRixFQUFGLEVBQWEsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsS0FBUixDQUFGLEVBQWlCLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLE1BQVIsQ0FBRixFQUFrQixJQUFFLENBQUMsZUFBYSxDQUFiLElBQWdCLFlBQVUsQ0FBVixDQUFqQixJQUErQixDQUFDLElBQUUsQ0FBRixDQUFELENBQU0sT0FBTixDQUFjLE1BQWQsSUFBc0IsQ0FBQyxDQUFELEVBQUcsS0FBRyxJQUFFLEVBQUUsUUFBRixFQUFGLEVBQWUsSUFBRSxFQUFFLEdBQUYsRUFBTSxJQUFFLEVBQUUsSUFBRixDQUE1QixJQUFxQyxJQUFFLFdBQVcsQ0FBWCxLQUFlLENBQWYsRUFBaUIsSUFBRSxXQUFXLENBQVgsS0FBZSxDQUFmLENBQTFELEVBQTRFLEVBQUUsVUFBRixDQUFhLENBQWIsTUFBa0IsSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBWSxDQUFaLENBQVgsQ0FBRixDQUFsQixFQUFnRCxRQUFNLEVBQUUsR0FBRixLQUFRLEVBQUUsR0FBRixHQUFNLEVBQUUsR0FBRixHQUFNLEVBQUUsR0FBRixHQUFNLENBQVosQ0FBcEIsRUFBbUMsUUFBTSxFQUFFLElBQUYsS0FBUyxFQUFFLElBQUYsR0FBTyxFQUFFLElBQUYsR0FBTyxFQUFFLElBQUYsR0FBTyxDQUFkLENBQXRCLEVBQXVDLFdBQVUsQ0FBVixHQUFZLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxDQUFiLEVBQWUsQ0FBZixDQUFaLEdBQThCLEVBQUUsR0FBRixDQUFNLENBQU4sQ0FBOUIsQ0FBalo7S0FBZixFQUFwQixFQUE2ZCxFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLFVBQUcsVUFBVSxNQUFWLEVBQWlCLE9BQU8sS0FBSyxDQUFMLEtBQVMsQ0FBVCxHQUFXLElBQVgsR0FBZ0IsS0FBSyxJQUFMLENBQVUsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFFLE1BQUYsQ0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXdCLENBQXhCLEVBQTBCLENBQTFCLEVBQUQ7T0FBWCxDQUExQixDQUEzQixJQUFvRyxDQUFKO1VBQU0sQ0FBTjtVQUFRLElBQUUsS0FBSyxDQUFMLENBQUY7VUFBVSxJQUFFLEVBQUMsS0FBSSxDQUFKLEVBQU0sTUFBSyxDQUFMLEVBQVQ7VUFBaUIsSUFBRSxLQUFHLEVBQUUsYUFBRixDQUF6SSxJQUE0SixDQUFILEVBQUssT0FBTyxJQUFFLEVBQUUsZUFBRixFQUFrQixFQUFFLFFBQUYsQ0FBVyxDQUFYLEVBQWEsQ0FBYixLQUFpQixJQUFFLEVBQUUscUJBQUYsRUFBRixFQUE0QixJQUFFLEdBQUcsQ0FBSCxDQUFGLEVBQVEsRUFBQyxLQUFJLEVBQUUsR0FBRixHQUFNLEVBQUUsV0FBRixHQUFjLEVBQUUsU0FBRixFQUFZLE1BQUssRUFBRSxJQUFGLEdBQU8sRUFBRSxXQUFGLEdBQWMsRUFBRSxVQUFGLEVBQW5HLENBQWpCLEdBQW1JLENBQW5JLENBQWhDO0tBQXBLLEVBQTBVLFVBQVMsb0JBQVU7QUFBQyxVQUFHLEtBQUssQ0FBTCxDQUFILEVBQVc7QUFBQyxZQUFJLENBQUo7WUFBTSxDQUFOO1lBQVEsSUFBRSxLQUFLLENBQUwsQ0FBRjtZQUFVLElBQUUsRUFBQyxLQUFJLENBQUosRUFBTSxNQUFLLENBQUwsRUFBVCxDQUFuQixPQUEwQyxZQUFVLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxVQUFSLENBQVYsR0FBOEIsSUFBRSxFQUFFLHFCQUFGLEVBQUYsSUFBNkIsSUFBRSxLQUFLLFlBQUwsRUFBRixFQUFzQixJQUFFLEtBQUssTUFBTCxFQUFGLEVBQWdCLEVBQUUsUUFBRixDQUFXLEVBQUUsQ0FBRixDQUFYLEVBQWdCLE1BQWhCLE1BQTBCLElBQUUsRUFBRSxNQUFGLEVBQUYsQ0FBMUIsRUFBd0MsRUFBRSxHQUFGLElBQU8sRUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBVyxnQkFBWCxFQUE0QixDQUFDLENBQUQsQ0FBbkMsRUFBdUMsRUFBRSxJQUFGLElBQVEsRUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBVyxpQkFBWCxFQUE2QixDQUFDLENBQUQsQ0FBckMsQ0FBaEwsRUFBME4sRUFBQyxLQUFJLEVBQUUsR0FBRixHQUFNLEVBQUUsR0FBRixHQUFNLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxXQUFSLEVBQW9CLENBQUMsQ0FBRCxDQUFoQyxFQUFvQyxNQUFLLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixHQUFPLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxZQUFSLEVBQXFCLENBQUMsQ0FBRCxDQUFuQyxFQUF4USxDQUExQztPQUFYO0tBQVgsRUFBa1gsY0FBYSx3QkFBVTtBQUFDLGFBQU8sS0FBSyxHQUFMLENBQVMsWUFBVTtBQUFDLFlBQUksSUFBRSxLQUFLLFlBQUwsQ0FBUCxPQUErQixLQUFHLGFBQVcsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFVBQVIsQ0FBWDtBQUErQixjQUFFLEVBQUUsWUFBRjtTQUExQyxPQUFnRSxLQUFHLEVBQUgsQ0FBekY7T0FBVixDQUFoQixDQUFEO0tBQVYsRUFBdHVCLENBQTdkLEVBQTQwQyxFQUFFLElBQUYsQ0FBTyxFQUFDLFlBQVcsYUFBWCxFQUF5QixXQUFVLGFBQVYsRUFBakMsRUFBMEQsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBSSxJQUFFLGtCQUFnQixDQUFoQixDQUFQLENBQXlCLENBQUUsRUFBRixDQUFLLENBQUwsSUFBUSxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxJQUFGLEVBQU8sVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFlBQUksSUFBRSxHQUFHLENBQUgsQ0FBRixDQUFMLE9BQW9CLEtBQUssQ0FBTCxLQUFTLENBQVQsR0FBVyxJQUFFLEVBQUUsQ0FBRixDQUFGLEdBQU8sRUFBRSxDQUFGLENBQVAsR0FBWSxNQUFLLElBQUUsRUFBRSxRQUFGLENBQVcsSUFBRSxFQUFFLFdBQUYsR0FBYyxDQUFoQixFQUFrQixJQUFFLENBQUYsR0FBSSxFQUFFLFdBQUYsQ0FBbkMsR0FBa0QsRUFBRSxDQUFGLElBQUssQ0FBTCxDQUF2RCxDQUEzQztPQUFmLEVBQTBILENBQWpJLEVBQW1JLENBQW5JLEVBQXFJLFVBQVUsTUFBVixDQUE1SSxDQUFEO0tBQVgsQ0FBakM7R0FBYixDQUF0NEMsRUFBaW1ELEVBQUUsSUFBRixDQUFPLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBUCxFQUFzQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxNQUFFLFFBQUYsQ0FBVyxDQUFYLElBQWMsR0FBRyxFQUFFLGFBQUYsRUFBZ0IsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFHLElBQUUsR0FBRyxDQUFILEVBQUssQ0FBTCxDQUFGLEVBQVUsR0FBRyxJQUFILENBQVEsQ0FBUixJQUFXLEVBQUUsQ0FBRixFQUFLLFFBQUwsR0FBZ0IsQ0FBaEIsSUFBbUIsSUFBbkIsR0FBd0IsQ0FBbkMsQ0FBYixHQUFtRCxLQUFLLENBQUwsQ0FBM0Q7S0FBYixDQUFqQyxDQUFEO0dBQWIsQ0FBdm5ELEVBQXl2RCxFQUFFLElBQUYsQ0FBTyxFQUFDLFFBQU8sUUFBUCxFQUFnQixPQUFNLE9BQU4sRUFBeEIsRUFBdUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxJQUFGLENBQU8sRUFBQyxTQUFRLFVBQVEsQ0FBUixFQUFVLFNBQVEsQ0FBUixFQUFVLElBQUcsVUFBUSxDQUFSLEVBQXZDLEVBQWtELFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFFBQUUsRUFBRixDQUFLLENBQUwsSUFBUSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFJLElBQUUsVUFBVSxNQUFWLEtBQW1CLEtBQUcsYUFBVyxPQUFPLENBQVAsQ0FBakM7WUFBMkMsSUFBRSxNQUFJLE1BQUksQ0FBQyxDQUFELElBQUksTUFBSSxDQUFDLENBQUQsR0FBRyxRQUFmLEdBQXdCLFFBQXhCLENBQUosQ0FBcEQsT0FBaUcsRUFBRSxJQUFGLEVBQU8sVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGNBQUksQ0FBSixDQUFELE9BQWMsRUFBRSxRQUFGLENBQVcsQ0FBWCxJQUFjLEVBQUUsUUFBRixDQUFXLGVBQVgsQ0FBMkIsV0FBUyxDQUFULENBQXpDLEdBQXFELE1BQUksRUFBRSxRQUFGLElBQVksSUFBRSxFQUFFLGVBQUYsRUFBa0IsS0FBSyxHQUFMLENBQVMsRUFBRSxJQUFGLENBQU8sV0FBUyxDQUFULENBQWhCLEVBQTRCLEVBQUUsV0FBUyxDQUFULENBQTlCLEVBQTBDLEVBQUUsSUFBRixDQUFPLFdBQVMsQ0FBVCxDQUFqRCxFQUE2RCxFQUFFLFdBQVMsQ0FBVCxDQUEvRCxFQUEyRSxFQUFFLFdBQVMsQ0FBVCxDQUE3RSxDQUFwQixDQUFoQixHQUErSCxLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLENBQVgsR0FBd0IsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsRUFBWSxDQUFaLEVBQWMsQ0FBZCxDQUF4QixDQUFsTTtTQUFmLEVBQTJQLENBQWxRLEVBQW9RLElBQUUsQ0FBRixHQUFJLEtBQUssQ0FBTCxFQUFPLENBQS9RLEVBQWlSLElBQWpSLENBQVAsQ0FBMUY7T0FBYixDQUFUO0tBQWIsQ0FBbEQsQ0FBRDtHQUFiLENBQWh5RCxFQUFnd0UsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsYUFBTyxLQUFLLEVBQUwsQ0FBUSxDQUFSLEVBQVUsSUFBVixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBUCxDQUFEO0tBQWYsRUFBNEMsUUFBTyxnQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVcsSUFBWCxFQUFnQixDQUFoQixDQUFQLENBQUQ7S0FBYixFQUF5QyxVQUFTLGtCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxhQUFPLEtBQUssRUFBTCxDQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksQ0FBWixFQUFjLENBQWQsQ0FBUCxDQUFEO0tBQWpCLEVBQTJDLFlBQVcsb0JBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLE1BQUksVUFBVSxNQUFWLEdBQWlCLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBVyxJQUFYLENBQXJCLEdBQXNDLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBVyxLQUFHLElBQUgsRUFBUSxDQUFuQixDQUF0QyxDQUFSO0tBQWYsRUFBb0YsTUFBSyxnQkFBVTtBQUFDLGFBQU8sS0FBSyxNQUFMLENBQVI7S0FBVixFQUF0USxDQUFod0UsRUFBdWlGLEVBQUUsRUFBRixDQUFLLE9BQUwsR0FBYSxFQUFFLEVBQUYsQ0FBSyxPQUFMLEVBQWEsY0FBWSxPQUFPLE1BQVAsSUFBZSxPQUFPLEdBQVAsSUFBWSxPQUFPLFFBQVAsRUFBZ0IsRUFBaEIsRUFBbUIsWUFBVTtBQUFDLFdBQU8sQ0FBUCxDQUFEO0dBQVYsQ0FBMUQsQ0FGcmhwQixJQUV5bXBCLEtBQUcsRUFBRSxNQUFGO01BQVMsS0FBRyxFQUFFLENBQUYsQ0FGeG5wQixPQUVtb3BCLEVBQUUsVUFBRixHQUFhLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxFQUFFLENBQUYsS0FBTSxDQUFOLEtBQVUsRUFBRSxDQUFGLEdBQUksRUFBSixDQUFWLEVBQWtCLEtBQUcsRUFBRSxNQUFGLEtBQVcsQ0FBWCxLQUFlLEVBQUUsTUFBRixHQUFTLEVBQVQsQ0FBbEIsRUFBK0IsQ0FBakQsQ0FBUjtHQUFYLEVBQXVFLE1BQUksRUFBRSxNQUFGLEdBQVMsRUFBRSxDQUFGLEdBQUksQ0FBSixDQUFiLEVBQW9CLENBQXhHLENBRm5vcEI7Q0FBYixDQUEzUDs7Ozs7Ozs7QUNNQTs7QUFFQSxJQUFJLE9BQU8sVUFBVyxDQUFWLEVBQWE7Ozs7Ozs7O0FBUXZCLE1BQUksYUFBYSxLQUFiLENBUm1COztBQVV2QixNQUFJLHFCQUFxQjtBQUN2QixzQkFBa0IscUJBQWxCO0FBQ0EsbUJBQWUsZUFBZjtBQUNBLGlCQUFhLCtCQUFiO0FBQ0EsZ0JBQVksZUFBWjtHQUpFOzs7QUFWbUIsV0FrQmQsTUFBVCxDQUFnQixHQUFoQixFQUFxQjtBQUNuQixXQUFPLEdBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsR0FBbkIsRUFBd0IsS0FBeEIsQ0FBOEIsZUFBOUIsRUFBK0MsQ0FBL0MsRUFBa0QsV0FBbEQsRUFBUCxDQURtQjtHQUFyQjs7QUFJQSxXQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0I7QUFDdEIsV0FBTyxDQUFDLElBQUksQ0FBSixLQUFVLEdBQVYsQ0FBRCxDQUFnQixRQUFoQixDQURlO0dBQXhCOztBQUlBLFdBQVMsNEJBQVQsR0FBd0M7QUFDdEMsV0FBTztBQUNMLGdCQUFVLFdBQVcsR0FBWDtBQUNWLG9CQUFjLFdBQVcsR0FBWDtBQUNkLGNBQVEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQzdCLFlBQUksRUFBRSxNQUFNLE1BQU4sQ0FBRixDQUFnQixFQUFoQixDQUFtQixJQUFuQixDQUFKLEVBQThCO0FBQzVCLGlCQUFPLE1BQU0sU0FBTixDQUFnQixPQUFoQixDQUF3QixLQUF4QixDQUE4QixJQUE5QixFQUFvQyxTQUFwQyxDQUFQLENBRDRCO1NBQTlCO09BRE07S0FIVixDQURzQztHQUF4Qzs7QUFZQSxXQUFTLGlCQUFULEdBQTZCO0FBQzNCLFFBQUksT0FBTyxLQUFQLEVBQWM7QUFDaEIsYUFBTyxLQUFQLENBRGdCO0tBQWxCOztBQUlBLFFBQUksS0FBSyxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBTCxDQUx1Qjs7QUFPM0IsU0FBSyxJQUFJLEtBQUosSUFBYSxrQkFBbEIsRUFBc0M7QUFDcEMsVUFBSSxHQUFHLEtBQUgsQ0FBUyxLQUFULE1BQW9CLFNBQXBCLEVBQStCO0FBQ2pDLGVBQU8sRUFBRSxLQUFLLG1CQUFtQixLQUFuQixDQUFMLEVBQVQsQ0FEaUM7T0FBbkM7S0FERjs7QUFNQSxXQUFPLEtBQVAsQ0FiMkI7R0FBN0I7O0FBZ0JBLFdBQVMscUJBQVQsQ0FBK0IsUUFBL0IsRUFBeUM7QUFDdkMsUUFBSSxRQUFRLElBQVIsQ0FEbUM7O0FBR3ZDLFFBQUksU0FBUyxLQUFULENBSG1DOztBQUt2QyxNQUFFLElBQUYsRUFBUSxHQUFSLENBQVksS0FBSyxjQUFMLEVBQXFCLFlBQVk7QUFDM0MsZUFBUyxJQUFULENBRDJDO0tBQVosQ0FBakMsQ0FMdUM7O0FBU3ZDLGVBQVcsWUFBWTtBQUNyQixVQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1gsYUFBSyxvQkFBTCxDQUEwQixLQUExQixFQURXO09BQWI7S0FEUyxFQUlSLFFBSkgsRUFUdUM7O0FBZXZDLFdBQU8sSUFBUCxDQWZ1QztHQUF6Qzs7QUFrQkEsV0FBUyx1QkFBVCxHQUFtQztBQUNqQyxpQkFBYSxtQkFBYixDQURpQzs7QUFHakMsTUFBRSxFQUFGLENBQUssb0JBQUwsR0FBNEIscUJBQTVCLENBSGlDOztBQUtqQyxRQUFJLEtBQUsscUJBQUwsRUFBSixFQUFrQztBQUNoQyxRQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLEtBQUssY0FBTCxDQUFoQixHQUF1Qyw4QkFBdkMsQ0FEZ0M7S0FBbEM7R0FMRjs7Ozs7Ozs7QUF4RXVCLE1Bd0ZuQixPQUFPOztBQUVULG9CQUFnQixpQkFBaEI7O0FBRUEsWUFBUSxTQUFTLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0I7QUFDOUIsU0FBRztBQUNELGtCQUFVLEVBQUUsRUFBRSxLQUFLLE1BQUwsS0FBZ0IsT0FBaEIsQ0FBRjtBQURYLE9BQUgsUUFFUyxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGVCxFQUQ4QjtBQUk5QixhQUFPLE1BQVAsQ0FKOEI7S0FBeEI7O0FBT1IsNEJBQXdCLFNBQVMsc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUM7QUFDL0QsVUFBSSxXQUFXLFFBQVEsWUFBUixDQUFxQixhQUFyQixDQUFYLENBRDJEOztBQUcvRCxVQUFJLENBQUMsUUFBRCxFQUFXO0FBQ2IsbUJBQVcsUUFBUSxZQUFSLENBQXFCLE1BQXJCLEtBQWdDLEVBQWhDLENBREU7QUFFYixtQkFBVyxXQUFXLElBQVgsQ0FBZ0IsUUFBaEIsSUFBNEIsUUFBNUIsR0FBdUMsSUFBdkMsQ0FGRTtPQUFmOztBQUtBLGFBQU8sUUFBUCxDQVIrRDtLQUF6Qzs7QUFXeEIsWUFBUSxTQUFTLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUI7QUFDL0IsVUFBSSxRQUFKLENBQWEsSUFBYixFQUFtQixXQUFuQixFQUFnQyxRQUFRLFlBQVIsQ0FBaEMsQ0FEK0I7S0FBekI7O0FBSVIsMEJBQXNCLFNBQVMsb0JBQVQsQ0FBOEIsT0FBOUIsRUFBdUM7QUFDM0QsUUFBRSxPQUFGLEVBQVcsT0FBWCxDQUFtQixXQUFXLEdBQVgsQ0FBbkIsQ0FEMkQ7S0FBdkM7O0FBSXRCLDJCQUF1QixTQUFTLHFCQUFULEdBQWlDO0FBQ3RELGFBQU8sUUFBUSxVQUFSLENBQVAsQ0FEc0Q7S0FBakM7O0FBSXZCLHFCQUFpQixTQUFTLGVBQVQsQ0FBeUIsYUFBekIsRUFBd0MsTUFBeEMsRUFBZ0QsV0FBaEQsRUFBNkQ7QUFDNUUsV0FBSyxJQUFJLFFBQUosSUFBZ0IsV0FBckIsRUFBa0M7QUFDaEMsWUFBSSxZQUFZLGNBQVosQ0FBMkIsUUFBM0IsQ0FBSixFQUEwQztBQUN4QyxjQUFJLGdCQUFnQixZQUFZLFFBQVosQ0FBaEIsQ0FEb0M7QUFFeEMsY0FBSSxRQUFRLE9BQU8sUUFBUCxDQUFSLENBRm9DO0FBR3hDLGNBQUksWUFBWSxTQUFaLENBSG9DOztBQUt4QyxjQUFJLFNBQVMsVUFBVSxLQUFWLENBQVQsRUFBMkI7QUFDN0Isd0JBQVksU0FBWixDQUQ2QjtXQUEvQixNQUVPO0FBQ0wsd0JBQVksT0FBTyxLQUFQLENBQVosQ0FESztXQUZQOztBQU1BLGNBQUksQ0FBQyxJQUFJLE1BQUosQ0FBVyxhQUFYLEVBQTBCLElBQTFCLENBQStCLFNBQS9CLENBQUQsRUFBNEM7QUFDOUMsa0JBQU0sSUFBSSxLQUFKLENBQVUsY0FBYyxXQUFkLEtBQThCLElBQTlCLElBQXNDLGFBQWEsUUFBYixHQUF3QixtQkFBeEIsR0FBOEMsU0FBOUMsR0FBMEQsSUFBMUQsQ0FBdEMsSUFBeUcsd0JBQXdCLGFBQXhCLEdBQXdDLElBQXhDLENBQXpHLENBQWhCLENBRDhDO1dBQWhEO1NBWEY7T0FERjtLQURlO0dBbENmLENBeEZtQjs7QUErSXZCLDRCQS9JdUI7O0FBaUp2QixTQUFPLElBQVAsQ0FqSnVCO0NBQWIsQ0FrSlQsTUFsSlEsQ0FBUDs7QUNUSjs7OztBQUVBLElBQUksZUFBZSxZQUFhO0FBQUUsV0FBUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxLQUFsQyxFQUF5QztBQUFFLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQUUsVUFBSSxhQUFhLE1BQU0sQ0FBTixDQUFiLENBQU4sVUFBNkIsQ0FBVyxVQUFYLEdBQXdCLFdBQVcsVUFBWCxJQUF5QixLQUF6QixDQUFyRCxVQUFxRixDQUFXLFlBQVgsR0FBMEIsSUFBMUIsQ0FBckYsSUFBeUgsV0FBVyxVQUFYLEVBQXVCLFdBQVcsUUFBWCxHQUFzQixJQUF0QixDQUEzQixNQUF1RCxDQUFPLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsV0FBVyxHQUFYLEVBQWdCLFVBQTlDLEVBQTVLO0tBQXZDO0dBQTNDLE9BQW9VLFVBQVUsV0FBVixFQUF1QixVQUF2QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksVUFBSixFQUFnQixpQkFBaUIsWUFBWSxTQUFaLEVBQXVCLFVBQXhDLEVBQWhCLElBQXlFLFdBQUosRUFBaUIsaUJBQWlCLFdBQWpCLEVBQThCLFdBQTlCLEVBQWpCLE9BQW9FLFdBQVAsQ0FBcEk7R0FBaEQsQ0FBdFU7Q0FBWixFQUFoQjs7QUFFSixTQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxNQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxVQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtHQUF4QztDQUFsRDs7Ozs7Ozs7O0FBU0EsSUFBSSxRQUFRLFVBQVcsQ0FBVixFQUFhOzs7Ozs7OztBQVF4QixNQUFJLE9BQU8sT0FBUCxDQVJvQjtBQVN4QixNQUFJLFVBQVUsYUFBVixDQVRvQjtBQVV4QixNQUFJLFdBQVcsVUFBWCxDQVZvQjtBQVd4QixNQUFJLFlBQVksTUFBTSxRQUFOLENBWFE7QUFZeEIsTUFBSSxlQUFlLFdBQWYsQ0Fab0I7QUFheEIsTUFBSSxxQkFBcUIsRUFBRSxFQUFGLENBQUssSUFBTCxDQUFyQixDQWJvQjtBQWN4QixNQUFJLHNCQUFzQixHQUF0QixDQWRvQjtBQWV4QixNQUFJLCtCQUErQixHQUEvQixDQWZvQjs7QUFpQnhCLE1BQUksVUFBVTtBQUNaLGNBQVUsSUFBVjtBQUNBLGNBQVUsSUFBVjtBQUNBLFdBQU8sSUFBUDtBQUNBLFVBQU0sSUFBTjtHQUpFLENBakJvQjs7QUF3QnhCLE1BQUksY0FBYztBQUNoQixjQUFVLGtCQUFWO0FBQ0EsY0FBVSxTQUFWO0FBQ0EsV0FBTyxTQUFQO0FBQ0EsVUFBTSxTQUFOO0dBSkUsQ0F4Qm9COztBQStCeEIsTUFBSSxRQUFRO0FBQ1YsVUFBTSxTQUFTLFNBQVQ7QUFDTixZQUFRLFdBQVcsU0FBWDtBQUNSLFVBQU0sU0FBUyxTQUFUO0FBQ04sV0FBTyxVQUFVLFNBQVY7QUFDUCxhQUFTLFlBQVksU0FBWjtBQUNULFlBQVEsV0FBVyxTQUFYO0FBQ1IsbUJBQWUsa0JBQWtCLFNBQWxCO0FBQ2YscUJBQWlCLG9CQUFvQixTQUFwQjtBQUNqQixxQkFBaUIsb0JBQW9CLFNBQXBCO0FBQ2pCLHVCQUFtQixzQkFBc0IsU0FBdEI7QUFDbkIsb0JBQWdCLFVBQVUsU0FBVixHQUFzQixZQUF0QjtHQVhkLENBL0JvQjs7QUE2Q3hCLE1BQUksWUFBWTtBQUNkLHdCQUFvQix5QkFBcEI7QUFDQSxjQUFVLGdCQUFWO0FBQ0EsVUFBTSxZQUFOO0FBQ0EsVUFBTSxNQUFOO0FBQ0EsUUFBSSxJQUFKO0dBTEUsQ0E3Q29COztBQXFEeEIsTUFBSSxXQUFXO0FBQ2IsWUFBUSxlQUFSO0FBQ0EsaUJBQWEsdUJBQWI7QUFDQSxrQkFBYyx3QkFBZDtBQUNBLG1CQUFlLG9EQUFmO0dBSkU7Ozs7Ozs7O0FBckRvQixNQWtFcEIsUUFBUSxZQUFhO0FBQ3ZCLGFBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0IsTUFBeEIsRUFBZ0M7QUFDOUIsc0JBQWdCLElBQWhCLEVBQXNCLEtBQXRCLEVBRDhCOztBQUc5QixXQUFLLE9BQUwsR0FBZSxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBZixDQUg4QjtBQUk5QixXQUFLLFFBQUwsR0FBZ0IsT0FBaEIsQ0FKOEI7QUFLOUIsV0FBSyxPQUFMLEdBQWUsRUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixTQUFTLE1BQVQsQ0FBaEIsQ0FBaUMsQ0FBakMsQ0FBZixDQUw4QjtBQU05QixXQUFLLFNBQUwsR0FBaUIsSUFBakIsQ0FOOEI7QUFPOUIsV0FBSyxRQUFMLEdBQWdCLEtBQWhCLENBUDhCO0FBUTlCLFdBQUssa0JBQUwsR0FBMEIsS0FBMUIsQ0FSOEI7QUFTOUIsV0FBSyxvQkFBTCxHQUE0QixLQUE1QixDQVQ4QjtBQVU5QixXQUFLLG9CQUFMLEdBQTRCLENBQTVCLENBVjhCO0FBVzlCLFdBQUssZUFBTCxHQUF1QixDQUF2QixDQVg4QjtLQUFoQzs7Ozs7Ozs7OztBQUR1QixnQkF1QnZCLENBQWEsS0FBYixFQUFvQixDQUFDO0FBQ25CLFdBQUssUUFBTDs7OztBQUlBLGFBQU8sU0FBUyxNQUFULENBQWdCLGFBQWhCLEVBQStCO0FBQ3BDLGVBQU8sS0FBSyxRQUFMLEdBQWdCLEtBQUssSUFBTCxFQUFoQixHQUE4QixLQUFLLElBQUwsQ0FBVSxhQUFWLENBQTlCLENBRDZCO09BQS9CO0tBTFcsRUFRakI7QUFDRCxXQUFLLE1BQUw7QUFDQSxhQUFPLFNBQVMsSUFBVCxDQUFjLGFBQWQsRUFBNkI7QUFDbEMsWUFBSSxRQUFRLElBQVIsQ0FEOEI7O0FBR2xDLFlBQUksWUFBWSxFQUFFLEtBQUYsQ0FBUSxNQUFNLElBQU4sRUFBWTtBQUNsQyx5QkFBZSxhQUFmO1NBRGMsQ0FBWixDQUg4Qjs7QUFPbEMsVUFBRSxLQUFLLFFBQUwsQ0FBRixDQUFpQixPQUFqQixDQUF5QixTQUF6QixFQVBrQzs7QUFTbEMsWUFBSSxLQUFLLFFBQUwsSUFBaUIsVUFBVSxrQkFBVixFQUFqQixFQUFpRDtBQUNuRCxpQkFEbUQ7U0FBckQ7O0FBSUEsYUFBSyxRQUFMLEdBQWdCLElBQWhCLENBYmtDOztBQWVsQyxhQUFLLGVBQUwsR0Fma0M7QUFnQmxDLGFBQUssYUFBTCxHQWhCa0M7O0FBa0JsQyxVQUFFLFNBQVMsSUFBVCxDQUFGLENBQWlCLFFBQWpCLENBQTBCLFVBQVUsSUFBVixDQUExQixDQWxCa0M7O0FBb0JsQyxhQUFLLGVBQUwsR0FwQmtDO0FBcUJsQyxhQUFLLGVBQUwsR0FyQmtDOztBQXVCbEMsVUFBRSxLQUFLLFFBQUwsQ0FBRixDQUFpQixFQUFqQixDQUFvQixNQUFNLGFBQU4sRUFBcUIsU0FBUyxZQUFULEVBQXVCLEVBQUUsS0FBRixDQUFRLEtBQUssSUFBTCxFQUFXLElBQW5CLENBQWhFLEVBdkJrQzs7QUF5QmxDLFVBQUUsS0FBSyxPQUFMLENBQUYsQ0FBZ0IsRUFBaEIsQ0FBbUIsTUFBTSxpQkFBTixFQUF5QixZQUFZO0FBQ3RELFlBQUUsTUFBTSxRQUFOLENBQUYsQ0FBa0IsR0FBbEIsQ0FBc0IsTUFBTSxlQUFOLEVBQXVCLFVBQVUsS0FBVixFQUFpQjtBQUM1RCxnQkFBSSxFQUFFLE1BQU0sTUFBTixDQUFGLENBQWdCLEVBQWhCLENBQW1CLE1BQU0sUUFBTixDQUF2QixFQUF3QztBQUN0QyxvQkFBTSxvQkFBTixHQUE2QixJQUE3QixDQURzQzthQUF4QztXQUQyQyxDQUE3QyxDQURzRDtTQUFaLENBQTVDLENBekJrQzs7QUFpQ2xDLGFBQUssYUFBTCxDQUFtQixFQUFFLEtBQUYsQ0FBUSxLQUFLLFlBQUwsRUFBbUIsSUFBM0IsRUFBaUMsYUFBakMsQ0FBbkIsRUFqQ2tDO09BQTdCO0tBVlcsRUE2Q2pCO0FBQ0QsV0FBSyxNQUFMO0FBQ0EsYUFBTyxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQzFCLFlBQUksS0FBSixFQUFXO0FBQ1QsZ0JBQU0sY0FBTixHQURTO1NBQVg7O0FBSUEsWUFBSSxZQUFZLEVBQUUsS0FBRixDQUFRLE1BQU0sSUFBTixDQUFwQixDQUxzQjs7QUFPMUIsVUFBRSxLQUFLLFFBQUwsQ0FBRixDQUFpQixPQUFqQixDQUF5QixTQUF6QixFQVAwQjs7QUFTMUIsWUFBSSxDQUFDLEtBQUssUUFBTCxJQUFpQixVQUFVLGtCQUFWLEVBQWxCLEVBQWtEO0FBQ3BELGlCQURvRDtTQUF0RDs7QUFJQSxhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FiMEI7O0FBZTFCLGFBQUssZUFBTCxHQWYwQjtBQWdCMUIsYUFBSyxlQUFMLEdBaEIwQjs7QUFrQjFCLFVBQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsTUFBTSxPQUFOLENBQWhCLENBbEIwQjs7QUFvQjFCLFVBQUUsS0FBSyxRQUFMLENBQUYsQ0FBaUIsV0FBakIsQ0FBNkIsVUFBVSxFQUFWLENBQTdCLENBcEIwQjs7QUFzQjFCLFVBQUUsS0FBSyxRQUFMLENBQUYsQ0FBaUIsR0FBakIsQ0FBcUIsTUFBTSxhQUFOLENBQXJCLENBdEIwQjtBQXVCMUIsVUFBRSxLQUFLLE9BQUwsQ0FBRixDQUFnQixHQUFoQixDQUFvQixNQUFNLGlCQUFOLENBQXBCLENBdkIwQjs7QUF5QjFCLFlBQUksS0FBSyxxQkFBTCxNQUFnQyxFQUFFLEtBQUssUUFBTCxDQUFGLENBQWlCLFFBQWpCLENBQTBCLFVBQVUsSUFBVixDQUExRCxFQUEyRTs7QUFFN0UsWUFBRSxLQUFLLFFBQUwsQ0FBRixDQUFpQixHQUFqQixDQUFxQixLQUFLLGNBQUwsRUFBcUIsRUFBRSxLQUFGLENBQVEsS0FBSyxVQUFMLEVBQWlCLElBQXpCLENBQTFDLEVBQTBFLG9CQUExRSxDQUErRixtQkFBL0YsRUFGNkU7U0FBL0UsTUFHTztBQUNMLGVBQUssVUFBTCxHQURLO1NBSFA7T0F6Qks7S0EvQ1csRUErRWpCO0FBQ0QsV0FBSyxTQUFMO0FBQ0EsYUFBTyxTQUFTLE9BQVQsR0FBbUI7QUFDeEIsVUFBRSxVQUFGLENBQWEsS0FBSyxRQUFMLEVBQWUsUUFBNUIsRUFEd0I7O0FBR3hCLFVBQUUsTUFBRixFQUFVLEdBQVYsQ0FBYyxTQUFkLEVBSHdCO0FBSXhCLFVBQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsU0FBaEIsRUFKd0I7QUFLeEIsVUFBRSxLQUFLLFFBQUwsQ0FBRixDQUFpQixHQUFqQixDQUFxQixTQUFyQixFQUx3QjtBQU14QixVQUFFLEtBQUssU0FBTCxDQUFGLENBQWtCLEdBQWxCLENBQXNCLFNBQXRCLEVBTndCOztBQVF4QixhQUFLLE9BQUwsR0FBZSxJQUFmLENBUndCO0FBU3hCLGFBQUssUUFBTCxHQUFnQixJQUFoQixDQVR3QjtBQVV4QixhQUFLLE9BQUwsR0FBZSxJQUFmLENBVndCO0FBV3hCLGFBQUssU0FBTCxHQUFpQixJQUFqQixDQVh3QjtBQVl4QixhQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0Fad0I7QUFheEIsYUFBSyxrQkFBTCxHQUEwQixJQUExQixDQWJ3QjtBQWN4QixhQUFLLG9CQUFMLEdBQTRCLElBQTVCLENBZHdCO0FBZXhCLGFBQUssb0JBQUwsR0FBNEIsSUFBNUIsQ0Fmd0I7QUFnQnhCLGFBQUssZUFBTCxHQUF1QixJQUF2QixDQWhCd0I7T0FBbkI7Ozs7QUFGTixLQS9FaUIsRUFzR2pCO0FBQ0QsV0FBSyxZQUFMO0FBQ0EsYUFBTyxTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEI7QUFDakMsaUJBQVMsRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFhLE9BQWIsRUFBc0IsTUFBdEIsQ0FBVCxDQURpQztBQUVqQyxhQUFLLGVBQUwsQ0FBcUIsSUFBckIsRUFBMkIsTUFBM0IsRUFBbUMsV0FBbkMsRUFGaUM7QUFHakMsZUFBTyxNQUFQLENBSGlDO09BQTVCO0tBeEdXLEVBNkdqQjtBQUNELFdBQUssY0FBTDtBQUNBLGFBQU8sU0FBUyxZQUFULENBQXNCLGFBQXRCLEVBQXFDO0FBQzFDLFlBQUksU0FBUyxJQUFULENBRHNDOztBQUcxQyxZQUFJLGFBQWEsS0FBSyxxQkFBTCxNQUFnQyxFQUFFLEtBQUssUUFBTCxDQUFGLENBQWlCLFFBQWpCLENBQTBCLFVBQVUsSUFBVixDQUExRCxDQUh5Qjs7QUFLMUMsWUFBSSxDQUFDLEtBQUssUUFBTCxDQUFjLFVBQWQsSUFBNEIsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixRQUF6QixLQUFzQyxLQUFLLFlBQUwsRUFBbUI7O0FBRXhGLG1CQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLEtBQUssUUFBTCxDQUExQixDQUZ3RjtTQUExRjs7QUFLQSxhQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLE9BQTlCLENBVjBDO0FBVzFDLGFBQUssUUFBTCxDQUFjLFNBQWQsR0FBMEIsQ0FBMUIsQ0FYMEM7O0FBYTFDLFlBQUksVUFBSixFQUFnQjtBQUNkLGVBQUssTUFBTCxDQUFZLEtBQUssUUFBTCxDQUFaLENBRGM7U0FBaEI7O0FBSUEsVUFBRSxLQUFLLFFBQUwsQ0FBRixDQUFpQixRQUFqQixDQUEwQixVQUFVLEVBQVYsQ0FBMUIsQ0FqQjBDOztBQW1CMUMsWUFBSSxLQUFLLE9BQUwsQ0FBYSxLQUFiLEVBQW9CO0FBQ3RCLGVBQUssYUFBTCxHQURzQjtTQUF4Qjs7QUFJQSxZQUFJLGFBQWEsRUFBRSxLQUFGLENBQVEsTUFBTSxLQUFOLEVBQWE7QUFDcEMseUJBQWUsYUFBZjtTQURlLENBQWIsQ0F2QnNDOztBQTJCMUMsWUFBSSxxQkFBcUIsU0FBUyxrQkFBVCxHQUE4QjtBQUNyRCxjQUFJLE9BQU8sT0FBUCxDQUFlLEtBQWYsRUFBc0I7QUFDeEIsbUJBQU8sUUFBUCxDQUFnQixLQUFoQixHQUR3QjtXQUExQjtBQUdBLFlBQUUsT0FBTyxRQUFQLENBQUYsQ0FBbUIsT0FBbkIsQ0FBMkIsVUFBM0IsRUFKcUQ7U0FBOUIsQ0EzQmlCOztBQWtDMUMsWUFBSSxVQUFKLEVBQWdCO0FBQ2QsWUFBRSxLQUFLLE9BQUwsQ0FBRixDQUFnQixHQUFoQixDQUFvQixLQUFLLGNBQUwsRUFBcUIsa0JBQXpDLEVBQTZELG9CQUE3RCxDQUFrRixtQkFBbEYsRUFEYztTQUFoQixNQUVPO0FBQ0wsK0JBREs7U0FGUDtPQWxDSztLQS9HVyxFQXVKakI7QUFDRCxXQUFLLGVBQUw7QUFDQSxhQUFPLFNBQVMsYUFBVCxHQUF5QjtBQUM5QixZQUFJLFNBQVMsSUFBVCxDQUQwQjs7QUFHOUIsVUFBRSxRQUFGLEVBQVksR0FBWixDQUFnQixNQUFNLE9BQU47QUFBaEIsU0FDQyxFQURELENBQ0ksTUFBTSxPQUFOLEVBQWUsVUFBVSxLQUFWLEVBQWlCO0FBQ2xDLGNBQUksT0FBTyxRQUFQLEtBQW9CLE1BQU0sTUFBTixJQUFnQixDQUFDLEVBQUUsT0FBTyxRQUFQLENBQUYsQ0FBbUIsR0FBbkIsQ0FBdUIsTUFBTSxNQUFOLENBQXZCLENBQXFDLE1BQXJDLEVBQTZDO0FBQ3BGLG1CQUFPLFFBQVAsQ0FBZ0IsS0FBaEIsR0FEb0Y7V0FBdEY7U0FEaUIsQ0FEbkIsQ0FIOEI7T0FBekI7S0F6SlcsRUFtS2pCO0FBQ0QsV0FBSyxpQkFBTDtBQUNBLGFBQU8sU0FBUyxlQUFULEdBQTJCO0FBQ2hDLFlBQUksU0FBUyxJQUFULENBRDRCOztBQUdoQyxZQUFJLEtBQUssUUFBTCxJQUFpQixLQUFLLE9BQUwsQ0FBYSxRQUFiLEVBQXVCO0FBQzFDLFlBQUUsS0FBSyxRQUFMLENBQUYsQ0FBaUIsRUFBakIsQ0FBb0IsTUFBTSxlQUFOLEVBQXVCLFVBQVUsS0FBVixFQUFpQjtBQUMxRCxnQkFBSSxNQUFNLEtBQU4sS0FBZ0IsRUFBaEIsRUFBb0I7QUFDdEIscUJBQU8sSUFBUCxHQURzQjthQUF4QjtXQUR5QyxDQUEzQyxDQUQwQztTQUE1QyxNQU1PLElBQUksQ0FBQyxLQUFLLFFBQUwsRUFBZTtBQUN6QixZQUFFLEtBQUssUUFBTCxDQUFGLENBQWlCLEdBQWpCLENBQXFCLE1BQU0sZUFBTixDQUFyQixDQUR5QjtTQUFwQjtPQVRGO0tBcktXLEVBa0xqQjtBQUNELFdBQUssaUJBQUw7QUFDQSxhQUFPLFNBQVMsZUFBVCxHQUEyQjtBQUNoQyxZQUFJLEtBQUssUUFBTCxFQUFlO0FBQ2pCLFlBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxNQUFNLE1BQU4sRUFBYyxFQUFFLEtBQUYsQ0FBUSxLQUFLLGFBQUwsRUFBb0IsSUFBNUIsQ0FBM0IsRUFEaUI7U0FBbkIsTUFFTztBQUNMLFlBQUUsTUFBRixFQUFVLEdBQVYsQ0FBYyxNQUFNLE1BQU4sQ0FBZCxDQURLO1NBRlA7T0FESztLQXBMVyxFQTJMakI7QUFDRCxXQUFLLFlBQUw7QUFDQSxhQUFPLFNBQVMsVUFBVCxHQUFzQjtBQUMzQixZQUFJLFNBQVMsSUFBVCxDQUR1Qjs7QUFHM0IsYUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixNQUE5QixDQUgyQjtBQUkzQixhQUFLLGFBQUwsQ0FBbUIsWUFBWTtBQUM3QixZQUFFLFNBQVMsSUFBVCxDQUFGLENBQWlCLFdBQWpCLENBQTZCLFVBQVUsSUFBVixDQUE3QixDQUQ2QjtBQUU3QixpQkFBTyxpQkFBUCxHQUY2QjtBQUc3QixpQkFBTyxlQUFQLEdBSDZCO0FBSTdCLFlBQUUsT0FBTyxRQUFQLENBQUYsQ0FBbUIsT0FBbkIsQ0FBMkIsTUFBTSxNQUFOLENBQTNCLENBSjZCO1NBQVosQ0FBbkIsQ0FKMkI7T0FBdEI7S0E3TFcsRUF3TWpCO0FBQ0QsV0FBSyxpQkFBTDtBQUNBLGFBQU8sU0FBUyxlQUFULEdBQTJCO0FBQ2hDLFlBQUksS0FBSyxTQUFMLEVBQWdCO0FBQ2xCLFlBQUUsS0FBSyxTQUFMLENBQUYsQ0FBa0IsTUFBbEIsR0FEa0I7QUFFbEIsZUFBSyxTQUFMLEdBQWlCLElBQWpCLENBRmtCO1NBQXBCO09BREs7S0ExTVcsRUFnTmpCO0FBQ0QsV0FBSyxlQUFMO0FBQ0EsYUFBTyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUM7QUFDdEMsWUFBSSxTQUFTLElBQVQsQ0FEa0M7O0FBR3RDLFlBQUksVUFBVSxFQUFFLEtBQUssUUFBTCxDQUFGLENBQWlCLFFBQWpCLENBQTBCLFVBQVUsSUFBVixDQUExQixHQUE0QyxVQUFVLElBQVYsR0FBaUIsRUFBN0QsQ0FId0I7O0FBS3RDLFlBQUksS0FBSyxRQUFMLElBQWlCLEtBQUssT0FBTCxDQUFhLFFBQWIsRUFBdUI7QUFDMUMsY0FBSSxZQUFZLEtBQUsscUJBQUwsTUFBZ0MsT0FBaEMsQ0FEMEI7O0FBRzFDLGVBQUssU0FBTCxHQUFpQixTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakIsQ0FIMEM7QUFJMUMsZUFBSyxTQUFMLENBQWUsU0FBZixHQUEyQixVQUFVLFFBQVYsQ0FKZTs7QUFNMUMsY0FBSSxPQUFKLEVBQWE7QUFDWCxjQUFFLEtBQUssU0FBTCxDQUFGLENBQWtCLFFBQWxCLENBQTJCLE9BQTNCLEVBRFc7V0FBYjs7QUFJQSxZQUFFLEtBQUssU0FBTCxDQUFGLENBQWtCLFFBQWxCLENBQTJCLFNBQVMsSUFBVCxDQUEzQixDQVYwQzs7QUFZMUMsWUFBRSxLQUFLLFFBQUwsQ0FBRixDQUFpQixFQUFqQixDQUFvQixNQUFNLGFBQU4sRUFBcUIsVUFBVSxLQUFWLEVBQWlCO0FBQ3hELGdCQUFJLE9BQU8sb0JBQVAsRUFBNkI7QUFDL0IscUJBQU8sb0JBQVAsR0FBOEIsS0FBOUIsQ0FEK0I7QUFFL0IscUJBRitCO2FBQWpDO0FBSUEsZ0JBQUksTUFBTSxNQUFOLEtBQWlCLE1BQU0sYUFBTixFQUFxQjtBQUN4QyxxQkFEd0M7YUFBMUM7QUFHQSxnQkFBSSxPQUFPLE9BQVAsQ0FBZSxRQUFmLEtBQTRCLFFBQTVCLEVBQXNDO0FBQ3hDLHFCQUFPLFFBQVAsQ0FBZ0IsS0FBaEIsR0FEd0M7YUFBMUMsTUFFTztBQUNMLHFCQUFPLElBQVAsR0FESzthQUZQO1dBUnVDLENBQXpDLENBWjBDOztBQTJCMUMsY0FBSSxTQUFKLEVBQWU7QUFDYixpQkFBSyxNQUFMLENBQVksS0FBSyxTQUFMLENBQVosQ0FEYTtXQUFmOztBQUlBLFlBQUUsS0FBSyxTQUFMLENBQUYsQ0FBa0IsUUFBbEIsQ0FBMkIsVUFBVSxFQUFWLENBQTNCLENBL0IwQzs7QUFpQzFDLGNBQUksQ0FBQyxRQUFELEVBQVc7QUFDYixtQkFEYTtXQUFmOztBQUlBLGNBQUksQ0FBQyxTQUFELEVBQVk7QUFDZCx1QkFEYztBQUVkLG1CQUZjO1dBQWhCOztBQUtBLFlBQUUsS0FBSyxTQUFMLENBQUYsQ0FBa0IsR0FBbEIsQ0FBc0IsS0FBSyxjQUFMLEVBQXFCLFFBQTNDLEVBQXFELG9CQUFyRCxDQUEwRSw0QkFBMUUsRUExQzBDO1NBQTVDLE1BMkNPLElBQUksQ0FBQyxLQUFLLFFBQUwsSUFBaUIsS0FBSyxTQUFMLEVBQWdCO0FBQzNDLFlBQUUsS0FBSyxTQUFMLENBQUYsQ0FBa0IsV0FBbEIsQ0FBOEIsVUFBVSxFQUFWLENBQTlCLENBRDJDOztBQUczQyxjQUFJLGlCQUFpQixTQUFTLGNBQVQsR0FBMEI7QUFDN0MsbUJBQU8sZUFBUCxHQUQ2QztBQUU3QyxnQkFBSSxRQUFKLEVBQWM7QUFDWix5QkFEWTthQUFkO1dBRm1CLENBSHNCOztBQVUzQyxjQUFJLEtBQUsscUJBQUwsTUFBZ0MsRUFBRSxLQUFLLFFBQUwsQ0FBRixDQUFpQixRQUFqQixDQUEwQixVQUFVLElBQVYsQ0FBMUQsRUFBMkU7QUFDN0UsY0FBRSxLQUFLLFNBQUwsQ0FBRixDQUFrQixHQUFsQixDQUFzQixLQUFLLGNBQUwsRUFBcUIsY0FBM0MsRUFBMkQsb0JBQTNELENBQWdGLDRCQUFoRixFQUQ2RTtXQUEvRSxNQUVPO0FBQ0wsNkJBREs7V0FGUDtTQVZLLE1BZUEsSUFBSSxRQUFKLEVBQWM7QUFDbkIscUJBRG1CO1NBQWQ7T0EvREY7Ozs7Ozs7QUFGTixLQWhOaUIsRUEyUmpCO0FBQ0QsV0FBSyxlQUFMO0FBQ0EsYUFBTyxTQUFTLGFBQVQsR0FBeUI7QUFDOUIsYUFBSyxhQUFMLEdBRDhCO09BQXpCO0tBN1JXLEVBZ1NqQjtBQUNELFdBQUssZUFBTDtBQUNBLGFBQU8sU0FBUyxhQUFULEdBQXlCO0FBQzlCLFlBQUkscUJBQXFCLEtBQUssUUFBTCxDQUFjLFlBQWQsR0FBNkIsU0FBUyxlQUFULENBQXlCLFlBQXpCLENBRHhCOztBQUc5QixZQUFJLENBQUMsS0FBSyxrQkFBTCxJQUEyQixrQkFBNUIsRUFBZ0Q7QUFDbEQsZUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixHQUFrQyxLQUFLLGVBQUwsR0FBdUIsSUFBdkIsQ0FEZ0I7U0FBcEQ7O0FBSUEsWUFBSSxLQUFLLGtCQUFMLElBQTJCLENBQUMsa0JBQUQsRUFBcUI7QUFDbEQsZUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixZQUFwQixHQUFtQyxLQUFLLGVBQUwsR0FBdUIsS0FBdkIsQ0FEZTtTQUFwRDtPQVBLO0tBbFNXLEVBNlNqQjtBQUNELFdBQUssbUJBQUw7QUFDQSxhQUFPLFNBQVMsaUJBQVQsR0FBNkI7QUFDbEMsYUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixHQUFrQyxFQUFsQyxDQURrQztBQUVsQyxhQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQXBCLEdBQW1DLEVBQW5DLENBRmtDO09BQTdCO0tBL1NXLEVBbVRqQjtBQUNELFdBQUssaUJBQUw7QUFDQSxhQUFPLFNBQVMsZUFBVCxHQUEyQjtBQUNoQyxZQUFJLGtCQUFrQixPQUFPLFVBQVAsQ0FEVTtBQUVoQyxZQUFJLENBQUMsZUFBRCxFQUFrQjs7QUFFcEIsY0FBSSxzQkFBc0IsU0FBUyxlQUFULENBQXlCLHFCQUF6QixFQUF0QixDQUZnQjtBQUdwQiw0QkFBa0Isb0JBQW9CLEtBQXBCLEdBQTRCLEtBQUssR0FBTCxDQUFTLG9CQUFvQixJQUFwQixDQUFyQyxDQUhFO1NBQXRCO0FBS0EsYUFBSyxrQkFBTCxHQUEwQixTQUFTLElBQVQsQ0FBYyxXQUFkLEdBQTRCLGVBQTVCLENBUE07QUFRaEMsYUFBSyxlQUFMLEdBQXVCLEtBQUssa0JBQUwsRUFBdkIsQ0FSZ0M7T0FBM0I7S0FyVFcsRUErVGpCO0FBQ0QsV0FBSyxlQUFMO0FBQ0EsYUFBTyxTQUFTLGFBQVQsR0FBeUI7QUFDOUIsWUFBSSxjQUFjLFNBQVMsRUFBRSxTQUFTLGFBQVQsQ0FBRixDQUEwQixHQUExQixDQUE4QixlQUE5QixLQUFrRCxDQUFsRCxFQUFxRCxFQUE5RCxDQUFkLENBRDBCOztBQUc5QixhQUFLLG9CQUFMLEdBQTRCLFNBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsWUFBcEIsSUFBb0MsRUFBcEMsQ0FIRTs7QUFLOUIsWUFBSSxLQUFLLGtCQUFMLEVBQXlCO0FBQzNCLG1CQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLFlBQXBCLEdBQW1DLGNBQWMsS0FBSyxlQUFMLEdBQXVCLElBQXJDLENBRFI7U0FBN0I7T0FMSztLQWpVVyxFQTBVakI7QUFDRCxXQUFLLGlCQUFMO0FBQ0EsYUFBTyxTQUFTLGVBQVQsR0FBMkI7QUFDaEMsaUJBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsWUFBcEIsR0FBbUMsS0FBSyxvQkFBTCxDQURIO09BQTNCO0tBNVVXLEVBK1VqQjtBQUNELFdBQUssb0JBQUw7QUFDQSxhQUFPLFNBQVMsa0JBQVQsR0FBOEI7O0FBRW5DLFlBQUksWUFBWSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWixDQUYrQjtBQUduQyxrQkFBVSxTQUFWLEdBQXNCLFVBQVUsa0JBQVYsQ0FIYTtBQUluQyxpQkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixTQUExQixFQUptQztBQUtuQyxZQUFJLGlCQUFpQixVQUFVLFdBQVYsR0FBd0IsVUFBVSxXQUFWLENBTFY7QUFNbkMsaUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsU0FBMUIsRUFObUM7QUFPbkMsZUFBTyxjQUFQLENBUG1DO09BQTlCOzs7O0FBRk4sS0EvVWlCLENBQXBCLEVBNlZJLENBQUM7QUFDSCxXQUFLLGtCQUFMO0FBQ0EsYUFBTyxTQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLGFBQWxDLEVBQWlEO0FBQ3RELGVBQU8sS0FBSyxJQUFMLENBQVUsWUFBWTtBQUMzQixjQUFJLE9BQU8sRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFFBQWIsQ0FBUCxDQUR1QjtBQUUzQixjQUFJLFVBQVUsRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFhLE1BQU0sT0FBTixFQUFlLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBNUIsRUFBNEMsUUFBTyx1REFBUCxLQUFrQixRQUFsQixJQUE4QixNQUE5QixDQUF0RCxDQUZ1Qjs7QUFJM0IsY0FBSSxDQUFDLElBQUQsRUFBTztBQUNULG1CQUFPLElBQUksS0FBSixDQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBUCxDQURTO0FBRVQsY0FBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFFBQWIsRUFBdUIsSUFBdkIsRUFGUztXQUFYOztBQUtBLGNBQUksT0FBTyxNQUFQLEtBQWtCLFFBQWxCLEVBQTRCO0FBQzlCLGdCQUFJLEtBQUssTUFBTCxNQUFpQixTQUFqQixFQUE0QjtBQUM5QixvQkFBTSxJQUFJLEtBQUosQ0FBVSxzQkFBc0IsTUFBdEIsR0FBK0IsR0FBL0IsQ0FBaEIsQ0FEOEI7YUFBaEM7QUFHQSxpQkFBSyxNQUFMLEVBQWEsYUFBYixFQUo4QjtXQUFoQyxNQUtPLElBQUksUUFBUSxJQUFSLEVBQWM7QUFDdkIsaUJBQUssSUFBTCxDQUFVLGFBQVYsRUFEdUI7V0FBbEI7U0FkUSxDQUFqQixDQURzRDtPQUFqRDtLQUZMLEVBc0JEO0FBQ0QsV0FBSyxTQUFMO0FBQ0EsV0FBSyxTQUFTLEdBQVQsR0FBZTtBQUNsQixlQUFPLE9BQVAsQ0FEa0I7T0FBZjtLQXhCSCxFQTJCRDtBQUNELFdBQUssU0FBTDtBQUNBLFdBQUssU0FBUyxHQUFULEdBQWU7QUFDbEIsZUFBTyxPQUFQLENBRGtCO09BQWY7S0E3QkgsQ0E3VkosRUF2QnVCOztBQXNadkIsV0FBTyxLQUFQLENBdFp1QjtHQUFaLEVBQVQsQ0FsRW9COztBQTJkeEIsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE1BQU0sY0FBTixFQUFzQixTQUFTLFdBQVQsRUFBc0IsVUFBVSxLQUFWLEVBQWlCO0FBQzFFLFFBQUksU0FBUyxJQUFULENBRHNFOztBQUcxRSxRQUFJLFNBQVMsU0FBVCxDQUhzRTtBQUkxRSxRQUFJLFdBQVcsS0FBSyxzQkFBTCxDQUE0QixJQUE1QixDQUFYLENBSnNFOztBQU0xRSxRQUFJLFFBQUosRUFBYztBQUNaLGVBQVMsRUFBRSxRQUFGLEVBQVksQ0FBWixDQUFULENBRFk7S0FBZDs7QUFJQSxRQUFJLFNBQVMsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLFFBQWYsSUFBMkIsUUFBM0IsR0FBc0MsRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFhLEVBQUUsTUFBRixFQUFVLElBQVYsRUFBYixFQUErQixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQS9CLENBQXRDLENBVjZEOztBQVkxRSxRQUFJLEtBQUssT0FBTCxLQUFpQixHQUFqQixFQUFzQjtBQUN4QixZQUFNLGNBQU4sR0FEd0I7S0FBMUI7O0FBSUEsUUFBSSxVQUFVLEVBQUUsTUFBRixFQUFVLEdBQVYsQ0FBYyxNQUFNLElBQU4sRUFBWSxVQUFVLFNBQVYsRUFBcUI7QUFDM0QsVUFBSSxVQUFVLGtCQUFWLEVBQUosRUFBb0M7O0FBRWxDLGVBRmtDO09BQXBDOztBQUtBLGNBQVEsR0FBUixDQUFZLE1BQU0sTUFBTixFQUFjLFlBQVk7QUFDcEMsWUFBSSxFQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsVUFBYixDQUFKLEVBQThCO0FBQzVCLGlCQUFPLEtBQVAsR0FENEI7U0FBOUI7T0FEd0IsQ0FBMUIsQ0FOMkQ7S0FBckIsQ0FBcEMsQ0FoQnNFOztBQTZCMUUsVUFBTSxnQkFBTixDQUF1QixJQUF2QixDQUE0QixFQUFFLE1BQUYsQ0FBNUIsRUFBdUMsTUFBdkMsRUFBK0MsSUFBL0MsRUE3QjBFO0dBQWpCLENBQTNEOzs7Ozs7OztBQTNkd0IsR0FpZ0J4QixDQUFFLEVBQUYsQ0FBSyxJQUFMLElBQWEsTUFBTSxnQkFBTixDQWpnQlc7QUFrZ0J4QixJQUFFLEVBQUYsQ0FBSyxJQUFMLEVBQVcsV0FBWCxHQUF5QixLQUF6QixDQWxnQndCO0FBbWdCeEIsSUFBRSxFQUFGLENBQUssSUFBTCxFQUFXLFVBQVgsR0FBd0IsWUFBWTtBQUNsQyxNQUFFLEVBQUYsQ0FBSyxJQUFMLElBQWEsa0JBQWIsQ0FEa0M7QUFFbEMsV0FBTyxNQUFNLGdCQUFOLENBRjJCO0dBQVosQ0FuZ0JBOztBQXdnQnhCLFNBQU8sS0FBUCxDQXhnQndCO0NBQWIsQ0F5Z0JWLE1BemdCUyxDQUFSIiwiZmlsZSI6ImNvbmNhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjIuMi4zIHwgKGMpIGpRdWVyeSBGb3VuZGF0aW9uIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1jLnNsaWNlLGY9Yy5jb25jYXQsZz1jLnB1c2gsaD1jLmluZGV4T2YsaT17fSxqPWkudG9TdHJpbmcsaz1pLmhhc093blByb3BlcnR5LGw9e30sbT1cIjIuMi4zXCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTplLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiBuLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6Zyxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRvU3RyaW5nKCk7cmV0dXJuIW4uaXNBcnJheShhKSYmYi1wYXJzZUZsb2F0KGIpKzE+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKSlyZXR1cm4hMTtpZihhLmNvbnN0cnVjdG9yJiYhay5jYWxsKGEsXCJjb25zdHJ1Y3RvclwiKSYmIWsuY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZXx8e30sXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExO2ZvcihiIGluIGEpO3JldHVybiB2b2lkIDA9PT1ifHxrLmNhbGwoYSxiKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9pW2ouY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1kLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsZC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHMoYSkpe2ZvcihjPWEubGVuZ3RoO2M+ZDtkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zy5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmguY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGc9MCxoPVtdO2lmKHMoYSkpZm9yKGQ9YS5sZW5ndGg7ZD5nO2crKyllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihnIGluIGEpZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGYuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGQ9ZS5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxkLmNvbmNhdChlLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpsfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYobi5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtpW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBzKGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9Z2EoKSx6PWdhKCksQT1nYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPTE8PDMxLEQ9e30uaGFzT3duUHJvcGVydHksRT1bXSxGPUUucG9wLEc9RS5wdXNoLEg9RS5wdXNoLEk9RS5zbGljZSxKPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxLPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixMPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixNPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTj1cIlxcXFxbXCIrTCtcIiooXCIrTStcIikoPzpcIitMK1wiKihbKl4kfCF+XT89KVwiK0wrXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitNK1wiKSl8KVwiK0wrXCIqXFxcXF1cIixPPVwiOihcIitNK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitOK1wiKSopfC4qKVxcXFwpfClcIixQPW5ldyBSZWdFeHAoTCtcIitcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0wrXCIrJFwiLFwiZ1wiKSxSPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiosXCIrTCtcIipcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqKFs+K35dfFwiK0wrXCIpXCIrTCtcIipcIiksVD1uZXcgUmVnRXhwKFwiPVwiK0wrXCIqKFteXFxcXF0nXFxcIl0qPylcIitMK1wiKlxcXFxdXCIsXCJnXCIpLFU9bmV3IFJlZ0V4cChPKSxWPW5ldyBSZWdFeHAoXCJeXCIrTStcIiRcIiksVz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK00rXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK00rXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTiksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTyksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTCtcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0wrXCIqKD86KFsrLV18KVwiK0wrXCIqKFxcXFxkKyl8KSlcIitMK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0srXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitMK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitMK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitMK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxYPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWT0vXmhcXGQkL2ksWj0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLCQ9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXz0vWyt+XS8sYWE9Lyd8XFxcXC9nLGJhPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitMK1wiP3woXCIrTCtcIil8LilcIixcImlnXCIpLGNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjowPmQ/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGRhPWZ1bmN0aW9uKCl7bSgpfTt0cnl7SC5hcHBseShFPUkuY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRVt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlYSl7SD17YXBwbHk6RS5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtHLmFwcGx5KGEsSS5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZmEoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscyx3PWImJmIub3duZXJEb2N1bWVudCx4PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09eCYmOSE9PXgmJjExIT09eClyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXgmJihvPSQuZXhlYyhhKSkpaWYoZj1vWzFdKXtpZig5PT09eCl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHcmJihqPXcuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKG9bMl0pcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPW9bM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT14KXc9YixzPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShhYSxcIlxcXFwkJlwiKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxyPWcoYSksaD1yLmxlbmd0aCxsPVYudGVzdChrKT9cIiNcIitrOlwiW2lkPSdcIitrK1wiJ11cIjt3aGlsZShoLS0pcltoXT1sK1wiIFwiK3FhKHJbaF0pO3M9ci5qb2luKFwiLFwiKSx3PV8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8Yn1pZihzKXRyeXtyZXR1cm4gSC5hcHBseShkLHcucXVlcnlTZWxlY3RvckFsbChzKSksZH1jYXRjaCh5KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShRLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGdhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBpYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBoYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixoYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIG9hKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWZhLnN1cHBvcnQ9e30sZj1mYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWZhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLChlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1aLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT1aLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihpYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGlhKGZ1bmN0aW9uKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9Wi50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZpYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTyl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1aLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxaLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGthKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9rYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZmEubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBmYShhLG51bGwsbnVsbCxiKX0sZmEubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFQsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBmYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxmYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGZhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZELmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxmYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZmEudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWZhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9ZmEuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aGEsbWF0Y2g6VyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShiYSxjYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShiYSxjYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8ZmEuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZmEuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFcuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZVLnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0wrXCIpXCIrYStcIihcIitMK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9ZmEuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShQLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iP2U9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aGEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aGEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFEsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aGEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczpoYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGZhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGJhLGNhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzpoYShmdW5jdGlvbihhKXtyZXR1cm4gVi50ZXN0KGF8fFwiXCIpfHxmYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpuYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6bmEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm5hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om5hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1sYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmdW5jdGlvbiBwYSgpe31wYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHBhLGc9ZmEudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXtjJiYhKGU9Ui5leGVjKGgpKXx8KGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Uy5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShRLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1XW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/ZmEuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBxYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtjPmI7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gcmEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9YyYmXCJwYXJlbnROb2RlXCI9PT1kLGY9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxmKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpcmV0dXJuIGEoYixjLGYpfTpmdW5jdGlvbihiLGMsZyl7dmFyIGgsaSxqLGs9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihqPWJbdV18fChiW3VdPXt9KSxpPWpbYi51bmlxdWVJRF18fChqW2IudW5pcXVlSURdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBrWzJdPWhbMl07aWYoaVtkXT1rLGtbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiBzYShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB0YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWZhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB1YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoYyYmIWMoZixkLGUpfHwoZy5wdXNoKGYpLGomJmIucHVzaChoKSkpO3JldHVybiBnfWZ1bmN0aW9uIHZhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXZhKGQpKSxlJiYhZVt1XSYmKGU9dmEoZSxmKSksaGEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dGEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp1YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dWEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXVhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB3YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3JhKHNhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB2YShpPjEmJnNhKG0pLGk+MSYmcWEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShRLFwiJDFcIiksYyxlPmkmJndhKGEuc2xpY2UoaSxlKSksZj5lJiZ3YShhPWEuc2xpY2UoZSkpLGY+ZSYmcWEoYSkpfW0ucHVzaChjKX1yZXR1cm4gc2EobSl9ZnVuY3Rpb24geGEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUYuY2FsbChpKSk7dT11YSh1KX1ILmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZmEudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2hhKGYpOmZ9cmV0dXJuIGg9ZmEuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9d2EoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHhhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1mYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVcubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxfLnRlc3QoalswXS50eXBlKSYmb2EoYi5wYXJlbnROb2RlKXx8YikpKXtpZihqLnNwbGljZShpLDEpLGE9Zi5sZW5ndGgmJnFhKGopLCFhKXJldHVybiBILmFwcGx5KGUsZiksZTticmVha319fXJldHVybihufHxoKGEsbykpKGYsYiwhcCxlLCFifHxfLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpLGV9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8amEoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxqYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjfHxcImlucHV0XCIhPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/dm9pZCAwOmEuZGVmYXVsdFZhbHVlfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8amEoSyxmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOmFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZmF9KGEpO24uZmluZD10LG4uZXhwcj10LnNlbGVjdG9ycyxuLmV4cHJbXCI6XCJdPW4uZXhwci5wc2V1ZG9zLG4udW5pcXVlU29ydD1uLnVuaXF1ZT10LnVuaXF1ZVNvcnQsbi50ZXh0PXQuZ2V0VGV4dCxuLmlzWE1MRG9jPXQuaXNYTUwsbi5jb250YWlucz10LmNvbnRhaW5zO3ZhciB1PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sdj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sdz1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHg9L148KFtcXHctXSspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHk9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHooYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih5LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBoLmNhbGwoYixhKT4tMSE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYobi5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKyluLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9uLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF6KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJncudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEEsQj0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxDPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIsYyl7dmFyIGUsZjtpZighYSlyZXR1cm4gdGhpcztpZihjPWN8fEEsXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGU9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Qi5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSx4LnRlc3QoZVsxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfXJldHVybiBmPWQuZ2V0RWxlbWVudEJ5SWQoZVsyXSksZiYmZi5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWYpLHRoaXMuY29udGV4dD1kLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtDLnByb3RvdHlwZT1uLmZuLEE9bihkKTt2YXIgRD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxFPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dy50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWVTb3J0KGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9oLmNhbGwobihhKSx0aGlzWzBdKTpoLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlU29ydChuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBGKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiB2KChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gdihhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihFW2FdfHxuLnVuaXF1ZVNvcnQoZSksRC50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEc9L1xcUysvZztmdW5jdGlvbiBIKGEpe3ZhciBiPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChHKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0goYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXtuLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1uLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksaD49YyYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxjfHwoZj1jPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGMubm90aWZ5KS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWUuY2FsbChhcmd1bWVudHMpLGQ9Yy5sZW5ndGgsZj0xIT09ZHx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZDowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9lLmNhbGwoYXJndW1lbnRzKTpkLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZD4xKWZvcihpPW5ldyBBcnJheShkKSxqPW5ldyBBcnJheShkKSxrPW5ldyBBcnJheShkKTtkPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLnByb2dyZXNzKGgoYixqLGkpKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSTtuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSS5yZXNvbHZlV2l0aChkLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4oZCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGQpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEooKXtkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEopLG4ucmVhZHkoKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEl8fChJPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KG4ucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEopKSksSS5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgSz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylLKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LEw9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBNKCl7dGhpcy5leHBhbmRvPW4uZXhwYW5kbytNLnVpZCsrfU0udWlkPTEsTS5wcm90b3R5cGU9e3JlZ2lzdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8e307cmV0dXJuIGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWM6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpjLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGFbdGhpcy5leHBhbmRvXX0sY2FjaGU6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpcmV0dXJue307dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiBifHwoYj17fSxMKGEpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YjpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSkpKSxifSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5jYWNoZShhKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYillW2JdPWM7ZWxzZSBmb3IoZCBpbiBiKWVbZF09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1hW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09Zil7aWYodm9pZCAwPT09Yil0aGlzLnJlZ2lzdGVyKGEpO2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGY/ZD1bYixlXTooZD1lLGQ9ZCBpbiBmP1tkXTpkLm1hdGNoKEcpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBmW2RbY11dfSh2b2lkIDA9PT1ifHxuLmlzRW1wdHlPYmplY3QoZikpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFuLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgTj1uZXcgTSxPPW5ldyBNLFA9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFE9L1tBLVpdL2c7ZnVuY3Rpb24gUihhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKFEsXCItJCZcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpQLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6Yztcbn1jYXRjaChlKXt9Ty5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9bi5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIE8uaGFzRGF0YShhKXx8Ti5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTy5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ty5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBOLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ti5yZW1vdmUoYSxiKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPU8uZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTi5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFIoZixkLGVbZF0pKSk7Ti5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtPLnNldCh0aGlzLGEpfSk6Syh0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1PLmdldChmLGEpfHxPLmdldChmLGEucmVwbGFjZShRLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCkpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoZD1uLmNhbWVsQ2FzZShhKSxjPU8uZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVIoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIGQ9bi5jYW1lbENhc2UoYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9Ty5nZXQodGhpcyxkKTtPLnNldCh0aGlzLGQsYiksYS5pbmRleE9mKFwiLVwiKT4tMSYmdm9pZCAwIT09YyYmTy5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe08ucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPU4uZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1OLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBOLmdldChhLGMpfHxOLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Ti5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Ti5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgUz0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsVD1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitTK1wiKShbYS16JV0qKSRcIixcImlcIiksVT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sVj1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfTtmdW5jdGlvbiBXKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBuLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KG4uY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShuLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZULmV4ZWMobi5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixuLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBYPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLFk9LzwoW1xcdzotXSspLyxaPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksJD17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19OyQub3B0Z3JvdXA9JC5vcHRpb24sJC50Ym9keT0kLnRmb290PSQuY29sZ3JvdXA9JC5jYXB0aW9uPSQudGhlYWQsJC50aD0kLnRkO2Z1bmN0aW9uIF8oYSxiKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIGFhKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKU4uc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fE4uZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX12YXIgYmE9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIGNhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGcsaCxpLGosayxsPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG09W10sbz0wLHA9YS5sZW5ndGg7cD5vO28rKylpZihmPWFbb10sZnx8MD09PWYpaWYoXCJvYmplY3RcIj09PW4udHlwZShmKSluLm1lcmdlKG0sZi5ub2RlVHlwZT9bZl06Zik7ZWxzZSBpZihiYS50ZXN0KGYpKXtnPWd8fGwuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxoPShZLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9JFtoXXx8JC5fZGVmYXVsdCxnLmlubmVySFRNTD1pWzFdK24uaHRtbFByZWZpbHRlcihmKStpWzJdLGs9aVswXTt3aGlsZShrLS0pZz1nLmxhc3RDaGlsZDtuLm1lcmdlKG0sZy5jaGlsZE5vZGVzKSxnPWwuZmlyc3RDaGlsZCxnLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBtLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShmKSk7bC50ZXh0Q29udGVudD1cIlwiLG89MDt3aGlsZShmPW1bbysrXSlpZihkJiZuLmluQXJyYXkoZixkKT4tMSllJiZlLnB1c2goZik7ZWxzZSBpZihqPW4uY29udGFpbnMoZi5vd25lckRvY3VtZW50LGYpLGc9XyhsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJmFhKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlaLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBsfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksbC5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGwubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgZGE9L15rZXkvLGVhPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxmYT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIGdhKCl7cmV0dXJuITB9ZnVuY3Rpb24gaGEoKXtyZXR1cm4hMX1mdW5jdGlvbiBpYSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24gamEoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKWphKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9aGE7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1uLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU4uZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgbiYmbi5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/bi5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPWZhLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxrPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0sZiksKG09aVtvXSl8fChtPWlbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxwLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG8sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ti5oYXNEYXRhKGEpJiZOLmdldChhKTtpZihyJiYoaT1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1mYS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJk4ucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGQsZixnLGg9W10saT1lLmNhbGwoYXJndW1lbnRzKSxqPShOLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKWEucm5hbWVzcGFjZSYmIWEucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKXx8KGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxkPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1kJiYoYS5yZXN1bHQ9ZCk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxpc05hTihhLmJ1dHRvbil8fGEuYnV0dG9uPDEpKWZvcig7aSE9PXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWkubm9kZVR5cGUmJihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSkpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/bihlLHRoaXMpLmluZGV4KGkpPi0xOm4uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGRldGFpbCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnPWIuYnV0dG9uO3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihjPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGQsZT1jLmRvY3VtZW50RWxlbWVudCxmPWMuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZSYmZS5zY3JvbGxMZWZ0fHxmJiZmLnNjcm9sbExlZnR8fDApLShlJiZlLmNsaWVudExlZnR8fGYmJmYuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGUmJmUuc2Nyb2xsVG9wfHxmJiZmLnNjcm9sbFRvcHx8MCktKGUmJmUuY2xpZW50VG9wfHxmJiZmLmNsaWVudFRvcHx8MCkpLGEud2hpY2h8fHZvaWQgMD09PWd8fChhLndoaWNoPTEmZz8xOjImZz8zOjQmZz8yOjApLGF9fSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVtuLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZSxmPWEudHlwZSxnPWEsaD10aGlzLmZpeEhvb2tzW2ZdO2h8fCh0aGlzLmZpeEhvb2tzW2ZdPWg9ZWEudGVzdChmKT90aGlzLm1vdXNlSG9va3M6ZGEudGVzdChmKT90aGlzLmtleUhvb2tzOnt9KSxlPWgucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoaC5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBuLkV2ZW50KGcpLGI9ZS5sZW5ndGg7d2hpbGUoYi0tKWM9ZVtiXSxhW2NdPWdbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9ZCksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksaC5maWx0ZXI/aC5maWx0ZXIoYSxnKTphfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcyE9PWlhKCkmJnRoaXMuZm9jdXM/KHRoaXMuZm9jdXMoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PWlhKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm5cImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJm4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LG4ucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LG4uRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4uRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP2dhOmhhKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOm4uRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOmhhLGlzUHJvcGFnYXRpb25TdG9wcGVkOmhhLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOmhhLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPWdhLGEmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9Z2EsYSYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9Z2EsYSYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4gZSYmKGU9PT1kfHxuLmNvbnRhaW5zKGQsZSkpfHwoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGphKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gamEodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gYiE9PSExJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBifHwoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPWhhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfX0pO3ZhciBrYT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Oi1dKylbXj5dKilcXC8+L2dpLGxhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLG1hPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksbmE9L150cnVlXFwvKC4qKS8sb2E9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIHBhKGEsYil7cmV0dXJuIG4ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZuLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIHJhKGEpe3ZhciBiPW5hLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBzYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKE4uaGFzRGF0YShhKSYmKGY9Ti5hY2Nlc3MoYSksZz1OLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9Ty5oYXNEYXRhKGEpJiYoaD1PLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLE8uc2V0KGIsaSkpfX1mdW5jdGlvbiB0YShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZYLnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOlwiaW5wdXRcIiE9PWMmJlwidGV4dGFyZWFcIiE9PWN8fChiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gdWEoYSxiLGMsZCl7Yj1mLmFwcGx5KFtdLGIpO3ZhciBlLGcsaCxpLGosayxtPTAsbz1hLmxlbmd0aCxwPW8tMSxxPWJbMF0scj1uLmlzRnVuY3Rpb24ocSk7aWYocnx8bz4xJiZcInN0cmluZ1wiPT10eXBlb2YgcSYmIWwuY2hlY2tDbG9uZSYmbWEudGVzdChxKSlyZXR1cm4gYS5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBmPWEuZXEoZSk7ciYmKGJbMF09cS5jYWxsKHRoaXMsZSxmLmh0bWwoKSkpLHVhKGYsYixjLGQpfSk7aWYobyYmKGU9Y2EoYixhWzBdLm93bmVyRG9jdW1lbnQsITEsYSxkKSxnPWUuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZyksZ3x8ZCkpe2ZvcihoPW4ubWFwKF8oZSxcInNjcmlwdFwiKSxxYSksaT1oLmxlbmd0aDtvPm07bSsrKWo9ZSxtIT09cCYmKGo9bi5jbG9uZShqLCEwLCEwKSxpJiZuLm1lcmdlKGgsXyhqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbV0saixtKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChoLHJhKSxtPTA7aT5tO20rKylqPWhbbV0sWi50ZXN0KGoudHlwZXx8XCJcIikmJiFOLmFjY2VzcyhqLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhrLGopJiYoai5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChqLnNyYyk6bi5nbG9iYWxFdmFsKGoudGV4dENvbnRlbnQucmVwbGFjZShvYSxcIlwiKSkpfXJldHVybiBhfWZ1bmN0aW9uIHZhKGEsYixjKXtmb3IodmFyIGQsZT1iP24uZmlsdGVyKGIsYSk6YSxmPTA7bnVsbCE9KGQ9ZVtmXSk7ZisrKWN8fDEhPT1kLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShfKGQpKSxkLnBhcmVudE5vZGUmJihjJiZuLmNvbnRhaW5zKGQub3duZXJEb2N1bWVudCxkKSYmYWEoXyhkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfW4uZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2Uoa2EsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEobC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9XyhoKSxmPV8oYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKyl0YShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxfKGEpLGc9Z3x8XyhoKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXNhKGZbZF0sZ1tkXSk7ZWxzZSBzYShhLGgpO3JldHVybiBnPV8oaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZhYShnLCFpJiZfKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9bi5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoTChjKSl7aWYoYj1jW04uZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tOLmV4cGFuZG9dPXZvaWQgMH1jW08uZXhwYW5kb10mJihjW08uZXhwYW5kb109dm9pZCAwKX19fSksbi5mbi5leHRlbmQoe2RvbU1hbmlwOnVhLGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdmEodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiB2YSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1wYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPXBhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKF8oYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbD09YT8hMTphLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbi5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIWxhLnRlc3QoYSkmJiEkWyhZLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1uLmh0bWxQcmVmaWx0ZXIoYSk7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEoXyhiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihiKXt2YXIgYz10aGlzLnBhcmVudE5vZGU7bi5pbkFycmF5KHRoaXMsYSk8MCYmKG4uY2xlYW5EYXRhKF8odGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9bihhKSxmPWUubGVuZ3RoLTEsaD0wO2Y+PWg7aCsrKWM9aD09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxuKGVbaF0pW2JdKGMpLGcuYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIHdhLHhhPXtIVE1MOlwiYmxvY2tcIixCT0RZOlwiYmxvY2tcIn07ZnVuY3Rpb24geWEoYSxiKXt2YXIgYz1uKGIuY3JlYXRlRWxlbWVudChhKSkuYXBwZW5kVG8oYi5ib2R5KSxkPW4uY3NzKGNbMF0sXCJkaXNwbGF5XCIpO3JldHVybiBjLmRldGFjaCgpLGR9ZnVuY3Rpb24gemEoYSl7dmFyIGI9ZCxjPXhhW2FdO3JldHVybiBjfHwoYz15YShhLGIpLFwibm9uZVwiIT09YyYmY3x8KHdhPSh3YXx8bihcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIikpLmFwcGVuZFRvKGIuZG9jdW1lbnRFbGVtZW50KSxiPXdhWzBdLmNvbnRlbnREb2N1bWVudCxiLndyaXRlKCksYi5jbG9zZSgpLGM9eWEoYSxiKSx3YS5kZXRhY2goKSkseGFbYV09YyksY312YXIgQWE9L15tYXJnaW4vLEJhPW5ldyBSZWdFeHAoXCJeKFwiK1MrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksQ2E9ZnVuY3Rpb24oYil7dmFyIGM9Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBjJiZjLm9wZW5lcnx8KGM9YSksYy5nZXRDb21wdXRlZFN0eWxlKGIpfSxEYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX0sRWE9ZC5kb2N1bWVudEVsZW1lbnQ7IWZ1bmN0aW9uKCl7dmFyIGIsYyxlLGYsZz1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaD1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoaC5zdHlsZSl7aC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsbC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxnLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGcuYXBwZW5kQ2hpbGQoaCk7ZnVuY3Rpb24gaSgpe2guc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGguaW5uZXJIVE1MPVwiXCIsRWEuYXBwZW5kQ2hpbGQoZyk7dmFyIGQ9YS5nZXRDb21wdXRlZFN0eWxlKGgpO2I9XCIxJVwiIT09ZC50b3AsZj1cIjJweFwiPT09ZC5tYXJnaW5MZWZ0LGM9XCI0cHhcIj09PWQud2lkdGgsaC5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGU9XCI0cHhcIj09PWQubWFyZ2luUmlnaHQsRWEucmVtb3ZlQ2hpbGQoZyl9bi5leHRlbmQobCx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBpKCksYn0sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGN9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGV9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksZn0scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3ZhciBiLGM9aC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3JldHVybiBjLnN0eWxlLmNzc1RleHQ9aC5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjBcIixjLnN0eWxlLm1hcmdpblJpZ2h0PWMuc3R5bGUud2lkdGg9XCIwXCIsaC5zdHlsZS53aWR0aD1cIjFweFwiLEVhLmFwcGVuZENoaWxkKGcpLGI9IXBhcnNlRmxvYXQoYS5nZXRDb21wdXRlZFN0eWxlKGMpLm1hcmdpblJpZ2h0KSxFYS5yZW1vdmVDaGlsZChnKSxoLnJlbW92ZUNoaWxkKGMpLGJ9fSl9fSgpO2Z1bmN0aW9uIEZhKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8Q2EoYSksZz1jP2MuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXTp2b2lkIDAsXCJcIiE9PWcmJnZvaWQgMCE9PWd8fG4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1uLnN0eWxlKGEsYikpLGMmJiFsLnBpeGVsTWFyZ2luUmlnaHQoKSYmQmEudGVzdChnKSYmQWEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIEdhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBIYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sSWE9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LEphPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sS2E9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdLExhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBNYShhKXtpZihhIGluIExhKXJldHVybiBhO3ZhciBiPWFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGM9S2EubGVuZ3RoO3doaWxlKGMtLSlpZihhPUthW2NdK2IsYSBpbiBMYSlyZXR1cm4gYX1mdW5jdGlvbiBOYShhLGIsYyl7dmFyIGQ9VC5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsyXS0oY3x8MCkpKyhkWzNdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gT2EoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bi5jc3MoYSxjK1VbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW4uY3NzKGEsXCJwYWRkaW5nXCIrVVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1uLmNzcyhhLFwiYm9yZGVyXCIrVVtmXStcIldpZHRoXCIsITAsZSkpKTooZys9bi5jc3MoYSxcInBhZGRpbmdcIitVW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW4uY3NzKGEsXCJib3JkZXJcIitVW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIFBhKGIsYyxlKXt2YXIgZj0hMCxnPVwid2lkdGhcIj09PWM/Yi5vZmZzZXRXaWR0aDpiLm9mZnNldEhlaWdodCxoPUNhKGIpLGk9XCJib3JkZXItYm94XCI9PT1uLmNzcyhiLFwiYm94U2l6aW5nXCIsITEsaCk7aWYoZC5tc0Z1bGxzY3JlZW5FbGVtZW50JiZhLnRvcCE9PWEmJmIuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJihnPU1hdGgucm91bmQoMTAwKmIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbY10pKSwwPj1nfHxudWxsPT1nKXtpZihnPUZhKGIsYyxoKSwoMD5nfHxudWxsPT1nKSYmKGc9Yi5zdHlsZVtjXSksQmEudGVzdChnKSlyZXR1cm4gZztmPWkmJihsLmJveFNpemluZ1JlbGlhYmxlKCl8fGc9PT1iLnN0eWxlW2NdKSxnPXBhcnNlRmxvYXQoZyl8fDB9cmV0dXJuIGcrT2EoYixjLGV8fChpP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGYsaCkrXCJweFwifWZ1bmN0aW9uIFFhKGEsYil7Zm9yKHZhciBjLGQsZSxmPVtdLGc9MCxoPWEubGVuZ3RoO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihmW2ddPU4uZ2V0KGQsXCJvbGRkaXNwbGF5XCIpLGM9ZC5zdHlsZS5kaXNwbGF5LGI/KGZbZ118fFwibm9uZVwiIT09Y3x8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZWKGQpJiYoZltnXT1OLmFjY2VzcyhkLFwib2xkZGlzcGxheVwiLHphKGQubm9kZU5hbWUpKSkpOihlPVYoZCksXCJub25lXCI9PT1jJiZlfHxOLnNldChkLFwib2xkZGlzcGxheVwiLGU/YzpuLmNzcyhkLFwiZGlzcGxheVwiKSkpKTtmb3IoZz0wO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihiJiZcIm5vbmVcIiE9PWQuc3R5bGUuZGlzcGxheSYmXCJcIiE9PWQuc3R5bGUuZGlzcGxheXx8KGQuc3R5bGUuZGlzcGxheT1iP2ZbZ118fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gYX1uLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPUZhKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYiksaT1hLnN0eWxlO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPU1hKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTppW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1ULmV4ZWMoYykpJiZlWzFdJiYoYz1XKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwobi5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxsLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPU1hKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPUZhKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gSmEmJihlPUphW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8aXNGaW5pdGUoZik/Znx8MDplKTplfX0pLG4uZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYz9IYS50ZXN0KG4uY3NzKGEsXCJkaXNwbGF5XCIpKSYmMD09PWEub2Zmc2V0V2lkdGg/RGEoYSxJYSxmdW5jdGlvbigpe3JldHVybiBQYShhLGIsZCl9KTpQYShhLGIsZCk6dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9ZCYmQ2EoYSksZz1kJiZPYShhLGIsZCxcImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKSxmKTtyZXR1cm4gZyYmKGU9VC5leGVjKGMpKSYmXCJweFwiIT09KGVbM118fFwicHhcIikmJihhLnN0eWxlW2JdPWMsYz1uLmNzcyhhLGIpKSxOYShhLGMsZyl9fX0pLG4uY3NzSG9va3MubWFyZ2luTGVmdD1HYShsLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe3JldHVybiBiPyhwYXJzZUZsb2F0KEZhKGEsXCJtYXJnaW5MZWZ0XCIpKXx8YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LURhKGEse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIjp2b2lkIDB9KSxuLmNzc0hvb2tzLm1hcmdpblJpZ2h0PUdhKGwucmVsaWFibGVNYXJnaW5SaWdodCxmdW5jdGlvbihhLGIpe3JldHVybiBiP0RhKGEse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0sRmEsW2EsXCJtYXJnaW5SaWdodFwiXSk6dm9pZCAwfSksbi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1VbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sQWEudGVzdChhKXx8KG4uY3NzSG9va3NbYStiXS5zZXQ9TmEpfSksbi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobi5pc0FycmF5KGIpKXtmb3IoZD1DYShhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1uLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bi5zdHlsZShhLGIsYyk6bi5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gUWEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gUWEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtWKHRoaXMpP24odGhpcykuc2hvdygpOm4odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gUmEoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IFJhLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9bi5Ud2Vlbj1SYSxSYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlJhLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fG4uZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwobi5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1SYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6UmEucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9UmEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPW4uZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpSYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxSYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9UmEucHJvdG90eXBlLFJhLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPW4uY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtuLmZ4LnN0ZXBbYS5wcm9wXT9uLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbbi5jc3NQcm9wc1thLnByb3BdXSYmIW4uY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpuLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxSYS5wcm9wSG9va3Muc2Nyb2xsVG9wPVJhLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LG4uZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxuLmZ4PVJhLnByb3RvdHlwZS5pbml0LG4uZnguc3RlcD17fTt2YXIgU2EsVGEsVWE9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFZhPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gV2EoKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7U2E9dm9pZCAwfSksU2E9bi5ub3coKX1mdW5jdGlvbiBYYShhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ND5kO2QrPTItYiljPVVbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gWWEoYSxiLGMpe2Zvcih2YXIgZCxlPShfYS50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChfYS50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIFphKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9dGhpcyxtPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJlYoYSkscT1OLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChoPW4uX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWgudW5xdWV1ZWQmJihoLnVucXVldWVkPTAsaT1oLmVtcHR5LmZpcmUsaC5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7aC51bnF1ZXVlZHx8aSgpfSksaC51bnF1ZXVlZCsrLGwuYWx3YXlzKGZ1bmN0aW9uKCl7bC5hbHdheXMoZnVuY3Rpb24oKXtoLnVucXVldWVkLS0sbi5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxoLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1hLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIGJ8fFwid2lkdGhcImluIGIpJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1uLmNzcyhhLFwiZGlzcGxheVwiKSxrPVwibm9uZVwiPT09aj9OLmdldChhLFwib2xkZGlzcGxheVwiKXx8emEoYS5ub2RlTmFtZSk6aixcImlubGluZVwiPT09ayYmXCJub25lXCI9PT1uLmNzcyhhLFwiZmxvYXRcIikmJihvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbC5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLFVhLmV4ZWMoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW1bZF09cSYmcVtkXXx8bi5zdHlsZShhLGQpfWVsc2Ugaj12b2lkIDA7aWYobi5pc0VtcHR5T2JqZWN0KG0pKVwiaW5saW5lXCI9PT0oXCJub25lXCI9PT1qP3phKGEubm9kZU5hbWUpOmopJiYoby5kaXNwbGF5PWopO2Vsc2V7cT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9Ti5hY2Nlc3MoYSxcImZ4c2hvd1wiLHt9KSxmJiYocS5oaWRkZW49IXApLHA/bihhKS5zaG93KCk6bC5kb25lKGZ1bmN0aW9uKCl7bihhKS5oaWRlKCl9KSxsLmRvbmUoZnVuY3Rpb24oKXt2YXIgYjtOLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG0pbi5zdHlsZShhLGIsbVtiXSl9KTtmb3IoZCBpbiBtKWc9WWEocD9xW2RdOjAsZCxsKSxkIGluIHF8fChxW2RdPWcuc3RhcnQscCYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gJGEoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1uLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG4uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bi5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIF9hKGEsYixjKXt2YXIgZCxlLGY9MCxnPV9hLnByZWZpbHRlcnMubGVuZ3RoLGg9bi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9U2F8fFdhKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2k+ZztnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSwxPmYmJmk/YzooaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOm4uZXh0ZW5kKHt9LGIpLG9wdHM6bi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOm4uZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6U2F8fFdhKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1uLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKCRhKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2c+ZjtmKyspaWYoZD1fYS5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gbi5pc0Z1bmN0aW9uKGQuc3RvcCkmJihuLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9bi5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIG4ubWFwKGssWWEsaiksbi5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksbi5meC50aW1lcihuLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKX1uLkFuaW1hdGlvbj1uLmV4dGVuZChfYSx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gVyhjLmVsZW0sYSxULmV4ZWMoYiksYyksY31dfSx0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bi5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEubWF0Y2goRyk7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLF9hLnR3ZWVuZXJzW2NdPV9hLnR3ZWVuZXJzW2NdfHxbXSxfYS50d2VlbmVyc1tjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXJzOltaYV0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9fYS5wcmVmaWx0ZXJzLnVuc2hpZnQoYSk6X2EucHJlZmlsdGVycy5wdXNoKGEpfX0pLG4uc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP24uZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8bi5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFuLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiBkLmR1cmF0aW9uPW4uZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIGQuZHVyYXRpb24/ZC5kdXJhdGlvbjpkLmR1cmF0aW9uIGluIG4uZnguc3BlZWRzP24uZnguc3BlZWRzW2QuZHVyYXRpb25dOm4uZnguc3BlZWRzLl9kZWZhdWx0LG51bGwhPWQucXVldWUmJmQucXVldWUhPT0hMHx8KGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtuLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm4uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxuLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihWKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uaXNFbXB0eU9iamVjdChhKSxmPW4uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1fYSh0aGlzLG4uZXh0ZW5kKHt9LGEpLGYpOyhlfHxOLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9bi50aW1lcnMsZz1OLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZWYS50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyFiJiZjfHxuLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPU4uZ2V0KHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9bi50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLG4ucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2c+YjtiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksbi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPW4uZm5bYl07bi5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoWGEoYiwhMCksYSxkLGUpfX0pLG4uZWFjaCh7c2xpZGVEb3duOlhhKFwic2hvd1wiKSxzbGlkZVVwOlhhKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpYYShcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxuLnRpbWVycz1bXSxuLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPTAsYz1uLnRpbWVycztmb3IoU2E9bi5ub3coKTtiPGMubGVuZ3RoO2IrKylhPWNbYl0sYSgpfHxjW2JdIT09YXx8Yy5zcGxpY2UoYi0tLDEpO2MubGVuZ3RofHxuLmZ4LnN0b3AoKSxTYT12b2lkIDB9LG4uZngudGltZXI9ZnVuY3Rpb24oYSl7bi50aW1lcnMucHVzaChhKSxhKCk/bi5meC5zdGFydCgpOm4udGltZXJzLnBvcCgpfSxuLmZ4LmludGVydmFsPTEzLG4uZnguc3RhcnQ9ZnVuY3Rpb24oKXtUYXx8KFRhPWEuc2V0SW50ZXJ2YWwobi5meC50aWNrLG4uZnguaW50ZXJ2YWwpKX0sbi5meC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhckludGVydmFsKFRhKSxUYT1udWxsfSxuLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9bi5meD9uLmZ4LnNwZWVkc1tiXXx8YjpiLGM9Y3x8XCJmeFwiLHRoaXMucXVldWUoYyxmdW5jdGlvbihjLGQpe3ZhciBlPWEuc2V0VGltZW91dChjLGIpO2Quc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJUaW1lb3V0KGUpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9ZC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsbC5jaGVja09uPVwiXCIhPT1hLnZhbHVlLGwub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxiLmRpc2FibGVkPSEwLGwub3B0RGlzYWJsZWQ9IWMuZGlzYWJsZWQsYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsbC5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgYWIsYmI9bi5leHByLmF0dHJIYW5kbGU7bi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLG4uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYS5nZXRBdHRyaWJ1dGU/bi5wcm9wKGEsYixjKTooMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPWIudG9Mb3dlckNhc2UoKSxlPW4uYXR0ckhvb2tzW2JdfHwobi5leHByLm1hdGNoLmJvb2wudGVzdChiKT9hYjp2b2lkIDApKSx2b2lkIDAhPT1jP251bGw9PT1jP3ZvaWQgbi5yZW1vdmVBdHRyKGEsYik6ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDooZD1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighbC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZuLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChHKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9fSksYWI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9YmJbYl18fG4uZmluZC5hdHRyO2JiW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj1iYltiXSxiYltiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsYmJbYl09ZiksZX19KTt2YXIgY2I9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxkYj0vXig/OmF8YXJlYSkkL2k7bi5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLG4ucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbbi5wcm9wRml4W2FdfHxhXX0pfX0pLG4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9bi5wcm9wRml4W2JdfHxiLFxuZT1uLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTpjYi50ZXN0KGEubm9kZU5hbWUpfHxkYi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLGwub3B0U2VsZWN0ZWR8fChuLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO2ImJihiLnNlbGVjdGVkSW5kZXgsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksbi5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe24ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTt2YXIgZWI9L1tcXHRcXHJcXG5cXGZdL2c7ZnVuY3Rpb24gZmIoYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifW4uZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLGZiKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPWZiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKWQuaW5kZXhPZihcIiBcIitmK1wiIFwiKTwwJiYoZCs9ZitcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsZmIodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9ZmIoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6bi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMsZmIodGhpcyksYiksYil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkLGUsZjtpZihcInN0cmluZ1wiPT09Yyl7ZD0wLGU9bih0aGlzKSxmPWEubWF0Y2goRyl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2Ugdm9pZCAwIT09YSYmXCJib29sZWFuXCIhPT1jfHwoYj1mYih0aGlzKSxiJiZOLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGIpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYnx8YT09PSExP1wiXCI6Ti5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQ9MDtiPVwiIFwiK2ErXCIgXCI7d2hpbGUoYz10aGlzW2QrK10paWYoMT09PWMubm9kZVR5cGUmJihcIiBcIitmYihjKStcIiBcIikucmVwbGFjZShlYixcIiBcIikuaW5kZXhPZihiKT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgZ2I9L1xcci9nLGhiPS9bXFx4MjBcXHRcXHJcXG5cXGZdKy9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKGdiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKS5yZXBsYWNlKGhiLFwiIFwiKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sKGMuc2VsZWN0ZWR8fGk9PT1lKSYmKGwub3B0RGlzYWJsZWQ/IWMuZGlzYWJsZWQ6bnVsbD09PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IW4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KG4udmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLG4uZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtuLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5pc0FycmF5KGIpP2EuY2hlY2tlZD1uLmluQXJyYXkobihhKS52YWwoKSxiKT4tMTp2b2lkIDB9fSxsLmNoZWNrT258fChuLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBpYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87bi5leHRlbmQobi5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixsLG0sbyxwPVtlfHxkXSxxPWsuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWsuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIWliLnRlc3QocStuLmV2ZW50LnRyaWdnZXJlZCkmJihxLmluZGV4T2YoXCIuXCIpPi0xJiYocj1xLnNwbGl0KFwiLlwiKSxxPXIuc2hpZnQoKSxyLnNvcnQoKSksbD1xLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitxLGI9YltuLmV4cGFuZG9dP2I6bmV3IG4uRXZlbnQocSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9ci5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGZ8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGUpKXtmb3Ioaj1vLmRlbGVnYXRlVHlwZXx8cSxpYi50ZXN0KGorcSl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlwLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmcC5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9cFtnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6by5iaW5kVHlwZXx8cSxtPShOLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmTi5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1sJiZoW2xdLG0mJm0uYXBwbHkmJkwoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXEsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8by5fZGVmYXVsdCYmby5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpIT09ITF8fCFMKGUpfHxsJiZuLmlzRnVuY3Rpb24oZVtxXSkmJiFuLmlzV2luZG93KGUpJiYoaT1lW2xdLGkmJihlW2xdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZVtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtsXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7bi5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKSxkLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSksbi5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bi5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxsLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsbC5mb2N1c2lufHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1OLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLE4uYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ti5hY2Nlc3MoZCxiKS0xO2U/Ti5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxOLnJlbW92ZShkLGIpKX19fSk7dmFyIGpiPWEubG9jYXRpb24sa2I9bi5ub3coKSxsYj0vXFw/LztuLnBhcnNlSlNPTj1mdW5jdGlvbihhKXtyZXR1cm4gSlNPTi5wYXJzZShhK1wiXCIpfSxuLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybiBjJiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8bi5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgbWI9LyMuKiQvLG5iPS8oWz8mXSlfPVteJl0qLyxvYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLHBiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLHFiPS9eKD86R0VUfEhFQUQpJC8scmI9L15cXC9cXC8vLHNiPXt9LHRiPXt9LHViPVwiKi9cIi5jb25jYXQoXCIqXCIpLHZiPWQuY3JlYXRlRWxlbWVudChcImFcIik7dmIuaHJlZj1qYi5ocmVmO2Z1bmN0aW9uIHdiKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W107aWYobi5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIHhiKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PXRiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsbi5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24geWIoYSxiKXt2YXIgYyxkLGU9bi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmbi5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIHpiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9cmV0dXJuIGY/KGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXSk6dm9pZCAwfWZ1bmN0aW9uIEFiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19bi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOmpiLmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6cGIudGVzdChqYi5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6dWIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj95Yih5YihhLG4uYWpheFNldHRpbmdzKSxiKTp5YihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjp3YihzYiksYWpheFRyYW5zcG9ydDp3Yih0YiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbT1uLmFqYXhTZXR1cCh7fSxjKSxvPW0uY29udGV4dHx8bSxwPW0uY29udGV4dCYmKG8ubm9kZVR5cGV8fG8uanF1ZXJ5KT9uKG8pOm4uZXZlbnQscT1uLkRlZmVycmVkKCkscj1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHM9bS5zdGF0dXNDb2RlfHx7fSx0PXt9LHU9e30sdj0wLHc9XCJjYW5jZWxlZFwiLHg9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dil7aWYoIWgpe2g9e307d2hpbGUoYj1vYi5leGVjKGcpKWhbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9aFthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT12P2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdnx8KGE9dVtjXT11W2NdfHxhLHRbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdnx8KG0ubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dilmb3IoYiBpbiBhKXNbYl09W3NbYl0sYVtiXV07ZWxzZSB4LmFsd2F5cyhhW3guc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHc7cmV0dXJuIGUmJmUuYWJvcnQoYikseigwLGIpLHRoaXN9fTtpZihxLnByb21pc2UoeCkuY29tcGxldGU9ci5hZGQseC5zdWNjZXNzPXguZG9uZSx4LmVycm9yPXguZmFpbCxtLnVybD0oKGJ8fG0udXJsfHxqYi5ocmVmKStcIlwiKS5yZXBsYWNlKG1iLFwiXCIpLnJlcGxhY2UocmIsamIucHJvdG9jb2wrXCIvL1wiKSxtLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8bS5tZXRob2R8fG0udHlwZSxtLmRhdGFUeXBlcz1uLnRyaW0obS5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtcIlwiXSxudWxsPT1tLmNyb3NzRG9tYWluKXtqPWQuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2ouaHJlZj1tLnVybCxqLmhyZWY9ai5ocmVmLG0uY3Jvc3NEb21haW49dmIucHJvdG9jb2wrXCIvL1wiK3ZiLmhvc3QhPWoucHJvdG9jb2wrXCIvL1wiK2ouaG9zdH1jYXRjaCh5KXttLmNyb3NzRG9tYWluPSEwfX1pZihtLmRhdGEmJm0ucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBtLmRhdGEmJihtLmRhdGE9bi5wYXJhbShtLmRhdGEsbS50cmFkaXRpb25hbCkpLHhiKHNiLG0sYyx4KSwyPT09dilyZXR1cm4geDtrPW4uZXZlbnQmJm0uZ2xvYmFsLGsmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksbS50eXBlPW0udHlwZS50b1VwcGVyQ2FzZSgpLG0uaGFzQ29udGVudD0hcWIudGVzdChtLnR5cGUpLGY9bS51cmwsbS5oYXNDb250ZW50fHwobS5kYXRhJiYoZj1tLnVybCs9KGxiLnRlc3QoZik/XCImXCI6XCI/XCIpK20uZGF0YSxkZWxldGUgbS5kYXRhKSxtLmNhY2hlPT09ITEmJihtLnVybD1uYi50ZXN0KGYpP2YucmVwbGFjZShuYixcIiQxXz1cIitrYisrKTpmKyhsYi50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIra2IrKykpLG0uaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2ZdJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2ZdKSxuLmV0YWdbZl0mJnguc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZl0pKSwobS5kYXRhJiZtLmhhc0NvbnRlbnQmJm0uY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJnguc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLG0uY29udGVudFR5cGUpLHguc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLG0uZGF0YVR5cGVzWzBdJiZtLmFjY2VwdHNbbS5kYXRhVHlwZXNbMF1dP20uYWNjZXB0c1ttLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09bS5kYXRhVHlwZXNbMF0/XCIsIFwiK3ViK1wiOyBxPTAuMDFcIjpcIlwiKTptLmFjY2VwdHNbXCIqXCJdKTtmb3IobCBpbiBtLmhlYWRlcnMpeC5zZXRSZXF1ZXN0SGVhZGVyKGwsbS5oZWFkZXJzW2xdKTtpZihtLmJlZm9yZVNlbmQmJihtLmJlZm9yZVNlbmQuY2FsbChvLHgsbSk9PT0hMXx8Mj09PXYpKXJldHVybiB4LmFib3J0KCk7dz1cImFib3J0XCI7Zm9yKGwgaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0peFtsXShtW2xdKTtpZihlPXhiKHRiLG0sYyx4KSl7aWYoeC5yZWFkeVN0YXRlPTEsayYmcC50cmlnZ2VyKFwiYWpheFNlbmRcIixbeCxtXSksMj09PXYpcmV0dXJuIHg7bS5hc3luYyYmbS50aW1lb3V0PjAmJihpPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3guYWJvcnQoXCJ0aW1lb3V0XCIpfSxtLnRpbWVvdXQpKTt0cnl7dj0xLGUuc2VuZCh0LHopfWNhdGNoKHkpe2lmKCEoMj52KSl0aHJvdyB5O3ooLTEseSl9fWVsc2UgeigtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB6KGIsYyxkLGgpe3ZhciBqLGwsdCx1LHcseT1jOzIhPT12JiYodj0yLGkmJmEuY2xlYXJUaW1lb3V0KGkpLGU9dm9pZCAwLGc9aHx8XCJcIix4LnJlYWR5U3RhdGU9Yj4wPzQ6MCxqPWI+PTIwMCYmMzAwPmJ8fDMwND09PWIsZCYmKHU9emIobSx4LGQpKSx1PUFiKG0sdSx4LGopLGo/KG0uaWZNb2RpZmllZCYmKHc9eC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksdyYmKG4ubGFzdE1vZGlmaWVkW2ZdPXcpLHc9eC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksdyYmKG4uZXRhZ1tmXT13KSksMjA0PT09Ynx8XCJIRUFEXCI9PT1tLnR5cGU/eT1cIm5vY29udGVudFwiOjMwND09PWI/eT1cIm5vdG1vZGlmaWVkXCI6KHk9dS5zdGF0ZSxsPXUuZGF0YSx0PXUuZXJyb3Isaj0hdCkpOih0PXksIWImJnl8fCh5PVwiZXJyb3JcIiwwPmImJihiPTApKSkseC5zdGF0dXM9Yix4LnN0YXR1c1RleHQ9KGN8fHkpK1wiXCIsaj9xLnJlc29sdmVXaXRoKG8sW2wseSx4XSk6cS5yZWplY3RXaXRoKG8sW3gseSx0XSkseC5zdGF0dXNDb2RlKHMpLHM9dm9pZCAwLGsmJnAudHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt4LG0saj9sOnRdKSxyLmZpcmVXaXRoKG8sW3gseV0pLGsmJihwLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbeCxtXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4geH0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheChuLmV4dGVuZCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0sbi5pc1BsYWluT2JqZWN0KGEpJiZhKSl9fSksbi5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gbi5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxuLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBBbGwoYS5jYWxsKHRoaXMsYikpfSk6KHRoaXNbMF0mJihiPW4oYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0RWxlbWVudENoaWxkKWE9YS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKSksdGhpcyl9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxuLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIW4uZXhwci5maWx0ZXJzLnZpc2libGUoYSl9LG4uZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg+MHx8YS5vZmZzZXRIZWlnaHQ+MHx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD4wfTt2YXIgQmI9LyUyMC9nLENiPS9cXFtcXF0kLyxEYj0vXFxyP1xcbi9nLEViPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxGYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gR2IoYSxiLGMsZCl7dmFyIGU7aWYobi5pc0FycmF5KGIpKW4uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8Q2IudGVzdChhKT9kKGEsZSk6R2IoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1uLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilHYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW4ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW4uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bi5hamF4U2V0dGluZ3MmJm4uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxuLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbi5pc1BsYWluT2JqZWN0KGEpKW4uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpR2IoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZShCYixcIitcIil9LG4uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW4ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bi5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmRmIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUViLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFYLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm4uaXNBcnJheShjKT9uLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoRGIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZShEYixcIlxcclxcblwiKX19KS5nZXQoKX19KSxuLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBIYj17MDoyMDAsMTIyMzoyMDR9LEliPW4uYWpheFNldHRpbmdzLnhocigpO2wuY29ycz0hIUliJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gSWIsbC5hamF4PUliPSEhSWIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7cmV0dXJuIGwuY29yc3x8SWImJiFiLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihIYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBKYj1bXSxLYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPUpiLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIra2IrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoS2IudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJktiLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoS2IsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0obGIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9uKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLEpiLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxkO3ZhciBlPXguZXhlYyhhKSxmPSFjJiZbXTtyZXR1cm4gZT9bYi5jcmVhdGVFbGVtZW50KGVbMV0pXTooZT1jYShbYV0sYixmKSxmJiZmLmxlbmd0aCYmbihmKS5yZW1vdmUoKSxuLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfTt2YXIgTGI9bi5mbi5sb2FkO24uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJkxiKXJldHVybiBMYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPW4udHJpbShhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksbi5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbi5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9uKFwiPGRpdj5cIikuYXBwZW5kKG4ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07ZnVuY3Rpb24gTWIoYSl7cmV0dXJuIG4uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31uLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW4uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW4oYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1uLmNzcyhhLFwidG9wXCIpLGk9bi5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxuLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsbi5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxuLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD10aGlzWzBdLGU9e3RvcDowLGxlZnQ6MH0sZj1kJiZkLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxuLmNvbnRhaW5zKGIsZCk/KGU9ZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxjPU1iKGYpLHt0b3A6ZS50b3ArYy5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtjLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH0pOmV9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksZC5sZWZ0Kz1uLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOmIudG9wLWQudG9wLW4uY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LW4uY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGEmJlwic3RhdGljXCI9PT1uLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8RWF9KX19KSxuLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9XCJwYWdlWU9mZnNldFwiPT09YjtuLmZuW2FdPWZ1bmN0aW9uKGQpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSxkLGUpe3ZhciBmPU1iKGEpO3JldHVybiB2b2lkIDA9PT1lP2Y/ZltiXTphW2RdOnZvaWQoZj9mLnNjcm9sbFRvKGM/Zi5wYWdlWE9mZnNldDplLGM/ZTpmLnBhZ2VZT2Zmc2V0KTphW2RdPWUpfSxhLGQsYXJndW1lbnRzLmxlbmd0aCl9fSksbi5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09R2EobC5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGM/KGM9RmEoYSxiKSxCYS50ZXN0KGMpP24oYSkucG9zaXRpb24oKVtiXStcInB4XCI6Yyk6dm9pZCAwfSl9KSxuLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7bi5mbltkXT1mdW5jdGlvbihkLGUpe3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGQpLGc9Y3x8KGQ9PT0hMHx8ZT09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihiLGMsZCl7dmFyIGU7cmV0dXJuIG4uaXNXaW5kb3coYik/Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZT1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxlW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZVtcIm9mZnNldFwiK2FdLGVbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWQ/bi5jc3MoYixjLGcpOm4uc3R5bGUoYixjLGQsZyl9LGIsZj9kOnZvaWQgMCxmLG51bGwpfX0pfSksbi5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX0sc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH19KSxuLmZuLmFuZFNlbGY9bi5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBOYj1hLmpRdWVyeSxPYj1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1PYiksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9TmIpLG59LGJ8fChhLmpRdWVyeT1hLiQ9biksbn0pO1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYWxwaGEuMik6IHV0aWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFV0aWwgPSAoZnVuY3Rpb24gKCQpIHtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgdHJhbnNpdGlvbiA9IGZhbHNlO1xuXG4gIHZhciBUcmFuc2l0aW9uRW5kRXZlbnQgPSB7XG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kJyxcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcbiAgfTtcblxuICAvLyBzaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICByZXR1cm4gKHt9KS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16QS1aXSspLylbMV0udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmluZFR5cGU6IHRyYW5zaXRpb24uZW5kLFxuICAgICAgZGVsZWdhdGVUeXBlOiB0cmFuc2l0aW9uLmVuZCxcbiAgICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kVGVzdCgpIHtcbiAgICBpZiAod2luZG93LlFVbml0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9vdHN0cmFwJyk7XG5cbiAgICBmb3IgKHZhciBfbmFtZSBpbiBUcmFuc2l0aW9uRW5kRXZlbnQpIHtcbiAgICAgIGlmIChlbC5zdHlsZVtfbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4geyBlbmQ6IFRyYW5zaXRpb25FbmRFdmVudFtfbmFtZV0gfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gICAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZChfdGhpcyk7XG4gICAgICB9XG4gICAgfSwgZHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZFRlc3QoKTtcblxuICAgICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kRW11bGF0b3I7XG5cbiAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSkge1xuICAgICAgJC5ldmVudC5zcGVjaWFsW1V0aWwuVFJBTlNJVElPTl9FTkRdID0gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBQdWJsaWMgVXRpbCBBcGlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIFV0aWwgPSB7XG5cbiAgICBUUkFOU0lUSU9OX0VORDogJ2JzVHJhbnNpdGlvbkVuZCcsXG5cbiAgICBnZXRVSUQ6IGZ1bmN0aW9uIGdldFVJRChwcmVmaXgpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgcHJlZml4ICs9IH4gfihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7IC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpO1xuICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9LFxuXG4gICAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudDogZnVuY3Rpb24gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcblxuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG4gICAgICAgIHNlbGVjdG9yID0gL14jW2Etel0vaS50ZXN0KHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH0sXG5cbiAgICByZWZsb3c6IGZ1bmN0aW9uIHJlZmxvdyhlbGVtZW50KSB7XG4gICAgICBuZXcgRnVuY3Rpb24oJ2JzJywgJ3JldHVybiBicycpKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgdHJpZ2dlclRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcih0cmFuc2l0aW9uLmVuZCk7XG4gICAgfSxcblxuICAgIHN1cHBvcnRzVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odHJhbnNpdGlvbik7XG4gICAgfSxcblxuICAgIHR5cGVDaGVja0NvbmZpZzogZnVuY3Rpb24gdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XG4gICAgICAgIGlmIChjb25maWdUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB2YXIgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBjb25maWdbcHJvcGVydHldO1xuICAgICAgICAgIHZhciB2YWx1ZVR5cGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAodmFsdWUgJiYgaXNFbGVtZW50KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gJ2VsZW1lbnQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSB0b1R5cGUodmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCkgKyAnOiAnICsgKCdPcHRpb24gXCInICsgcHJvcGVydHkgKyAnXCIgcHJvdmlkZWQgdHlwZSBcIicgKyB2YWx1ZVR5cGUgKyAnXCIgJykgKyAoJ2J1dCBleHBlY3RlZCB0eXBlIFwiJyArIGV4cGVjdGVkVHlwZXMgKyAnXCIuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpO1xuXG4gIHJldHVybiBVdGlsO1xufSkoalF1ZXJ5KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS4yKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBNb2RhbCA9IChmdW5jdGlvbiAoJCkge1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSA9ICdtb2RhbCc7XG4gIHZhciBWRVJTSU9OID0gJzQuMC4wLWFscGhhJztcbiAgdmFyIERBVEFfS0VZID0gJ2JzLm1vZGFsJztcbiAgdmFyIEVWRU5UX0tFWSA9ICcuJyArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDMwMDtcbiAgdmFyIEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04gPSAxNTA7XG5cbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgZm9jdXM6IHRydWUsXG4gICAgc2hvdzogdHJ1ZVxuICB9O1xuXG4gIHZhciBEZWZhdWx0VHlwZSA9IHtcbiAgICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICAgIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gICAgZm9jdXM6ICdib29sZWFuJyxcbiAgICBzaG93OiAnYm9vbGVhbidcbiAgfTtcblxuICB2YXIgRXZlbnQgPSB7XG4gICAgSElERTogJ2hpZGUnICsgRVZFTlRfS0VZLFxuICAgIEhJRERFTjogJ2hpZGRlbicgKyBFVkVOVF9LRVksXG4gICAgU0hPVzogJ3Nob3cnICsgRVZFTlRfS0VZLFxuICAgIFNIT1dOOiAnc2hvd24nICsgRVZFTlRfS0VZLFxuICAgIEZPQ1VTSU46ICdmb2N1c2luJyArIEVWRU5UX0tFWSxcbiAgICBSRVNJWkU6ICdyZXNpemUnICsgRVZFTlRfS0VZLFxuICAgIENMSUNLX0RJU01JU1M6ICdjbGljay5kaXNtaXNzJyArIEVWRU5UX0tFWSxcbiAgICBLRVlET1dOX0RJU01JU1M6ICdrZXlkb3duLmRpc21pc3MnICsgRVZFTlRfS0VZLFxuICAgIE1PVVNFVVBfRElTTUlTUzogJ21vdXNldXAuZGlzbWlzcycgKyBFVkVOVF9LRVksXG4gICAgTU9VU0VET1dOX0RJU01JU1M6ICdtb3VzZWRvd24uZGlzbWlzcycgKyBFVkVOVF9LRVksXG4gICAgQ0xJQ0tfREFUQV9BUEk6ICdjbGljaycgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgfTtcblxuICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgIFNDUk9MTEJBUl9NRUFTVVJFUjogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgICBCQUNLRFJPUDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgICBPUEVOOiAnbW9kYWwtb3BlbicsXG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIElOOiAnaW4nXG4gIH07XG5cbiAgdmFyIFNlbGVjdG9yID0ge1xuICAgIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxuICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICAgIERBVEFfRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gICAgRklYRURfQ09OVEVOVDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJ1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE1vZGFsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9kaWFsb2cgPSAkKGVsZW1lbnQpLmZpbmQoU2VsZWN0b3IuRElBTE9HKVswXTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2U7XG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gMDtcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgICAga2V5OiAndG9nZ2xlJyxcblxuICAgICAgLy8gcHVibGljXG5cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3Nob3cnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkVGFyZ2V0XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX2NoZWNrU2Nyb2xsYmFyKCk7XG4gICAgICAgIHRoaXMuX3NldFNjcm9sbGJhcigpO1xuXG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuXG4gICAgICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KCk7XG4gICAgICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KCk7XG5cbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDS19ESVNNSVNTLCBTZWxlY3Rvci5EQVRBX0RJU01JU1MsICQucHJveHkodGhpcy5oaWRlLCB0aGlzKSk7XG5cbiAgICAgICAgJCh0aGlzLl9kaWFsb2cpLm9uKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJChfdGhpcy5fZWxlbWVudCkub25lKEV2ZW50Lk1PVVNFVVBfRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKF90aGlzLl9lbGVtZW50KSkge1xuICAgICAgICAgICAgICBfdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgkLnByb3h5KHRoaXMuX3Nob3dFbGVtZW50LCB0aGlzLCByZWxhdGVkVGFyZ2V0KSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnaGlkZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGlkZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSk7XG5cbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpO1xuICAgICAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihFdmVudC5GT0NVU0lOKTtcblxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5JTik7XG5cbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuQ0xJQ0tfRElTTUlTUyk7XG4gICAgICAgICQodGhpcy5fZGlhbG9nKS5vZmYoRXZlbnQuTU9VU0VET1dOX0RJU01JU1MpO1xuXG4gICAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG5cbiAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAkLnByb3h5KHRoaXMuX2hpZGVNb2RhbCwgdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2hpZGVNb2RhbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGlzcG9zZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKEVWRU5UX0tFWSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihFVkVOVF9LRVkpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpO1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5vZmYoRVZFTlRfS0VZKTtcblxuICAgICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGlhbG9nID0gbnVsbDtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICAgICAgICB0aGlzLl9pc1Nob3duID0gbnVsbDtcbiAgICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gcHJpdmF0ZVxuXG4gICAgfSwge1xuICAgICAga2V5OiAnX2dldENvbmZpZycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gJC5leHRlbmQoe30sIERlZmF1bHQsIGNvbmZpZyk7XG4gICAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19zaG93RWxlbWVudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpO1xuXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAvLyBkb24ndCBtb3ZlIG1vZGFscyBkb20gcG9zaXRpb25cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5JTik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdHJhbnNpdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gdHJhbnNpdGlvbkNvbXBsZXRlKCkge1xuICAgICAgICAgIGlmIChfdGhpczIuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgICAgX3RoaXMyLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICQoX3RoaXMyLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgJCh0aGlzLl9kaWFsb2cpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCB0cmFuc2l0aW9uQ29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX2VuZm9yY2VGb2N1cycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2VuZm9yY2VGb2N1cygpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgICAub24oRXZlbnQuRk9DVVNJTiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKF90aGlzMy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmICEkKF90aGlzMy5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBfdGhpczMuX2VsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19zZXRFc2NhcGVFdmVudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldEVzY2FwZUV2ZW50KCkge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LktFWURPV05fRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDI3KSB7XG4gICAgICAgICAgICAgIF90aGlzNC5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX3NldFJlc2l6ZUV2ZW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0UmVzaXplRXZlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgJC5wcm94eSh0aGlzLl9oYW5kbGVVcGRhdGUsIHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKEV2ZW50LlJFU0laRSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfaGlkZU1vZGFsJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGlkZU1vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICAgX3RoaXM1Ll9yZXNldEFkanVzdG1lbnRzKCk7XG4gICAgICAgICAgX3RoaXM1Ll9yZXNldFNjcm9sbGJhcigpO1xuICAgICAgICAgICQoX3RoaXM1Ll9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19yZW1vdmVCYWNrZHJvcCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgICAgICBpZiAodGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfc2hvd0JhY2tkcm9wJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAgIHZhciBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkgPyBDbGFzc05hbWUuRkFERSA6ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICAgIHZhciBkb0FuaW1hdGUgPSBVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmIGFuaW1hdGU7XG5cbiAgICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENsYXNzTmFtZS5CQUNLRFJPUDtcblxuICAgICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hZGRDbGFzcyhhbmltYXRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcblxuICAgICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0tfRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXM2Ll9pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgICAgICAgIF90aGlzNi5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfdGhpczYuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgX3RoaXM2Ll9lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpczYuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGRvQW5pbWF0ZSkge1xuICAgICAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fYmFja2Ryb3ApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKENsYXNzTmFtZS5JTik7XG5cbiAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFkb0FuaW1hdGUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5JTik7XG5cbiAgICAgICAgICB2YXIgY2FsbGJhY2tSZW1vdmUgPSBmdW5jdGlvbiBjYWxsYmFja1JlbW92ZSgpIHtcbiAgICAgICAgICAgIF90aGlzNi5fcmVtb3ZlQmFja2Ryb3AoKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrUmVtb3ZlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2tSZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAgICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ19oYW5kbGVVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19hZGp1c3REaWFsb2cnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGp1c3REaWFsb2coKSB7XG4gICAgICAgIHZhciBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMuX3Njcm9sbGJhcldpZHRoICsgJ3B4fic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfcmVzZXRBZGp1c3RtZW50cycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfY2hlY2tTY3JvbGxiYXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICAgICAgdmFyIGZ1bGxXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBpZiAoIWZ1bGxXaW5kb3dXaWR0aCkge1xuICAgICAgICAgIC8vIHdvcmthcm91bmQgZm9yIG1pc3Npbmcgd2luZG93LmlubmVyV2lkdGggaW4gSUU4XG4gICAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudFJlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgZnVsbFdpbmRvd1dpZHRoID0gZG9jdW1lbnRFbGVtZW50UmVjdC5yaWdodCAtIE1hdGguYWJzKGRvY3VtZW50RWxlbWVudFJlY3QubGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgZnVsbFdpbmRvd1dpZHRoO1xuICAgICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX3NldFNjcm9sbGJhcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFNjcm9sbGJhcigpIHtcbiAgICAgICAgdmFyIGJvZHlQYWRkaW5nID0gcGFyc2VJbnQoJChTZWxlY3Rvci5GSVhFRF9DT05URU5UKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLCAxMCk7XG5cbiAgICAgICAgdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0IHx8ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYm9keVBhZGRpbmcgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfcmVzZXRTY3JvbGxiYXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19nZXRTY3JvbGxiYXJXaWR0aCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFNjcm9sbGJhcldpZHRoKCkge1xuICAgICAgICAvLyB0aHggZC53YWxzaFxuICAgICAgICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBDbGFzc05hbWUuU0NST0xMQkFSX01FQVNVUkVSO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgICAgIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIHN0YXRpY1xuXG4gICAgfV0sIFt7XG4gICAgICBrZXk6ICdfalF1ZXJ5SW50ZXJmYWNlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG4gICAgICAgICAgdmFyIF9jb25maWcgPSAkLmV4dGVuZCh7fSwgTW9kYWwuRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbWV0aG9kIG5hbWVkIFwiJyArIGNvbmZpZyArICdcIicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgICAgICBkYXRhLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdWRVJTSU9OJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdEZWZhdWx0JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0pKCk7XG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIHZhciB0YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXTtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpID8gJ3RvZ2dsZScgOiAkLmV4dGVuZCh7fSwgJCh0YXJnZXQpLmRhdGEoKSwgJCh0aGlzKS5kYXRhKCkpO1xuXG4gICAgaWYgKHRoaXMudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpLm9uZShFdmVudC5TSE9XLCBmdW5jdGlvbiAoc2hvd0V2ZW50KSB7XG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkdGFyZ2V0Lm9uZShFdmVudC5ISURERU4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQoX3RoaXM3KS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgIF90aGlzNy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcyk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gTW9kYWwuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IE1vZGFsO1xuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gTW9kYWw7XG59KShqUXVlcnkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kYWwuanMubWFwXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
