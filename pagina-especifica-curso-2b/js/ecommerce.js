if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    var t = [],
        T = C.document,
        u = t.slice,
        m = t.concat,
        a = t.push,
        o = t.indexOf,
        n = {},
        i = n.toString,
        f = n.hasOwnProperty,
        g = {},
        s = "2.2.4",
        k = function(e, t) {
            return new k.fn.init(e, t)
        },
        r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        c = /-([\da-z])/gi,
        d = function(e, t) {
            return t.toUpperCase()
        };

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = k.type(e);
        return "function" !== n && !k.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: s,
        constructor: k,
        selector: "",
        length: 0,
        toArray: function() {
            return u.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, i, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || k.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = r[t], r !== (i = e[t]) && (c && i && (k.isPlainObject(i) || (o = k.isArray(i))) ? (o ? (o = !1, s = n && k.isArray(n) ? n : []) : s = n && k.isPlainObject(n) ? n : {}, r[t] = k.extend(c, s, i)) : void 0 !== i && (r[t] = i));
        return r
    }, k.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === k.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !k.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== k.type(e) || e.nodeType || k.isWindow(e)) return !1;
            if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || f.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = k.trim(e)) && (1 === e.indexOf("use strict") ? ((t = T.createElement("script")).text = e, T.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(l, "ms-").replace(c, d)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, i = 0;
            if (h(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(r, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, s = e.length, r = !n; o < s; o++) !t(e[o], o) !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, s = 0,
                r = [];
            if (h(e))
                for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && r.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && r.push(o);
            return m.apply([], r)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), k.isFunction(e) ? (i = u.call(arguments, 2), (o = function() {
                return e.apply(t || this, i.concat(u.call(arguments)))
            }).guid = e.guid = e.guid || k.guid++, o) : void 0
        },
        now: Date.now,
        support: g
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, f, x, s, o, m, d, g, w, l, c, $, C, r, T, v, a, u, y, k = "sizzle" + 1 * new Date,
            b = n.document,
            E = 0,
            i = 0,
            h = se(),
            p = se(),
            S = se(),
            A = function(e, t) {
                return e === t && (c = !0), 0
            },
            O = 1 << 31,
            j = {}.hasOwnProperty,
            t = [],
            I = t.pop,
            N = t.push,
            D = t.push,
            P = t.slice,
            _ = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = "\\[" + M + "*(" + L + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + M + "*\\]",
            H = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            R = new RegExp(M + "+", "g"),
            z = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            q = new RegExp("^" + M + "*," + M + "*"),
            W = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            Q = new RegExp(H),
            Y = new RegExp("^" + L + "$"),
            G = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + B + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            V = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = function() {
                $()
            };
        try {
            D.apply(t = P.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (e) {
            D = {
                apply: t.length ? function(e, t) {
                    N.apply(e, P.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, i) {
            var o, s, r, a, l, c, u, d, h = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : b) !== C && $(t), t = t || C, T)) {
                if (11 !== p && (c = J.exec(e)))
                    if (o = c[1]) {
                        if (9 === p) {
                            if (!(r = t.getElementById(o))) return n;
                            if (r.id === o) return n.push(r), n
                        } else if (h && (r = h.getElementById(o)) && y(t, r) && r.id === o) return n.push(r), n
                    } else {
                        if (c[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = c[3]) && f.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(o)), n
                    }
                if (f.qsa && !S[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) h = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ee, "\\$&") : t.setAttribute("id", a = k), s = (u = m(e)).length, l = Y.test(a) ? "#" + a : "[id='" + a + "']"; s--;) u[s] = l + " " + me(u[s]);
                        d = u.join(","), h = Z.test(e) && pe(t.parentNode) || t
                    }
                    if (d) try {
                        return D.apply(n, h.querySelectorAll(d)), n
                    } catch (e) {} finally {
                        a === k && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(z, "$1"), t, n, i)
        }

        function se() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > x.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function re(e) {
            return e[k] = !0, e
        }

        function ae(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || O) - (~e.sourceIndex || O);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ue(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function de(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function he(r) {
            return re(function(s) {
                return s = +s, re(function(e, t) {
                    for (var n, i = r([], e.length, s), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function pe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in f = oe.support = {}, o = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, $ = oe.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : b;
                return i !== C && 9 === i.nodeType && i.documentElement && (r = (C = i).documentElement, T = !o(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), f.attributes = ae(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), f.getElementsByTagName = ae(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), f.getElementsByClassName = K.test(C.getElementsByClassName), f.getById = ae(function(e) {
                    return r.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
                }), f.getById ? (x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, x.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), x.find.TAG = f.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, x.find.CLASS = f.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && T ? t.getElementsByClassName(e) : void 0
                }, a = [], v = [], (f.qsa = K.test(C.querySelectorAll)) && (ae(function(e) {
                    r.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                }), ae(function(e) {
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (f.matchesSelector = K.test(u = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ae(function(e) {
                    f.disconnectedMatch = u.call(e, "div"), u.call(e, "[s!='']:x"), a.push("!=", H)
                }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), t = K.test(r.compareDocumentPosition), y = t || K.test(r.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === b && y(b, e) ? -1 : t === C || t.ownerDocument === b && y(b, t) ? 1 : l ? _(l, e) - _(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        r = [e],
                        a = [t];
                    if (!o || !s) return e === C ? -1 : t === C ? 1 : o ? -1 : s ? 1 : l ? _(l, e) - _(l, t) : 0;
                    if (o === s) return ce(e, t);
                    for (n = e; n = n.parentNode;) r.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; r[i] === a[i];) i++;
                    return i ? ce(r[i], a[i]) : r[i] === b ? -1 : a[i] === b ? 1 : 0
                }), C
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && $(e), t = t.replace(U, "='$1']"), f.matchesSelector && T && !S[t + " "] && (!a || !a.test(t)) && (!v || !v.test(t))) try {
                    var n = u.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < oe(t, C, null, [e]).length
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && $(e), y(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== C && $(e);
                var n = x.attrHandle[t.toLowerCase()],
                    i = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                return void 0 !== i ? i : f.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(A), c) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, s = oe.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += s(t);
                return n
            }, (x = oe.selectors = {
                cacheLength: 50,
                createPseudo: re,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = h[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && h(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, o) {
                        return function(e) {
                            var t = oe.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(R, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(f, e, t, m, g) {
                        var v = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, o, s, r, a, l, c = v !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                h = !n && !b,
                                p = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (r = e; r = r[c];)
                                            if (b ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                    for (p = (a = (i = (o = (s = (r = u)[k] || (r[k] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] || [])[0] === E && i[1]) && i[2], r = a && u.childNodes[a]; r = ++a && r && r[c] || (p = a = 0) || l.pop();)
                                        if (1 === r.nodeType && ++p && r === e) {
                                            o[f] = [E, a, p];
                                            break
                                        }
                                } else if (h && (p = a = (i = (o = (s = (r = e)[k] || (r[k] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] || [])[0] === E && i[1]), !1 === p)
                                    for (;
                                        (r = ++a && r && r[c] || (p = a = 0) || l.pop()) && ((b ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++p || (h && ((o = (s = r[k] || (r[k] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] = [E, p]), r !== e)););
                                return (p -= g) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function(e, s) {
                        var t, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return r[k] ? r(s) : 1 < r.length ? (t = [e, e, "", s], x.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function(e, t) {
                            for (var n, i = r(e, s), o = i.length; o--;) e[n = _(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return r(e, 0, t)
                        }) : r
                    }
                },
                pseudos: {
                    not: re(function(e) {
                        var i = [],
                            o = [],
                            a = d(e.replace(z, "$1"));
                        return a[k] ? re(function(e, t, n, i) {
                            for (var o, s = a(e, null, i, []), r = e.length; r--;)(o = s[r]) && (e[r] = !(t[r] = o))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: re(function(t) {
                        return function(e) {
                            return 0 < oe(t, e).length
                        }
                    }),
                    contains: re(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                            }
                    }),
                    lang: re(function(n) {
                        return Y.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === r
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return V.test(e.nodeName)
                    },
                    input: function(e) {
                        return X.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = ue(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = de(e);

        function fe() {}

        function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ge(a, e, t) {
            var l = e.dir,
                c = t && "parentNode" === l,
                u = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || c) return a(e, t, n)
            } : function(e, t, n) {
                var i, o, s, r = [E, u];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || c) {
                            if ((i = (o = (s = e[k] || (e[k] = {}))[e.uniqueID] || (s[e.uniqueID] = {}))[l]) && i[0] === E && i[1] === u) return r[2] = i[2];
                            if ((o[l] = r)[2] = a(e, t, n)) return !0
                        }
            }
        }

        function ve(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function ye(e, t, n, i, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (n && !n(s, i, o) || (r.push(s), c && t.push(a)));
            return r
        }

        function be(p, f, m, g, v, e) {
            return g && !g[k] && (g = be(g)), v && !v[k] && (v = be(v, e)), re(function(e, t, n, i) {
                var o, s, r, a = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) oe(e, t[i], n);
                        return n
                    }(f || "*", n.nodeType ? [n] : n, []),
                    d = !p || !e && f ? u : ye(u, a, p, n, i),
                    h = m ? v || (e ? p : c || g) ? [] : t : d;
                if (m && m(d, h, n, i), g)
                    for (o = ye(h, l), g(o, [], n, i), s = o.length; s--;)(r = o[s]) && (h[l[s]] = !(d[l[s]] = r));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (o = [], s = h.length; s--;)(r = h[s]) && o.push(d[s] = r);
                            v(null, h = [], o, i)
                        }
                        for (s = h.length; s--;)(r = h[s]) && -1 < (o = v ? _(e, r) : a[s]) && (e[o] = !(t[o] = r))
                    }
                } else h = ye(h === t ? h.splice(c, h.length) : h), v ? v(null, t, h, i) : D.apply(t, h)
            })
        }

        function xe(e) {
            for (var o, t, n, i = e.length, s = x.relative[e[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = ge(function(e) {
                    return e === o
                }, r, !0), c = ge(function(e) {
                    return -1 < _(o, e)
                }, r, !0), u = [function(e, t, n) {
                    var i = !s && (n || t !== w) || ((o = t).nodeType ? l(e, t, n) : c(e, t, n));
                    return o = null, i
                }]; a < i; a++)
                if (t = x.relative[e[a].type]) u = [ge(ve(u), t)];
                else {
                    if ((t = x.filter[e[a].type].apply(null, e[a].matches))[k]) {
                        for (n = ++a; n < i && !x.relative[e[n].type]; n++);
                        return be(1 < a && ve(u), 1 < a && me(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(z, "$1"), t, a < n && xe(e.slice(a, n)), n < i && xe(e = e.slice(n)), n < i && me(e))
                    }
                    u.push(t)
                }
            return ve(u)
        }
        return fe.prototype = x.filters = x.pseudos, x.setFilters = new fe, m = oe.tokenize = function(e, t) {
            var n, i, o, s, r, a, l, c = p[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (r = e, a = [], l = x.preFilter; r;) {
                for (s in n && !(i = q.exec(r)) || (i && (r = r.slice(i[0].length) || r), a.push(o = [])), n = !1, (i = W.exec(r)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(z, " ")
                    }), r = r.slice(n.length)), x.filter) !(i = G[s].exec(r)) || l[s] && !(i = l[s](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: s,
                    matches: i
                }), r = r.slice(n.length));
                if (!n) break
            }
            return t ? r.length : r ? oe.error(e) : p(e, a).slice(0)
        }, d = oe.compile = function(e, t) {
            var n, g, v, y, b, i, o = [],
                s = [],
                r = S[e + " "];
            if (!r) {
                for (t || (t = m(e)), n = t.length; n--;)(r = xe(t[n]))[k] ? o.push(r) : s.push(r);
                (r = S(e, (g = s, y = 0 < (v = o).length, b = 0 < g.length, i = function(e, t, n, i, o) {
                    var s, r, a, l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        h = w,
                        p = e || b && x.find.TAG("*", o),
                        f = E += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (o && (w = t === C || t || o); c !== m && null != (s = p[c]); c++) {
                        if (b && s) {
                            for (r = 0, t || s.ownerDocument === C || ($(s), n = !T); a = g[r++];)
                                if (a(s, t || C, n)) {
                                    i.push(s);
                                    break
                                }
                            o && (E = f)
                        }
                        y && ((s = !a && s) && l--, e && u.push(s))
                    }
                    if (l += c, y && c !== l) {
                        for (r = 0; a = v[r++];) a(u, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = I.call(i));
                            d = ye(d)
                        }
                        D.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && oe.uniqueSort(i)
                    }
                    return o && (E = f, w = h), u
                }, y ? re(i) : i))).selector = e
            }
            return r
        }, g = oe.select = function(e, t, n, i) {
            var o, s, r, a, l, c = "function" == typeof e && e,
                u = !i && m(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (s = u[0] = u[0].slice(0)).length && "ID" === (r = s[0]).type && f.getById && 9 === t.nodeType && T && x.relative[s[1].type]) {
                    if (!(t = (x.find.ID(r.matches[0].replace(te, ne), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !x.relative[a = r.type]);)
                    if ((l = x.find[a]) && (i = l(r.matches[0].replace(te, ne), Z.test(s[0].type) && pe(t.parentNode) || t))) {
                        if (s.splice(o, 1), !(e = i.length && me(s))) return D.apply(n, i), n;
                        break
                    }
            }
            return (c || d(e, u))(i, t, !T, n, !t || Z.test(e) && pe(t.parentNode) || t), n
        }, f.sortStable = k.split("").sort(A).join("") === k, f.detectDuplicates = !!c, $(), f.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), ae(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && ae(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(B, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(C);
    k.find = p, k.expr = p.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = p.uniqueSort, k.text = p.getText, k.isXMLDoc = p.isXML, k.contains = p.contains;
    var v = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && k(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        y = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        b = k.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function $(e, n, i) {
        if (k.isFunction(n)) return k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return k.grep(e, function(e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (w.test(n)) return k.filter(n, e, i);
            n = k.filter(n, e)
        }
        return k.grep(e, function(e) {
            return -1 < o.call(n, e) !== i
        })
    }
    k.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? k.find.matchesSelector(i, e) ? [i] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (k.contains(o[t], this)) return !0
            }));
            for (t = 0; t < n; t++) k.find(e, o[t], i);
            return (i = this.pushStack(1 < n ? k.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack($(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack($(this, e || [], !0))
        },
        is: function(e) {
            return !!$(this, "string" == typeof e && b.test(e) ? k(e) : e || [], !1).length
        }
    });
    var E, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (k.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || E, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), x.test(i[1]) && k.isPlainObject(t))
                    for (i in t) k.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = T.getElementById(i[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = T, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : k.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), k.makeArray(e, this))
    }).prototype = k.fn, E = k(T);
    var A = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, s = [], r = b.test(e) || "string" != typeof e ? k(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(1 < s.length ? k.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(k(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return v(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v(e, "parentNode", n)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return v(e, "nextSibling")
        },
        prevAll: function(e) {
            return v(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v(e, "previousSibling", n)
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return y(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || k.merge([], e.childNodes)
        }
    }, function(i, o) {
        k.fn[i] = function(e, t) {
            var n = k.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[i] || k.uniqueSort(n), A.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var I, N = /\S+/g;

    function D() {
        T.removeEventListener("DOMContentLoaded", D), C.removeEventListener("load", D), k.ready()
    }
    k.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, k.each(e.match(N) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, i);
        var o, t, s, r, a = [],
            l = [],
            c = -1,
            u = function() {
                for (r = i.once, s = o = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
                i.memory || (t = !1), o = !1, r && (a = t ? [] : "")
            },
            d = {
                add: function() {
                    return a && (t && !o && (c = a.length - 1, l.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            k.isFunction(t) ? i.unique && d.has(t) || a.push(t) : t && t.length && "string" !== k.type(t) && n(t)
                        })
                    }(arguments), t && !o && u()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = k.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = l = [], a = t = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = l = [], t || (a = t = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, t) {
                    return r || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return d
    }, k.extend({
        Deferred: function(e) {
            var s = [
                    ["resolve", "done", k.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", k.Callbacks("memory")]
                ],
                o = "pending",
                r = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return k.Deferred(function(i) {
                            k.each(s, function(e, t) {
                                var n = k.isFunction(o[e]) && o[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && k.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === r ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, r) : r
                    }
                },
                a = {};
            return r.pipe = r.then, k.each(s, function(e, t) {
                var n = t[2],
                    i = t[3];
                r[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, s[1 ^ e][2].disable, s[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? r : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), r.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var o, t, n, i = 0,
                s = u.call(arguments),
                r = s.length,
                a = 1 !== r || e && k.isFunction(e.promise) ? r : 0,
                l = 1 === a ? e : k.Deferred(),
                c = function(t, n, i) {
                    return function(e) {
                        n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === o ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (1 < r)
                for (o = new Array(r), t = new Array(r), n = new Array(r); i < r; i++) s[i] && k.isFunction(s[i].promise) ? s[i].promise().progress(c(i, t, o)).done(c(i, n, s)).fail(l.reject) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    }), k.fn.ready = function(e) {
        return k.ready.promise().done(e), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? k.readyWait++ : k.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== e && 0 < --k.readyWait || (I.resolveWith(T, [k]), k.fn.triggerHandler && (k(T).triggerHandler("ready"), k(T).off("ready"))))
        }
    }), k.ready.promise = function(e) {
        return I || (I = k.Deferred(), "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? C.setTimeout(k.ready) : (T.addEventListener("DOMContentLoaded", D), C.addEventListener("load", D))), I.promise(e)
    }, k.ready.promise();
    var P = function(e, t, n, i, o, s, r) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === k.type(n))
                for (a in o = !0, n) P(e, t, a, n[a], !0, s, r);
            else if (void 0 !== i && (o = !0, k.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(k(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : s
        },
        _ = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function B() {
        this.expando = k.expando + B.uid++
    }
    B.uid = 1, B.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!_(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, _(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[t] = n;
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, k.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, s = e[this.expando];
            if (void 0 !== s) {
                if (void 0 === t) this.register(e);
                else {
                    k.isArray(t) ? i = t.concat(t.map(k.camelCase)) : (o = k.camelCase(t), t in s ? i = [t, o] : i = (i = o) in s ? [i] : i.match(N) || []), n = i.length;
                    for (; n--;) delete s[i[n]]
                }(void 0 === t || k.isEmptyObject(s)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var M = new B,
        L = new B,
        F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        H = /[A-Z]/g;

    function R(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(H, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? k.parseJSON(n) : n)
                } catch (e) {}
                L.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return L.hasData(e) || M.hasData(e)
        },
        data: function(e, t, n) {
            return L.access(e, t, n)
        },
        removeData: function(e, t) {
            L.remove(e, t)
        },
        _data: function(e, t, n) {
            return M.access(e, t, n)
        },
        _removeData: function(e, t) {
            M.remove(e, t)
        }
    }), k.fn.extend({
        data: function(i, e) {
            var t, n, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === i) {
                if (this.length && (o = L.get(s), 1 === s.nodeType && !M.get(s, "hasDataAttrs"))) {
                    for (t = r.length; t--;) r[t] && (0 === (n = r[t].name).indexOf("data-") && (n = k.camelCase(n.slice(5)), R(s, n, o[n])));
                    M.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof i ? this.each(function() {
                L.set(this, i)
            }) : P(this, function(t) {
                var e, n;
                if (s && void 0 === t) {
                    if (void 0 !== (e = L.get(s, i) || L.get(s, i.replace(H, "-$&").toLowerCase()))) return e;
                    if (n = k.camelCase(i), void 0 !== (e = L.get(s, n))) return e;
                    if (void 0 !== (e = R(s, n, void 0))) return e
                } else n = k.camelCase(i), this.each(function() {
                    var e = L.get(this, n);
                    L.set(this, n, t), -1 < i.indexOf("-") && void 0 !== e && L.set(this, i, t)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                L.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = M.get(e, t), n && (!i || k.isArray(n) ? i = M.access(e, t, k.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                i = n.length,
                o = n.shift(),
                s = k._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, function() {
                k.dequeue(e, t)
            }, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return M.get(e, n) || M.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    M.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = k.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = M.get(s[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        q = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
        W = ["Top", "Right", "Bottom", "Left"],
        U = function(e, t) {
            return e = t || e, "none" === k.css(e, "display") || !k.contains(e.ownerDocument, e)
        };

    function Q(e, t, n, i) {
        var o, s = 1,
            r = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return k.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            u = (k.cssNumber[t] || "px" !== c && +l) && q.exec(k.css(e, t));
        if (u && u[3] !== c)
            for (c = c || u[3], n = n || [], u = +l || 1; u /= s = s || ".5", k.style(e, t, u + c), s !== (s = a() / l) && 1 !== s && --r;);
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var Y = /^(?:checkbox|radio)$/i,
        G = /<([\w:-]+)/,
        X = /^$|\/(?:java|ecma)script/i,
        V = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function K(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && k.nodeName(e, t) ? k.merge([e], n) : n
    }

    function J(e, t) {
        for (var n = 0, i = e.length; n < i; n++) M.set(e[n], "globalEval", !t || M.get(t[n], "globalEval"))
    }
    V.optgroup = V.option, V.tbody = V.tfoot = V.colgroup = V.caption = V.thead, V.th = V.td;
    var Z, ee, te = /<|&#?\w+;/;

    function ne(e, t, n, i, o) {
        for (var s, r, a, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((s = e[p]) || 0 === s)
                if ("object" === k.type(s)) k.merge(h, s.nodeType ? [s] : s);
                else if (te.test(s)) {
            for (r = r || d.appendChild(t.createElement("div")), a = (G.exec(s) || ["", ""])[1].toLowerCase(), l = V[a] || V._default, r.innerHTML = l[1] + k.htmlPrefilter(s) + l[2], u = l[0]; u--;) r = r.lastChild;
            k.merge(h, r.childNodes), (r = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(s));
        for (d.textContent = "", p = 0; s = h[p++];)
            if (i && -1 < k.inArray(s, i)) o && o.push(s);
            else if (c = k.contains(s.ownerDocument, s), r = K(d.appendChild(s), "script"), c && J(r), n)
            for (u = 0; s = r[u++];) X.test(s.type || "") && n.push(s);
        return d
    }
    Z = T.createDocumentFragment().appendChild(T.createElement("div")), (ee = T.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), Z.appendChild(ee), g.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var ie = /^key/,
        oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        se = /^([^.]*)(?:\.(.+)|)/;

    function re() {
        return !0
    }

    function ae() {
        return !1
    }

    function le() {
        try {
            return T.activeElement
        } catch (e) {}
    }

    function ce(e, t, n, i, o, s) {
        var r, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) ce(e, a, n, i, t[a], s);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = ae;
        else if (!o) return e;
        return 1 === s && (r = o, (o = function(e) {
            return k().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, o, i, n)
        })
    }
    k.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var s, r, a, l, c, u, d, h, p, f, m, g = M.get(t);
            if (g)
                for (n.handler && (n = (s = n).handler, o = s.selector), n.guid || (n.guid = k.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(N) || [""]).length; c--;) p = m = (a = se.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = k.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = k.event.special[p] || {}, u = k.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && k.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, f, r) || t.addEventListener && t.addEventListener(p, r)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), k.event.global[p] = !0)
        },
        remove: function(e, t, n, i, o) {
            var s, r, a, l, c, u, d, h, p, f, m, g = M.hasData(e) && M.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(N) || [""]).length; c--;)
                    if (p = m = (a = se.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (d = k.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) u = h[s], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        r && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || k.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) k.event.remove(e, p + t[c], n, i, !0);
                k.isEmptyObject(l) && M.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = k.event.fix(e);
            var t, n, i, o, s, r = [],
                a = u.call(arguments),
                l = (M.get(this, "events") || {})[e.type] || [],
                c = k.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (r = k.event.handlers.call(this, e, l), t = 0;
                    (o = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (i = ((k.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, s, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; n < a; n++) void 0 === i[o = (s = t[n]).selector + " "] && (i[o] = s.needsContext ? -1 < k(o, this).index(l) : k.find(o, this, null, [l]).length), i[o] && i.push(s);
                        i.length && r.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, s = t.button;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || T).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[k.expando]) return e;
            var t, n, i, o = e.type,
                s = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = oe.test(o) ? this.mouseHooks : ie.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new k.Event(s), t = i.length; t--;) e[n = i[t]] = s[n];
            return e.target || (e.target = T), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== le() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === le() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && k.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return k.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        return this instanceof k.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? re : ae) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || k.now(), void(this[k.expando] = !0)) : new k.Event(e, t)
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: ae,
        isPropagationStopped: ae,
        isImmediatePropagationStopped: ae,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = re, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = re, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = re, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        k.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, i) {
            return ce(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ce(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, k(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ae), this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        de = /<script|<style|<link/i,
        he = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pe = /^true\/(.*)/,
        fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function me(e, t) {
        return k.nodeName(e, "table") && k.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ge(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ve(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ye(e, t) {
        var n, i, o, s, r, a, l, c;
        if (1 === t.nodeType) {
            if (M.hasData(e) && (s = M.access(e), r = M.set(t, s), c = s.events))
                for (o in delete r.handle, r.events = {}, c)
                    for (n = 0, i = c[o].length; n < i; n++) k.event.add(t, o, c[o][n]);
            L.hasData(e) && (a = L.access(e), l = k.extend({}, a), L.set(t, l))
        }
    }

    function be(n, i, o, s) {
        i = m.apply([], i);
        var e, t, r, a, l, c, u = 0,
            d = n.length,
            h = d - 1,
            p = i[0],
            f = k.isFunction(p);
        if (f || 1 < d && "string" == typeof p && !g.checkClone && he.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            f && (i[0] = p.call(this, e, t.html())), be(t, i, o, s)
        });
        if (d && (t = (e = ne(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
            for (a = (r = k.map(K(e, "script"), ge)).length; u < d; u++) l = e, u !== h && (l = k.clone(l, !0, !0), a && k.merge(r, K(l, "script"))), o.call(n[u], l, u);
            if (a)
                for (c = r[r.length - 1].ownerDocument, k.map(r, ve), u = 0; u < a; u++) l = r[u], X.test(l.type || "") && !M.access(l, "globalEval") && k.contains(c, l) && (l.src ? k._evalUrl && k._evalUrl(l.src) : k.globalEval(l.textContent.replace(fe, "")))
        }
        return n
    }

    function xe(e, t, n) {
        for (var i, o = t ? k.filter(t, e) : e, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || k.cleanData(K(i)), i.parentNode && (n && k.contains(i.ownerDocument, i) && J(K(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(ue, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, s, r, a, l, c, u = e.cloneNode(!0),
                d = k.contains(e.ownerDocument, e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (r = K(u), i = 0, o = (s = K(e)).length; i < o; i++) a = s[i], l = r[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && Y.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (s = s || K(e), r = r || K(u), i = 0, o = s.length; i < o; i++) ye(s[i], r[i]);
                else ye(e, u);
            return 0 < (r = K(u, "script")).length && J(r, !d && K(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, o = k.event.special, s = 0; void 0 !== (n = e[s]); s++)
                if (_(n)) {
                    if (t = n[M.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? k.event.remove(n, i) : k.removeEvent(n, i, t.handle);
                        n[M.expando] = void 0
                    }
                    n[L.expando] && (n[L.expando] = void 0)
                }
        }
    }), k.fn.extend({
        domManip: be,
        detach: function(e) {
            return xe(this, e, !0)
        },
        remove: function(e) {
            return xe(this, e)
        },
        text: function(e) {
            return P(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return be(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || me(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return be(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(K(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return P(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !de.test(e) && !V[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(K(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return be(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(K(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, r) {
        k.fn[e] = function(e) {
            for (var t, n = [], i = k(e), o = i.length - 1, s = 0; s <= o; s++) t = s === o ? this : this.clone(!0), k(i[s])[r](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var we, $e = {
        HTML: "block",
        BODY: "block"
    };

    function Ce(e, t) {
        var n = k(t.createElement(e)).appendTo(t.body),
            i = k.css(n[0], "display");
        return n.detach(), i
    }

    function Te(e) {
        var t = T,
            n = $e[e];
        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (we = (we || k("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), we.detach()), $e[e] = n), n
    }
    var ke = /^margin/,
        Ee = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
        Se = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Ae = function(e, t, n, i) {
            var o, s, r = {};
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            for (s in o = n.apply(e, i || []), t) e.style[s] = r[s];
            return o
        },
        Oe = T.documentElement;

    function je(e, t, n) {
        var i, o, s, r, a = e.style;
        return "" !== (r = (n = n || Se(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== r || k.contains(e.ownerDocument, e) || (r = k.style(e, t)), n && !g.pixelMarginRight() && Ee.test(r) && ke.test(t) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
    }

    function Ie(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, i, o, s = T.createElement("div"),
            r = T.createElement("div");
        if (r.style) {
            function e() {
                r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", Oe.appendChild(s);
                var e = C.getComputedStyle(r);
                t = "1%" !== e.top, o = "2px" === e.marginLeft, n = "4px" === e.width, r.style.marginRight = "50%", i = "4px" === e.marginRight, Oe.removeChild(s)
            }
            r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(r), k.extend(g, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                pixelMarginRight: function() {
                    return null == n && e(), i
                },
                reliableMarginLeft: function() {
                    return null == n && e(), o
                },
                reliableMarginRight: function() {
                    var e, t = r.appendChild(T.createElement("div"));
                    return t.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", r.style.width = "1px", Oe.appendChild(s), e = !parseFloat(C.getComputedStyle(t).marginRight), Oe.removeChild(s), r.removeChild(t), e
                }
            })
        }
    }();
    var Ne = /^(none|table(?!-c[ea]).+)/,
        De = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Pe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _e = ["Webkit", "O", "Moz", "ms"],
        Be = T.createElement("div").style;

    function Me(e) {
        if (e in Be) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--;)
            if ((e = _e[n] + t) in Be) return e
    }

    function Le(e, t, n) {
        var i = q.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Fe(e, t, n, i, o) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2) "margin" === n && (r += k.css(e, n + W[s], !0, o)), i ? ("content" === n && (r -= k.css(e, "padding" + W[s], !0, o)), "margin" !== n && (r -= k.css(e, "border" + W[s] + "Width", !0, o))) : (r += k.css(e, "padding" + W[s], !0, o), "padding" !== n && (r += k.css(e, "border" + W[s] + "Width", !0, o)));
        return r
    }

    function He(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Se(e),
            r = "border-box" === k.css(e, "boxSizing", !1, s);
        if (o <= 0 || null == o) {
            if (((o = je(e, t, s)) < 0 || null == o) && (o = e.style[t]), Ee.test(o)) return o;
            i = r && (g.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + Fe(e, t, n || (r ? "border" : "content"), i, s) + "px"
    }

    function Re(e, t) {
        for (var n, i, o, s = [], r = 0, a = e.length; r < a; r++)(i = e[r]).style && (s[r] = M.get(i, "olddisplay"), n = i.style.display, t ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && U(i) && (s[r] = M.access(i, "olddisplay", Te(i.nodeName)))) : (o = U(i), "none" === n && o || M.set(i, "olddisplay", o ? n : k.css(i, "display"))));
        for (r = 0; r < a; r++)(i = e[r]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[r] || "" : "none"));
        return e
    }

    function ze(e, t, n, i, o) {
        return new ze.prototype.init(e, t, n, i, o)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = je(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = k.camelCase(t),
                    l = e.style;
                return t = k.cssProps[a] || (k.cssProps[a] = Me(a) || a), r = k.cssHooks[t] || k.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t] : ("string" === (s = typeof n) && (o = q.exec(n)) && o[1] && (n = Q(e, t, o), s = "number"), void(null != n && n == n && ("number" === s && (n += o && o[3] || (k.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, s, r, a = k.camelCase(t);
            return t = k.cssProps[a] || (k.cssProps[a] = Me(a) || a), (r = k.cssHooks[t] || k.cssHooks[a]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = je(e, t, i)), "normal" === o && t in Pe && (o = Pe[t]), "" === n || n ? (s = parseFloat(o), !0 === n || isFinite(s) ? s || 0 : o) : o
        }
    }), k.each(["height", "width"], function(e, r) {
        k.cssHooks[r] = {
            get: function(e, t, n) {
                return t ? Ne.test(k.css(e, "display")) && 0 === e.offsetWidth ? Ae(e, De, function() {
                    return He(e, r, n)
                }) : He(e, r, n) : void 0
            },
            set: function(e, t, n) {
                var i, o = n && Se(e),
                    s = n && Fe(e, r, n, "border-box" === k.css(e, "boxSizing", !1, o), o);
                return s && (i = q.exec(t)) && "px" !== (i[3] || "px") && (e.style[r] = t, t = k.css(e, r)), Le(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = Ie(g.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(je(e, "marginLeft")) || e.getBoundingClientRect().left - Ae(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), k.cssHooks.marginRight = Ie(g.reliableMarginRight, function(e, t) {
        return t ? Ae(e, {
            display: "inline-block"
        }, je, [e, "marginRight"]) : void 0
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, s) {
        k.cssHooks[o + s] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + W[t] + s] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, ke.test(o) || (k.cssHooks[o + s].set = Le)
    }), k.fn.extend({
        css: function(e, t) {
            return P(this, function(e, t, n) {
                var i, o, s = {},
                    r = 0;
                if (k.isArray(t)) {
                    for (i = Se(e), o = t.length; r < o; r++) s[t[r]] = k.css(e, t[r], !1, i);
                    return s
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return Re(this, !0)
        },
        hide: function() {
            return Re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                U(this) ? k(this).show() : k(this).hide()
            })
        }
    }), ((k.Tween = ze).prototype = {
        constructor: ze,
        init: function(e, t, n, i, o, s) {
            this.elem = e, this.prop = n, this.easing = o || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : ze.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ze.propHooks._default.set(this), this
        }
    }).init.prototype = ze.prototype, (ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = ze.prototype.init, k.fx.step = {};
    var qe, We, Ue, Qe, Ye, Ge = /^(?:toggle|show|hide)$/,
        Xe = /queueHooks$/;

    function Ve() {
        return C.setTimeout(function() {
            qe = void 0
        }), qe = k.now()
    }

    function Ke(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = W[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function Je(e, t, n) {
        for (var i, o = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), s = 0, r = o.length; s < r; s++)
            if (i = o[s].call(n, t, e)) return i
    }

    function Ze(s, e, t) {
        var n, r, i = 0,
            o = Ze.prefilters.length,
            a = k.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = qe || Ve(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return a.notifyWith(s, [c, n, t]), n < 1 && o ? t : (a.resolveWith(s, [c]), !1)
            },
            c = a.promise({
                elem: s,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: qe || Ve(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c, e])) : a.rejectWith(s, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, o, s, r;
                for (n in e)
                    if (o = t[i = k.camelCase(n)], s = e[n], k.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (r = k.cssHooks[i]) && "expand" in r)
                        for (n in s = r.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); i < o; i++)
            if (n = Ze.prefilters[i].call(c, s, u, c.opts)) return k.isFunction(n.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = k.proxy(n.stop, n)), n;
        return k.map(u, Je, c), k.isFunction(c.opts.start) && c.opts.start.call(s, c), k.fx.timer(k.extend(l, {
            elem: s,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    k.Animation = k.extend(Ze, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return Q(n.elem, e, q.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            k.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(N);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], Ze.tweeners[n] = Ze.tweeners[n] || [], Ze.tweeners[n].unshift(t)
        },
        prefilters: [function(t, e, n) {
            var i, o, s, r, a, l, c, u = this,
                d = {},
                h = t.style,
                p = t.nodeType && U(t),
                f = M.get(t, "fxshow");
            for (i in n.queue || (null == (a = k._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, u.always(function() {
                    u.always(function() {
                        a.unqueued--, k.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = k.css(t, "display")) ? M.get(t, "olddisplay") || Te(t.nodeName) : c) && "none" === k.css(t, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", u.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), e)
                if (o = e[i], Ge.exec(o)) {
                    if (delete e[i], s = s || "toggle" === o, o === (p ? "hide" : "show")) {
                        if ("show" !== o || !f || void 0 === f[i]) continue;
                        p = !0
                    }
                    d[i] = f && f[i] || k.style(t, i)
                } else c = void 0;
            if (k.isEmptyObject(d)) "inline" === ("none" === c ? Te(t.nodeName) : c) && (h.display = c);
            else
                for (i in f ? "hidden" in f && (p = f.hidden) : f = M.access(t, "fxshow", {}), s && (f.hidden = !p), p ? k(t).show() : u.done(function() {
                        k(t).hide()
                    }), u.done(function() {
                        var e;
                        for (e in M.remove(t, "fxshow"), d) k.style(t, e, d[e])
                    }), d) r = Je(p ? f[i] : 0, i, u), i in f || (f[i] = r.start, p && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }],
        prefilter: function(e, t) {
            t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || k.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !k.isFunction(t) && t
        };
        return i.duration = k.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in k.fx.speeds ? k.fx.speeds[i.duration] : k.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            k.isFunction(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue)
        }, i
    }, k.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var o = k.isEmptyObject(t),
                s = k.speed(e, n, i),
                r = function() {
                    var e = Ze(this, k.extend({}, t), s);
                    (o || M.get(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(o, e, s) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(s)
            };
            return "string" != typeof o && (s = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = k.timers,
                    i = M.get(this);
                if (t) i[t] && i[t].stop && r(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && Xe.test(t) && r(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(s), e = !1, n.splice(t, 1));
                !e && s || k.dequeue(this, o)
            })
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"), this.each(function() {
                var e, t = M.get(this),
                    n = t[r + "queue"],
                    i = t[r + "queueHooks"],
                    o = k.timers,
                    s = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, r, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === r && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, i) {
        var o = k.fn[i];
        k.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(Ke(i, !0), e, t, n)
        }
    }), k.each({
        slideDown: Ke("show"),
        slideUp: Ke("hide"),
        slideToggle: Ke("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        k.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (qe = k.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), qe = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), e() ? k.fx.start() : k.timers.pop()
    }, k.fx.interval = 13, k.fx.start = function() {
        We || (We = C.setInterval(k.fx.tick, k.fx.interval))
    }, k.fx.stop = function() {
        C.clearInterval(We), We = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(i, e) {
        return i = k.fx && k.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, Ue = T.createElement("input"), Qe = T.createElement("select"), Ye = Qe.appendChild(T.createElement("option")), Ue.type = "checkbox", g.checkOn = "" !== Ue.value, g.optSelected = Ye.selected, Qe.disabled = !0, g.optDisabled = !Ye.disabled, (Ue = T.createElement("input")).value = "t", Ue.type = "radio", g.radioValue = "t" === Ue.value;
    var et, tt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return P(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === s && k.isXMLDoc(e) || (t = t.toLowerCase(), o = k.attrHooks[t] || (k.expr.match.bool.test(t) ? et : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = k.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!g.radioValue && "radio" === t && k.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                s = t && t.match(N);
            if (s && 1 === e.nodeType)
                for (; n = s[o++];) i = k.propFix[n] || n, k.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), et = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = tt[t] || k.find.attr;
        tt[t] = function(e, t, n) {
            var i, o;
            return n || (o = tt[t], tt[t] = i, i = null != s(e, t, n) ? t.toLowerCase() : null, tt[t] = o), i
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i,
        it = /^(?:a|area)$/i;
    k.fn.extend({
        prop: function(e, t) {
            return P(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && k.isXMLDoc(e) || (t = k.propFix[t] || t, o = k.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), g.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    });
    var ot = /[\t\r\n\f]/g;

    function st(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    k.fn.extend({
        addClass: function(t) {
            var e, n, i, o, s, r, a, l = 0;
            if (k.isFunction(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, st(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(N) || []; n = this[l++];)
                    if (o = st(n), i = 1 === n.nodeType && (" " + o + " ").replace(ot, " ")) {
                        for (r = 0; s = e[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        o !== (a = k.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, s, r, a, l = 0;
            if (k.isFunction(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, st(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(N) || []; n = this[l++];)
                    if (o = st(n), i = 1 === n.nodeType && (" " + o + " ").replace(ot, " ")) {
                        for (r = 0; s = e[r++];)
                            for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                        o !== (a = k.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var s = typeof o;
            return "boolean" == typeof t && "string" === s ? t ? this.addClass(o) : this.removeClass(o) : k.isFunction(o) ? this.each(function(e) {
                k(this).toggleClass(o.call(this, e, st(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if ("string" === s)
                    for (t = 0, n = k(this), i = o.match(N) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" !== s || ((e = st(this)) && M.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : M.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + st(n) + " ").replace(ot, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var rt = /\r/g,
        at = /[\x20\t\r\n\f]+/g;
    k.fn.extend({
        val: function(n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = k.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : k.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(rt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : k.trim(k.text(e)).replace(at, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : i.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
                        if (((n = i[l]).selected || l === o) && (g.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !k.nodeName(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), s) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, s = k.makeArray(t), r = o.length; r--;)((i = o[r]).selected = -1 < k.inArray(k.valHooks.option.get(i), s)) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                return k.isArray(t) ? e.checked = -1 < k.inArray(k(e).val(), t) : void 0
            }
        }, g.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var lt = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
        trigger: function(e, t, n, i) {
            var o, s, r, a, l, c, u, d = [n || T],
                h = f.call(e, "type") ? e.type : e,
                p = f.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = r = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !lt.test(h + k.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[k.expando] ? e : new k.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), u = k.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !k.isWindow(n)) {
                    for (a = u.delegateType || h, lt.test(a + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), r = s;
                    r === (n.ownerDocument || T) && d.push(r.defaultView || r.parentWindow || C)
                }
                for (o = 0;
                    (s = d[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? a : u.bindType || h, (c = (M.get(s, "events") || {})[e.type] && M.get(s, "handle")) && c.apply(s, t), (c = l && s[l]) && c.apply && _(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
                return e.type = h, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !_(n) || l && k.isFunction(n[h]) && !k.isWindow(n) && ((r = n[l]) && (n[l] = null), n[k.event.triggered = h](), k.event.triggered = void 0, r && (n[l] = r)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(i, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? k.event.trigger(e, t, n, !0) : void 0
        }
    }), k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), g.focusin = "onfocusin" in C, g.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var o = function(e) {
            k.event.simulate(i, e.target, k.event.fix(e))
        };
        k.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = M.access(e, i);
                t || e.addEventListener(n, o, !0), M.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = M.access(e, i) - 1;
                t ? M.access(e, i, t) : (e.removeEventListener(n, o, !0), M.remove(e, i))
            }
        }
    });
    var ct = C.location,
        ut = k.now(),
        dt = /\?/;
    k.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var ht = /#.*$/,
        pt = /([?&])_=[^&]*/,
        ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mt = /^(?:GET|HEAD)$/,
        gt = /^\/\//,
        vt = {},
        yt = {},
        bt = "*/".concat("*"),
        xt = T.createElement("a");

    function wt(s) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(N) || [];
            if (k.isFunction(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
        }
    }

    function $t(t, o, s, r) {
        var a = {},
            l = t === yt;

        function c(e) {
            var i;
            return a[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(o, s, r);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(o.dataTypes[0]) || !a["*"] && c("*")
    }

    function Ct(e, t) {
        var n, i, o = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && k.extend(!0, e, i), e
    }
    xt.href = ct.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": k.parseJSON,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ct(Ct(e, k.ajaxSettings), t) : Ct(k.ajaxSettings, e)
        },
        ajaxPrefilter: wt(vt),
        ajaxTransport: wt(yt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, h, n, p, i, f, o, m = k.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? k(g) : k.event,
                y = k.Deferred(),
                b = k.Callbacks("once memory"),
                x = m.statusCode || {},
                s = {},
                r = {},
                w = 0,
                a = "canceled",
                $ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!n)
                                for (n = {}; t = ft.exec(h);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = r[n] = r[n] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) x[t] = [x[t], e[t]];
                            else $.always(e[$.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || a;
                        return u && u.abort(t), l(0, t), this
                    }
                };
            if (y.promise($).complete = b.add, $.success = $.done, $.error = $.fail, m.url = ((e || m.url || ct.href) + "").replace(ht, "").replace(gt, ct.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = k.trim(m.dataType || "*").toLowerCase().match(N) || [""], null == m.crossDomain) {
                i = T.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = xt.protocol + "//" + xt.host != i.protocol + "//" + i.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), $t(vt, m, t, $), 2 === w) return $;
            for (o in (f = k.event && m.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !mt.test(m.type), d = m.url, m.hasContent || (m.data && (d = m.url += (dt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = pt.test(d) ? d.replace(pt, "$1_=" + ut++) : d + (dt.test(d) ? "&" : "?") + "_=" + ut++)), m.ifModified && (k.lastModified[d] && $.setRequestHeader("If-Modified-Since", k.lastModified[d]), k.etag[d] && $.setRequestHeader("If-None-Match", k.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && $.setRequestHeader("Content-Type", m.contentType), $.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : m.accepts["*"]), m.headers) $.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, $, m) || 2 === w)) return $.abort();
            for (o in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) $[o](m[o]);
            if (u = $t(yt, m, t, $)) {
                if ($.readyState = 1, f && v.trigger("ajaxSend", [$, m]), 2 === w) return $;
                m.async && 0 < m.timeout && (p = C.setTimeout(function() {
                    $.abort("timeout")
                }, m.timeout));
                try {
                    w = 1, u.send(s, l)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, i) {
                var o, s, r, a, l, c = t;
                2 !== w && (w = 2, p && C.clearTimeout(p), u = void 0, h = i || "", $.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, o, s, r, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in n) s = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                s = o;
                                break
                            }
                            r || (r = o)
                        }
                        s = s || r
                    }
                    return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
                }(m, $, n)), a = function(e, t, n, i) {
                    var o, s, r, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (s = u.shift(); s;)
                        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== r)
                            if (r && e.throws) t = r(t);
                            else try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, $, o), o ? (m.ifModified && ((l = $.getResponseHeader("Last-Modified")) && (k.lastModified[d] = l), (l = $.getResponseHeader("etag")) && (k.etag[d] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, s = a.data, o = !(r = a.error))) : (r = c, !e && c || (c = "error", e < 0 && (e = 0))), $.status = e, $.statusText = (t || c) + "", o ? y.resolveWith(g, [s, c, $]) : y.rejectWith(g, [$, c, r]), $.statusCode(x), x = void 0, f && v.trigger(o ? "ajaxSuccess" : "ajaxError", [$, m, o ? s : r]), b.fireWith(g, [$, c]), f && (v.trigger("ajaxComplete", [$, m]), --k.active || k.event.trigger("ajaxStop")))
            }
            return $
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, o) {
        k[o] = function(e, t, n, i) {
            return k.isFunction(t) && (i = i || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, k.fn.extend({
        wrapAll: function(t) {
            var e;
            return k.isFunction(t) ? this.each(function(e) {
                k(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return k.isFunction(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = k.isFunction(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                k.nodeName(this, "body") || k(this).replaceWith(this.childNodes)
            }).end()
        }
    }), k.expr.filters.hidden = function(e) {
        return !k.expr.filters.visible(e)
    }, k.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Tt = /%20/g,
        kt = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function Ot(n, e, i, o) {
        var t;
        if (k.isArray(e)) k.each(e, function(e, t) {
            i || kt.test(n) ? o(n, t) : Ot(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
        });
        else if (i || "object" !== k.type(e)) o(n, e);
        else
            for (t in e) Ot(n + "[" + t + "]", e[t], i, o)
    }
    k.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = k.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = k.ajaxSettings && k.ajaxSettings.traditional), k.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Ot(n, e[n], t, o);
        return i.join("&").replace(Tt, "+")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && At.test(this.nodeName) && !St.test(e) && (this.checked || !Y.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : k.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    }), k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var jt = {
            0: 200,
            1223: 204
        },
        It = k.ajaxSettings.xhr();
    g.cors = !!It && "withCredentials" in It, g.ajax = It = !!It, k.ajaxTransport(function(o) {
        var s, r;
        return g.cors || It && !o.crossDomain ? {
            send: function(e, t) {
                var n, i = o.xhr();
                if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) i[n] = o.xhrFields[n];
                for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                s = function(e) {
                    return function() {
                        s && (s = r = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(jt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = s(), r = i.onerror = s("error"), void 0 !== i.onabort ? i.onabort = r : i.onreadystatechange = function() {
                    4 === i.readyState && C.setTimeout(function() {
                        s && r()
                    })
                }, s = s("abort");
                try {
                    i.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (s) throw e
                }
            },
            abort: function() {
                s && s()
            }
        } : void 0
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = k("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), T.head.appendChild(i[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Nt = [],
        Dt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Nt.pop() || k.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, s, r = !1 !== e.jsonp && (Dt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(e.data) && "data");
        return r || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = k.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Dt, "$1" + i) : !1 !== e.jsonp && (e.url += (dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return s || k.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = C[i], C[i] = function() {
            s = arguments
        }, n.always(function() {
            void 0 === o ? k(C).removeProp(i) : C[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Nt.push(i)), s && k.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), k.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || T;
        var i = x.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = ne([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes))
    };
    var Pt = k.fn.load;

    function _t(e) {
        return k.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    k.fn.load = function(e, t, n) {
        if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
        var i, o, s, r = this,
            a = e.indexOf(" ");
        return -1 < a && (i = k.trim(e.slice(a)), e = e.slice(0, a)), k.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < r.length && k.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, r.html(i ? k("<div>").append(k.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            r.each(function() {
                n.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.filters.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var i, o, s, r, a, l, c = k.css(e, "position"),
                u = k(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), s = k.css(e, "top"), l = k.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (r = (i = u.position()).top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), k.isFunction(t) && (t = t.call(e, n, k.extend({}, a))), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                s = i && i.ownerDocument;
            return s ? (e = s.documentElement, k.contains(e, i) ? (o = i.getBoundingClientRect(), n = _t(s), {
                top: o.top + n.pageYOffset - e.clientTop,
                left: o.left + n.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === k.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), k.nodeName(e[0], "html") || (i = e.offset()), i.top += k.css(e[0], "borderTopWidth", !0), i.left += k.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - k.css(n, "marginTop", !0),
                    left: t.left - i.left - k.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || Oe
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var s = "pageYOffset" === o;
        k.fn[t] = function(e) {
            return P(this, function(e, t, n) {
                var i = _t(e);
                return void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = Ie(g.pixelPosition, function(e, t) {
            return t ? (t = je(e, n), Ee.test(t) ? k(e).position()[n] + "px" : t) : void 0
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(s, r) {
        k.each({
            padding: "inner" + s,
            content: r,
            "": "outer" + s
        }, function(i, e) {
            k.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return P(this, function(e, t, n) {
                    var i;
                    return k.isWindow(e) ? e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? k.css(e, t, o) : k.style(e, t, n, o)
                }, r, n ? e : void 0, n, null)
            }
        })
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), k.fn.andSelf = k.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Bt = C.jQuery,
        Mt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Mt), e && C.jQuery === k && (C.jQuery = Bt), k
    }, e || (C.jQuery = C.$ = k), k
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(e) {
"use strict";
var t = jQuery.fn.jquery.split(" ")[0].split(".");
if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 3 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(i) {
"use strict";
i.fn.emulateTransitionEnd = function(e) {
    var t = !1,
        n = this;
    i(this).one("bsTransitionEnd", function() {
        t = !0
    });
    return setTimeout(function() {
        t || i(n).trigger(i.support.transition.end)
    }, e), this
}, i(function() {
    i.support.transition = function() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }(), i.support.transition && (i.event.special.bsTransitionEnd = {
        bindType: i.support.transition.end,
        delegateType: i.support.transition.end,
        handle: function(e) {
            if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    })
})
}(jQuery),
function(s) {
"use strict";
var t = '[data-dismiss="alert"]',
    r = function(e) {
        s(e).on("click", t, this.close)
    };
r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.close = function(e) {
    function t() {
        o.detach().trigger("closed.bs.alert").remove()
    }
    var n = s(this),
        i = n.attr("data-target");
    i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var o = s("#" === i ? [] : i);
    e && e.preventDefault(), o.length || (o = n.closest(".alert")), o.trigger(e = s.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", t).emulateTransitionEnd(r.TRANSITION_DURATION) : t())
};
var e = s.fn.alert;
s.fn.alert = function(n) {
    return this.each(function() {
        var e = s(this),
            t = e.data("bs.alert");
        t || e.data("bs.alert", t = new r(this)), "string" == typeof n && t[n].call(e)
    })
}, s.fn.alert.Constructor = r, s.fn.alert.noConflict = function() {
    return s.fn.alert = e, this
}, s(document).on("click.bs.alert.data-api", t, r.prototype.close)
}(jQuery),
function(s) {
"use strict";

function n(i) {
    return this.each(function() {
        var e = s(this),
            t = e.data("bs.button"),
            n = "object" == typeof i && i;
        t || e.data("bs.button", t = new o(this, n)), "toggle" == i ? t.toggle() : i && t.setState(i)
    })
}
var o = function(e, t) {
    this.$element = s(e), this.options = s.extend({}, o.DEFAULTS, t), this.isLoading = !1
};
o.VERSION = "3.3.7", o.DEFAULTS = {
    loadingText: "loading..."
}, o.prototype.setState = function(e) {
    var t = "disabled",
        n = this.$element,
        i = n.is("input") ? "val" : "html",
        o = n.data();
    e += "Text", null == o.resetText && n.data("resetText", n[i]()), setTimeout(s.proxy(function() {
        n[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(t).attr(t, t).prop(t, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(t).removeAttr(t).prop(t, !1))
    }, this), 0)
}, o.prototype.toggle = function() {
    var e = !0,
        t = this.$element.closest('[data-toggle="buttons"]');
    if (t.length) {
        var n = this.$element.find("input");
        "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var e = s.fn.button;
s.fn.button = n, s.fn.button.Constructor = o, s.fn.button.noConflict = function() {
    return s.fn.button = e, this
}, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    var t = s(e.target).closest(".btn");
    n.call(t, "toggle"), s(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), t.is("input,button") ? t.trigger("focus") : t.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    s(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
})
}(jQuery),
function(d) {
"use strict";

function r(o) {
    return this.each(function() {
        var e = d(this),
            t = e.data("bs.carousel"),
            n = d.extend({}, h.DEFAULTS, e.data(), "object" == typeof o && o),
            i = "string" == typeof o ? o : n.slide;
        t || e.data("bs.carousel", t = new h(this, n)), "number" == typeof o ? t.to(o) : i ? t[i]() : n.interval && t.pause().cycle()
    })
}
var h = function(e, t) {
    this.$element = d(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = t, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", d.proxy(this.pause, this)).on("mouseleave.bs.carousel", d.proxy(this.cycle, this))
};
h.VERSION = "3.3.7", h.TRANSITION_DURATION = 600, h.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, h.prototype.keydown = function(e) {
    if (!/input|textarea/i.test(e.target.tagName)) {
        switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        e.preventDefault()
    }
}, h.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(d.proxy(this.next, this), this.options.interval)), this
}, h.prototype.getItemIndex = function(e) {
    return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
}, h.prototype.getItemForDirection = function(e, t) {
    var n = this.getItemIndex(t);
    if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
    var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
    return this.$items.eq(i)
}, h.prototype.to = function(e) {
    var t = this,
        n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
        t.to(e)
    }) : n == e ? this.pause().cycle() : this.slide(n < e ? "next" : "prev", this.$items.eq(e))
}, h.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && d.support.transition && (this.$element.trigger(d.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, h.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
}, h.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
}, h.prototype.slide = function(e, t) {
    var n = this.$element.find(".item.active"),
        i = t || this.getItemForDirection(e, n),
        o = this.interval,
        s = "next" == e ? "left" : "right",
        r = this;
    if (i.hasClass("active")) return this.sliding = !1;
    var a = i[0],
        l = d.Event("slide.bs.carousel", {
            relatedTarget: a,
            direction: s
        });
    if (this.$element.trigger(l), !l.isDefaultPrevented()) {
        if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var c = d(this.$indicators.children()[this.getItemIndex(i)]);
            c && c.addClass("active")
        }
        var u = d.Event("slid.bs.carousel", {
            relatedTarget: a,
            direction: s
        });
        return d.support.transition && this.$element.hasClass("slide") ? (i.addClass(e), i[0].offsetWidth, n.addClass(s), i.addClass(s), n.one("bsTransitionEnd", function() {
            i.removeClass([e, s].join(" ")).addClass("active"), n.removeClass(["active", s].join(" ")), r.sliding = !1, setTimeout(function() {
                r.$element.trigger(u)
            }, 0)
        }).emulateTransitionEnd(h.TRANSITION_DURATION)) : (n.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(u)), o && this.cycle(), this
    }
};
var e = d.fn.carousel;
d.fn.carousel = r, d.fn.carousel.Constructor = h, d.fn.carousel.noConflict = function() {
    return d.fn.carousel = e, this
};
var t = function(e) {
    var t, n = d(this),
        i = d(n.attr("data-target") || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""));
    if (i.hasClass("carousel")) {
        var o = d.extend({}, i.data(), n.data()),
            s = n.attr("data-slide-to");
        s && (o.interval = !1), r.call(i, o), s && i.data("bs.carousel").to(s), e.preventDefault()
    }
};
d(document).on("click.bs.carousel.data-api", "[data-slide]", t).on("click.bs.carousel.data-api", "[data-slide-to]", t), d(window).on("load", function() {
    d('[data-ride="carousel"]').each(function() {
        var e = d(this);
        r.call(e, e.data())
    })
})
}(jQuery),
function(r) {
"use strict";

function o(e) {
    var t, n = e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
    return r(n)
}

function a(i) {
    return this.each(function() {
        var e = r(this),
            t = e.data("bs.collapse"),
            n = r.extend({}, l.DEFAULTS, e.data(), "object" == typeof i && i);
        !t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || e.data("bs.collapse", t = new l(this, n)), "string" == typeof i && t[i]()
    })
}
var l = function(e, t) {
    this.$element = r(e), this.options = r.extend({}, l.DEFAULTS, t), this.$trigger = r('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
l.VERSION = "3.3.7", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
    toggle: !0
}, l.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
}, l.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var e, t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(t && t.length && ((e = t.data("bs.collapse")) && e.transitioning))) {
            var n = r.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                t && t.length && (a.call(t, "hide"), e || t.data("bs.collapse", null));
                var i = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!r.support.transition) return o.call(this);
                var s = r.camelCase(["scroll", i].join("-"));
                this.$element.one("bsTransitionEnd", r.proxy(o, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][s])
            }
        }
    }
}, l.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var e = r.Event("hide.bs.collapse");
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var t = this.dimension();
            this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var n = function() {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return r.support.transition ? void this.$element[t](0).one("bsTransitionEnd", r.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : n.call(this)
        }
    }
}, l.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, l.prototype.getParent = function() {
    return r(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(r.proxy(function(e, t) {
        var n = r(t);
        this.addAriaAndCollapsedClass(o(n), n)
    }, this)).end()
}, l.prototype.addAriaAndCollapsedClass = function(e, t) {
    var n = e.hasClass("in");
    e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
};
var e = r.fn.collapse;
r.fn.collapse = a, r.fn.collapse.Constructor = l, r.fn.collapse.noConflict = function() {
    return r.fn.collapse = e, this
}, r(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
    var t = r(this);
    t.attr("data-target") || e.preventDefault();
    var n = o(t),
        i = n.data("bs.collapse") ? "toggle" : t.data();
    a.call(n, i)
})
}(jQuery),
function(r) {
"use strict";

function a(e) {
    var t = e.attr("data-target");
    t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
    var n = t && r(t);
    return n && n.length ? n : e.parent()
}

function s(i) {
    i && 3 === i.which || (r(e).remove(), r(l).each(function() {
        var e = r(this),
            t = a(e),
            n = {
                relatedTarget: this
            };
        t.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && r.contains(t[0], i.target) || (t.trigger(i = r.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), t.removeClass("open").trigger(r.Event("hidden.bs.dropdown", n)))))
    }))
}
var e = ".dropdown-backdrop",
    l = '[data-toggle="dropdown"]',
    i = function(e) {
        r(e).on("click.bs.dropdown", this.toggle)
    };
i.VERSION = "3.3.7", i.prototype.toggle = function(e) {
    var t = r(this);
    if (!t.is(".disabled, :disabled")) {
        var n = a(t),
            i = n.hasClass("open");
        if (s(), !i) {
            "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && r(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(r(this)).on("click", s);
            var o = {
                relatedTarget: this
            };
            if (n.trigger(e = r.Event("show.bs.dropdown", o)), e.isDefaultPrevented()) return;
            t.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(r.Event("shown.bs.dropdown", o))
        }
        return !1
    }
}, i.prototype.keydown = function(e) {
    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
        var t = r(this);
        if (e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled")) {
            var n = a(t),
                i = n.hasClass("open");
            if (!i && 27 != e.which || i && 27 == e.which) return 27 == e.which && n.find(l).trigger("focus"), t.trigger("click");
            var o = n.find(".dropdown-menu li:not(.disabled):visible a");
            if (o.length) {
                var s = o.index(e.target);
                38 == e.which && 0 < s && s--, 40 == e.which && s < o.length - 1 && s++, ~s || (s = 0), o.eq(s).trigger("focus")
            }
        }
    }
};
var t = r.fn.dropdown;
r.fn.dropdown = function(n) {
    return this.each(function() {
        var e = r(this),
            t = e.data("bs.dropdown");
        t || e.data("bs.dropdown", t = new i(this)), "string" == typeof n && t[n].call(e)
    })
}, r.fn.dropdown.Constructor = i, r.fn.dropdown.noConflict = function() {
    return r.fn.dropdown = t, this
}, r(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
    e.stopPropagation()
}).on("click.bs.dropdown.data-api", l, i.prototype.toggle).on("keydown.bs.dropdown.data-api", l, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function(s) {
"use strict";

function r(i, o) {
    return this.each(function() {
        var e = s(this),
            t = e.data("bs.modal"),
            n = s.extend({}, a.DEFAULTS, e.data(), "object" == typeof i && i);
        t || e.data("bs.modal", t = new a(this, n)), "string" == typeof i ? t[i](o) : n.show && t.show(o)
    })
}
var a = function(e, t) {
    this.options = t, this.$body = s(document.body), this.$element = s(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
a.VERSION = "3.3.7", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, a.prototype.toggle = function(e) {
    return this.isShown ? this.hide() : this.show(e)
}, a.prototype.show = function(n) {
    var i = this,
        e = s.Event("show.bs.modal", {
            relatedTarget: n
        });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
        i.$element.one("mouseup.dismiss.bs.modal", function(e) {
            s(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
        })
    }), this.backdrop(function() {
        var e = s.support.transition && i.$element.hasClass("fade");
        i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), e && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
        var t = s.Event("shown.bs.modal", {
            relatedTarget: n
        });
        e ? i.$dialog.one("bsTransitionEnd", function() {
            i.$element.trigger("focus").trigger(t)
        }).emulateTransitionEnd(a.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(t)
    }))
}, a.prototype.hide = function(e) {
    e && e.preventDefault(), e = s.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), s(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
}, a.prototype.enforceFocus = function() {
    s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function(e) {
        document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
    }, this))
}, a.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function(e) {
        27 == e.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, a.prototype.resize = function() {
    this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal")
}, a.prototype.hideModal = function() {
    var e = this;
    this.$element.hide(), this.backdrop(function() {
        e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
    })
}, a.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, a.prototype.backdrop = function(e) {
    var t = this,
        n = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var i = s.support.transition && n;
        if (this.$backdrop = s(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", s.proxy(function(e) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
        i ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var o = function() {
            t.removeBackdrop(), e && e()
        };
        s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : o()
    } else e && e()
}, a.prototype.handleUpdate = function() {
    this.adjustDialog()
}, a.prototype.adjustDialog = function() {
    var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
    })
}, a.prototype.resetAdjustments = function() {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, a.prototype.checkScrollbar = function() {
    var e = window.innerWidth;
    if (!e) {
        var t = document.documentElement.getBoundingClientRect();
        e = t.right - Math.abs(t.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
}, a.prototype.setScrollbar = function() {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
}, a.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
}, a.prototype.measureScrollbar = function() {
    var e = document.createElement("div");
    e.className = "modal-scrollbar-measure", this.$body.append(e);
    var t = e.offsetWidth - e.clientWidth;
    return this.$body[0].removeChild(e), t
};
var e = s.fn.modal;
s.fn.modal = r, s.fn.modal.Constructor = a, s.fn.modal.noConflict = function() {
    return s.fn.modal = e, this
}, s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
    var t = s(this),
        n = t.attr("href"),
        i = s(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
        o = i.data("bs.modal") ? "toggle" : s.extend({
            remote: !/#/.test(n) && n
        }, i.data(), t.data());
    t.is("a") && e.preventDefault(), i.one("show.bs.modal", function(e) {
        e.isDefaultPrevented() || i.one("hidden.bs.modal", function() {
            t.is(":visible") && t.trigger("focus")
        })
    }), r.call(i, o, this)
})
}(jQuery),
function(m) {
"use strict";
var g = function(e, t) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
};
g.VERSION = "3.3.7", g.TRANSITION_DURATION = 150, g.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, g.prototype.init = function(e, t, n) {
    if (this.enabled = !0, this.type = e, this.$element = m(t), this.options = this.getOptions(n), this.$viewport = this.options.viewport && m(m.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
        var s = i[o];
        if ("click" == s) this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this));
        else if ("manual" != s) {
            var r = "hover" == s ? "mouseenter" : "focusin",
                a = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(r + "." + this.type, this.options.selector, m.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, m.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = m.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, g.prototype.getDefaults = function() {
    return g.DEFAULTS
}, g.prototype.getOptions = function(e) {
    return (e = m.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
    }), e
}, g.prototype.getDelegateOptions = function() {
    var n = {},
        i = this.getDefaults();
    return this._options && m.each(this._options, function(e, t) {
        i[e] != t && (n[e] = t)
    }), n
}, g.prototype.enter = function(e) {
    var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
    return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), m(e.currentTarget).data("bs." + this.type, t)), e instanceof m.Event && (t.inState["focusin" == e.type ? "focus" : "hover"] = !0), t.tip().hasClass("in") || "in" == t.hoverState ? void(t.hoverState = "in") : (clearTimeout(t.timeout), t.hoverState = "in", t.options.delay && t.options.delay.show ? void(t.timeout = setTimeout(function() {
        "in" == t.hoverState && t.show()
    }, t.options.delay.show)) : t.show())
}, g.prototype.isInStateTrue = function() {
    for (var e in this.inState)
        if (this.inState[e]) return !0;
    return !1
}, g.prototype.leave = function(e) {
    var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
    if (t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), m(e.currentTarget).data("bs." + this.type, t)), e instanceof m.Event && (t.inState["focusout" == e.type ? "focus" : "hover"] = !1), !t.isInStateTrue()) return clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void(t.timeout = setTimeout(function() {
        "out" == t.hoverState && t.hide()
    }, t.options.delay.hide)) : t.hide()
}, g.prototype.show = function() {
    var e = m.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        var t = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (e.isDefaultPrevented() || !t) return;
        var n = this,
            i = this.tip(),
            o = this.getUID(this.type);
        this.setContent(), i.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && i.addClass("fade");
        var s = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
            r = /\s?auto?\s?/i,
            a = r.test(s);
        a && (s = s.replace(r, "") || "top"), i.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(s).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
        var l = this.getPosition(),
            c = i[0].offsetWidth,
            u = i[0].offsetHeight;
        if (a) {
            var d = s,
                h = this.getPosition(this.$viewport);
            s = "bottom" == s && l.bottom + u > h.bottom ? "top" : "top" == s && l.top - u < h.top ? "bottom" : "right" == s && l.right + c > h.width ? "left" : "left" == s && l.left - c < h.left ? "right" : s, i.removeClass(d).addClass(s)
        }
        var p = this.getCalculatedOffset(s, l, c, u);
        this.applyPlacement(p, s);
        var f = function() {
            var e = n.hoverState;
            n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == e && n.leave(n)
        };
        m.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", f).emulateTransitionEnd(g.TRANSITION_DURATION) : f()
    }
}, g.prototype.applyPlacement = function(e, t) {
    var n = this.tip(),
        i = n[0].offsetWidth,
        o = n[0].offsetHeight,
        s = parseInt(n.css("margin-top"), 10),
        r = parseInt(n.css("margin-left"), 10);
    isNaN(s) && (s = 0), isNaN(r) && (r = 0), e.top += s, e.left += r, m.offset.setOffset(n[0], m.extend({
        using: function(e) {
            n.css({
                top: Math.round(e.top),
                left: Math.round(e.left)
            })
        }
    }, e), 0), n.addClass("in");
    var a = n[0].offsetWidth,
        l = n[0].offsetHeight;
    "top" == t && l != o && (e.top = e.top + o - l);
    var c = this.getViewportAdjustedDelta(t, e, a, l);
    c.left ? e.left += c.left : e.top += c.top;
    var u = /top|bottom/.test(t),
        d = u ? 2 * c.left - i + a : 2 * c.top - o + l,
        h = u ? "offsetWidth" : "offsetHeight";
    n.offset(e), this.replaceArrow(d, n[0][h], u)
}, g.prototype.replaceArrow = function(e, t, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
}, g.prototype.setContent = function() {
    var e = this.tip(),
        t = this.getTitle();
    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
}, g.prototype.hide = function(e) {
    function t() {
        "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
    }
    var n = this,
        i = m(this.$tip),
        o = m.Event("hide.bs." + this.type);
    if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), m.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(g.TRANSITION_DURATION) : t(), this.hoverState = null, this
}, g.prototype.fixTitle = function() {
    var e = this.$element;
    (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
}, g.prototype.hasContent = function() {
    return this.getTitle()
}, g.prototype.getPosition = function(e) {
    var t = (e = e || this.$element)[0],
        n = "BODY" == t.tagName,
        i = t.getBoundingClientRect();
    null == i.width && (i = m.extend({}, i, {
        width: i.right - i.left,
        height: i.bottom - i.top
    }));
    var o = window.SVGElement && t instanceof window.SVGElement,
        s = n ? {
            top: 0,
            left: 0
        } : o ? null : e.offset(),
        r = {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        },
        a = n ? {
            width: m(window).width(),
            height: m(window).height()
        } : null;
    return m.extend({}, i, r, a, s)
}, g.prototype.getCalculatedOffset = function(e, t, n, i) {
    return "bottom" == e ? {
        top: t.top + t.height,
        left: t.left + t.width / 2 - n / 2
    } : "top" == e ? {
        top: t.top - i,
        left: t.left + t.width / 2 - n / 2
    } : "left" == e ? {
        top: t.top + t.height / 2 - i / 2,
        left: t.left - n
    } : {
        top: t.top + t.height / 2 - i / 2,
        left: t.left + t.width
    }
}, g.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
    var o = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return o;
    var s = this.options.viewport && this.options.viewport.padding || 0,
        r = this.getPosition(this.$viewport);
    if (/right|left/.test(e)) {
        var a = t.top - s - r.scroll,
            l = t.top + s - r.scroll + i;
        a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
    } else {
        var c = t.left - s,
            u = t.left + s + n;
        c < r.left ? o.left = r.left - c : u > r.right && (o.left = r.left + r.width - u)
    }
    return o
}, g.prototype.getTitle = function() {
    var e = this.$element,
        t = this.options;
    return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
}, g.prototype.getUID = function(e) {
    for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
    return e
}, g.prototype.tip = function() {
    if (!this.$tip && (this.$tip = m(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
}, g.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, g.prototype.enable = function() {
    this.enabled = !0
}, g.prototype.disable = function() {
    this.enabled = !1
}, g.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, g.prototype.toggle = function(e) {
    var t = this;
    e && ((t = m(e.currentTarget).data("bs." + this.type)) || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), m(e.currentTarget).data("bs." + this.type, t))), e ? (t.inState.click = !t.inState.click, t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
}, g.prototype.destroy = function() {
    var e = this;
    clearTimeout(this.timeout), this.hide(function() {
        e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
    })
};
var e = m.fn.tooltip;
m.fn.tooltip = function(i) {
    return this.each(function() {
        var e = m(this),
            t = e.data("bs.tooltip"),
            n = "object" == typeof i && i;
        !t && /destroy|hide/.test(i) || (t || e.data("bs.tooltip", t = new g(this, n)), "string" == typeof i && t[i]())
    })
}, m.fn.tooltip.Constructor = g, m.fn.tooltip.noConflict = function() {
    return m.fn.tooltip = e, this
}
}(jQuery),
function(o) {
"use strict";
var s = function(e, t) {
    this.init("popover", e, t)
};
if (!o.fn.tooltip) throw new Error("Popover requires tooltip.js");
s.VERSION = "3.3.7", s.DEFAULTS = o.extend({}, o.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), s.prototype = o.extend({}, o.fn.tooltip.Constructor.prototype), (s.prototype.constructor = s).prototype.getDefaults = function() {
    return s.DEFAULTS
}, s.prototype.setContent = function() {
    var e = this.tip(),
        t = this.getTitle(),
        n = this.getContent();
    e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
}, s.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, s.prototype.getContent = function() {
    var e = this.$element,
        t = this.options;
    return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
}, s.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var e = o.fn.popover;
o.fn.popover = function(i) {
    return this.each(function() {
        var e = o(this),
            t = e.data("bs.popover"),
            n = "object" == typeof i && i;
        !t && /destroy|hide/.test(i) || (t || e.data("bs.popover", t = new s(this, n)), "string" == typeof i && t[i]())
    })
}, o.fn.popover.Constructor = s, o.fn.popover.noConflict = function() {
    return o.fn.popover = e, this
}
}(jQuery),
function(s) {
"use strict";

function o(e, t) {
    this.$body = s(document.body), this.$scrollElement = s(s(e).is(document.body) ? window : e), this.options = s.extend({}, o.DEFAULTS, t), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)), this.refresh(), this.process()
}

function t(i) {
    return this.each(function() {
        var e = s(this),
            t = e.data("bs.scrollspy"),
            n = "object" == typeof i && i;
        t || e.data("bs.scrollspy", t = new o(this, n)), "string" == typeof i && t[i]()
    })
}
o.VERSION = "3.3.7", o.DEFAULTS = {
    offset: 10
}, o.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, o.prototype.refresh = function() {
    var e = this,
        i = "offset",
        o = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), s.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        var e = s(this),
            t = e.data("target") || e.attr("href"),
            n = /^#./.test(t) && s(t);
        return n && n.length && n.is(":visible") && [
            [n[i]().top + o, t]
        ] || null
    }).sort(function(e, t) {
        return e[0] - t[0]
    }).each(function() {
        e.offsets.push(this[0]), e.targets.push(this[1])
    })
}, o.prototype.process = function() {
    var e, t = this.$scrollElement.scrollTop() + this.options.offset,
        n = this.getScrollHeight(),
        i = this.options.offset + n - this.$scrollElement.height(),
        o = this.offsets,
        s = this.targets,
        r = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), i <= t) return r != (e = s[s.length - 1]) && this.activate(e);
    if (r && t < o[0]) return this.activeTarget = null, this.clear();
    for (e = o.length; e--;) r != s[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(s[e])
}, o.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var t = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        n = s(t).parents("li").addClass("active");
    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
}, o.prototype.clear = function() {
    s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var e = s.fn.scrollspy;
s.fn.scrollspy = t, s.fn.scrollspy.Constructor = o, s.fn.scrollspy.noConflict = function() {
    return s.fn.scrollspy = e, this
}, s(window).on("load.bs.scrollspy.data-api", function() {
    s('[data-spy="scroll"]').each(function() {
        var e = s(this);
        t.call(e, e.data())
    })
})
}(jQuery),
function(a) {
"use strict";

function t(n) {
    return this.each(function() {
        var e = a(this),
            t = e.data("bs.tab");
        t || e.data("bs.tab", t = new r(this)), "string" == typeof n && t[n]()
    })
}
var r = function(e) {
    this.element = a(e)
};
r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.show = function() {
    var e = this.element,
        t = e.closest("ul:not(.dropdown-menu)"),
        n = e.data("target");
    if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
        var i = t.find(".active:last a"),
            o = a.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }),
            s = a.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
        if (i.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
            var r = a(n);
            this.activate(e.closest("li"), t), this.activate(r, r.parent(), function() {
                i.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: e[0]
                }), e.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: i[0]
                })
            })
        }
    }
}, r.prototype.activate = function(e, t, n) {
    function i() {
        o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
    }
    var o = t.find("> .active"),
        s = n && a.support.transition && (o.length && o.hasClass("fade") || !!t.find("> .fade").length);
    o.length && s ? o.one("bsTransitionEnd", i).emulateTransitionEnd(r.TRANSITION_DURATION) : i(), o.removeClass("in")
};
var e = a.fn.tab;
a.fn.tab = t, a.fn.tab.Constructor = r, a.fn.tab.noConflict = function() {
    return a.fn.tab = e, this
};
var n = function(e) {
    e.preventDefault(), t.call(a(this), "show")
};
a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function(l) {
"use strict";

function n(i) {
    return this.each(function() {
        var e = l(this),
            t = e.data("bs.affix"),
            n = "object" == typeof i && i;
        t || e.data("bs.affix", t = new c(this, n)), "string" == typeof i && t[i]()
    })
}
var c = function(e, t) {
    this.options = l.extend({}, c.DEFAULTS, t), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
}, c.prototype.getState = function(e, t, n, i) {
    var o = this.$target.scrollTop(),
        s = this.$element.offset(),
        r = this.$target.height();
    if (null != n && "top" == this.affixed) return o < n && "top";
    if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= e - i) && "bottom";
    var a = null == this.affixed,
        l = a ? o : s.top;
    return null != n && o <= n ? "top" : null != i && e - i <= l + (a ? r : t) && "bottom"
}, c.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var e = this.$target.scrollTop(),
        t = this.$element.offset();
    return this.pinnedOffset = t.top - e
}, c.prototype.checkPositionWithEventLoop = function() {
    setTimeout(l.proxy(this.checkPosition, this), 1)
}, c.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var e = this.$element.height(),
            t = this.options.offset,
            n = t.top,
            i = t.bottom,
            o = Math.max(l(document).height(), l(document.body).height());
        "object" != typeof t && (i = n = t), "function" == typeof n && (n = t.top(this.$element)), "function" == typeof i && (i = t.bottom(this.$element));
        var s = this.getState(o, e, n, i);
        if (this.affixed != s) {
            null != this.unpin && this.$element.css("top", "");
            var r = "affix" + (s ? "-" + s : ""),
                a = l.Event(r + ".bs.affix");
            if (this.$element.trigger(a), a.isDefaultPrevented()) return;
            this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(r).trigger(r.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == s && this.$element.offset({
            top: o - e - i
        })
    }
};
var e = l.fn.affix;
l.fn.affix = n, l.fn.affix.Constructor = c, l.fn.affix.noConflict = function() {
    return l.fn.affix = e, this
}, l(window).on("load", function() {
    l('[data-spy="affix"]').each(function() {
        var e = l(this),
            t = e.data();
        t.offset = t.offset || {}, null != t.offsetBottom && (t.offset.bottom = t.offsetBottom), null != t.offsetTop && (t.offset.top = t.offsetTop), n.call(e, t)
    })
})
}(jQuery);
var busca_active = !1,
overResultado = !1;
$(document).ready(function() {
jQuery.fn.extend({
    BuscaSanar: function(f) {
        var s = {};
        f = $.extend({}, {
            placeholder: "Busque por produtos ou conteÃºdo",
            class_busca: "col-md-12 col-sm-10 col-xs-12 div-busca",
            class_input: "input-busca col-md-12 col-xs-12",
            class_icon_find: "demo-icon-editora icon-search-1",
            icon_find: "&#xe800;",
            ordem: ["produtos", "posts"],
            query: "",
            url_cdn: "https://53748h.ha.azioncdn.net/"
        }, f);
        var m = this.selector.replace("#", ""),
            r = !1,
            a = f.ordem.join(),
            e = "";
        e += '<div class="' + f.class_busca + " div-busca-" + m + '">', e += '<input name="busca_sanar-' + m + '" id="busca_sanar-' + m + '" type="text" class="' + f.class_input + '" value="' + f.query + '" placeholder="' + f.placeholder + '" />', e += '<label for="busca_sanar">', e += '<i class="' + f.class_icon_find + '">' + f.icon_find + "</i>", e += '</label><div class="results-busca results-busca-' + m + ' col-xs-12 nopadding-busca"></div></div>', $("#" + m).html(e);
        var l, c = !1,
            g = function(e, t) {
                var n = "";
                if ($("#" + e.currentTarget.id).data("clicked", !0), c = !0, "" != $("#" + e.currentTarget.id).attr("data-busca")) {
                    var i = $("#" + e.currentTarget.id).attr("data-busca");
                    n = "busca"
                } else {
                    i = $("#" + e.currentTarget.id).attr("data-redir");
                    n = "redir"
                }
                location.href = "redir" != n ? "/busca?query=" + i + "&ordem=" + a : i
            },
            u = !1,
            v = function(e, t) {
                overResultado = !0
            },
            y = function(e, t) {
                overResultado = !1
            },
            d = !1,
            n = function(e, t) {
                setTimeout(function() {
                    overResultado || (u = busca_active = !1, $("#header-overlay").remove(), $(".results-busca-" + m).attr("style", "display: none"), d = !1, $(".results-busca-" + m).html(""))
                }, 300)
            },
            h = function(e, t) {
                n()
            },
            p = function(e, t) {
                busca_active = !0;
                var n = $("#busca_sanar-" + m).val(),
                    i = ["Yellowbook", "PreparatÃ³rio para ResidÃªncia MÃ©dica - SUS SP", "1.000 QuestÃµes Comentadas de Provas e Concursos em Psicologia", "NutriÃ§Ã£o ClÃ­nica para Concursos e ResidÃªncias", "Curso Online PreparatÃ³rio para ResidÃªncias em NutriÃ§Ã£o"],
                    o = "";
                if ($(".results-filtro-" + m).html(""), 2 < n.length) T();
                else if (c || d) c = !1;
                else {
                    u || ($(".div-busca-" + m).append("<div id='header-overlay'></div>"), $("#header-overlay").on("click", h), overResultado = !(u = !0)), $(".results-busca-" + m).html(""), d = !0, $(".results-busca-" + m).attr("style", "display: block");
                    for (var s = 0; s < i.length; s++) o = '<div id="results-click-' + s + '" class="results-click results-click-' + m + '" data-busca="' + i[s] + '">', o += '<div class="col-xs-1 nopadding-busca"><i class="demo-icon-editora demo-icon-editora-' + m + '" data-busca="' + i[s] + '">' + f.icon_find + "</i></div>", o += '<div class="col-xs-11 nopadding-busca">' + i[s] + "</div>", o += '<div class="clearfix"></div>', o += '</div><div class="clearfix"></div>', $(".results-busca-" + m).append(o);
                    $(".results-click-" + m).on("click", g), $(".demo-icon-editora-" + m).on("click", g), $(".results-click-" + m).on("mouseover", v), $(".results-click-" + m).on("mouseout", y)
                }
            },
            b = {},
            x = 0,
            w = function(e, t) {
                busca_active = !0, b[x] = !1;
                for (var n = 0; n < x; n++) b[n] = !0;
                if (1 == b[x]) return $(".results-filtro-" + m).remove(), void $(".clickTodos").remove();
                var i, o, s = !1,
                    r = "",
                    a = "",
                    l = "";
                $(".results-filtro-" + m).remove(), $(".clickTodos").remove(), r = "";
                for (var c = 0; c < f.ordem.length; c++)
                    if (void 0 !== e[f.ordem[c]] && void 0 !== e[f.ordem[c]])
                        for (var u = 0; u < e[f.ordem[c]].length; u++) {
                            if (void 0 !== t) {
                                if ("residencias" == t && "RESIDENCIA" != e[f.ordem[c]][u].tipo_post) continue;
                                if ("concursos" == t && "RESIDENCIA" == e[f.ordem[c]][u].tipo_post) continue
                            }
                            if (s || (s = !0, $(".loading-busca").remove(), r += '<div class="resultados results-filtro-' + m + '">'), "produtos" == f.ordem[c]) {
                                if ("curso" == e[f.ordem[c]][u].prodTipo || "curso" == e[f.ordem[c]][u].prodExibicao) {
                                    var d = "/curso-online";
                                    i = -1 != e[f.ordem[c]][u].prodImagem.indexOf("https://") ? e[f.ordem[c]][u].prodImagem : -1 != e[f.ordem[c]][u].prodImagem.indexOf("esanar") ? "https://43748h.ha.azioncdn.net/" + e[f.ordem[c]][u].prodImagem : f.url_cdn + "/images/i225/" + e[f.ordem[c]][u].prodImagem
                                } else {
                                    if ("livro" == e[f.ordem[c]][u].prodExibicao) d = "/livro";
                                    else d = "/curso-online";
                                    i = -1 != e[f.ordem[c]][u].prodImagem.indexOf("esanar") ? "https://43748h.ha.azioncdn.net/" + e[f.ordem[c]][u].prodImagem : f.url_cdn + "/images/i225/" + e[f.ordem[c]][u].prodImagem
                                }
                                a = d + "/" + e[f.ordem[c]][u].prodURL, o = '<div class="col-xs-8 nopadding-busca">' + e[f.ordem[c]][u].prodTitulo + "</div>", l = '<div class="col-xs-4 nopadding-busca"><span class="col-md-12 prodPreco capa">De: R$ ' + e[f.ordem[c]][u].prodPreco + '</span><div class="clearfix"></div><span class="col-md-12 prodPreco">Por: R$ ' + e[f.ordem[c]][u].prodPrecoPromocional + "</span></div>"
                            } else "posts" == f.ordem[c] && (a = "RESIDENCIA" != e[f.ordem[c]][u].tipo_post ? "/" + e[f.ordem[c]][u].slug : "/residencia-multiprofissional/" + e[f.ordem[c]][u].post_url, i = e[f.ordem[c]][u].metadata.capa_mural, o = '<div class="col-xs-12 nopadding-busca">' + e[f.ordem[c]][u].titulo_post + "</div>", l = "");
                            r += '<div id="results-click-' + c + "-" + u + '" class="results-click results-click-' + c + "-" + u + "-" + m + '" data-busca="" data-redir="' + a + '">', r += '<div class="col-xs-2 nopadding-busca"><img src="' + i + '" style="max-width: 70px; width: 80%" /></div>', r += '<div class="col-xs-10 nopadding-busca title-busca">' + o + l + "</div>", r += '<div class="clearfix"></div>', r += "</div>"
                        }
                    0 == b[x] && ($(".results-filtro-" + m).html(""), $(".results-busca-" + m).append(r));
                for (c = 0; c < f.ordem.length; c++)
                    if (void 0 !== e[f.ordem[c]] && void 0 !== e[f.ordem[c]])
                        for (u = 0; u < e[f.ordem[c]].length; u++) $(".results-click-" + c + "-" + u + "-" + m).on("click", g), $(".results-click-" + c + "-" + u + "-" + m).on("mouseover", v), $(".results-click-" + c + "-" + u + "-" + m).on("mouseout", y);
                if (s) {
                    if (0 == b[x]) {
                        var h = encodeURI($("#busca_sanar-" + m).val()),
                            p = parseInt(u) + 1;
                        $(".results-busca-" + m).append('<div id="target-result-' + p + "-" + m + '" data-busca="" class="results-click-' + c + "-" + p + "-" + m + ' clickTodos" data-redir="/busca?query=' + h + '"> Ver mais resultados </div>'), $("#target-result-" + p + "-" + m).on("click", g), $(".results-click-" + c + "-" + p + "-" + m).on("mouseover", v), $(".results-click-" + c + "-" + p + "-" + m).on("mouseout", y), $(".results-busca-" + m).append("</div>")
                    }
                } else 0 == b[x] && ($(".loading-busca").remove(), $(".results-busca-" + m).append('<div class="results-filtro-' + m + '">Nenhum resultado foi encontrado.</div>'));
                b[x] = !0
            },
            C = function(e) {
                overResultado = !0;
                var t = $(this).attr("data-filtro"),
                    n = {};
                $(".label-results-" + m).each(function() {
                    var e = $(this).html();
                    if ($(this).attr("class", "label-results-" + m + " label-results"), -1 != e.indexOf("demo-icon-editora")) {
                        var t = e.split("> ");
                        $(this).html(t[1])
                    }
                }), "all" == t ? w(s) : "concursos" == t || "residencias" == t ? (n.posts = s.posts, w(n, t)) : (n[t] = s[t], w(n));
                var i = $(this).html(); - 1 == i.indexOf("demo-icon-editora") && $(this).html('<i class="demo-icon-editora margin-left-5 margin-right-0">&#xe809;</i> ' + i), $(this).attr("class", "label-results-" + m + " label-results active")
            },
            T = function(e, t) {
                var n = $("#busca_sanar-" + m).val();
                if (void 0 === e || 13 != e.keyCode) {
                    if (r && !c) {
                        u || ($(".div-busca-" + m).append("<div id='header-overlay'></div>"), $("#header-overlay").on("click", h), u = !0), x++;
                        for (var i = 0; i < x; i++) b[i] = !0;
                        if (1 != b[x])
                            if ($(".results-busca-" + m).attr("style", "display: block"), $(".results-busca-" + m).html(""), 2 < n.length) {
                                var o = "";
                                o += '<div class="filtros-busca filtros-busca-' + m + ' col-xs-12">', o += '<div class="col-lg-12 col-sm-12 col-xs-12 nopadding-busca">', o += '<span class="label-results-' + m + ' label-results active" data-filtro="all"><i class="demo-icon-editora margin-left-5 margin-right-0">&#xe809;</i> Todos os resultados</span>', o += '<span class="label-results-' + m + ' label-results" data-filtro="produtos">Livros e cursos</span>', o += '<span class="label-results-' + m + ' label-results" data-filtro="concursos">Concursos</span>', o += '<span class="label-results-' + m + ' label-results" data-filtro="residencias">ResidÃªncias</span>', o += "</div>", o += '</div><div class="loading-busca col-xs-12"><img src="/images/loading.gif" style="max-width: 60px" /></div>', $(".results-busca").append(o), void 0 !== l && (l = clearTimeout(l)), l = setTimeout(function() {
                                    jQuery.ajax({
                                        url: "/busca/buscar",
                                        dataType: "json",
                                        type: "GET",
                                        data: {
                                            query: encodeURI(n),
                                            limitar: !0
                                        },
                                        async: !0,
                                        success: function(e) {
                                            s = {}, $(".results-filtro-" + m).remove();
                                            for (var t = 0; t < f.ordem.length; t++) void 0 !== e[f.ordem[t]] && void 0 !== e[f.ordem[t]] && (s[f.ordem[t]] = e[f.ordem[t]]);
                                            w(s)
                                        },
                                        error: function(e) {}
                                    })
                                }, 1e3), $(".filtros-busca-" + m).on("mouseover", v), $(".filtros-busca-" + m).on("mouseout", y), $(".label-results-" + m).on("click", C)
                            } else d = !1, p();
                        else l = clearTimeout(l)
                    }
                } else location.href = "/busca?query=" + n + "&ordem=" + a
            };
        $("#" + m).on("keyup", T), $("#" + m).on("focusin", p), $("#" + m).on("focusout", n), r = !0
    }
})
});
var CountdownImageFolder = "../../../../images/countdown/",
CountdownImageBasename = "flipper",
CountdownImageExt = "png",
CountdownImagePhysicalWidth = 41,
CountdownImagePhysicalHeight = 60,
CountdownWidth = 400,
CountdownHeight = 60,
CountdownLabels = {
    ms: "MS",
    second: "SECONDS",
    minute: "MINUTES",
    hour: "HOURS",
    day: "DAYS",
    month: "MONTHS",
    year: "YEARS"
},
CountdownInterval = 76,
CountdownFadeInMS = 500;
Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
    if (null == this) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if (0 === n) return -1;
    var i = 0;
    if (1 < arguments.length && ((i = Number(arguments[1])) != i ? i = 0 : 0 != i && i != 1 / 0 && i != -1 / 0 && (i = (0 < i || -1) * Math.floor(Math.abs(i)))), n <= i) return -1;
    for (var o = 0 <= i ? i : Math.max(n - Math.abs(i), 0); o < n; o++)
        if (o in t && t[o] === e) return o;
    return -1
}), Function.prototype.bind || (Function.prototype.bind = function(e) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1),
        n = this,
        i = function() {},
        o = function() {
            return n.apply(this instanceof i && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
        };
    return i.prototype = this.prototype, o.prototype = new i, o
}), this.jbeeb = this.jbeeb || {},
function() {
    "use strict";
    var o = function() {},
        t = (Array.prototype.indexOf, Object.prototype.toString),
        n = String.prototype.trim;
    o.link = function(e, t, n) {
        n = n || {};
        var i = t || "_blank",
            o = [];
        for (var s in n) "width" == (s = s.toLowerCase()) || "height" == s || "left" == s ? o.push(s + "=" + n[s]) : "location" != s && "menubar" != s && "resizable" != s && "scrollbars" != s && "status" != s && "titlebar" != s && "toolbar" != s || o.push(s + "=1");
        var r = null;
        0 < o.length && (r = o.join(",")), window.open(e, i, r)
    }, o.isArray = function(e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === t.call(e)
    }, o.isEmpty = function(e) {
        var t = typeof e;
        if ("undefined" == t) return !0;
        if (null === e) return !0;
        if ("object" == t) {
            if (e == {} || e == []) return !0;
            var n = !0;
            for (var i in e)
                if (!o.isEmpty(e[i])) {
                    n = !1;
                    break
                }
            return n
        }
        return "string" == t && "" == e
    }, o.isNumber = function(e) {
        return "[object Number]" === t.call(e) && isFinite(e)
    }, o.isInteger = function(e) {
        return parseFloat(e) == parseInt(e) && !isNaN(e) && isFinite(e)
    }, o.isString = function(e) {
        return "[object String]" === t.call(e)
    }, o.isNull = function(e) {
        return "" === e || null == e || void 0 === e || "undefined" == e || "null" == e
    }, o.clone = function(e) {
        if (null === e || "object" != typeof e) return e;
        if (e.init) return e;
        var t = e.constructor;
        if (t) {
            var n = new t;
            for (var i in e) n[i] = o.clone(e[i])
        }
        return n
    }, o.sortOn = function(e, n) {
        return n && e ? void e.sort(function(e, t) {
            return e[n] < t[n] ? -1 : e[n] > t[n] ? 1 : 0
        }) : e
    }, o.arrayShuffle = function(e) {
        if (e) {
            for (var t, n, i = e.length; i;) n = Math.floor(Math.random() * i--), t = e[i], e[i] = e[n], e[n] = t;
            return e
        }
        return []
    }, o.arrayMove = function(e, t, n) {
        e.splice(n, 0, e.splice(t, 1)[0])
    }, o.arrayInsertAt = function(e, t, n) {
        return Array.prototype.splice.apply(e, [t, 0].concat(n)), e
    }, o.rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o.trim = n && !n.call("\ufeffÂ ") ? function(e) {
        return null == e ? "" : n.call(e)
    } : function(e) {
        return null == e ? "" : (e + "").replace(o.rtrim, "")
    }, o.alphanumeric = function(e, t) {
        return t ? e.replace(/[^A-Za-z0-9]/g, "") : e.replace(/[^A-Za-z0-9_\-\.]/g, "")
    }, o.parseJSON = function(t) {
        if ("string" != typeof t) return null;
        try {
            return JSON.parse(t)
        } catch (e) {
            return t || null
        }
    }, o.hexToRgb = function(e) {
        if (!e) return "";
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
    }, o.makeColor = function(e, t) {
        if (!e) return "";
        var n = o.hexToRgb(e);
        return o.isNumber(t) && jbeeb.Browser.rgba ? (1 < t && (t /= 100), t = "," + t, "rgba(" + n.join(",") + t + ")") : e
    }, o.getXYWH = function(e) {
        var t = 0,
            n = 0,
            i = 0,
            o = 0;
        if (e) {
            i = e.offsetWidth, o = e.offsetHeight;
            for (var s = jbeeb.Browser.touch; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) s ? (t += (e.offsetLeft || 0) - (e.scrollLeft || 0), n += (e.offsetTop || 0) - (e.scrollTop || 0)) : (t += e.offsetLeft || 0, n += e.offsetTop || 0), e = e.offsetParent;
            if (s) t += null != window.scrollX ? window.scrollX : window.pageXOffset, n += null != window.scrollY ? window.scrollY : window.pageYOffset
        }
        return {
            x: t,
            y: n,
            w: i,
            h: o,
            xMax: t + i,
            yMax: n + o
        }
    }, o.getWindowSize = function() {
        var e = window,
            t = document,
            n = t.documentElement,
            i = t.getElementsByTagName("body")[0];
        return {
            w: e.innerWidth || n.clientWidth || i.clientWidth,
            h: e.innerHeight || n.clientHeight || i.clientHeight
        }
    }, o.contains = function(e, t) {
        var n = {},
            i = {
                x: e.x,
                y: e.y,
                w: e.width,
                h: e.height
            },
            o = {
                x: t.x,
                y: t.y,
                w: t.width,
                h: t.height
            };
        for (var s in i.xMax = i.x + i.w, i.yMax = i.y + i.h, o.xMax = o.x + o.w, o.yMax = o.y + o.h, i) n[s] = i[s] >= o[s];
        return !(n.x || n.y || !n.xMax || !n.yMax)
    }, o.getTimestamp = function() {
        var e = new Date;
        return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()).valueOf()
    }, o.bindEvent = function(e, t, n) {
        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, !1)
    }, o.unbindEvent = function(e, t, n) {
        e.attachEvent ? e.detachEvent("on" + t, n) : e.addEventListener && e.removeEventListener(t, n, !1)
    }, o.getAttributes = function(e) {
        var t = {},
            n = e.attributes;
        if (n) {
            for (var i = n.length, o = 0; o < i; o++) jbeeb.Browser.ie ? n[o].specified && (t[n[o].nodeName] = n[o].nodeValue.toString()) : n[o].value ? t[n[o].nodeName] = n[o].value.toString() : t[n[o].nodeName] = n[o].nodeValue.toString();
            return t
        }
        return {}
    }, jbeeb.Utils = o
}(), this.jbeeb = this.jbeeb || {},
function() {
    "use strict";
    var e = function() {
            this.initialize()
        },
        t = e.prototype;
    e.initialize = function(e) {
        e.addEventListener = t.addEventListener, e.removeEventListener = t.removeEventListener, e.removeAllEventListeners = t.removeAllEventListeners, e.hasEventListener = t.hasEventListener, e.dispatchEvent = t.dispatchEvent
    }, t.b = null, t.initialize = function() {}, t.addEventListener = function(e, t, n, i) {
        var o = this.b;
        o ? this.removeEventListener(e, t, n) : o = this.b = {};
        var s = o[e];
        return s || (s = o[e] = []), s.push({
            fn: t,
            arg: i,
            scope: n
        }), t
    }, t.removeEventListener = function(e, t, n) {
        var i = this.b;
        if (i) {
            var o = i[e];
            if (o)
                for (var s = o.length; s--;) {
                    var r = o[s];
                    r.scope == n && r.fn == t && o.splice(s, 1)
                }
        }
    }, t.removeAllEventListeners = function(e) {
        e ? this.b && delete this.b[e] : this.b = null
    }, t.dispatchEvent = function(e) {
        var t = this.b;
        if (e && t) {
            var n = t[e];
            if (n) {
                var i = [].slice.call(arguments);
                i.splice(0, 1);
                for (var o = 0; o < n.length; o++) {
                    var s = n[o];
                    if (s.fn) {
                        var r = i,
                            a = s.arg;
                        void 0 !== a && r.push(a), r.length ? s.scope ? s.fn.apply(s.scope, r) : s.fn.apply(null, r) : s.scope ? s.fn.call(s.scope) : s.fn()
                    }
                }
            }
        }
    }, t.hasEventListener = function(e) {
        var t = this.b;
        return !(!t || !t[e])
    }, t.toString = function() {
        return "[EventDispatcher]"
    }, jbeeb.EventDispatcher || (jbeeb.EventDispatcher = e)
}(), this.jbeeb = this.jbeeb || {},
function() {
    var n, t, e, i, o, s, r, a, l, c, u, d;
    jbeeb.ready || (jbeeb.ready = (i = [], o = document, s = o.documentElement, r = s.doScroll, a = "DOMContentLoaded", l = "addEventListener", c = "onreadystatechange", d = (r ? /^loaded|^c/ : /^loaded|c/).test(o[u = "readyState"]), t = function(e) {
        try {
            (e = o.getElementsByTagName("body")[0].appendChild(o.createElement("span"))).parentNode.removeChild(e)
        } catch (e) {
            return setTimeout(function() {
                t()
            }, 50)
        }
        for (d = 1; e = i.shift();) e()
    }, o[l] && (e = function() {
        o.removeEventListener(a, e, !1), t()
    }, o[l](a, e, !1), n = function(e) {
        d ? e() : i.push(e)
    }), r && (e = function() {
        /^c/.test(o[u]) && (o.detachEvent(c, e), t())
    }, o.attachEvent(c, e), n = function(t) {
        if (self != top) d ? t() : i.push(t);
        else {
            try {
                s.doScroll("left")
            } catch (e) {
                return setTimeout(function() {
                    n(t)
                }, 50)
            }
            t()
        }
    }), n))
}(), this.jbeeb = this.jbeeb || {},
function() {
    function n() {
        return e && e.call(performance) || (new Date).getTime()
    }
    var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
        e = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow),
        i = function(e) {
            return this.init(e), this
        },
        o = i.prototype;
    o.addEventListener = null, o.removeEventListener = null, o.removeAllEventListeners = null, o.dispatchEvent = null, o.hasEventListener = null, jbeeb.EventDispatcher.initialize(o), o.l = 50, o.k = 0, o.d = null, o.q = null, o.h = null, o.c = !1, o.state = 0, o.init = function(e) {
        e.fps ? (this.c = e.animation && t || !1, this.l = 1e3 / (e.fps || 60)) : this.l = e.interval || 50, e.startNow && this.start()
    }, o.stop = function() {
        this.state = 0, this.g(this.o)
    }, o.getInterval = function() {
        return this.l
    }, o.setInterval = function(e) {
        this.l = e
    }, o.start = function() {
        this.state || (this.state = 1, this.d = [], this.d.push(this.k = n()), this.c ? this.g(this.p) : this.g(this.m), this.j())
    }, o.getFPS = function() {
        var e = this.d.length - 1;
        return e < 2 ? this.l : 1e3 / ((this.d[0] - this.d[e]) / e)
    }, o.p = function() {
        this.q = null, this.j(), n() - this.k >= .97 * (this.l - 1) && this.f()
    }, o.m = function() {
        this.q = null, this.j(), this.f()
    }, o.o = function() {
        this.q = null
    }, o.j = function() {
        if (null == this.q) {
            if (this.c) return t(this.h), void(this.q = !0);
            this.q && clearTimeout(this.q), this.q = setTimeout(this.h, this.l)
        }
    }, o.g = function(e) {
        this.h = e.bind(this)
    }, o.f = function() {
        var e = n(),
            t = e - this.k;
        for (this.k = e, this.dispatchEvent("tick", {
                delta: t,
                time: e
            }), this.d.unshift(e); 100 < this.d.length;) this.d.pop()
    }, o.toString = function() {
        return "[Ticker]"
    }, jbeeb.Ticker || (jbeeb.Ticker = i)
}(), this.jbeeb = this.jbeeb || {},
function() {
    "use strict";
    if (!jbeeb.Browser) {
        var e = {
                ie: null,
                ios: null,
                mac: null,
                webkit: null,
                oldWebkit: !1,
                flash: 0,
                touch: !1
            },
            t = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }(navigator.userAgent);
        e.version = parseFloat(t.version);
        var n = t.browser,
            i = !1;
        "chrome" == (e.agent = n) ? i = !0: "webkit" == n && (i = !0), e.webkit = i, e.chrome = /chrome/.test(n) || /chromium/.test(n), e.moz = /mozilla/.test(n), e.opera = /opera/.test(n), e.safari = /webkit/.test(n), e.ie = /msie/.test(n) && !/opera/.test(n), e.android = /android/.test(n);
        var o = navigator.platform.toLowerCase();
        e.platform = o, e.ios = /iphone/.test(o) || /ipod/.test(o) || /ipad/.test(o), e.win = e.windows = /win/.test(o || n), e.mac = /mac/.test(o || n), e.cssPrefix = "", e.chrome || e.safari ? (e.cssPrefix = "webkit", e.chrome && e.version < 10 ? e.oldWebkit = !0 : e.safari && e.version < 5.1 && (e.oldWebkit = !0)) : e.opera ? e.cssPrefix = "o" : e.moz ? e.cssPrefix = "moz" : e.ie && 8 < e.version && (e.cssPrefix = "ms"), (e.chrome || e.ios || e.android) && (e.flash = 0);
        var s = !1,
            r = "Webkit Moz O ms Khtml".split(" "),
            a = "",
            l = document.createElement("div");
        if (l.style.animationName && (s = !0), !1 === s)
            for (var c = 0; c < r.length; c++)
                if (void 0 !== l.style[r[c] + "AnimationName"]) {
                    (a = r[c]) + "Animation", "-" + a.toLowerCase() + "-", s = !0;
                    break
                }
        l = null, e.animation = s, e.modern = !1, e.moz && 3 < e.version && (e.modern = !0), e.opera && 9 < e.version && (e.modern = !0), e.ie && 9 < e.version && (e.modern = !0), (e.chrome || e.safari || e.ios || e.android) && (e.modern = !0), e.rgba = !0, e.quirks = "CSS1Compat" != document.compatMode, e.ie ? e.version < 9 ? e.rgba = !1 : e.quirks && (e.rgba = !1, e.version = 8, e.modern = !1) : e.moz && e.version < 3 ? e.rgba = !1 : e.safari && e.version < 3 ? e.rgba = !1 : e.opera && e.version < 10 && (e.rgba = !1), e.touch = void 0 !== window.ontouchstart, jbeeb.Browser = e
    }
}(), this.jbeeb = this.jbeeb || {},
function() {
    "use strict";
    jbeeb.PathInfo = function(e, t) {
        function n(e) {
            return (e = e || "").split("?")[0].split("/").pop()
        }

        function i(e) {
            var t = e.split("/");
            return t.pop(), t.join("/").toString() + (0 < t.length ? "/" : "")
        }

        function o(e) {
            var t = document.getElementsByTagName("script"),
                n = t[t.length - 1].getAttribute("src");
            return n ? e ? n.split("?")[0] : i(n.split("?")[0]) : ""
        }
        var S = !0,
            A = o(),
            O = i(window.location.href);
        return {
            parse: function e(t, n) {
                var i, o, s, r, a, l, c, u, d, h, p, f, m, g, v = (t = t || "").replace(/\\/g, "/");
                if (!v.match(/:\//)) {
                    var y = e(n ? A : O, !1);
                    if ("/" == v.substr(0, 1)) v = y.host + (S ? "" : "/") + v;
                    else if ("../" == v.substr(0, 3)) {
                        var b = y.parenturl.split("/"),
                            x = v.split("../"),
                            w = x.pop();
                        b.splice(b.length - x.length, x.length, w), v = b.join("/")
                    } else v = y.pathurl + (S ? "" : "/") + v
                }
                "/" == v.substr(-1) && (v = v.substr(0, v.length - 1));
                var $ = v.split("://");
                if (o = $.shift(), -1 < (s = (u = (u = ($.shift() || "").replace("//", "/")).split("/")).shift() || "").indexOf("@")) {
                    var C = ($ = s.split("@"))[0].split(":");
                    f = C[0], m = C[1], s = $[1]
                } - 1 < s.indexOf(":") && (r = ($ = s.split(":"))[1], s = $[0]), -1 != (u = u.join("/")).indexOf("#") && (p = ($ = u.split("#"))[1], u = $[0]), -1 != u.indexOf("?") && (h = ($ = u.split("?"))[1], u = $[0]), c = ($ = u.split("/")).pop(), u = $.join("/"), ".." == c && (c = "");
                var T = c.split(".");
                1 < T.length && (l = T.pop().toLowerCase(), a = T.join(".")), i = (d = (g = o + "://" + s + (r ? ":" + r : "")) + (u = "/" + u + (0 < u.length ? "/" : ""))) + c + (h ? "?" + h : "") + (p ? "#" + p : "");
                var k = u,
                    E = d;
                return l ? (u += c, d += c) : (u += c + ("" != c ? "/" : ""), d += c + ("" != c ? "/" : ""), a = c, h || p || "/" == i.substr(-1) || (i += "/")), !1 === S && ("/" == k.substr(-1) && (k = k.substr(0, k.length - 1)), "/" == E.substr(-1) && (E = E.substr(0, E.length - 1)), l || ("/" == u.substr(-1) && (u = u.substr(0, u.length - 1)), "/" == d.substr(-1) && (d = d.substr(0, d.length - 1)), "/" == i.substr(-1) && (i = i.substr(0, i.length - 1)))), {
                    source: t || null,
                    url: i || null,
                    protocol: o || null,
                    domain: s || null,
                    port: r || null,
                    basename: a || null,
                    ext: l || null,
                    filename: c || null,
                    path: u || null,
                    pathurl: d || null,
                    parent: k || null,
                    parenturl: E || null,
                    query: h || null,
                    fragment: p || null,
                    username: f || null,
                    password: m || null,
                    host: g || null
                }
            },
            filename: n,
            basename: function(e) {
                var t = n(e).split(".");
                return t.pop(), t.join(".")
            },
            basepath: i,
            scriptPath: A,
            getScriptPath: o,
            pagePath: O,
            ext: function(e) {
                return (e = e || "").split("?")[0].split("/").pop().split(".").pop().toLowerCase()
            }
        }
    }()
}(), this.jbeeb = this.jbeeb || {},
function() {
    "use strict";
    jbeeb.Base || (jbeeb.amReady = !1, jbeeb.ticker = null, jbeeb.tickerInterval = 80, jbeeb.scriptPath = null, jbeeb.pagePath = "", jbeeb.assetsBasePath = "", jbeeb.focus = null, jbeeb.binit = 0), jbeeb.unfocus = function() {
        if (jbeeb.focus) {
            var e = jbeeb.focus;
            e.element && e.element.blur(), jbeeb.focus = null
        }
    };
    var i = function() {};
    i.w = 0, i.r = [], i.v = [], i.scriptPath = null, i.x = function(e) {
        return "jbeeb_" + i.w++
    }, i.s = function(e) {
        i.v.push(e), jbeeb.amReady && i.u()
    }, i.u = function() {
        var e = i.v.length;
        if (0 < e)
            for (var t = e; t--;) {
                var n = i.v.splice(t, 1)[0];
                n && n.init && n.init.call(n)
            }
    }, i.init = function() {
        jbeeb.amReady || (jbeeb.ticker = new jbeeb.Ticker({
            interval: jbeeb.tickerInterval,
            startNow: 1
        }), jbeeb.assetsBasePath || (jbeeb.assetsBasePath = ""), "http" != window.location.href.substr(0, 4) ? (jbeeb.pagePath || (jbeeb.pagePath = ""), jbeeb.scriptPath || (jbeeb.scriptPath = "")) : (jbeeb.pagePath || (jbeeb.pagePath = jbeeb.PathInfo.pagePath), jbeeb.scriptPath || (jbeeb.scriptPath = jbeeb.PathInfo.scriptPath)), jbeeb.FlashDetect && jbeeb.FlashDetect.run(), jbeeb.amReady = !0, i.u())
    }, jbeeb.Base || (jbeeb.Base = i, jbeeb.register = i.s, jbeeb.getUID = i.x)
}(), jbeeb.binit || (jbeeb.binit = 1, jbeeb.ready(function() {
    jbeeb.Base.init()
})), this.jbeeb = this.jbeeb || {},
function() {
    "use strict";
    var e = function(e) {
            this.init(e)
        },
        t = e.prototype;
    t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, jbeeb.EventDispatcher.initialize(t), t.amStage = null, t.element = null, t.style = null, t.O = null, t.alpha = 1, t.id = null, t.name = null, t.parent = null, t.stage = null, t.rotation = 0, t.scale = 1, t.scaleX = 1, t.scaleY = 1, t.stretchX = 1, t.stretchY = 1, t.skewX = 0, t.skewY = 0, t.origin = null, t.originX = 0, t.originY = 0, t.originType = "px", t.shadow = null, t.bevel = null, t.outline = null, t.inset = null, t.visible = !0, t.overflow = "visible", t.autoCenter = null, t.x = 0, t.y = 0, t.width = 0, t.height = 0, t.flex = "wh", t.L = 1, t.M = 1, t.pin = null, t.D = null, t.C = null, t.z = 0, t.temp = null, t.rounded = null, t.fill = null, t.stroke = null, t.image = null, t.gradient = null, t.P = null, t.init = function(e) {
        this.temp = {}, this.style = null, this.alpha = 1, this.id = null, this.name = null, this.parent = null, this.rotation = 0, this.scale = 1, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.visible = !0, this.overflow = "visible", this.x = 0, this.y = 0, this.width = 0, this.height = 0, this.flex = "wh", this.L = 1, this.M = 1, this.pin = null, this.D = null, this.C = null, this.z = 0, this.autoCenter = null, this.stroke = {}, this.fill = {}, this.shadow = null, this.inset = null, this.gradient = {}, this.rounded = null, jbeeb.storeCSS ? this.O = {} : this.O = null;
        e = e || {};
        var t = jbeeb.getUID();
        this.id = t, e.element ? this.element = e.element : (this.element = document.createElement("div"), this.element.id = t, this.element.style.position = "absolute", this.element.style.overflow = "visible", this.O && (this.O.position = "absolute", this.O.overflow = "visible")), e.standalone && (this.amStage = 1), e.inline ? this.P = "inline-block" : this.P = "block", e.name && (this.name = e.name), this.element.id = this.type + "_" + this.element.id;
        var n = this.style = this.element.style;
        if (n.padding = "0px", n.margin = "0px", n.border = "0px", n.fontSize = "100%", n.verticalAlign = "baseline", n.outline = "0px", n.background = "transparent", n.WebkitTextSizeAdjust = "100%", n.msTextSizeAdjust = "100%", n.WebkitBoxSizing = n.MozBoxSizing = n.boxSizing = "padding-box", n.backgroundClip = "padding-box", this.O) {
            var i = this.O;
            i.padding = "0px", i.margin = "0px", i.border = "0px", i.fontSize = "100%", i.verticalAlign = "baseline", i.outline = "0px", i.background = "transparent", i.WebkitTextSizeAdjust = "100%", i.msTextSizeAdjust = "100%", i.boxSizing = "padding-box", i.backgroundClip = "padding-box"
        }
        e.editable || this.setSelectable(!1), this.setCursor("inherit"), e && (this.autoCenter = e.center, void 0 !== e.flex && this.setFlex(e.flex), void 0 !== e.pin && this.setPin(e.pin), void 0 !== e.overflow && this.setOverflow(e.pin)), this.setOrigin(0, 0, "px"), this.applySkin(e, !1)
    }, t.setSelectable = function(e) {
        var t = this.style,
            n = "none",
            i = "-moz-none";
        e && (i = n = "text"), t.userSelect = t.WebkitUserSelect = t.MozUserSelect = t.OUserSelect = n, t.MozUserSelect = i, this.O && (this.O.userSelect = n, this.O.MozUserSelect = i)
    }, t.setBorderRender = function(e) {
        var t, n = this.style;
        t = "outside" == e ? "content-box" : "border-box", n.WebkitBoxSizing = n.MozBoxSizing = n.boxSizing = t, this.O && (this.O.boxSizing = t)
    }, t.applySkin = function(e, t) {
        if (this.stroke = {}, this.fill = {}, this.gradient = null, this.rounded = 0, this.image = null, this.shadow = null, this.bevel = null, this.outline = null, this.inset = null, !(t = 1 == t && t)) {
            var n = jbeeb.Utils.isNumber(e.x) ? e.x : 0,
                i = jbeeb.Utils.isNumber(e.y) ? e.y : 0;
            this.setXY(n, i), e.height && this.setHeight(e.height), e.width && this.setWidth(e.width), e.h && this.setHeight(e.h), e.w && this.setWidth(e.w)
        }
        var o, s;
        (this.setRounded(e.rounded), u = e.fill) && ("string" == typeof(u = u) ? (o = u, s = 1) : (o = u.color, s = u.alpha));
        this.setFill(o, s);
        var r = s = o = null,
            a = null;
        (u = e.stroke) && ("string" == typeof u ? (o = u, r = s = 1, a = "solid") : null != u.color && (o = u.color || "#000000", s = jbeeb.Utils.isNumber(u.alpha) ? u.alpha : 1, r = u.weight || 1, a = u.style || "solid")), this.setStroke(r, o, s, a), this.setStrokeStyle(a);
        var l, c, u = e.image;
        e.image && ("string" == typeof u ? (l = u, c = null) : (l = u.url, c = u.mode)), this.setImage(l, c), this.setShadow(e.shadow), this.setBevel(e.bevel), this.setOutline(e.outline), this.setInset(e.inset)
    }, t.U = function() {
        var e = this.style;
        if (e) {
            var t = "",
                n = "",
                i = "",
                o = "",
                s = "",
                r = 0,
                a = this.fill;
            if (a && (jbeeb.Utils.isArray(a.color) ? r = 1 : a.color && (n = jbeeb.Utils.makeColor(a.color, a.alpha))), this.image && this.image.url) {
                t = 'url("' + this.image.url + '")';
                var l = this.image.mode || "center";
                "pattern" == l || ("fit" == l ? i = "100% 100%" : "contain" != l && "cover" != l || (i = "contain"), o = "no-repeat", s = "center center"), r = 0
            }
            if (r) {
                var c = a.color;
                this.O && (this.O.gradient = 1);
                for (var u = a.alpha || "v", d = jbeeb.Browser, h = [], p = [], f = c.length, m = d.oldWebkit, g = 0; g < f; g += 3) {
                    var v = jbeeb.Utils.makeColor(c[g], c[g + 1]),
                        y = c[g + 2];
                    100 < y ? y = 100 : y < 0 && (y = 0), m ? p.push("color-stop(" + y + "%, " + v + ")") : h.push(v + " " + y + "%")
                }
                if (d.modern) {
                    var b, x, w = d.cssPrefix;
                    if ("" == w) b = "linear-", x = ("v" == u ? "to bottom, " : "to right, ") + h.join(",");
                    else if ("webkit" == w && m) {
                        var $ = p.join(",");
                        b = "-webkit-", x = "v" == u ? "linear, left top, left bottom, " + $ : "linear, left top, right top, " + $
                    } else b = "-" + w + "-linear-", x = ("v" == u ? "top, " : "left, ") + h.join(",");
                    t = b + "gradient(" + x + ")"
                } else if (d.ie && d.version < 9) {
                    var C, T = "progid:DXImageTransform.Microsoft.gradient( gradientType=" + ("v" == u ? "0" : "1") + ", startColorstr='" + c[0] + "', endColorstr='" + c[c.length - 3] + "')";
                    if (this.style.filter = T, this.style.msFilter = '"' + T + '"', this.O)(C = this.O).filter = T, C.msFilter = '"' + T + '"'
                } else {
                    var k = "";
                    for (g = 0; g < f; g += 3) {
                        v = jbeeb.Utils.makeColor(c[g], c[g + 1]);
                        k += '<stop offset="' + c[g + 2] + '%" stop-color="' + c[g] + '" stop-opacity="' + c[g + 1] + '"/>'
                    }
                    var E = "0",
                        S = "100";
                    "h" == u && (E = "100", S = "0");
                    var A = "jbeeb-grad-" + this.id,
                        O = "";
                    O += '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">', O += '  <linearGradient id="' + A + '" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="' + E + '%" y2="' + S + '%">', O += k, O += "  </linearGradient>", O += '  <rect x="0" y="0" width="1" height="1" fill="url(#' + A + ')" />', O += "</svg>", t = 'url("data:image/svg+xml;base64,' + jbeeb.Base64.encode(O) + '")'
                }
            } else this.O && (this.O.gradient = 0);
            if (e.backgroundColor = n || "", e.backgroundImage = t || "none", e.backgroundSize = i || "", e.backgroundRepeat = o || "", e.backgroundPosition = s || "", this.O)(C = this.O).backgroundColor = n || "", C.backgroundImage = t || "none", C.backgroundSize = i || "", C.backgroundRepeat = o || "", C.backgroundPosition = s || ""
        }
    }, t.setFill = function(e, t) {
        this.fill || (this.fill = {}), this.fill.color = e, this.fill.alpha = t, this.U()
    }, t.setImage = function(e, t) {
        e ? (this.image || (this.image = {}), this.image.url = e, this.image.mode = t) : this.image = null, this.U()
    }, t.setImageSizing = function(e) {
        this.image && (this.image.mode = e, this.U())
    }, t.setStroke = function(e, t, n, i) {
        this.stroke || (this.stroke = {}), "string" == typeof e && (t = e, e = 1), 0 < e && (e = Math.round(e));
        var o = n || 1,
            s = i || "solid";
        null == t && (s = o = e = null);
        var r = this.stroke;
        r.weight = e, r.color = t, r.alpha = o, r.style = s;
        var a, l, c, u, d = this.style;
        if (e ? (s = s, a = e + "px", l = jbeeb.Utils.makeColor(t, o), u = c = -e + "px") : u = c = l = a = s = "", d.borderStyle = s, d.borderWidth = a, d.borderColor = l, d.marginLeft = c, d.marginTop = u, this.O) {
            var h = this.O;
            h.borderStyle = s, h.borderWidth = a, h.borderColor = l, h.marginLeft = c, h.marginTop = u
        }
        this.T()
    }, t.setStrokeStyle = function(e) {
        var t = e || "";
        this.style.borderStyle = t, this.O && (this.O.borderStyle = t)
    }, t.setCursor = function(e) {
        this.style.cursor = e, this.O && (this.O.cursor = e)
    }, t.setWidth = function(e) {
        var t = this.style;
        t && 0 < e && (this.width = e, t.width = e + "px", this.autoCenter && this.center(this.autoCenter), this.rounded && this.T(), this.O && (this.O.width = e + "px"))
    }, t.setHeight = function(e) {
        var t = this.style;
        t && 0 < e && (this.height = e, t.height = e + "px", this.autoCenter && this.center(this.autoCenter), this.rounded && this.T(), this.O && (this.O.height = e + "px"))
    }, t.measure = function() {
        var e = this.element,
            t = e.clientWidth,
            n = e.clientHeight;
        return [this.width = t, this.height = n]
    }, t.setSize = function(e, t) {
        var n = this.style;
        n && 0 < e && 0 < t && (this.width = e, this.height = t, n.width = e + "px", n.height = t + "px", this.autoCenter && this.center(this.autoCenter), this.rounded && this.T(), this.O && (this.O.width = e + "px", this.O.height = t + "px"))
    }, t.setXY = function(e, t) {
        this.x = e, this.y = t;
        var n = this.style;
        n.left = e + "px", n.top = t + "px", this.O && (this.O.left = e + "px", this.O.top = t + "px")
    }, t.setBaseXY = function(e, t) {
        this.setXY(e, t), this.R = e, this.Q = t
    }, t.setXYWH = function(e, t, n, i) {
        this.width = n, this.height = i, this.x = e, this.y = t;
        var o = this.style;
        if (o.width = (n || 0) + "px", o.height = (i || 0) + "px", o.left = (e || 0) + "px", o.top = (t || 0) + "px", this.O) {
            var s = this.O;
            s.width = (n || 0) + "px", s.height = (i || 0) + "px", s.left = (e || 0) + "px", s.top = (t || 0) + "px"
        }
    }, t.setX = function(e) {
        this.x = e, this.style.left = (e || 0) + "px", this.O && (this.O.left = (e || 0) + "px")
    }, t.setY = function(e) {
        this.y = e, this.style.top = (e || 0) + "px", this.O && (this.O.top = (e || 0) + "px")
    }, t.setTop = function(e) {
        this.y = e, this.style.top = e + "px", this.O && (this.O.top = (e || 0) + "px")
    }, t.setBottom = function(e) {
        this.y = e - this.height, this.style.bottom = e + "px", this.O && (this.O.bottom = (e || 0) + "px")
    }, t.setLeft = function(e) {
        this.x = e, this.style.left = (e || 0) + "px", this.O && (this.O.left = (e || 0) + "px")
    }, t.setRight = function(e) {
        var t = (e || 0) - this.width;
        this.x = t, this.style.right = t + "px", this.O && (this.O.right = t + "px")
    }, t.setZ = function(e) {
        e < 0 && (e = 0), this.z = e;
        var t = this.style;
        t || (this.style = t = this.element.style), t.zIndex = e, this.O && (this.O.zIndex = e)
    }, t.setScale = function(e) {
        this.scale = e, this.scaleX = e;
        var t = "scale(" + (this.scaleY = e) + "," + e + ")";
        this.N(t)
    }, t.setScaleX = function(e) {
        this.scaleX = e;
        var t = "scale(" + this.scaleX + "," + e + ")";
        this.N(t)
    }, t.setScaleY = function(e) {
        var t = "scale(" + (this.scaleY = e) + "," + this.scaleY + ")";
        this.N(t)
    }, t.stretch = function(e, t) {
        if (this.stretchX = e, this.stretchY = t, 0 < e && 0 < t) {
            this.L && this.setWidth(this.width * e), this.M && this.setHeight(this.height * t);
            var n = this.x,
                i = this.y;
            if (this.D) {
                if ("r" == this.D && this.parent) {
                    null == this.E && (this.E = this.parent.width - this.x);
                    var o = this.parent.width - this.E;
                    this.setX(o)
                }
            } else if (this.originX) {
                var s = this.originX;
                this.setX(s + (n - s) * e)
            } else this.setX(n * e);
            if (this.C) {
                if ("b" == this.C && this.parent) {
                    null == this.G && (this.G = this.parent.height - this.y);
                    o = this.parent.height - this.G;
                    this.setY(o)
                }
            } else if (this.originY) {
                s = this.originY;
                this.setY(s + (i - s) * t)
            } else this.setY(i * t)
        }
        this.dispatchEvent("stretch", this.width, this.height)
    }, t.E = null, t.G = null, t.setPin = function(e) {
        this.pin = e, this.D = 0, this.C = 0, e && ((e = e.toLowerCase()).match(/r/) && (this.D = "r"), e.match(/l/) && (this.D = "l"), e.match(/t/) && (this.C = "t"), e.match(/b/) && (this.C = "b"), e.match(/s/) && (this.D = "s", this.C = "s"))
    }, t.setFlex = function(e) {
        this.L = 0, this.M = 0, e && (e.toLowerCase(), e.match(/w/) ? this.L = 1 : this.L = 0, e.match(/h/) ? this.M = 1 : this.M = 0), this.flex = e
    }, t.setRotation = function(e) {
        var t = "rotate(" + (this.rotation = e) + "deg)";
        this.N(t)
    }, t.setSkew = function(e, t) {
        var n = "skew(" + (this.skewX = e) + "deg," + (this.skewY = t) + "deg)";
        this.N(n)
    }, t.setOrigin = function(e, t, n) {
        this.originX = e, this.originY = t;
        var i = (this.originType = n) || "px",
            o = e + i + " " + t + i,
            s = this.style;
        s.transformOrigin = s.WebkitTransformOrigin = s.msTransformOrigin = s.MozTransformOrigin = s.OTransformOrigin = o, this.O && (this.O.transformOrigin = o)
    }, t.N = function(e) {
        var t = this.style;
        t.transform = t.transform = t.msTransform = t.WebkitTransform = t.MozTransform = e, this.O && (this.O.transform = e)
    }, t.center = function(e, t) {
        if ((this.parent || this.amStage) && this.width && this.height) {
            var n, i, o, s = this.x,
                r = this.y;
            this.amStage ? (i = .5 * (n = jbeeb.Utils.getXYWH(this.element.parentNode)).w, o = .5 * n.h) : ((n = this.parent).width || n.measure(), i = .5 * n.width, o = .5 * n.height);
            var a = .5 * this.width,
                l = .5 * this.height;
            "v" == e ? r = o - l : "h" == e ? s = i - a : (s = i - a, r = o - l), this.setXY(s, r), n = null
        }
    }, t.setOverflow = function(e) {
        var t = "",
            n = "";
        if ("x" != (this.overflow = e) && "y" != e && e || ("x" == e ? (t = "auto", n = "hidden") : "y" == e && (t = "hidden", n = "auto", jbeeb.Browser.ie && this.setWidth(this.width + 20)), this.style.overflowX = t, this.style.overflowY = n), this.style.overflow = e, this.O) {
            var i = this.O;
            i.overflow = e, i.overflowX = t, i.overflowY = n
        }
    }, t.setVisible = function(e) {
        this.visible = e;
        var t, n = this.style;
        t = e ? this.P : "none", n.display = t, this.O && (this.O.display = t)
    }, t.show = function() {
        this.setVisible(!0)
    }, t.hide = function() {
        this.setVisible(!1)
    }, t.setAlpha = function(e) {
        null !== (this.alpha = e) && (this.style.opacity = "" + e), this.O && (this.O.opacity = "" + e)
    }, t.setRounded = function(e) {
        this.rounded = e, this.T()
    }, t.T = function() {
        var e = "",
            t = this.rounded;
        if (t) {
            var n = this.width,
                i = this.height,
                o = 0,
                s = this.stroke;
            if (s) {
                var r = s.weight;
                jbeeb.Utils.isNumber(r) && (o = 2 * r)
            }
            var a = .5 * ((n < i ? n : i) + o);
            jbeeb.Utils.isNumber(t) ? e = a * t + "px" : t && "object" == typeof t && (e += (a * t.tl || 0) + "px " + (a * t.tr || 0) + "px " + (a * t.br || 0) + "px " + (a * t.bl || 0) + "px")
        }
        var l = this.style;
        l.borderRadius = l.MozBorderRadius = l.WebkitBorderRadius = l.OBorderRadius = l.msBorderRadius = e, this.O && (this.O.borderRadius = e)
    }, t.onAdded = function() {
        this.autoCenter && this.center(this.autoCenter), this.dispatchEvent("added", this)
    }, t.toFront = function() {
        this.parent && this.parent.toFront(this)
    }, t.toBack = function() {
        this.parent && this.parent.toBack(this)
    }, t.A = function() {
        var e = this.style,
            t = this.H(),
            n = this.K(),
            i = this.I(),
            o = this.J(),
            s = "none";
        if (t == [] && n == [] && i == [] && o == []);
        else {
            for (var r = n.concat(i, o, t), a = r.length, l = [], c = [], u = 0, d = 0; d < a; d++) 0 == u ? 1 == r[d] && c.push("inset") : u < 4 ? c.push(r[d] + "px") : (c.push(jbeeb.Utils.makeColor(r[d], r[d + 1])), l.push(c.join(" ")), c = [], ++d, u = -1), u++;
            0 < l.length && (s = l.join(","))
        }
        e.boxShadow = e.MozBoxShadow = e.WebkitBoxShadow = e.OBoxShadow = e.msBoxShadow = s, this.O && (this.O.boxShadow = s)
    }, t.H = function() {
        var e = this.shadow;
        return e ? [0, e.x || 0, e.y || 0, e.s, e.c || "#000000", e.a || .4] : []
    }, t.setShadow = function(e) {
        this.shadow = e, this.A()
    }, t.J = function() {
        var e = this.inset;
        return e ? [1, e.x || 0, e.y || 0, e.s, e.c || "#000000", e.a || .4] : []
    }, t.setInset = function(e) {
        this.inset = e, this.A()
    }, t.K = function() {
        var e = this.bevel;
        return e ? [1, -e.x, -e.y, e.s1, e.c1 || "#FFFFFF", e.a1, 1, e.x, e.y, e.s2, e.c2 || "#000000", e.a2] : []
    }, t.setBevel = function(e) {
        e && (jbeeb.Utils.isNumber(e) ? e = {
            x: -e,
            y: -e,
            s1: 0,
            s2: 0,
            c1: "#FFFFFF",
            c2: "#000000",
            a1: 1,
            a2: 1
        } : (e.c1 = e.c1 || "#FFFFFF", e.c2 = e.c2 || "#000000")), this.bevel = e, this.A()
    }, t.I = function() {
        if (this.outline) {
            var e = this.outline;
            return [0, -e.weight, -e.weight, e.spread || 0, e.color || "#000000", e.alpha || 1, 0, e.weight, -e.weight, e.spread || 0, e.color || "#000000", e.alpha || 1, 0, -e.weight, e.weight, e.spread || 0, e.color || "#000000", e.alpha || 1, 0, e.weight, e.weight, e.spread || 0, e.color || "#000000", e.alpha || 1]
        }
        return []
    }, t.setOutline = function(e) {
        this.outline = e, this.A()
    }, t.setMouseEnabled = function(e) {
        var t = 0 === e || !1 === e ? "none" : "auto";
        this.style.pointerEvents = t, this.O && (this.O.pointerEvents = t)
    }, t.V = null, t.MELbubble = !1, t.addMEL = function(e, t, n, i, o) {
        this.MELbubble = i, this.V || (this.V = new jbeeb.MouseEventListener(this)), "mouseOver" != e && "mouseOut" != e && "mouseMove" != e || this.V.enableMouseOver(1), this.addEventListener(e, t, n, o)
    }, t.removeMEL = function(e, t) {
        this.removeEventListener(e, t), "mouseOver" == e && this.V.enableMouseOver(0)
    }, t.setFloat = function(e) {
        this.style.position = "relative", this.style.left = "", this.style.top = "", this.style.cssFloat = e, this.style.display = "inline-block", this.O && (this.O.position = "relative", this.O.left = null, this.O.top = null, this.O.cssFloat = e, this.O.display = "inline-block")
    }, t.destroy = function() {
        this.removeAllEventListeners(), this.V && (this.V.destroy(), this.V = null), this.element && this.element.parentNode && (this.element.parentNode.removeChild(this.element), this.element = null), this.parent && (this.parent.removeChild(this), this.parent = null), this.temp = null, this.stroke = null, this.fill = null, this.gradient = null, this.bevel = null, this.outline = null, this.shadow = null, this.inset = null, this.image = null, this.element = null, this.O = null
    }, t.getCSS = function() {
        return this.O
    }, t.toString = function() {
        return "[Box (name=" + this.name + ")]"
    }, t.type = "Box", jbeeb.Box = e
}(), this.jbeeb = this.jbeeb || {},
function() {
    "use strict";
    var e = function(e) {
            this.init(e)
        },
        t = e.prototype = new jbeeb.Box(null);
    t.textFit = null, t.text = "", t.ab = "", t.textSize = null, t.textColor = null, t.shadowText = null, t.bevelText = null, t.outlineText = null, t.insetText = null, t.font = null, t.align = null, t.textScale = null, t.selectable = null, t.bold = null, t.padding = null, t.editable = null, t.ak = null, t.multiline = null, t.baselineShift = null, t.ar = null, t.ag = null, t.aa = !1, t.ap = t.init, t.init = function(e) {
        if (e) {
            var t;
            if (e.editable) t = e.multiline ? document.createElement("textarea") : document.createElement("input"), this.ak = 1, t.id = jbeeb.getUID(), t.style.position = "absolute", t.style.overflow = "visible", this.aj && (this.aj.position = "absolute", this.aj.overflow = "visible"), e.multiline || (t.type = "text"), e.element = t;
            this.ap(e), e.element = null;
            var n = this.style;
            if (n.textDecoration = "none", n.zoom = 1, n.size = e.h, this.text = e.text || "", this.aj) {
                var i = this.aj;
                i.fontSmooth = "always", i.WebkitFontSmoothing = "antialiased", i.textDecoration = "none", i.zoom = 1, i.size = e.h
            }
            this.applySkin(e, !0)
        }
    }, t.aq = t.applySkin, t.applySkin = function(e, t) {
        if (this.aa = !0, e.editable) {
            var n = null;
            e.fill && (n = "object" == typeof e.fill ? e.fill.color : e.fill), e.stroke = e.stroke || n || {
                weight: 1,
                color: "#000000",
                alpha: 1
            }
        }
        if (this.aq(e, t), this.style, this.textFit = e.textFit || null, this.font = e.font || "Arial, Helvetica, sans-serif", this.align = e.align || "left", this.textScale = e.textScale || 1, this.bold = e.bold || 0, this.selectable = e.selectable || 0, this.editable = e.editable || 0, this.multiline = e.multiline || 0, this.baselineShift = e.baselineShift || 0, t || (this.text = e.text || ""), this.ab = "", this.textColor = {}, e.textSize && (this.textSize = e.textSize), 1 == e.editable && this.setEditable(1), this.setMultiline(this.multiline, !0), this.setText(this.text), e.textColor) {
            var i = e.textColor,
                o = {};
            "string" == typeof i ? o = {
                color: i,
                alpha: 1
            } : (o = i).color || (o.color = null, o.alpha = null), this.setTextColor(o.color || "#000000", o.alpha || 1)
        }
        e.shadowText && (this.shadowText = e.shadowText), e.insetText && (this.insetText = e.insetText), e.bevelText && (this.bevelText = e.bevelText), e.outlineText && (this.outlineText = e.outlineText), e.shadow && (this.shadow = e.shadow), e.inset && (this.insetText = e.inset), e.bevel && (this.bevel = e.bevel), e.outline && (this.outline = e.outline), e.padding && this.setPadding(e.padding), e.alphaNumeric && (this.alphaNumeric = 1), e.numeric && (this.numeric = 1), this.setBaselineShift(this.baselineShift), this.aa = !1, this.Z(), this.X()
    }, t.setMultiline = function(e, t) {
        this.multiline = e;
        var n, i = this.style;
        e ? (this.textSize || (this.textSize = 12), n = "normal") : n = "nowrap", i.whiteSpace = n, this.aj && (this.aj.whiteSpace = n), this.ai()
    }, t.ak = 0, t.setEditable = function(e) {
        1 === e ? (this.amSM || this.setCursor("text"), this.ag ? this.ag.removeAllEventListeners() : this.ag = new jbeeb.Keyboard(this.element), this.ag.addEventListener("keydown", this.keyHandler, this), this.ag.addEventListener("keyup", this.keyHandler, this), this.setOverflow("hidden"), jbeeb.Utils.bindEvent(this.element, "focus", this.setFocus.bind(this)), jbeeb.Utils.bindEvent(this.element, "blur", this.Y.bind(this)), this.addMEL("mouseUp", this.setFocus, this)) : (this.amSM || this.setCursor("default"), this.ag && this.ag.removeAllEventListeners(), jbeeb.Utils.unbindEvent(this.element, "focus", this.setFocus.bind(this))), this.editable = e
    }, t.numeric = null, t.alphaNumeric = null, t.keyHandler = function(e, t, n) {
        var i = !0;
        this.alphaNumeric ? i = this.ag.alphaNumeric(t) : this.numeric && (i = this.ag.numeric(t)), 0 == this.multiline && (108 != t && 13 != t || (i = !1, "keyup" == n && this.dispatchEvent("enter", this, this.text))), 9 == t && (i = !1, "keyup" == n && this.dispatchEvent("tab", this, this.text)), i ? (this.ak && !this.multiline ? this.text = this.element.value : this.text = this._.text, "keyup" == n && this.dispatchEvent("change", this, this.text)) : this.ag.block(e)
    }, t.Y = function() {
        this.dispatchEvent("change", this, this.text)
    }, t.setPadding = function(e) {
        var t;
        this.padding = e, t = this._ ? this._.style : this.style;
        var n = "",
            i = "",
            o = "",
            s = "";
        if (this.multiline ? s = o = i = n = e + "px" : "left" == this.align ? e && (n = e + "px") : "right" == this.align && e && (i = e + "px"), t.paddingLeft = n, t.paddingRight = i, t.paddingTop = o, t.paddingBottom = s, this.aj) {
            var r = this.aj;
            r.paddingLeft = n, r.paddingRight = i, r.paddingTop = o, r.paddingBottom = s
        }
    }, t.ah = function() {
        var e = this.font,
            t = this.textColor || {},
            n = jbeeb.Utils.makeColor(t.color, t.alpha),
            i = this.bold ? "bold" : "normal",
            o = this.style;
        if (o.fontFamily = e, o.color = n, o.textAlign = this.align, o.fontWeight = i, this.aj) {
            var s = this.aj;
            s.fontFamily = e, s.color = n, s.textAlign = this.align, s.fontWeight = i
        }
    }, t.setFont = function(e) {
        this.font = e, this.style.fontFamily = e, this._ && (this._.style.fontFamily = this.font), this.aj && (this.aj.fontFamily = e), this.Z()
    }, t.setAlign = function(e) {
        this.align = e, "center" == (this.style.textAlign = e) && this.setPadding(0), this.aj && (this.aj.textAlign = e)
    }, t.setBold = function(e) {
        this.bold = e ? "bold" : "", this.style.fontWeight = this.bold, this.aj && (this.aj.fontWeight = this.bold), this.Z()
    }, t.setBaselineShift = function(e) {
        (this.baselineShift = e) ? 1 < e ? e = 1 : e < -1 && (e = -1): e = 0, e *= -1, this.ar = 1 + e, this.Z()
    }, t.measureText = function(e) {
        if (this.text || e) {
            var t = document.createElement("div");
            document.body.appendChild(t);
            var n = t.style;
            n.fontSize = this.height * this.textScale + "px", n.fontFamily = this.font, n.fontWeight = this.bold ? "bold" : "normal", n.position = "absolute", n.left = -1e3, n.top = -1e3, t.innerHTML = e || this.text;
            var i = {
                w: t.clientWidth,
                h: t.clientHeight
            };
            return document.body.removeChild(t), t = null, i
        }
        return 0
    }, t.setTextColor = function(e, t) {
        this.textColor || (this.textColor = {}), this.textColor.color = e, this.textColor.alpha = t;
        var n = jbeeb.Utils.makeColor(e, t);
        this.style.color = n, this.aj && (this.aj.color = n)
    }, t.setText = function(e) {
        if (this.element) {
            if (e = "" != e && e ? String(e) : "", this.text = e, this.ak && !this.multiline) this.element.value = e;
            else {
                if (!this._) {
                    var t = document.createElement("span");
                    t.style.fontFamily = this.font, this.element.appendChild(t), this._ = t
                }
                this._.innerHTML = e
            }
            this.ab != e && this.Z(), this.ab = e
        }
    }, t.selectAll = function() {
        this.ak && ((jbeeb.focus = this).element.focus(), this.element.select())
    }, t.al = t.setWidth, t.setWidth = function(e) {
        e != this.width && (this.al(e), this.ai())
    }, t.an = t.setHeight, t.setHeight = function(e) {
        e != this.height && (this.an(e), this.ai())
    }, t.am = t.setSize, t.setSize = function(e, t) {
        e == this.width && t == this.height || (this.am(e, t), this.ai())
    }, t.setTextScale = function(e) {
        this.textScale = e || 1, this.ai()
    }, t.setTextSize = function(e) {
        this.textSize = e, this.ai()
    }, t.setTextFit = function(e) {
        this.textFit = e, this.ai()
    }, t.ao = t.onAdded, t.onAdded = function() {
        this.ao(), this.Z()
    }, t.setFocus = function(e) {
        (jbeeb.focus = this).element.focus()
    }, t.ai = function() {
        if ("" != this.text) {
            var e = null,
                t = null,
                n = null;
            if (this.textSize) t = "1em", n = (e = this.textSize) + "px";
            else {
                var i = this.width,
                    o = this.height;
                if (0 < i && 0 < o)
                    if ("wh" == this.textFit) {
                        var s = i < o ? i : o;
                        e = 0 < this.textScale ? s * this.textScale : s
                    } else if ("w" == this.textFit) {
                    var r = this.measureText(),
                        a = this.width / r.w / 2;
                    jbeeb.Utils.isNumber(a) && 0 < a && (e = o * (this.textScale = a))
                } else e = o * this.textScale;
                else e = 0
            }
            e && (t = this.height * this.ar / e + "em", n = e + "px");
            var l = this.style;
            l.lineHeight = t, l.fontSize = n, this.aj && (this.aj.lineHeight = t, this.aj.fontSize = n)
        }
    }, t.getTextSize = function() {
        return this.style.fontSize || null
    }, t.Z = function() {
        this.aa || (this.ai(), this.ah())
    }, t.X = function() {
        var e = this.ac(),
            t = this.af(),
            n = this.ad(),
            i = this.ae(),
            o = "none";
        if (e == [] && t == [] && n == [] && i == []);
        else {
            for (var s = t.concat(n, e, i), r = s.length, a = [], l = [], c = 0, u = 0; u < r; u++) 0 == c ? 1 == s[u] && l.push("inset") : c < 4 ? l.push(s[u] + "px") : (l.push(jbeeb.Utils.makeColor(s[u], s[u + 1])), a.push(l.join(" ")), l = [], ++u, c = -1), c++;
            0 < a.length && (o = a.join(","))
        }
        var d = this.style;
        d.textShadow = d.MozTextShadow = d.WebkitTextShadow = d.OTextShadow = d.msTextShadow = o, this.aj && (this.aj.textShadow = o)
    }, t.ac = function() {
        var e = this.shadowText;
        return e ? [0, e.x, e.y, e.s, e.c, e.a] : []
    }, t.setShadowText = function(e) {
        this.shadowText = e, this.X()
    }, t.ae = function() {
        var e = this.insetText;
        return e ? [1, e.x, e.y, e.s, e.c, e.a] : []
    }, t.setInsetText = function(e) {
        this.insetText = e, this.X()
    }, t.af = function() {
        if (this.bevelText) {
            var e = this.bevelText,
                t = [];
            return e.c1 && 0 < e.a1 && (t = [0, -e.x, -e.y, e.s1, e.c1 || "#000000", e.a1]), e.c2 && 0 < e.a2 && (t = t.concat([0, e.x, e.y, e.s2, e.c2 || "#FFFFFF", e.a2])), t
        }
        return []
    }, t.setBevelText = function(e) {
        this.bevelText = e, this.X()
    }, t.ad = function() {
        if (this.outlineText) {
            var e = this.outlineText;
            return [0, -e.weight, -e.weight, e.spread || 0, e.color || "#000000", e.alpha, 0, e.weight, -e.weight, e.spread || 0, e.color || "#000000", e.alpha, 0, -e.weight, e.weight, e.spread || 0, e.color || "#000000", e.alpha, 0, e.weight, e.weight, e.spread || 0, e.color || "#000000", e.alpha]
        }
        return []
    }, t.setOutlineText = function(e) {
        this.outlineText = e, this.X()
    }, t.toString = function() {
        return "[TextBox (name=" + this.name + ")]"
    }, t.type = "TextBox", jbeeb.TextBox = e
}(), this.jbeeb = this.jbeeb || {},
function() {
    "use strict";
    var e = function(e) {
            this.init(e)
        },
        t = e.prototype = new jbeeb.Box(null);
    t.at = [], t.addChild = function(e) {
        if (null == e) return e;
        var t = arguments.length;
        if (0 < t)
            for (var n = 0; n < t; n++) {
                var i = arguments[n];
                i.parent && i.parent.removeChild(i), i.parent = this, i.stage = 1 == this.amStage ? this : this.stage, i.setZ(this.at.length), this.element.appendChild(i.element), i.onAdded && i.onAdded.call(i), this.at.push(i)
            }
    }, t.removeChild = function(e) {
        var t = arguments.length;
        if (1 < t) {
            for (var n = !0, i = t; i--;) n = n && this.removeChild(arguments[i]);
            return n
        }
        return this.removeChildAt(this.at.indexOf(e))
    }, t.removeChildAt = function(e) {
        var t = arguments.length;
        if (1 < t) {
            for (var n = [], i = 0; i < t; i++) n[i] = arguments[i];
            n.sort(function(e, t) {
                return t - e
            });
            var o = !0;
            for (i = 0; i < t; i++) o = o && this.removeChildAt(n[i]);
            return o
        }
        if (e < 0 || e > this.at.length - 1) return !1;
        var s = this.at[e];
        return s && (s.element && s.element.parentNode && s.element.parentNode.removeChild(s.element), s.parent = null), this.at.splice(e, 1), this.as(), !0
    }, t.removeAllChildren = function() {
        for (var e = this.at; e.length;) this.removeChildAt(0)
    }, t.as = function() {
        for (var e = this.at.length, t = 0; t < e; t++) {
            var n = this.at[t];
            n && n.setZ(t + 1)
        }
    }, t.toFront = function(e) {
        if (e) {
            for (var t = this.at.length, n = 0, i = t; i--;)
                if (this.at[i] == e) {
                    n = i;
                    break
                }
            jbeeb.Utils.arrayMove(this.at, n, t - 1), this.as()
        } else this.parent && this.parent.toFront(this)
    }, t.toBack = function(e) {
        if (e) {
            for (var t = 0, n = this.at.length; n--;)
                if (this.at[n] == e) {
                    t = n;
                    break
                }
            jbeeb.Utils.arrayMove(this.at, t, 0), this.as()
        } else this.parent && this.parent.toBack(this)
    }, t.aw = t.init, t.init = function(e) {
        this.aw(e), e && (this.stage = 1 == this.amStage ? this : this.stage, this.at = [])
    }, t.au = t.stretch, t.stretch = function(e, t) {
        var n = e,
            i = t,
            o = this.flex;
        o && (o.match(/w/) || (n = 1), o.match(/h/) || (i = 1));
        for (var s = this.at.length; s--;) {
            var r = this.at[s];
            r && r.stretch(n, i)
        }
        this.au(e, t)
    }, t.av = t.setFlex, t.setFlex = function(e) {
        for (var t = this.at.length; t--;) this.at[t].setFlex(e);
        this.av(e)
    }, t.ax = t.destroy, t.destroy = function() {
        if (this.at)
            for (var e = this.at.length; e--;) this.at[e] && (this.at[e].destroy(), this.removeChild(this.at[e]), this.at[e] = null);
        this.at = null, this.ax()
    }, t.destroyChildren = function() {
        if (this.at)
            for (var e = this.at.length; e--;) this.at[e] && (this.at[e].destroy(), this.removeChild(this.at[e]), this.at[e] = null);
        this.at.length = 0, this.at = null, this.at = []
    }, t.getChildren = function() {
        return this.at
    }, t.toString = function() {
        return "[Container (name=" + this.name + ")]"
    }, t.type = "Container", jbeeb.Container = e
}(), this.jbeeb = this.jbeeb || {},
function() {
    "use strict";
    var e = function(e) {
            return this.aA(e), this
        },
        t = e.prototype = new jbeeb.Container;
    t.amReady = null, t.ay = null, t.aA = function(e) {
        if (e)
            if (this.amReady = 0, e.onReady && (this.ay = [], this.ay.push(e.onReady)), this.id = jbeeb.getUID(), e.stage) this.amStage = 0, this.aB(e), jbeeb.register(this);
            else {
                this.amStage = 1, (this.parent = this).stage = this;
                var t = e.target,
                    n = null,
                    i = 0;
                t && ((n = "string" == typeof t ? document.getElementById(t) : t) && 1 === n.nodeType ? (this.element = document.createElement("div"), this.element.id = this.id, n.appendChild(this.element)) : i = 1), t && !i || (document.write('<div id="' + this.id + '"></div>'), this.element = document.getElementById(this.id)), e.element = this.element, this.aB(e), this.style = this.element.style, this.style.position = "relative", this.style.display = !0 === e.inline || "true" == e.inline || 1 === e.inline ? "inline-block" : "block", this.style.verticalAlign = "top", this.style.clear = "both", this.style.zoom = 1;
                var o = this.width || e.w || 1,
                    s = this.height || e.h || 1;
                this.setSize(o, s), this.setOverflow(e.overflow || "visible"), this.setCursor("default"), jbeeb.register(this)
            }
    }, t.aB = t.init, t.init = function() {
        var e = jbeeb.Utils.getXYWH(this.element);
        this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height, setTimeout(this.az.bind(this), 50)
    }, t.az = function() {
        if (this.amReady = 1, this.ay)
            for (var e = 0; e < this.ay.length; e++) this.ay.pop()()
    }, t.onReady = function(e) {
        this.amReady ? e() : (this.ay || (this.ay = []), this.ay.push(e))
    }, t.toString = function() {
        return "[Stage (name=" + this.name + ")]"
    }, t.type = "Stage", jbeeb.Stage = e
}(), this.jbeeb = this.jbeeb || {},
function() {
    var Q = function(e) {
        return e = e || {}, this.aI = e.onComplete, this.aC = e.timezone, this.aT = e.digits || 2, this.aD = e.truncate || 0, Q.aL[e.rangeHi] ? this.aH = Q.aL[e.rangeHi] : this.aH = Q.aJ, Q.aL[e.rangeLo] ? this.aG = Q.aL[e.rangeLo] : this.aG = Q.aK, e.end && this.aF(e.end), this
    };
    Q.aW = 6e4, Q.aX = 36e5, Q.aY = 864e5, Q.aM = 0, Q.aK = 1, Q.aO = 2, Q.aP = 3, Q.aQ = 4, Q.aN = 5, Q.aJ = 6, Q.aL = {
        ms: Q.aM,
        second: Q.aK,
        minute: Q.aO,
        hour: Q.aP,
        day: Q.aQ,
        month: Q.aN,
        year: Q.aJ
    };
    var e = Q.prototype;
    e.aS = !1, e.aR = !1, e.aI = null, e.aE = null, e.aC = 0, e.aT = 0, e.aH = Q.aJ, e.aG = Q.aM, e.aD = 0, e.aF = function(e, t) {
        var n, i = new Date,
            o = 0;
        if (e instanceof Date) n = new Date(e.getTime());
        else if ("object" == typeof e) {
            var s = e.year ? parseInt(e.year) : i.getFullYear(),
                r = e.month ? parseInt(e.month) - 1 : 0,
                a = e.day ? parseInt(e.day) : 0,
                l = e.hour ? parseInt(e.hour) : 0,
                c = e.minute ? parseInt(e.minute) : 0,
                u = e.second ? parseInt(e.second) : 0,
                d = (e.ampm ? e.ampm : "am").toLowerCase();
            l < 12 && /p/.test(d) && (l += 12), n = new Date(Date.UTC(s, r, a, l, c, u))
        } else o = 1, n = new Date(i.getTime() + 1e3 * (parseInt(e) + 1));
        if (!o && !t) {
            var h, p = 0;
            if (h = -(new Date).getTimezoneOffset() * Q.aW, void 0 !== this.aC) {
                var f = this.aC;
                p = f == parseInt(f) ? f * Q.aX : h
            } else p = h;
            var m = Math.abs(p - h);
            h < p && (m *= -1);
            var g = n.getTime() + m - h;
            n = new Date(g)
        }
        this.aE = n, this.aS = !1, this.aR = !1
    }, e.update = function() {
        return this.aV(new Date)
    }, e.diff = function(e, t) {
        return t && this.aF(t, !0), this.aV(e)
    }, e.aV = function(e) {
        var t = 0,
            n = 0,
            i = 0,
            o = 0,
            s = 0,
            r = 0,
            a = 0,
            l = this.aE,
            c = l.getTime() - e.getTime(),
            u = Math.floor,
            d = !1;
        if (0 < c) {
            var h = Q.aX,
                p = (Q.aY, this.aG),
                f = this.aH;
            this.aD && (p = -1, f = 10);
            var m = Q.aM,
                g = Q.aK,
                v = Q.aO,
                y = Q.aP,
                b = Q.aQ,
                x = Q.aN,
                w = (Q.aJ, c / 1e3),
                $ = w / 60,
                C = $ / 60,
                T = C / 24;
            p < b && (m <= f && (t = u(f == m ? c : c % 1e3)), g <= f && (n = u(f == g ? w : w % 60)), v <= f && (i = u(f == v ? $ : $ % 60)), y <= f && (o = u(f == y ? C : C % 24)));
            var k = e.getUTCFullYear(),
                E = e.getUTCMonth(),
                S = e.getUTCDate(),
                A = l.getUTCFullYear(),
                O = l.getUTCMonth(),
                j = l.getUTCDate(),
                I = S,
                N = j,
                D = 0;
            if (b <= f)
                if (f == b) s = u(T);
                else {
                    var P = e.getUTCHours(),
                        _ = e.getUTCMinutes(),
                        B = e.getUTCSeconds(),
                        M = l.getUTCHours(),
                        L = l.getUTCMinutes(),
                        F = l.getUTCSeconds(),
                        H = O + (O == E ? 0 : -1);
                    H < 0 && (H += 12);
                    var R = Q.getMonthDays(H, A);
                    R = (R = R < S ? Q.getMonthDays(H - 1, A) : R) < j ? j : R;
                    var z = 0;
                    S < j ? z = j - S - 1 : j < S && (z = S - j - 1), (D = (Q.aY - 1e3 * (B + 60 * _ + 3600 * P) + 1e3 * (F + 60 * L + 3600 * M)) / h) < 24 && S++, s = u((R - (S += z) + j + z) % R)
                }
            if (x <= f) {
                var q = 0,
                    W = 12 * (A - k);
                if (W < 0 || k == A && E == O) W = 0;
                else {
                    z = 0;
                    ++O == ++E ? I <= N && z-- : E < O ? z = O - E - 1 : O < E && (z = 12 - E + O, q--), D < 24 && I++, O <= E && N < I ? z-- : E <= O && I <= N && z++, (W += z) < 0 && (W = 0), 11 < W && (q += u(W / 12), W %= 12), f == x && (W += 12 * q, q = 0)
                }
                r = W, a = q
            }
        } else d = !0;
        var U = {
            ms: t,
            second: n,
            minute: i,
            hour: o,
            day: s,
            month: r,
            year: a
        };
        return Q.pad(U, this.aT), d && !this.aR && this.aI && (this.aS = !0, this.aR = !0, this.aI(this.aE)), U
    }, Q.aU = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Q.getMonthDays = function(e, t) {
        return 1 == e ? t % 400 == 0 || t % 4 == 0 && t % 100 != 0 ? 29 : 28 : Q.aU[e]
    }, Q.pad = function(e, t) {
        if (t)
            for (var n in e) {
                for (var i = String(e[n]), o = "ms" == n ? 3 : t; i.length < o;) i = "0" + i;
                e[n] = i
            }
    }, Object.defineProperty(e, "rangeHi", {
        get: function() {
            return this.aH
        },
        set: function(e) {
            Q.aL[e] ? this.aH = Q.aL[e] : this.aH = Q.aJ
        }
    }), Object.defineProperty(e, "rangeLo", {
        get: function() {
            return this.aG
        },
        set: function(e) {
            Q.aL[e] ? this.aG = Q.aL[e] : this.aG = Q.aK
        }
    }), jbeeb.TimeDiff = Q
}(),
function() {
    var G, e = function(e) {
            var t, n, i, o;
            if (this.imageFolder = CountdownImageFolder, this.imageBasename = CountdownImageBasename, this.imageExt = CountdownImageExt, this.imagePhysicalWidth = CountdownImagePhysicalWidth, this.imagePhysicalHeight = CountdownImagePhysicalHeight, this.totalFlipDigits = 2, this.bk = e || {}, e.bkgd) {
                var s = e.bkgd;
                s.color && (t = s.color), s.stroke && s.strokeColor && (n = {
                    weight: s.stroke || 1,
                    color: s.strokeColor,
                    alpha: s.strokeAlpha
                }), s.shadow && (i = s.shadow), s.rounded && (o = s.rounded)
            }
            this.be = new jbeeb.Stage({
                target: e.target,
                inline: e.inline || !1,
                w: e.w || e.width || CountdownWidth,
                h: e.h || e.height || CountdownHeight,
                rounded: o || null,
                fill: t || null,
                stroke: n || null,
                shadow: i || null
            }), jbeeb.register(this)
        },
        X = {},
        t = e.prototype;
    t.bk = null, t.be = null, t.bB = !1, t.bm = null, t.id = null, t.bs = !1, t.bc = null, t.totalFlipDigits = null, t.imageFolder = null, t.imageBasename = "flipper", t.imageExt = "png", t.bG = null, t.bd = null, t.bn = "second", t.by = !1, t.bo = null, t.bx = !1, t.bE = 0, t.bD = 0, t.bH = 0, t.bA = 0, t.bl = [], t.bj = {}, t.bq = 0, t.bp = 0, t.ba = null, t.init = function() {
        this.id = jbeeb.getUID();
        var e = this.bk;
        this.bB = !1, this.bs = !1, this.bc = e.style || "boring", this.width = e.w || e.width || CountdownWidth, this.height = e.h || e.height || CountdownHeight, this.bm = e.onComplete, this.by = e.hideLabels, this.bx = e.hideLine, this.bf = e.fadeInMS || CountdownFadeInMS, this.bo = e.labelText || CountdownLabels, this.bq = e.interval || CountdownInterval, this.bp = 0, this.ba = {
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
            ms: 0
        };
        var t = "";
        if ("flip" == this.bc) {
            var n = "";
            "/" != this.imageFolder.substr(1) && "http" != this.imageFolder.substr(4) && ("" != (n = jbeeb.scriptPath) && "http" == n.substr(4) && "/" != n.substr(-1) && (n += "/")), "/" != this.imageFolder.substr(-1) && (this.imageFolder += "/"), t = n + this.imageFolder + this.imageBasename
        }
        this.bd = {
            ms: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            second: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            minute: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            hour: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            day: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            month: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            year: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            }
        };
        for (var i, o = ["ms", "second", "minute", "hour", "day", "month", "year"], s = e.rangeLo ? e.rangeLo : "second", r = e.rangeHi ? e.rangeHi : "year", a = s = "ms" != s && "s" == s.substr(-1) ? s.substr(0, s.length - 1) : s, l = r = "ms" != r && "s" == r.substr(-1) ? r.substr(0, r.length - 1) : r, c = 0; c < o.length; c++) {
            var u = o[c];
            u == s && (s = c), u == r && (r = c)
        }
        for (c = 0; c < o.length; c++)
            if (s <= c && c <= r) {
                var d = o[c];
                this.bd[d].use = !0, this.bn = d
            }
        i = 0 === e.padding ? 0 : e.padding ? e.padding : "flip" == this.bc ? 0 : .8, "flip" == this.bc && (i /= 2);
        var h = r - s + 1,
            p = this.height,
            f = this.width / h,
            m = this.by ? 0 : .25 * f,
            g = .1 * f,
            v = f - g,
            y = p - m,
            b = v * i;
        "flip" == this.bc && (b = v * (i / this.totalFlipDigits));
        var x = v - b,
            w = this.height - 2 * m;
        this.bD = v / this.totalFlipDigits, this.bH = g;
        var $ = 0;
        "flip" == this.bc && (w = this.height - m, $ = .03 * p), this.bE = v, this.bD = x * this.totalFlipDigits, this.bH = g, this.bA = b / 2 / this.totalFlipDigits / 2;
        var C = {
            numbers: {
                font: "Arial, _sans",
                color: "#FFFFFF",
                weight: "normal",
                bkgd: "flip" == this.bc ? null : {
                    color: ["#000000", 1, 0, "#686868", 1, 50, "#000000", 1, 50, "#535050", 1, 100],
                    alpha: "v"
                },
                rounded: "flip" == this.bc ? null : .18,
                shadow: null
            },
            labels: {
                font: "Arial, _sans",
                color: "#303030",
                weight: "bold",
                textScale: 1,
                offset: 0
            }
        };
        if (e.numbers)
            for (var T in C.numbers) e.numbers[T] && (C.numbers[T] = e.numbers[T]);
        if (e.labels)
            for (var T in C.labels) e.labels[T] && (C.labels[T] = e.labels[T]);
        o.reverse(), this.bG = {}, this.bl = [];
        var k = 0,
            E = [];
        for (c = 0; c < o.length; c++) {
            var S = o[c];
            if (this.bd[S].use) {
                if (this.bG[S] = new jbeeb.Container({
                        x: k + g / 2,
                        y: 0,
                        w: v,
                        h: y,
                        rounded: C.numbers.rounded || null,
                        fill: jbeeb.Utils.clone(C.numbers.bkgd) || null,
                        shadow: C.numbers.shadow || null
                    }), (U = this.bG[S]).store = {
                        name: S
                    }, this.bj[S] = v, "flip" == this.bc) {
                    var A = (x - 2 * $ - 2 * b) / this.totalFlipDigits,
                        O = this.imagePhysicalWidth * (A / this.imagePhysicalWidth),
                        j = this.imagePhysicalHeight * (w / this.imagePhysicalHeight);
                    U.time = new jbeeb.Container({
                        x: 0,
                        y: 0,
                        w: O * this.totalFlipDigits,
                        h: j
                    });
                    for (var I = [], N = 0; N < this.totalFlipDigits; N++) {
                        for (var D = new jbeeb.Container({
                                x: O * N + $ * N,
                                y: 0,
                                w: O,
                                h: j
                            }), P = [], _ = 0; _ < 10; _++) {
                            for (var B = new jbeeb.Container({
                                    x: 0,
                                    y: 0,
                                    w: O,
                                    h: j
                                }), M = [], L = 0; L < 3; L++) {
                                var F = t + ("" + _ + L) + "." + this.imageExt;
                                X[F] || (E.push(F), X[F] = 1);
                                var H = new jbeeb.Box({
                                    x: 0,
                                    y: 0,
                                    w: O,
                                    h: j,
                                    image: {
                                        url: F,
                                        mode: "fit"
                                    }
                                });
                                M[L] = H, B.addChild(H)
                            }
                            B.img = M, P[_] = B, D.addChild(B)
                        }
                        D.num = P, I[N] = D, U.time.addChild(D)
                    }
                    U.time.slot = I, U.addChild(U.time)
                } else if (U.time = new jbeeb.TextBox({
                        x: 0,
                        y: 0,
                        w: v,
                        h: y,
                        text: "00",
                        textScale: i,
                        font: C.numbers.font,
                        textColor: C.numbers.color,
                        align: "center"
                    }), U.addChild(U.time), !this.bx) {
                    var R = .03 * p;
                    U.line = new jbeeb.Box({
                        x: 0,
                        y: 0,
                        w: v,
                        h: R,
                        fill: "#000000"
                    }), U.addChild(U.line), U.line.center()
                }
                if (this.be.addChild(U), !this.by) {
                    var z = this.bo[S],
                        q = p - .7 * m + C.labels.offset;
                    U.labels = new jbeeb.TextBox({
                        x: k,
                        y: q,
                        w: f,
                        h: .7 * m,
                        font: C.labels.font,
                        textScale: C.labels.textScale,
                        textColor: C.labels.color,
                        bold: 1,
                        align: "center",
                        text: z
                    }), this.be.addChild(U.labels)
                }
                this.bl.push(U), U.time.center(), e.numberMarginTop && U.time.setY(e.numberMarginTop), k += f
            }
        }
        var W, U = this.bG;
        "flip" == this.bc ? (U.year && this.bz("year", "00"), U.month && this.bz("month", "00"), U.day && this.bz("day", "00"), U.hour && this.bz("hour", "00"), U.minute && this.bz("minute", "00"), U.second && this.bz("second", "00"), U.ms && this.bz("ms", "000")) : (U.year && U.year.time.setText("00"), U.month && U.month.time.setText("00"), U.day && U.day.time.setText("00"), U.hour && U.hour.time.setText("00"), U.minute && U.minute.time.setText("00"), U.second && U.second.time.setText("00"), U.ms && U.ms.time.setText("000"), this.bi()), W = e.time ? e.time : {
            year: e.year || e.years,
            month: e.month || e.months,
            day: e.day || e.days,
            hour: e.hour || e.hours,
            minute: e.minute || e.minutes,
            second: e.second || e.seconds,
            ms: e.second || e.ms,
            ampm: e.ampm || ""
        }, this.a_ = new jbeeb.TimeDiff({
            end: W,
            rangeHi: l,
            rangeLo: a,
            timezone: e.timezone || 0,
            onComplete: this.bC.bind(this),
            truncate: e.truncate || 0
        });
        var Q = E.length;
        if (0 < (this.bu = Q)) {
            this.bw(!0);
            for (c = 0; c < Q; c++) {
                if ((M = new Image).onload = this.bt.bind(this), M.src = E[c], !G) {
                    var Y = (G = document.createElement("div")).style;
                    Y.position = "fixed", Y.left = "0px", Y.bottom = "0px", Y.width = "1px", Y.height = "1px", Y.overflow = "hidden", document.body.appendChild(G)
                }(Y = M.style).position = "absolute", Y.left = "0px", Y.bottom = "0px", Y.width = "1px", Y.height = "1px", G.appendChild(M)
            }
            this.bb(), this.bb(), this.bb()
        } else this.br()
    }, t.bu = 0, t.bv = 0, t.bt = function(e) {
        this.bv++, e.target.onload = null, this.bv >= this.bu && (this.br(), this.bw(!1))
    }, t.br = function() {
        this.bs = !0, jbeeb.ticker.addEventListener("tick", this.tick, this)
    }, t.bw = function(e) {
        e ? (this.be.setAlpha(0), this.bg = 1, setTimeout(this.bh.bind(this), 10)) : (this.bg = 0, setTimeout(this.bh.bind(this), this.bf / 2))
    }, t.bf = 1e3, t.bg = 0, t.bh = function() {
        if (1 === this.bg) {
            var e = "opacity " + this.bf + "ms ease-out",
                t = this.be.element.style;
            t.opacity = "0", t.mozTransition = t.oTransition = t.msTransition = t.webkitTransition = t.transition = e
        } else this.be.setAlpha(1)
    }, t.tick = function() {
        !0 === this.bs && this.bb()
    }, t.bC = function(e) {
        this.bm && this.bm(e)
    }, t.bF = function(e) {
        return e.toString().length * this.bD
    }, t.bi = function() {
        for (var e = !1, t = 0; t < this.bl.length; t++) {
            var n = (s = this.bl[t]).store.name,
                i = s.time.text;
            (r = this.bF(i)) >= this.bE && r != this.bj[n] && (s.setWidth(r + this.bA), this.bj[n] = r + this.bA, e = !0)
        }
        if (e) {
            var o = 0;
            for (t = 0; t < this.bl.length; t++) {
                i = (s = this.bl[t]).time.text;
                var s, r = this.bF(i);
                s.setX(o), s.time.setWidth(s.width), s.time.center(), s.labels && (s.labels.setX(o), s.labels.setWidth(s.width)), s.line && (s.line.setWidth(s.width), s.line.center()), o += s.width + this.bH
            }
        }
    }, t.bb = function() {
        this.bp += jbeeb.ticker.getInterval(), this.bp > this.bq && (this.ba = this.a_.update(), this.bp = 0);
        var e = this.bG,
            t = this.ba;
        "flip" == this.bc ? (e.year && this.bz("year", t.year), e.month && this.bz("month", t.month), e.day && this.bz("day", t.day), e.hour && this.bz("hour", t.hour), e.minute && this.bz("minute", t.minute), e.second && this.bz("second", t.second), e.ms && this.bz("ms", t.ms)) : (e.year && e.year.time.setText(t.year), e.month && e.month.time.setText(t.month), e.day && e.day.time.setText(t.day), e.hour && e.hour.time.setText(t.hour), e.minute && e.minute.time.setText(t.minute), e.second && e.second.time.setText(t.second), e.ms && e.ms.time.setText(t.ms), this.bi())
    }, t.bz = function(e, t) {
        for (var n = 0; n < this.totalFlipDigits; n++) {
            var i = this.bG[e].time.slot[n],
                o = this.bd[e],
                s = String(t).substr(n, 1),
                r = i.num[s];
            if (r) {
                if (o.prev[n] != s) {
                    for (var a = 0; a < 10; a++) i.num[a].hide();
                    r.show(), o.ani[n] = !0, o.aniCount[n] = 0
                }
                if (o.ani[n]) {
                    for (a = 0; a < 3; a++) r.img[a].hide();
                    this.bB ? r.img[2].show() : (r.img[o.aniCount[n]].show(), o.aniCount[n]++, 2 < o.aniCount[n] && (o.ani[n] = !1))
                }
                o.prev[n] = s
            }
        }
    }, window.Countdown = e
}(),
function(E) {
    function S(e) {
        E.fn.cycle.debug && A(e)
    }

    function A() {
        window.console && window.console.log && window.console.log("[cycle] " + Array.prototype.join.call(arguments, " "))
    }

    function O(e, t) {
        if (!E.support.opacity && t.cleartype && e.style.filter) try {
            e.style.removeAttribute("filter")
        } catch (e) {}
    }

    function j(e, n, t, i) {
        if (t && n.busy && n.manualTrump && (E(e).stop(!0, !0), n.busy = !1), !n.busy) {
            var o = n.$cont[0],
                s = e[n.currSlide],
                r = e[n.nextSlide];
            if (o.cycleStop == n.stopCount && (0 !== o.cycleTimeout || t))
                if (t || o.cyclePause || !(n.autostop && --n.countdown <= 0 || n.nowrap && !n.random && n.nextSlide < n.currSlide)) {
                    if (t || !o.cyclePause) {
                        var a = n.fx;
                        s.cycleH = s.cycleH || E(s).height(), s.cycleW = s.cycleW || E(s).width(), r.cycleH = r.cycleH || E(r).height(), r.cycleW = r.cycleW || E(r).width(), n.multiFx && ((null == n.lastFx || ++n.lastFx >= n.fxs.length) && (n.lastFx = 0), a = n.fxs[n.lastFx], n.currFx = a), n.oneTimeFx && (a = n.oneTimeFx, n.oneTimeFx = null), E.fn.cycle.resetState(n, a), n.before.length && E.each(n.before, function(e, t) {
                            o.cycleStop == n.stopCount && t.apply(r, [s, r, n, i])
                        });
                        var l = function() {
                            E.each(n.after, function(e, t) {
                                o.cycleStop == n.stopCount && t.apply(r, [s, r, n, i])
                            })
                        };
                        if (n.nextSlide != n.currSlide && (n.busy = 1, n.fxFn ? n.fxFn(s, r, n, l, i) : E.isFunction(E.fn.cycle[n.fx]) ? E.fn.cycle[n.fx](s, r, n, l) : E.fn.cycle.custom(s, r, n, l, t && n.fastOnEvent)), n.lastSlide = n.currSlide, n.random) n.currSlide = n.nextSlide, ++n.randomIndex == e.length && (n.randomIndex = 0), n.nextSlide = n.randomMap[n.randomIndex];
                        else {
                            var c = n.nextSlide + 1 == e.length;
                            n.nextSlide = c ? 0 : n.nextSlide + 1, n.currSlide = c ? e.length - 1 : n.nextSlide - 1
                        }
                        n.pager && E.fn.cycle.updateActivePagerLink(n.pager, n.currSlide)
                    }
                    var u = 0;
                    n.timeout && !n.continuous ? u = d(s, r, n, i) : n.continuous && o.cyclePause && (u = 10), 0 < u && (o.cycleTimeout = setTimeout(function() {
                        j(e, n, 0, !n.rev)
                    }, u))
                } else n.end && n.end(n)
        }
    }

    function d(e, t, n, i) {
        if (n.timeoutFn) {
            for (var o = n.timeoutFn(e, t, n, i); o - n.speed < 250;) o += n.speed;
            if (S("calculated timeout: " + o + "; speed: " + n.speed), !1 !== o) return o
        }
        return n.timeout
    }

    function I(e, t) {
        var n = e.elements,
            i = e.$cont[0],
            o = i.cycleTimeout;
        if (o && (clearTimeout(o), i.cycleTimeout = 0), e.random && t < 0) e.randomIndex--, -2 == --e.randomIndex ? e.randomIndex = n.length - 2 : -1 == e.randomIndex && (e.randomIndex = n.length - 1), e.nextSlide = e.randomMap[e.randomIndex];
        else if (e.random) ++e.randomIndex == n.length && (e.randomIndex = 0), e.nextSlide = e.randomMap[e.randomIndex];
        else if (e.nextSlide = e.currSlide + t, e.nextSlide < 0) {
            if (e.nowrap) return !1;
            e.nextSlide = n.length - 1
        } else if (e.nextSlide >= n.length) {
            if (e.nowrap) return !1;
            e.nextSlide = 0
        }
        return E.isFunction(e.prevNextClick) && e.prevNextClick(0 < t, e.nextSlide, n[e.nextSlide]), j(n, e, 1, 0 <= t), !1
    }

    function N(e) {
        function i(e) {
            return (e = parseInt(e).toString(16)).length < 2 ? "0" + e : e
        }
        e.each(function() {
            E(this).css("background-color", function(e) {
                for (; e && "html" != e.nodeName.toLowerCase(); e = e.parentNode) {
                    var t = E.css(e, "background-color");
                    if (0 <= t.indexOf("rgb")) {
                        var n = t.match(/\d+/g);
                        return "#" + i(n[0]) + i(n[1]) + i(n[2])
                    }
                    if (t && "transparent" != t) return t
                }
                return "#ffffff"
            }(this))
        })
    }
    null == E.support && (E.support = {
        opacity: !E.browser.msie
    }), E.fn.cycle = function(r, a) {
        var l = {
            s: this.selector,
            c: this.context
        };
        return 0 === this.length && "stop" != r ? (!E.isReady && l.s ? (A("DOM not ready, queuing slideshow"), E(function() {
            E(l.s, l.c).cycle(r, a)
        })) : A("terminating; zero elements found by selector" + (E.isReady ? "" : " (DOM not ready)")), this) : this.each(function() {
            var e = function(e, t, n) {
                null == e.cycleStop && (e.cycleStop = 0);
                null == t && (t = {}); {
                    if (t.constructor == String) {
                        switch (t) {
                            case "stop":
                                return e.cycleStop++, e.cycleTimeout && clearTimeout(e.cycleTimeout), e.cycleTimeout = 0, E(e).removeData("cycle.opts"), !1;
                            case "toggle":
                                return e.cyclePause = 1 === e.cyclePause ? 0 : 1, !1;
                            case "pause":
                                return !(e.cyclePause = 1);
                            case "resume":
                                if (!(e.cyclePause = 0) === n) {
                                    if (!(t = E(e).data("cycle.opts"))) return A("options not found, can not resume"), !1;
                                    e.cycleTimeout && (clearTimeout(e.cycleTimeout), e.cycleTimeout = 0), j(t.elements, t, 1, 1)
                                }
                                return !1;
                            case "prev":
                            case "next":
                                var i = E(e).data("cycle.opts");
                                return i ? E.fn.cycle[t](i) : A('options not found, "prev/next" ignored'), !1;
                            default:
                                t = {
                                    fx: t
                                }
                        }
                        return t
                    }
                    if (t.constructor == Number) {
                        var o = t;
                        return (t = E(e).data("cycle.opts")) ? o < 0 || o >= t.elements.length ? A("invalid slide index: " + o) : (t.nextSlide = o, e.cycleTimeout && (clearTimeout(e.cycleTimeout), e.cycleTimeout = 0), "string" == typeof n && (t.oneTimeFx = n), j(t.elements, t, 1, o >= t.currSlide)) : A("options not found, can not advance slide"), !1
                    }
                }
                return t
            }(this, r, a);
            if (!1 !== e) {
                this.cycleTimeout && clearTimeout(this.cycleTimeout), this.cycleTimeout = this.cyclePause = 0;
                var t = E(this),
                    n = e.slideExpr ? E(e.slideExpr, this) : t.children(),
                    i = n.get();
                if (i.length < 2) A("terminating; too few slides: " + i.length);
                else {
                    var o = function(e, t, n, s, r) {
                        var a = E.extend({}, E.fn.cycle.defaults, s || {}, E.metadata ? e.metadata() : E.meta ? e.data() : {});
                        a.autostop && (a.countdown = a.autostopCount || n.length);
                        var i = e[0];
                        e.data("cycle.opts", a), a.$cont = e, a.stopCount = i.cycleStop, a.elements = n, a.before = a.before ? [a.before] : [], a.after = a.after ? [a.after] : [], a.after.unshift(function() {
                            a.busy = 0
                        }), !E.support.opacity && a.cleartype && a.after.push(function() {
                            O(this, a)
                        });
                        a.continuous && a.after.push(function() {
                            j(n, a, 0, !a.rev)
                        });
                        o = a, o.original = {
                            before: [],
                            after: []
                        }, o.original.cssBefore = E.extend({}, o.cssBefore), o.original.cssAfter = E.extend({}, o.cssAfter), o.original.animIn = E.extend({}, o.animIn), o.original.animOut = E.extend({}, o.animOut), E.each(o.before, function() {
                            o.original.before.push(this)
                        }), E.each(o.after, function() {
                            o.original.after.push(this)
                        }), E.support.opacity || !a.cleartype || a.cleartypeNoBg || N(t);
                        var o;
                        "static" == e.css("position") && e.css("position", "relative");
                        a.width && e.width(a.width);
                        a.height && "auto" != a.height && e.height(a.height);
                        a.startingSlide && (a.startingSlide = parseInt(a.startingSlide));
                        if (a.random) {
                            a.randomMap = [];
                            for (var l = 0; l < n.length; l++) a.randomMap.push(l);
                            a.randomMap.sort(function(e, t) {
                                return Math.random() - .5
                            }), a.randomIndex = 0, a.startingSlide = a.randomMap[0]
                        } else a.startingSlide >= n.length && (a.startingSlide = 0);
                        a.currSlide = a.startingSlide = a.startingSlide || 0;
                        var c = a.startingSlide;
                        t.css({
                            position: "absolute",
                            top: 0,
                            left: 0
                        }).hide().each(function(e) {
                            var t = c ? c <= e ? n.length - (e - c) : c - e : n.length - e;
                            E(this).css("z-index", t)
                        }), E(n[c]).css("opacity", 1).show(), O(n[c], a), a.fit && a.width && t.width(a.width);
                        a.fit && a.height && "auto" != a.height && t.height(a.height);
                        if (a.containerResize && !e.innerHeight()) {
                            for (var u = 0, d = 0, h = 0; h < n.length; h++) {
                                var f = E(n[h]),
                                    m = f[0],
                                    g = f.outerWidth(),
                                    v = f.outerHeight();
                                g || (g = m.offsetWidth), v || (v = m.offsetHeight), u = u < g ? g : u, d = d < v ? v : d
                            }
                            0 < u && 0 < d && e.css({
                                width: u + "px",
                                height: d + "px"
                            })
                        }
                        a.pause && e.hover(function() {
                            this.cyclePause++
                        }, function() {
                            this.cyclePause--
                        });
                        if (!1 === function(e) {
                                var t, n, i = E.fn.cycle.transitions;
                                if (0 < e.fx.indexOf(",")) {
                                    for (e.multiFx = !0, e.fxs = e.fx.replace(/\s*/g, "").split(","), t = 0; t < e.fxs.length; t++) {
                                        var o = e.fxs[t];
                                        (n = i[o]) && i.hasOwnProperty(o) && E.isFunction(n) || (A("discarding unknown transition: ", o), e.fxs.splice(t, 1), t--)
                                    }
                                    if (!e.fxs.length) return A("No valid transitions named; slideshow terminating."), !1
                                } else if ("all" == e.fx)
                                    for (p in e.multiFx = !0, e.fxs = [], i) n = i[p], i.hasOwnProperty(p) && E.isFunction(n) && e.fxs.push(p);
                                if (e.multiFx && e.randomizeEffects) {
                                    var s = Math.floor(20 * Math.random()) + 30;
                                    for (t = 0; t < s; t++) {
                                        var r = Math.floor(Math.random() * e.fxs.length);
                                        e.fxs.push(e.fxs.splice(r, 1)[0])
                                    }
                                    S("randomized fx sequence: ", e.fxs)
                                }
                                return !0
                            }(a)) return !1;
                        var y = !1;
                        if (s.requeueAttempts = s.requeueAttempts || 0, t.each(function() {
                                var e = E(this);
                                if (this.cycleH = a.fit && a.height ? a.height : e.height(), this.cycleW = a.fit && a.width ? a.width : e.width(), e.is("img")) {
                                    var t = E.browser.msie && 28 == this.cycleW && 30 == this.cycleH && !this.complete,
                                        n = E.browser.mozilla && 34 == this.cycleW && 19 == this.cycleH && !this.complete,
                                        i = E.browser.opera && (42 == this.cycleW && 19 == this.cycleH || 37 == this.cycleW && 17 == this.cycleH) && !this.complete,
                                        o = 0 == this.cycleH && 0 == this.cycleW && !this.complete;
                                    if (t || n || i || o) {
                                        if (r.s && a.requeueOnImageNotLoaded && ++s.requeueAttempts < 100) return A(s.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH), setTimeout(function() {
                                            E(r.s, r.c).cycle(s)
                                        }, a.requeueTimeout), !(y = !0);
                                        A("could not determine size of image: " + this.src, this.cycleW, this.cycleH)
                                    }
                                }
                                return !0
                            }), y) return !1;
                        a.cssBefore = a.cssBefore || {}, a.animIn = a.animIn || {}, a.animOut = a.animOut || {}, t.not(":eq(" + c + ")").css(a.cssBefore), a.cssFirst && E(t[c]).css(a.cssFirst);
                        if (a.timeout)
                            for (a.timeout = parseInt(a.timeout), a.speed.constructor == String && (a.speed = E.fx.speeds[a.speed] || parseInt(a.speed)), a.sync || (a.speed = a.speed / 2); a.timeout - a.speed < 250;) a.timeout += a.speed;
                        a.easing && (a.easeIn = a.easeOut = a.easing);
                        a.speedIn || (a.speedIn = a.speed);
                        a.speedOut || (a.speedOut = a.speed);
                        a.slideCount = n.length, a.currSlide = a.lastSlide = c, a.random ? (a.nextSlide = a.currSlide, ++a.randomIndex == n.length && (a.randomIndex = 0), a.nextSlide = a.randomMap[a.randomIndex]) : a.nextSlide = a.startingSlide >= n.length - 1 ? 0 : a.startingSlide + 1;
                        if (!a.multiFx) {
                            var b = E.fn.cycle.transitions[a.fx];
                            if (E.isFunction(b)) b(e, t, a);
                            else if ("custom" != a.fx && !a.multiFx) return A("unknown transition: " + a.fx, "; slideshow terminating"), !1
                        }
                        var x = t[c];
                        a.before.length && a.before[0].apply(x, [x, x, a, !0]);
                        1 < a.after.length && a.after[1].apply(x, [x, x, a, !0]);
                        a.next && E(a.next).bind(a.prevNextEvent, function() {
                            return I(a, a.rev ? -1 : 1)
                        });
                        a.prev && E(a.prev).bind(a.prevNextEvent, function() {
                            return I(a, a.rev ? 1 : -1)
                        });
                        a.pager && (w = n, $ = a, C = E($.pager), E.each(w, function(e, t) {
                            E.fn.cycle.createPagerAnchor(e, t, C, w, $)
                        }), E.fn.cycle.updateActivePagerLink($.pager, $.startingSlide));
                        var w, $, C;
                        return T = a, k = n, T.addSlide = function(e, t) {
                            var n = E(e),
                                i = n[0];
                            T.autostopCount || T.countdown++, k[t ? "unshift" : "push"](i), T.els && T.els[t ? "unshift" : "push"](i), T.slideCount = k.length, n.css("position", "absolute"), n[t ? "prependTo" : "appendTo"](T.$cont), t && (T.currSlide++, T.nextSlide++), E.support.opacity || !T.cleartype || T.cleartypeNoBg || N(n), T.fit && T.width && n.width(T.width), T.fit && T.height && "auto" != T.height && $slides.height(T.height), i.cycleH = T.fit && T.height ? T.height : n.height(), i.cycleW = T.fit && T.width ? T.width : n.width(), n.css(T.cssBefore), T.pager && E.fn.cycle.createPagerAnchor(k.length - 1, i, E(T.pager), k, T), E.isFunction(T.onAddSlide) ? T.onAddSlide(n) : n.hide()
                        }, a;
                        var T, k
                    }(t, n, i, e, l);
                    if (!1 !== o) {
                        var s = o.continuous ? 10 : d(o.currSlide, o.nextSlide, o, !o.rev);
                        s && ((s += o.delay || 0) < 10 && (s = 10), S("first timeout: " + s), this.cycleTimeout = setTimeout(function() {
                            j(i, o, 0, !o.rev)
                        }, s))
                    }
                }
            }
        })
    }, E.fn.cycle.resetState = function(e, t) {
        t = t || e.fx, e.before = [], e.after = [], e.cssBefore = E.extend({}, e.original.cssBefore), e.cssAfter = E.extend({}, e.original.cssAfter), e.animIn = E.extend({}, e.original.animIn), e.animOut = E.extend({}, e.original.animOut), e.fxFn = null, E.each(e.original.before, function() {
            e.before.push(this)
        }), E.each(e.original.after, function() {
            e.after.push(this)
        });
        var n = E.fn.cycle.transitions[t];
        E.isFunction(n) && n(e.$cont, E(e.elements), e)
    }, E.fn.cycle.updateActivePagerLink = function(e, t) {
        E(e).each(function() {
            E(this).find("a").removeClass("activeSlide").filter("a:eq(" + t + ")").addClass("activeSlide")
        })
    }, E.fn.cycle.next = function(e) {
        I(e, e.rev ? -1 : 1)
    }, E.fn.cycle.prev = function(e) {
        I(e, e.rev ? 1 : -1)
    }, E.fn.cycle.createPagerAnchor = function(i, e, t, o, s) {
        var n;
        if (n = E.isFunction(s.pagerAnchorBuilder) ? s.pagerAnchorBuilder(i, e) : '<a href="#">' + (i + 1) + "</a>") {
            var r = E(n);
            if (0 === r.parents("body").length) {
                var a = [];
                1 < t.length ? (t.each(function() {
                    var e = r.clone(!0);
                    E(this).append(e), a.push(e[0])
                }), r = E(a)) : r.appendTo(t)
            }
            r.bind(s.pagerEvent, function(e) {
                e.preventDefault(), s.nextSlide = i;
                var t = s.$cont[0],
                    n = t.cycleTimeout;
                return n && (clearTimeout(n), t.cycleTimeout = 0), E.isFunction(s.pagerClick) && s.pagerClick(s.nextSlide, o[s.nextSlide]), j(o, s, 1, s.currSlide < i), !1
            }), "click" != s.pagerEvent && r.click(function() {
                return !1
            }), s.pauseOnPagerHover && r.hover(function() {
                s.$cont[0].cyclePause++
            }, function() {
                s.$cont[0].cyclePause--
            })
        }
    }, E.fn.cycle.hopsFromLast = function(e, t) {
        var n = e.lastSlide,
            i = e.currSlide;
        return t ? n < i ? i - n : e.slideCount - n : i < n ? n - i : n + e.slideCount - i
    }, E.fn.cycle.commonReset = function(e, t, n, i, o, s) {
        E(n.elements).not(e).hide(), n.cssBefore.opacity = 1, !(n.cssBefore.display = "block") !== i && 0 < t.cycleW && (n.cssBefore.width = t.cycleW), !1 !== o && 0 < t.cycleH && (n.cssBefore.height = t.cycleH), n.cssAfter = n.cssAfter || {}, n.cssAfter.display = "none", E(e).css("zIndex", n.slideCount + (!0 === s ? 1 : 0)), E(t).css("zIndex", n.slideCount + (!0 === s ? 0 : 1))
    }, E.fn.cycle.custom = function(e, t, n, i, o) {
        var s = E(e),
            r = E(t),
            a = n.speedIn,
            l = n.speedOut,
            c = n.easeIn,
            u = n.easeOut;
        r.css(n.cssBefore), o && (a = l = "number" == typeof o ? o : 1, c = u = null);
        var d = function() {
            r.animate(n.animIn, a, c, i)
        };
        s.animate(n.animOut, l, u, function() {
            n.cssAfter && s.css(n.cssAfter), n.sync || d()
        }), n.sync && d()
    }, E.fn.cycle.transitions = {
        fade: function(e, t, n) {
            t.not(":eq(" + n.currSlide + ")").css("opacity", 0), n.before.push(function(e, t, n) {
                E.fn.cycle.commonReset(e, t, n), n.cssBefore.opacity = 0
            }), n.animIn = {
                opacity: 1
            }, n.animOut = {
                opacity: 0
            }, n.cssBefore = {
                top: 0,
                left: 0
            }
        }
    }, E.fn.cycle.ver = function() {
        return "2.74"
    }, E.fn.cycle.defaults = {
        fx: "fade",
        timeout: 4e3,
        timeoutFn: null,
        continuous: 0,
        speed: 1e3,
        speedIn: null,
        speedOut: null,
        next: null,
        prev: null,
        prevNextClick: null,
        prevNextEvent: "click",
        pager: null,
        pagerClick: null,
        pagerEvent: "click",
        pagerAnchorBuilder: null,
        before: null,
        after: null,
        end: null,
        easing: null,
        easeIn: null,
        easeOut: null,
        shuffle: null,
        animIn: null,
        animOut: null,
        cssBefore: null,
        cssAfter: null,
        fxFn: null,
        height: "auto",
        startingSlide: 0,
        sync: 1,
        random: 0,
        fit: 0,
        containerResize: 1,
        pause: 0,
        pauseOnPagerHover: 0,
        autostop: 0,
        autostopCount: 0,
        delay: 0,
        slideExpr: null,
        cleartype: !E.support.opacity,
        cleartypeNoBg: !1,
        nowrap: 0,
        fastOnEvent: 0,
        randomizeEffects: 1,
        rev: 0,
        manualTrump: !0,
        requeueOnImageNotLoaded: !0,
        requeueTimeout: 250
    }
}(jQuery),
function(m) {
    m.fn.cycle.transitions.none = function(e, t, n) {
        n.fxFn = function(e, t, n, i) {
            m(t).show(), m(e).hide(), i()
        }
    }, m.fn.cycle.transitions.scrollUp = function(e, t, n) {
        e.css("overflow", "hidden"), n.before.push(m.fn.cycle.commonReset);
        var i = e.height();
        n.cssBefore = {
            top: i,
            left: 0
        }, n.cssFirst = {
            top: 0
        }, n.animIn = {
            top: 0
        }, n.animOut = {
            top: -i
        }
    }, m.fn.cycle.transitions.scrollDown = function(e, t, n) {
        e.css("overflow", "hidden"), n.before.push(m.fn.cycle.commonReset);
        var i = e.height();
        n.cssFirst = {
            top: 0
        }, n.cssBefore = {
            top: -i,
            left: 0
        }, n.animIn = {
            top: 0
        }, n.animOut = {
            top: i
        }
    }, m.fn.cycle.transitions.scrollLeft = function(e, t, n) {
        e.css("overflow", "hidden"), n.before.push(m.fn.cycle.commonReset);
        var i = e.width();
        n.cssFirst = {
            left: 0
        }, n.cssBefore = {
            left: i,
            top: 0
        }, n.animIn = {
            left: 0
        }, n.animOut = {
            left: 0 - i
        }
    }, m.fn.cycle.transitions.scrollRight = function(e, t, n) {
        e.css("overflow", "hidden"), n.before.push(m.fn.cycle.commonReset);
        var i = e.width();
        n.cssFirst = {
            left: 0
        }, n.cssBefore = {
            left: -i,
            top: 0
        }, n.animIn = {
            left: 0
        }, n.animOut = {
            left: i
        }
    }, m.fn.cycle.transitions.scrollHorz = function(e, t, n) {
        e.css("overflow", "hidden").width(), n.before.push(function(e, t, n, i) {
            m.fn.cycle.commonReset(e, t, n), n.cssBefore.left = i ? t.cycleW - 1 : 1 - t.cycleW, n.animOut.left = i ? -e.cycleW : e.cycleW
        }), n.cssFirst = {
            left: 0
        }, n.cssBefore = {
            top: 0
        }, n.animIn = {
            left: 0
        }, n.animOut = {
            top: 0
        }
    }, m.fn.cycle.transitions.scrollVert = function(e, t, n) {
        e.css("overflow", "hidden"), n.before.push(function(e, t, n, i) {
            m.fn.cycle.commonReset(e, t, n), n.cssBefore.top = i ? 1 - t.cycleH : t.cycleH - 1, n.animOut.top = i ? e.cycleH : -e.cycleH
        }), n.cssFirst = {
            top: 0
        }, n.cssBefore = {
            left: 0
        }, n.animIn = {
            top: 0
        }, n.animOut = {
            left: 0
        }
    }, m.fn.cycle.transitions.slideX = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m(n.elements).not(e).hide(), m.fn.cycle.commonReset(e, t, n, !1, !0), n.animIn.width = t.cycleW
        }), n.cssBefore = {
            left: 0,
            top: 0,
            width: 0
        }, n.animIn = {
            width: "show"
        }, n.animOut = {
            width: 0
        }
    }, m.fn.cycle.transitions.slideY = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m(n.elements).not(e).hide(), m.fn.cycle.commonReset(e, t, n, !0, !1), n.animIn.height = t.cycleH
        }), n.cssBefore = {
            left: 0,
            top: 0,
            height: 0
        }, n.animIn = {
            height: "show"
        }, n.animOut = {
            height: 0
        }
    }, m.fn.cycle.transitions.shuffle = function(e, t, n) {
        var i, o = e.css("overflow", "visible").width();
        for (t.css({
                left: 0,
                top: 0
            }), n.before.push(function(e, t, n) {
                m.fn.cycle.commonReset(e, t, n, !0, !0, !0)
            }), n.speedAdjusted || (n.speed = n.speed / 2, n.speedAdjusted = !0), n.random = 0, n.shuffle = n.shuffle || {
                left: -o,
                top: 15
            }, n.els = [], i = 0; i < t.length; i++) n.els.push(t[i]);
        for (i = 0; i < n.currSlide; i++) n.els.push(n.els.shift());
        n.fxFn = function(s, e, r, a, l) {
            var c = m(l ? s : e);
            m(e).css(r.cssBefore);
            var u = r.slideCount;
            c.animate(r.shuffle, r.speedIn, r.easeIn, function() {
                for (var e = m.fn.cycle.hopsFromLast(r, l), t = 0; t < e; t++) l ? r.els.push(r.els.shift()) : r.els.unshift(r.els.pop());
                if (l)
                    for (var n = 0, i = r.els.length; n < i; n++) m(r.els[n]).css("z-index", i - n + u);
                else {
                    var o = m(s).css("z-index");
                    c.css("z-index", parseInt(o) + 1 + u)
                }
                c.animate({
                    left: 0,
                    top: 0
                }, r.speedOut, r.easeOut, function() {
                    m(l ? this : s).hide(), a && a()
                })
            })
        }, n.cssBefore = {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        }
    }, m.fn.cycle.transitions.turnUp = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !0, !1), n.cssBefore.top = t.cycleH, n.animIn.height = t.cycleH
        }), n.cssFirst = {
            top: 0
        }, n.cssBefore = {
            left: 0,
            height: 0
        }, n.animIn = {
            top: 0
        }, n.animOut = {
            height: 0
        }
    }, m.fn.cycle.transitions.turnDown = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !0, !1), n.animIn.height = t.cycleH, n.animOut.top = e.cycleH
        }), n.cssFirst = {
            top: 0
        }, n.cssBefore = {
            left: 0,
            top: 0,
            height: 0
        }, n.animOut = {
            height: 0
        }
    }, m.fn.cycle.transitions.turnLeft = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !1, !0), n.cssBefore.left = t.cycleW, n.animIn.width = t.cycleW
        }), n.cssBefore = {
            top: 0,
            width: 0
        }, n.animIn = {
            left: 0
        }, n.animOut = {
            width: 0
        }
    }, m.fn.cycle.transitions.turnRight = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !1, !0), n.animIn.width = t.cycleW, n.animOut.left = e.cycleW
        }), n.cssBefore = {
            top: 0,
            left: 0,
            width: 0
        }, n.animIn = {
            left: 0
        }, n.animOut = {
            width: 0
        }
    }, m.fn.cycle.transitions.zoom = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !1, !1, !0), n.cssBefore.top = t.cycleH / 2, n.cssBefore.left = t.cycleW / 2, n.animIn = {
                top: 0,
                left: 0,
                width: t.cycleW,
                height: t.cycleH
            }, n.animOut = {
                width: 0,
                height: 0,
                top: e.cycleH / 2,
                left: e.cycleW / 2
            }
        }), n.cssFirst = {
            top: 0,
            left: 0
        }, n.cssBefore = {
            width: 0,
            height: 0
        }
    }, m.fn.cycle.transitions.fadeZoom = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !1, !1), n.cssBefore.left = t.cycleW / 2, n.cssBefore.top = t.cycleH / 2, n.animIn = {
                top: 0,
                left: 0,
                width: t.cycleW,
                height: t.cycleH
            }
        }), n.cssBefore = {
            width: 0,
            height: 0
        }, n.animOut = {
            opacity: 0
        }
    }, m.fn.cycle.transitions.blindX = function(e, t, n) {
        var i = e.css("overflow", "hidden").width();
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n), n.animIn.width = t.cycleW, n.animOut.left = e.cycleW
        }), n.cssBefore = {
            left: i,
            top: 0
        }, n.animIn = {
            left: 0
        }, n.animOut = {
            left: i
        }
    }, m.fn.cycle.transitions.blindY = function(e, t, n) {
        var i = e.css("overflow", "hidden").height();
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n), n.animIn.height = t.cycleH, n.animOut.top = e.cycleH
        }), n.cssBefore = {
            top: i,
            left: 0
        }, n.animIn = {
            top: 0
        }, n.animOut = {
            top: i
        }
    }, m.fn.cycle.transitions.blindZ = function(e, t, n) {
        var i = e.css("overflow", "hidden").height(),
            o = e.width();
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n), n.animIn.height = t.cycleH, n.animOut.top = e.cycleH
        }), n.cssBefore = {
            top: i,
            left: o
        }, n.animIn = {
            top: 0,
            left: 0
        }, n.animOut = {
            top: i,
            left: o
        }
    }, m.fn.cycle.transitions.growX = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !1, !0), n.cssBefore.left = this.cycleW / 2, n.animIn = {
                left: 0,
                width: this.cycleW
            }, n.animOut = {
                left: 0
            }
        }), n.cssBefore = {
            width: 0,
            top: 0
        }
    }, m.fn.cycle.transitions.growY = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !0, !1), n.cssBefore.top = this.cycleH / 2, n.animIn = {
                top: 0,
                height: this.cycleH
            }, n.animOut = {
                top: 0
            }
        }), n.cssBefore = {
            height: 0,
            left: 0
        }
    }, m.fn.cycle.transitions.curtainX = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !1, !0, !0), n.cssBefore.left = t.cycleW / 2, n.animIn = {
                left: 0,
                width: this.cycleW
            }, n.animOut = {
                left: e.cycleW / 2,
                width: 0
            }
        }), n.cssBefore = {
            top: 0,
            width: 0
        }
    }, m.fn.cycle.transitions.curtainY = function(e, t, n) {
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !0, !1, !0), n.cssBefore.top = t.cycleH / 2, n.animIn = {
                top: 0,
                height: t.cycleH
            }, n.animOut = {
                top: e.cycleH / 2,
                height: 0
            }
        }), n.cssBefore = {
            left: 0,
            height: 0
        }
    }, m.fn.cycle.transitions.cover = function(e, t, n) {
        var i = n.direction || "left",
            o = e.css("overflow", "hidden").width(),
            s = e.height();
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n), "right" == i ? n.cssBefore.left = -o : "up" == i ? n.cssBefore.top = s : "down" == i ? n.cssBefore.top = -s : n.cssBefore.left = o
        }), n.animIn = {
            left: 0,
            top: 0
        }, n.animOut = {
            opacity: 1
        }, n.cssBefore = {
            top: 0,
            left: 0
        }
    }, m.fn.cycle.transitions.uncover = function(e, t, n) {
        var i = n.direction || "left",
            o = e.css("overflow", "hidden").width(),
            s = e.height();
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !0, !0, !0), "right" == i ? n.animOut.left = o : "up" == i ? n.animOut.top = -s : "down" == i ? n.animOut.top = s : n.animOut.left = -o
        }), n.animIn = {
            left: 0,
            top: 0
        }, n.animOut = {
            opacity: 1
        }, n.cssBefore = {
            top: 0,
            left: 0
        }
    }, m.fn.cycle.transitions.toss = function(e, t, n) {
        var i = e.css("overflow", "visible").width(),
            o = e.height();
        n.before.push(function(e, t, n) {
            m.fn.cycle.commonReset(e, t, n, !0, !0, !0), n.animOut.left || n.animOut.top ? n.animOut.opacity = 0 : n.animOut = {
                left: 2 * i,
                top: -o / 2,
                opacity: 0
            }
        }), n.cssBefore = {
            left: 0,
            top: 0
        }, n.animIn = {
            left: 0
        }
    }, m.fn.cycle.transitions.wipe = function(e, t, n) {
        var i, c = e.css("overflow", "hidden").width(),
            u = e.height();
        if (n.cssBefore = n.cssBefore || {}, n.clip)
            if (/l2r/.test(n.clip)) i = "rect(0px 0px " + u + "px 0px)";
            else if (/r2l/.test(n.clip)) i = "rect(0px " + c + "px " + u + "px " + c + "px)";
        else if (/t2b/.test(n.clip)) i = "rect(0px " + c + "px 0px 0px)";
        else if (/b2t/.test(n.clip)) i = "rect(" + u + "px " + c + "px " + u + "px 0px)";
        else if (/zoom/.test(n.clip)) {
            var o = parseInt(u / 2),
                s = parseInt(c / 2);
            i = "rect(" + o + "px " + s + "px " + o + "px " + s + "px)"
        }
        n.cssBefore.clip = n.cssBefore.clip || i || "rect(0px 0px 0px 0px)";
        var r = n.cssBefore.clip.match(/(\d+)/g),
            d = parseInt(r[0]),
            h = parseInt(r[1]),
            p = parseInt(r[2]),
            f = parseInt(r[3]);
        n.before.push(function(e, t, n) {
            if (e != t) {
                var s = m(e),
                    r = m(t);
                m.fn.cycle.commonReset(e, t, n, !0, !0, !1), n.cssAfter.display = "block";
                var a = 1,
                    l = parseInt(n.speedIn / 13) - 1;
                ! function e() {
                    var t = d ? d - parseInt(a * (d / l)) : 0,
                        n = f ? f - parseInt(a * (f / l)) : 0,
                        i = p < u ? p + parseInt(a * ((u - p) / l || 1)) : u,
                        o = h < c ? h + parseInt(a * ((c - h) / l || 1)) : c;
                    r.css({
                        clip: "rect(" + t + "px " + o + "px " + i + "px " + n + "px)"
                    }), a++ <= l ? setTimeout(e, 13) : s.css("display", "none")
                }()
            }
        }), n.cssBefore = {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        }, n.animIn = {
            left: 0
        }, n.animOut = {
            left: 0
        }
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, i, o) {
        return jQuery.easing[jQuery.easing.def](e, t, n, i, o)
    },
    easeInQuad: function(e, t, n, i, o) {
        return i * (t /= o) * t + n
    },
    easeOutQuad: function(e, t, n, i, o) {
        return -i * (t /= o) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, i, o) {
        return i * (t /= o) * t * t + n
    },
    easeOutCubic: function(e, t, n, i, o) {
        return i * ((t = t / o - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, i, o) {
        return i * (t /= o) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, i, o) {
        return -i * ((t = t / o - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, i, o) {
        return i * (t /= o) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, i, o) {
        return i * ((t = t / o - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, i, o) {
        return -i * Math.cos(t / o * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(e, t, n, i, o) {
        return i * Math.sin(t / o * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, i, o) {
        return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
    },
    easeInExpo: function(e, t, n, i, o) {
        return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n
    },
    easeOutExpo: function(e, t, n, i, o) {
        return t == o ? n + i : i * (1 - Math.pow(2, -10 * t / o)) + n
    },
    easeInOutExpo: function(e, t, n, i, o) {
        return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function(e, t, n, i, o) {
        return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, i, o) {
        return i * Math.sqrt(1 - (t = t / o - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, i, o) {
        return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, i, o) {
        var s = 1.70158,
            r = 0,
            a = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (r || (r = .3 * o), a < Math.abs(i)) {
            a = i;
            s = r / 4
        } else s = r / (2 * Math.PI) * Math.asin(i / a);
        return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - s) * (2 * Math.PI) / r) + n
    },
    easeOutElastic: function(e, t, n, i, o) {
        var s = 1.70158,
            r = 0,
            a = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (r || (r = .3 * o), a < Math.abs(i)) {
            a = i;
            s = r / 4
        } else s = r / (2 * Math.PI) * Math.asin(i / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * o - s) * (2 * Math.PI) / r) + i + n
    },
    easeInOutElastic: function(e, t, n, i, o) {
        var s = 1.70158,
            r = 0,
            a = i;
        if (0 == t) return n;
        if (2 == (t /= o / 2)) return n + i;
        if (r || (r = o * (.3 * 1.5)), a < Math.abs(i)) {
            a = i;
            s = r / 4
        } else s = r / (2 * Math.PI) * Math.asin(i / a);
        return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - s) * (2 * Math.PI) / r) * -.5 + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - s) * (2 * Math.PI) / r) * .5 + i + n
    },
    easeInBack: function(e, t, n, i, o, s) {
        return null == s && (s = 1.70158), i * (t /= o) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function(e, t, n, i, o, s) {
        return null == s && (s = 1.70158), i * ((t = t / o - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function(e, t, n, i, o, s) {
        return null == s && (s = 1.70158), (t /= o / 2) < 1 ? i / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + n : i / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + n
    },
    easeInBounce: function(e, t, n, i, o) {
        return i - jQuery.easing.easeOutBounce(e, o - t, 0, i, o) + n
    },
    easeOutBounce: function(e, t, n, i, o) {
        return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, i, o) {
        return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, i, o) + .5 * i + n
    }
});
var $jscomp = {
scope: {},
findInternal: function(e, t, n) {
    e instanceof String && (e = String(e));
    for (var i = e.length, o = 0; o < i; o++) {
        var s = e[o];
        if (t.call(n, s, o, e)) return {
            i: o,
            v: s
        }
    }
    return {
        i: -1,
        v: void 0
    }
}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
    if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
}, $jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(e, t, n, i) {
    if (t) {
        for (n = $jscomp.global, e = e.split("."), i = 0; i < e.length - 1; i++) {
            var o = e[i];
            o in n || (n[o] = {}), n = n[o]
        }(t = t(i = n[e = e[e.length - 1]])) != i && null != t && $jscomp.defineProperty(n, e, {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
}, $jscomp.polyfill("Array.prototype.find", function(e) {
    return e || function(e, t) {
        return $jscomp.findInternal(this, e, t).v
    }
}, "es6-impl", "es3"),
function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t || n)
}(function(c) {
    var r = function(l, v, y) {
        var b = {
            invalid: [],
            getCaret: function() {
                try {
                    var e, t = 0,
                        n = l.get(0),
                        i = document.selection,
                        o = n.selectionStart;
                    return i && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((e = i.createRange()).moveStart("character", -b.val().length), t = e.text.length) : (o || "0" === o) && (t = o), t
                } catch (e) {}
            },
            setCaret: function(e) {
                try {
                    if (l.is(":focus")) {
                        var t, n = l.get(0);
                        e += 1, n.setSelectionRange ? n.setSelectionRange(e, e) : ((t = n.createTextRange()).collapse(!0), t.moveEnd("character", e), t.moveStart("character", e), t.select())
                    }
                } catch (e) {}
            },
            events: function() {
                l.on("keydown.mask", function(e) {
                    l.data("mask-keycode", e.keyCode || e.which)
                }).on(c.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", b.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        l.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    l.data("changed", !0)
                }).on("blur.mask", function() {
                    s === b.val() || l.data("changed") || l.trigger("change"), l.data("changed", !1)
                }).on("blur.mask", function() {
                    s = b.val()
                }).on("focus.mask", function(e) {
                    !0 === y.selectOnFocus && c(e.target).select()
                }).on("focusout.mask", function() {
                    y.clearIfNotMatch && !i.test(b.val()) && b.val("")
                })
            },
            getRegexMask: function() {
                for (var e, t, n, i, o = [], s = 0; s < v.length; s++)(e = x.translation[v.charAt(s)]) ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = e.optional, (e = e.recursive) ? (o.push(v.charAt(s)), i = {
                    digit: v.charAt(s),
                    pattern: t
                }) : o.push(n || e ? t + "?" : t)) : o.push(v.charAt(s).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return o = o.join(""), i && (o = o.replace(new RegExp("(" + i.digit + "(.*" + i.digit + ")?)"), "($1)?").replace(new RegExp(i.digit, "g"), i.pattern)), new RegExp(o)
            },
            destroyEvents: function() {
                l.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            },
            val: function(e) {
                var t = l.is("input") ? "val" : "text";
                return 0 < arguments.length ? (l[t]() !== e && l[t](e), t = l) : t = l[t](), t
            },
            getMCharsBeforeCount: function(e, t) {
                for (var n = 0, i = 0, o = v.length; i < o && i < e; i++) x.translation[v.charAt(i)] || (e = t ? e + 1 : e, n++);
                return n
            },
            caretPos: function(e, t, n, i) {
                return x.translation[v.charAt(Math.min(e - 1, v.length - 1))] ? Math.min(e + n - t - i, n) : b.caretPos(e + 1, t, n, i)
            },
            behaviour: function(e) {
                e = e || window.event, b.invalid = [];
                var t = l.data("mask-keycode");
                if (-1 === c.inArray(t, x.byPassKeys)) {
                    var n = b.getCaret(),
                        i = (a = b.val()).length,
                        o = b.getMasked(),
                        s = o.length,
                        r = b.getMCharsBeforeCount(s - 1) - b.getMCharsBeforeCount(i - 1),
                        a = n < i && o !== a;
                    return b.val(o), a && (8 !== t && 46 !== t ? n = b.caretPos(n, i, s, r) : --n, b.setCaret(n)), b.callbacks(e)
                }
            },
            getMasked: function(e, t) {
                var n, i, o, s = [],
                    r = void 0 === t ? b.val() : t + "",
                    a = 0,
                    l = v.length,
                    c = 0,
                    u = r.length,
                    d = 1,
                    h = "push",
                    p = -1;
                for (y.reverse ? (h = "unshift", d = -1, n = 0, a = l - 1, c = u - 1, i = function() {
                        return -1 < a && -1 < c
                    }) : (n = l - 1, i = function() {
                        return a < l && c < u
                    }); i();) {
                    var f = v.charAt(a),
                        m = r.charAt(c),
                        g = x.translation[f];
                    g ? (m.match(g.pattern) ? (s[h](m), g.recursive && (-1 === p ? p = a : a === n && (a = p - d), n === p && (a -= d)), a += d) : m === o ? o = void 0 : g.optional ? (a += d, c -= d) : g.fallback ? (s[h](g.fallback), a += d, c -= d) : b.invalid.push({
                        p: c,
                        v: m,
                        e: g.pattern
                    }), c += d) : (e || s[h](f), m === f ? c += d : o = f, a += d)
                }
                return r = v.charAt(n), l !== u + 1 || x.translation[r] || s.push(r), s.join("")
            },
            callbacks: function(e) {
                var t = b.val(),
                    n = t !== s,
                    i = [t, e, l, y],
                    o = function(e, t, n) {
                        "function" == typeof y[e] && t && y[e].apply(this, n)
                    };
                o("onChange", !0 === n, i), o("onKeyPress", !0 === n, i), o("onComplete", t.length === v.length, i), o("onInvalid", 0 < b.invalid.length, [t, e, l, b.invalid, y])
            }
        };
        l = c(l);
        var i, x = this,
            s = b.val();
        v = "function" == typeof v ? v(b.val(), void 0, l, y) : v, x.mask = v, x.options = y, x.remove = function() {
            var e = b.getCaret();
            return b.destroyEvents(), b.val(x.getCleanVal()), b.setCaret(e - b.getMCharsBeforeCount(e)), l
        }, x.getCleanVal = function() {
            return b.getMasked(!0)
        }, x.getMaskedVal = function(e) {
            return b.getMasked(!1, e)
        }, x.init = function(e) {
            if (e = e || !1, y = y || {}, x.clearIfNotMatch = c.jMaskGlobals.clearIfNotMatch, x.byPassKeys = c.jMaskGlobals.byPassKeys, x.translation = c.extend({}, c.jMaskGlobals.translation, y.translation), x = c.extend(!0, {}, x, y), i = b.getRegexMask(), e) b.events(), b.val(b.getMasked());
            else {
                y.placeholder && l.attr("placeholder", y.placeholder), l.data("mask") && l.attr("autocomplete", "off");
                for (var t = !(e = 0); e < v.length; e++) {
                    var n = x.translation[v.charAt(e)];
                    if (n && n.recursive) {
                        t = !1;
                        break
                    }
                }
                t && l.attr("maxlength", v.length), b.destroyEvents(), b.events(), e = b.getCaret(), b.val(b.getMasked()), b.setCaret(e + b.getMCharsBeforeCount(e, !0))
            }
        }, x.init(!l.is("input"))
    };
    c.maskWatchers = {};
    var t = function() {
            var e = c(this),
                t = {},
                n = e.attr("data-mask");
            if (e.attr("data-mask-reverse") && (t.reverse = !0), e.attr("data-mask-clearifnotmatch") && (t.clearIfNotMatch = !0), "true" === e.attr("data-mask-selectonfocus") && (t.selectOnFocus = !0), a(e, n, t)) return e.data("mask", new r(this, n, t))
        },
        a = function(e, t, n) {
            n = n || {};
            var i = c(e).data("mask"),
                o = JSON.stringify;
            e = c(e).val() || c(e).text();
            try {
                return "function" == typeof t && (t = t(e)), "object" != typeof i || o(i.options) !== o(n) || i.mask !== t
            } catch (e) {}
        };
    c.fn.mask = function(e, t) {
        t = t || {};
        var n = this.selector,
            i = (o = c.jMaskGlobals).watchInterval,
            o = t.watchInputs || o.watchInputs,
            s = function() {
                if (a(this, e, t)) return c(this).data("mask", new r(this, e, t))
            };
        return c(this).each(s), n && "" !== n && o && (clearInterval(c.maskWatchers[n]), c.maskWatchers[n] = setInterval(function() {
            c(document).find(n).each(s)
        }, i)), this
    }, c.fn.masked = function(e) {
        return this.data("mask").getMaskedVal(e)
    }, c.fn.unmask = function() {
        return clearInterval(c.maskWatchers[this.selector]), delete c.maskWatchers[this.selector], this.each(function() {
            var e = c(this).data("mask");
            e && e.remove().removeData("mask")
        })
    }, c.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }, c.applyDataMask = function(e) {
        ((e = e || c.jMaskGlobals.maskElements) instanceof c ? e : c(e)).filter(c.jMaskGlobals.dataMaskAttr).each(t)
    };
    var e, n, i, o = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        useInput: (e = "input", i = document.createElement("div"), (n = (e = "on" + e) in i) || (i.setAttribute(e, "return;"), n = "function" == typeof i[e]), n),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    c.jMaskGlobals = c.jMaskGlobals || {}, (o = c.jMaskGlobals = c.extend(!0, {}, o, c.jMaskGlobals)).dataMask && c.applyDataMask(), setInterval(function() {
        c.jMaskGlobals.watchDataMask && c.applyDataMask()
    }, o.watchInterval)
}, window.jQuery, window.Zepto),
function() {
    var O, j;
    O = this.jQuery || window.jQuery, j = O(window), O.fn.stick_in_parent = function(e) {
        var w, $, t, n, C, i, T, k, E, S, A;
        for (null == e && (e = {}), A = e.sticky_class, C = e.inner_scrolling, S = e.recalc_every, E = e.parent, k = e.offset_top, T = e.spacer, $ = e.bottoming, null == k && (k = 0), null == E && (E = void 0), null == C && (C = !0), null == A && (A = "is_stuck"), w = O(document), null == $ && ($ = !0), t = function(o, s, r, a, l, c, u, d) {
                var h, e, p, f, m, g, v, y, t, b, x, i;
                if (!o.data("sticky_kit")) {
                    if (o.data("sticky_kit", !0), m = w.height(), v = o.parent(), null != E && (v = v.closest(E)), !v.length) throw "failed to find stick parent";
                    if (h = p = !1, (x = null != T ? T && o.closest(T) : O("<div />")) && x.css("position", o.css("position")), (y = function() {
                            var e, t, n;
                            if (!d && (m = w.height(), e = parseInt(v.css("border-top-width"), 10), t = parseInt(v.css("padding-top"), 10), s = parseInt(v.css("padding-bottom"), 10), r = v.offset().top + e + t, a = v.height(), p && (h = p = !1, null == T && (o.insertAfter(x), x.detach()), o.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(A), n = !0), l = o.offset().top - (parseInt(o.css("margin-top"), 10) || 0) - k, c = o.outerHeight(!0), u = o.css("float"), x && x.css({
                                    width: o.outerWidth(!0),
                                    height: c,
                                    display: o.css("display"),
                                    "vertical-align": o.css("vertical-align"),
                                    float: u
                                }), n)) return i()
                        })(), c !== a) return f = void 0, g = k, b = S, i = function() {
                        var e, t, n, i;
                        if (!d && (n = !1, null != b && (--b <= 0 && (b = S, y(), n = !0)), n || w.height() === m || y(), n = j.scrollTop(), null != f && (t = n - f), f = n, p ? ($ && (i = a + r < n + c + g, h && !i && (h = !1, o.css({
                                position: "fixed",
                                bottom: "",
                                top: g
                            }).trigger("sticky_kit:unbottom"))), n < l && (p = !1, g = k, null == T && ("left" !== u && "right" !== u || o.insertAfter(x), x.detach()), e = {
                                position: "",
                                width: "",
                                top: ""
                            }, o.css(e).removeClass(A).trigger("sticky_kit:unstick")), C && ((e = j.height()) < c + k && !h && (g -= t, g = Math.max(e - c, g), g = Math.min(k, g), p && o.css({
                                top: g + "px"
                            })))) : l < n && (p = !0, (e = {
                                position: "fixed",
                                top: g
                            }).width = "border-box" === o.css("box-sizing") ? o.outerWidth() + "px" : o.width() + "px", o.css(e).addClass(A), null == T && (o.after(x), "left" !== u && "right" !== u || x.append(o)), o.trigger("sticky_kit:stick")), p && $ && (null == i && (i = a + r < n + c + g), !h && i))) return h = !0, "static" === v.css("position") && v.css({
                            position: "relative"
                        }), o.css({
                            position: "absolute",
                            bottom: s,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                    }, t = function() {
                        return y(), i()
                    }, e = function() {
                        if (d = !0, j.off("touchmove", i), j.off("scroll", i), j.off("resize", t), O(document.body).off("sticky_kit:recalc", t), o.off("sticky_kit:detach", e), o.removeData("sticky_kit"), o.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), v.position("position", ""), p) return null == T && ("left" !== u && "right" !== u || o.insertAfter(x), x.remove()), o.removeClass(A)
                    }, j.on("touchmove", i), j.on("scroll", i), j.on("resize", t), O(document.body).on("sticky_kit:recalc", t), o.on("sticky_kit:detach", e), setTimeout(i, 0)
                }
            }, n = 0, i = this.length; n < i; n++) e = this[n], t(O(e));
        return this
    }
}.call(this), jQuery.fn.prettyCheckboxes = function(e) {
    e = jQuery.extend({
        checkboxWidth: 40,
        checkboxHeight: 40,
        className: "prettyCheckbox",
        display: "list"
    }, e), $(this).each(function() {
        $label = $('label[for="' + $(this).attr("id") + '"]'), $label.prepend("<span class='holderWrap'><span class='holder'></span></span>"), $(this).is(":checked") && $label.addClass("checked"), $label.addClass(e.className).addClass($(this).attr("type")).addClass(e.display), $label.find("span.holderWrap").width(e.checkboxWidth).height(e.checkboxHeight), $label.find("span.holder").width(e.checkboxWidth), $(this).addClass("hiddenCheckbox"), $label.bind("click", function() {
            $("input#" + $(this).attr("for")).triggerHandler("click"), $("input#" + $(this).attr("for")).is(":checkbox") ? ($(this).toggleClass("checked"), $("input#" + $(this).attr("for")).checked = !0, $(this).find("span.holder").css("top", 0)) : ($toCheck = $("input#" + $(this).attr("for")), $('input[name="' + $toCheck.attr("name") + '"]').each(function() {
                $('label[for="' + $(this).attr("id") + '"]').removeClass("checked")
            }), $(this).addClass("checked"), $toCheck.checked = !0)
        }), $("input#" + $label.attr("for")).bind("keypress", function(e) {
            if (32 == e.keyCode) return $.browser.msie ? $('label[for="' + $(this).attr("id") + '"]').toggleClass("checked") : $(this).trigger("click"), !1
        })
    })
}, checkAllPrettyCheckboxes = function(e, t) {
    $(e).is(":checked") ? $(t).find("input[type=checkbox]:not(:checked)").each(function() {
        $('label[for="' + $(this).attr("id") + '"]').trigger("click"), $.browser.msie ? $(this).attr("checked", "checked") : $(this).trigger("click")
    }) : $(t).find("input[type=checkbox]:checked").each(function() {
        $('label[for="' + $(this).attr("id") + '"]').trigger("click"), $.browser.msie ? $(this).attr("checked", "") : $(this).trigger("click")
    })
}, ("function" == typeof define && define.amd ? define : function(e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
})(["jquery"], function(C) {
    return function() {
        function g(e, t) {
            return e || (e = y()), (x = C("#" + e.containerId)).length || t && (n = e, (x = C("<div/>").attr("id", n.containerId).addClass(n.positionClass)).appendTo(C(n.target)), x = x), x;
            var n
        }

        function i(e, t, n) {
            var i = !(!n || !n.force) && n.force;
            return !(!e || !i && 0 !== C(":focus", e).length || (e[t.hideMethod]({
                duration: t.hideDuration,
                easing: t.hideEasing,
                complete: function() {
                    b(e)
                }
            }), 0))
        }

        function v(e) {
            t && t(e)
        }

        function o(t) {
            function n(e) {
                return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function i(e) {
                var t = e && !1 !== r.closeMethod ? r.closeMethod : r.hideMethod,
                    n = e && !1 !== r.closeDuration ? r.closeDuration : r.hideDuration,
                    i = e && !1 !== r.closeEasing ? r.closeEasing : r.hideEasing;
                if (!C(":focus", c).length || e) return clearTimeout(f.intervalId), c[t]({
                    duration: n,
                    easing: i,
                    complete: function() {
                        b(c), clearTimeout(l), r.onHidden && "hidden" !== m.state && r.onHidden(), m.state = "hidden", m.endTime = new Date, v(m)
                    }
                })
            }

            function e() {
                (0 < r.timeOut || 0 < r.extendedTimeOut) && (l = setTimeout(i, r.extendedTimeOut), f.maxHideTime = parseFloat(r.extendedTimeOut), f.hideEta = (new Date).getTime() + f.maxHideTime)
            }

            function o() {
                clearTimeout(l), f.hideEta = 0, c.stop(!0, !0)[r.showMethod]({
                    duration: r.showDuration,
                    easing: r.showEasing
                })
            }

            function s() {
                var e = (f.hideEta - (new Date).getTime()) / f.maxHideTime * 100;
                h.width(e + "%")
            }
            var r = y(),
                a = t.iconClass || r.iconClass;
            if (void 0 !== t.optionsOverride && (r = C.extend(r, t.optionsOverride), a = t.optionsOverride.iconClass || a), ! function(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === w) return !0;
                        w = t.message
                    }
                    return !1
                }(r, t)) {
                $++, x = g(r, !0);
                var l = null,
                    c = C("<div/>"),
                    u = C("<div/>"),
                    d = C("<div/>"),
                    h = C("<div/>"),
                    p = C(r.closeHtml),
                    f = {
                        intervalId: null,
                        hideEta: null,
                        maxHideTime: null
                    },
                    m = {
                        toastId: $,
                        state: "visible",
                        startTime: new Date,
                        options: r,
                        map: t
                    };
                return t.iconClass && c.addClass(r.toastClass).addClass(a),
                    function() {
                        if (t.title) {
                            var e = t.title;
                            r.escapeHtml && (e = n(t.title)), u.append(e).addClass(r.titleClass), c.append(u)
                        }
                    }(),
                    function() {
                        if (t.message) {
                            var e = t.message;
                            r.escapeHtml && (e = n(t.message)), d.append(e).addClass(r.messageClass), c.append(d)
                        }
                    }(), r.closeButton && (p.addClass(r.closeClass).attr("role", "button"), c.prepend(p)), r.progressBar && (h.addClass(r.progressClass), c.prepend(h)), r.rtl && c.addClass("rtl"), r.newestOnTop ? x.prepend(c) : x.append(c),
                    function() {
                        var e = "";
                        switch (t.iconClass) {
                            case "toast-success":
                            case "toast-info":
                                e = "polite";
                                break;
                            default:
                                e = "assertive"
                        }
                        c.attr("aria-live", e)
                    }(), c.hide(), c[r.showMethod]({
                        duration: r.showDuration,
                        easing: r.showEasing,
                        complete: r.onShown
                    }), 0 < r.timeOut && (l = setTimeout(i, r.timeOut), f.maxHideTime = parseFloat(r.timeOut), f.hideEta = (new Date).getTime() + f.maxHideTime, r.progressBar && (f.intervalId = setInterval(s, 10))), r.closeOnHover && c.hover(o, e), !r.onclick && r.tapToDismiss && c.click(i), r.closeButton && p && p.click(function(e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), r.onCloseClick && r.onCloseClick(e), i(!0)
                    }), r.onclick && c.click(function(e) {
                        r.onclick(e), i()
                    }), v(m), r.debug && console && console.log(m), c
            }
        }

        function y() {
            return C.extend({}, {
                tapToDismiss: !0,
                toastClass: "toast",
                containerId: "toast-container",
                debug: !1,
                showMethod: "fadeIn",
                showDuration: 300,
                showEasing: "swing",
                onShown: void 0,
                hideMethod: "fadeOut",
                hideDuration: 1e3,
                hideEasing: "swing",
                onHidden: void 0,
                closeMethod: !1,
                closeDuration: !1,
                closeEasing: !1,
                closeOnHover: !0,
                extendedTimeOut: 1e3,
                iconClasses: {
                    error: "toast-error",
                    info: "toast-info",
                    success: "toast-success",
                    warning: "toast-warning"
                },
                iconClass: "toast-info",
                positionClass: "toast-top-right",
                timeOut: 5e3,
                titleClass: "toast-title",
                messageClass: "toast-message",
                escapeHtml: !1,
                target: "body",
                closeHtml: '<button type="button">&times;</button>',
                closeClass: "toast-close-button",
                newestOnTop: !0,
                preventDuplicates: !1,
                progressBar: !1,
                progressClass: "toast-progress",
                rtl: !1
            }, e.options)
        }

        function b(e) {
            x || (x = g()), e.is(":visible") || (e.remove(), e = null, 0 === x.children().length && (x.remove(), w = void 0))
        }
        var x, t, w, $ = 0,
            s = {
                error: "error",
                info: "info",
                success: "success",
                warning: "warning"
            },
            e = {
                clear: function(e, t) {
                    var n = y();
                    x || g(n), i(e, n, t) || function(e) {
                        for (var t = x.children(), n = t.length - 1; 0 <= n; n--) i(C(t[n]), e)
                    }(n)
                },
                remove: function(e) {
                    var t = y();
                    return x || g(t), e && 0 === C(":focus", e).length ? void b(e) : void(x.children().length && x.remove())
                },
                error: function(e, t, n) {
                    return o({
                        type: s.error,
                        iconClass: y().iconClasses.error,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                getContainer: g,
                info: function(e, t, n) {
                    return o({
                        type: s.info,
                        iconClass: y().iconClasses.info,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                options: {},
                subscribe: function(e) {
                    t = e
                },
                success: function(e, t, n) {
                    return o({
                        type: s.success,
                        iconClass: y().iconClasses.success,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                version: "2.1.3",
                warning: function(e, t, n) {
                    return o({
                        type: s.warning,
                        iconClass: y().iconClasses.warning,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }
            };
        return e
    }()
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(n) {
    var e = function() {
            if (n && n.fn && n.fn.select2 && n.fn.select2.amd) var e = n.fn.select2.amd;
            var t, o, c;
            return e && e.requirejs || (e ? o = e : e = {}, function(h) {
                function p(e, t) {
                    return n.call(e, t)
                }

                function r(e, t) {
                    var n, i, o, s, r, a, l, c, u, d, h, p = t && t.split("/"),
                        f = w.map,
                        m = f && f["*"] || {};
                    if (e && "." === e.charAt(0))
                        if (t) {
                            for (r = (e = e.split("/")).length - 1, w.nodeIdCompat && C.test(e[r]) && (e[r] = e[r].replace(C, "")), e = p.slice(0, p.length - 1).concat(e), u = 0; u < e.length; u += 1)
                                if ("." === (h = e[u])) e.splice(u, 1), u -= 1;
                                else if (".." === h) {
                                if (1 === u && (".." === e[2] || ".." === e[0])) break;
                                0 < u && (e.splice(u - 1, 2), u -= 2)
                            }
                            e = e.join("/")
                        } else 0 === e.indexOf("./") && (e = e.substring(2));
                    if ((p || m) && f) {
                        for (u = (n = e.split("/")).length; 0 < u; u -= 1) {
                            if (i = n.slice(0, u).join("/"), p)
                                for (d = p.length; 0 < d; d -= 1)
                                    if ((o = f[p.slice(0, d).join("/")]) && (o = o[i])) {
                                        s = o, a = u;
                                        break
                                    }
                            if (s) break;
                            !l && m && m[i] && (l = m[i], c = u)
                        }!s && l && (s = l, a = c), s && (n.splice(0, a, s), e = n.join("/"))
                    }
                    return e
                }

                function f(t, n) {
                    return function() {
                        var e = i.call(arguments, 0);
                        return "string" != typeof e[0] && 1 === e.length && e.push(null), l.apply(h, e.concat([t, n]))
                    }
                }

                function m(t) {
                    return function(e) {
                        b[t] = e
                    }
                }

                function g(e) {
                    if (p(x, e)) {
                        var t = x[e];
                        delete x[e], $[e] = !0, s.apply(h, t)
                    }
                    if (!p(b, e) && !p($, e)) throw new Error("No " + e);
                    return b[e]
                }

                function a(e) {
                    var t, n = e ? e.indexOf("!") : -1;
                    return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                }
                var s, l, v, y, b = {},
                    x = {},
                    w = {},
                    $ = {},
                    n = Object.prototype.hasOwnProperty,
                    i = [].slice,
                    C = /\.js$/;
                v = function(e, t) {
                    var n, i, o = a(e),
                        s = o[0];
                    return e = o[1], s && (n = g(s = r(s, t))), s ? e = n && n.normalize ? n.normalize(e, (i = t, function(e) {
                        return r(e, i)
                    })) : r(e, t) : (s = (o = a(e = r(e, t)))[0], e = o[1], s && (n = g(s))), {
                        f: s ? s + "!" + e : e,
                        n: e,
                        pr: s,
                        p: n
                    }
                }, y = {
                    require: function(e) {
                        return f(e)
                    },
                    exports: function(e) {
                        var t = b[e];
                        return void 0 !== t ? t : b[e] = {}
                    },
                    module: function(e) {
                        return {
                            id: e,
                            uri: "",
                            exports: b[e],
                            config: (t = e, function() {
                                return w && w.config && w.config[t] || {}
                            })
                        };
                        var t
                    }
                }, s = function(e, t, n, i) {
                    var o, s, r, a, l, c, u = [],
                        d = typeof n;
                    if (i = i || e, "undefined" === d || "function" === d) {
                        for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1)
                            if ("require" === (s = (a = v(t[l], i)).f)) u[l] = y.require(e);
                            else if ("exports" === s) u[l] = y.exports(e), c = !0;
                        else if ("module" === s) o = u[l] = y.module(e);
                        else if (p(b, s) || p(x, s) || p($, s)) u[l] = g(s);
                        else {
                            if (!a.p) throw new Error(e + " missing " + s);
                            a.p.load(a.n, f(i, !0), m(s), {}), u[l] = b[s]
                        }
                        r = n ? n.apply(b[e], u) : void 0, e && (o && o.exports !== h && o.exports !== b[e] ? b[e] = o.exports : r === h && c || (b[e] = r))
                    } else e && (b[e] = n)
                }, t = o = l = function(e, t, n, i, o) {
                    if ("string" == typeof e) return y[e] ? y[e](t) : g(v(e, t).f);
                    if (!e.splice) {
                        if ((w = e).deps && l(w.deps, w.callback), !t) return;
                        t.splice ? (e = t, t = n, n = null) : e = h
                    }
                    return t = t || function() {}, "function" == typeof n && (n = i, i = o), i ? s(h, e, t, n) : setTimeout(function() {
                        s(h, e, t, n)
                    }, 4), l
                }, l.config = function(e) {
                    return l(e)
                }, t._defined = b, (c = function(e, t, n) {
                    if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                    t.splice || (n = t, t = []), p(b, e) || p(x, e) || (x[e] = [e, t, n])
                }).amd = {
                    jQuery: !0
                }
            }(), e.requirejs = t, e.require = o, e.define = c), e.define("almond", function() {}), e.define("jquery", [], function() {
                var e = n || $;
                return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
            }), e.define("select2/utils", ["jquery"], function(s) {
                function u(e) {
                    var t = e.prototype,
                        n = [];
                    for (var i in t) {
                        "function" == typeof t[i] && "constructor" !== i && n.push(i)
                    }
                    return n
                }
                var e = {
                        Extend: function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            var i = {}.hasOwnProperty;
                            for (var o in t) i.call(t, o) && (e[o] = t[o]);
                            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                        },
                        Decorate: function(i, o) {
                            function s() {
                                var e = Array.prototype.unshift,
                                    t = o.prototype.constructor.length,
                                    n = i.prototype.constructor;
                                0 < t && (e.call(arguments, i.prototype.constructor), n = o.prototype.constructor), n.apply(this, arguments)
                            }
                            var e = u(o),
                                t = u(i);
                            o.displayName = i.displayName, s.prototype = new function() {
                                this.constructor = s
                            };
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                s.prototype[r] = i.prototype[r]
                            }
                            for (var a = function(e) {
                                    var t = function() {};
                                    e in s.prototype && (t = s.prototype[e]);
                                    var n = o.prototype[e];
                                    return function() {
                                        return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments)
                                    }
                                }, l = 0; l < e.length; l++) {
                                var c = e[l];
                                s.prototype[c] = a(c)
                            }
                            return s
                        }
                    },
                    t = function() {
                        this.listeners = {}
                    };
                return t.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                }, t.prototype.trigger = function(e) {
                    var t = Array.prototype.slice,
                        n = t.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, t.prototype.invoke = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
                }, e.Observable = t, e.generateChars = function(e) {
                    for (var t = "", n = 0; n < e; n++) {
                        t += Math.floor(36 * Math.random()).toString(36)
                    }
                    return t
                }, e.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }, e._convertData = function(e) {
                    for (var t in e) {
                        var n = t.split("-"),
                            i = e;
                        if (1 !== n.length) {
                            for (var o = 0; o < n.length; o++) {
                                var s = n[o];
                                (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i || (i[s] = {}), o == n.length - 1 && (i[s] = e[t]), i = i[s]
                            }
                            delete e[t]
                        }
                    }
                    return e
                }, e.hasScroll = function(e, t) {
                    var n = s(t),
                        i = t.style.overflowX,
                        o = t.style.overflowY;
                    return (i !== o || "hidden" !== o && "visible" !== o) && ("scroll" === i || "scroll" === o || (n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth))
                }, e.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                        return t[e]
                    })
                }, e.appendMany = function(e, t) {
                    if ("1.7" === s.fn.jquery.substr(0, 3)) {
                        var n = s();
                        s.map(t, function(e) {
                            n = n.add(e)
                        }), t = n
                    }
                    e.append(t)
                }, e
            }), e.define("select2/results", ["jquery", "./utils"], function(h, e) {
                function i(e, t, n) {
                    this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this)
                }
                return e.Extend(i, e.Observable), i.prototype.render = function() {
                    var e = h('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e
                }, i.prototype.clear = function() {
                    this.$results.empty()
                }, i.prototype.displayMessage = function(e) {
                    var t = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var n = h('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        i = this.options.get("translations").get(e.message);
                    n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n)
                }, i.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, i.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null != e.results && 0 !== e.results.length) {
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var i = e.results[n],
                                o = this.option(i);
                            t.push(o)
                        }
                        this.$results.append(t)
                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
                }, i.prototype.position = function(e, t) {
                    t.find(".select2-results").append(e)
                }, i.prototype.sort = function(e) {
                    return this.options.get("sorter")(e)
                }, i.prototype.highlightFirstItem = function() {
                    var e = this.$results.find(".select2-results__option[aria-selected]"),
                        t = e.filter("[aria-selected=true]");
                    0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, i.prototype.setClasses = function() {
                    var t = this;
                    this.data.current(function(e) {
                        var i = h.map(e, function(e) {
                            return e.id.toString()
                        });
                        t.$results.find(".select2-results__option[aria-selected]").each(function() {
                            var e = h(this),
                                t = h.data(this, "data"),
                                n = "" + t.id;
                            null != t.element && t.element.selected || null == t.element && -1 < h.inArray(n, i) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                        })
                    })
                }, i.prototype.showLoading = function(e) {
                    this.hideLoading();
                    var t = {
                            disabled: !0,
                            loading: !0,
                            text: this.options.get("translations").get("searching")(e)
                        },
                        n = this.option(t);
                    n.className += " loading-results", this.$results.prepend(n)
                }, i.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, i.prototype.option = function(e) {
                    var t = document.createElement("li");
                    t.className = "select2-results__option";
                    var n = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    for (var i in e.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]), n) {
                        var o = n[i];
                        t.setAttribute(i, o)
                    }
                    if (e.children) {
                        var s = h(t),
                            r = document.createElement("strong");
                        r.className = "select2-results__group", h(r), this.template(e, r);
                        for (var a = [], l = 0; l < e.children.length; l++) {
                            var c = e.children[l],
                                u = this.option(c);
                            a.push(u)
                        }
                        var d = h("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested"
                        });
                        d.append(a), s.append(r), s.append(d)
                    } else this.template(e, t);
                    return h.data(t, "data", e), t
                }, i.prototype.bind = function(t, e) {
                    var l = this,
                        n = t.id + "-results";
                    this.$results.attr("id", n), t.on("results:all", function(e) {
                        l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), t.on("results:append", function(e) {
                        l.append(e.data), t.isOpen() && l.setClasses()
                    }), t.on("query", function(e) {
                        l.hideMessages(), l.showLoading(e)
                    }), t.on("select", function() {
                        t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), t.on("unselect", function() {
                        t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), t.on("open", function() {
                        l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible()
                    }), t.on("close", function() {
                        l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant")
                    }), t.on("results:toggle", function() {
                        var e = l.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup")
                    }), t.on("results:select", function() {
                        var e = l.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = e.data("data");
                            "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
                                data: t
                            })
                        }
                    }), t.on("results:previous", function() {
                        var e = l.getHighlightedResults(),
                            t = l.$results.find("[aria-selected]"),
                            n = t.index(e);
                        if (0 !== n) {
                            var i = n - 1;
                            0 === e.length && (i = 0);
                            var o = t.eq(i);
                            o.trigger("mouseenter");
                            var s = l.$results.offset().top,
                                r = o.offset().top,
                                a = l.$results.scrollTop() + (r - s);
                            0 === i ? l.$results.scrollTop(0) : r - s < 0 && l.$results.scrollTop(a)
                        }
                    }), t.on("results:next", function() {
                        var e = l.getHighlightedResults(),
                            t = l.$results.find("[aria-selected]"),
                            n = t.index(e) + 1;
                        if (!(n >= t.length)) {
                            var i = t.eq(n);
                            i.trigger("mouseenter");
                            var o = l.$results.offset().top + l.$results.outerHeight(!1),
                                s = i.offset().top + i.outerHeight(!1),
                                r = l.$results.scrollTop() + s - o;
                            0 === n ? l.$results.scrollTop(0) : o < s && l.$results.scrollTop(r)
                        }
                    }), t.on("results:focus", function(e) {
                        e.element.addClass("select2-results__option--highlighted")
                    }), t.on("results:message", function(e) {
                        l.displayMessage(e)
                    }), h.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                        var t = l.$results.scrollTop(),
                            n = l.$results.get(0).scrollHeight - t + e.deltaY,
                            i = 0 < e.deltaY && t - e.deltaY <= 0,
                            o = e.deltaY < 0 && n <= l.$results.height();
                        i ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                        var t = h(this),
                            n = t.data("data");
                        return "true" === t.attr("aria-selected") ? void(l.options.get("multiple") ? l.trigger("unselect", {
                            originalEvent: e,
                            data: n
                        }) : l.trigger("close", {})) : void l.trigger("select", {
                            originalEvent: e,
                            data: n
                        })
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) {
                        var t = h(this).data("data");
                        l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
                            data: t,
                            element: h(this)
                        })
                    })
                }, i.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, i.prototype.destroy = function() {
                    this.$results.remove()
                }, i.prototype.ensureHighlightVisible = function() {
                    var e = this.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = this.$results.find("[aria-selected]").index(e),
                            n = this.$results.offset().top,
                            i = e.offset().top,
                            o = this.$results.scrollTop() + (i - n),
                            s = i - n;
                        o -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(o)
                    }
                }, i.prototype.template = function(e, t) {
                    var n = this.options.get("templateResult"),
                        i = this.options.get("escapeMarkup"),
                        o = n(e, t);
                    null == o ? t.style.display = "none" : "string" == typeof o ? t.innerHTML = i(o) : h(t).append(o)
                }, i
            }), e.define("select2/keys", [], function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, e, o) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return e.Extend(i, e.Observable), i.prototype.render = function() {
                    var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e
                }, i.prototype.bind = function(e, t) {
                    var n = this,
                        i = (e.id, e.id + "-results");
                    this.container = e, this.$selection.on("focus", function(e) {
                        n.trigger("focus", e)
                    }), this.$selection.on("blur", function(e) {
                        n._handleBlur(e)
                    }), this.$selection.on("keydown", function(e) {
                        n.trigger("keypress", e), e.which === o.SPACE && e.preventDefault()
                    }), e.on("results:focus", function(e) {
                        n.$selection.attr("aria-activedescendant", e.data._resultId)
                    }), e.on("selection:update", function(e) {
                        n.update(e.data)
                    }), e.on("open", function() {
                        n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e)
                    }), e.on("close", function() {
                        n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.focus(), n._detachCloseHandler(e)
                    }), e.on("enable", function() {
                        n.$selection.attr("tabindex", n._tabindex)
                    }), e.on("disable", function() {
                        n.$selection.attr("tabindex", "-1")
                    })
                }, i.prototype._handleBlur = function(e) {
                    var t = this;
                    window.setTimeout(function() {
                        document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e)
                    }, 1)
                }, i.prototype._attachCloseHandler = function(e) {
                    n(document.body).on("mousedown.select2." + e.id, function(e) {
                        var t = n(e.target).closest(".select2");
                        n(".select2.select2-container--open").each(function() {
                            var e = n(this);
                            this != t[0] && e.data("element").select2("close")
                        })
                    })
                }, i.prototype._detachCloseHandler = function(e) {
                    n(document.body).off("mousedown.select2." + e.id)
                }, i.prototype.position = function(e, t) {
                    t.find(".selection").append(e)
                }, i.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, i.prototype.update = function(e) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, i
            }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
                function o() {
                    o.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(o, t), o.prototype.render = function() {
                    var e = o.__super__.render.call(this);
                    return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                }, o.prototype.bind = function(t, e) {
                    var n = this;
                    o.__super__.bind.apply(this, arguments);
                    var i = t.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) {
                        1 === e.which && n.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), t.on("focus", function(e) {
                        t.isOpen() || n.$selection.focus()
                    }), t.on("selection:update", function(e) {
                        n.update(e.data)
                    })
                }, o.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, o.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, o.prototype.selectionContainer = function() {
                    return e("<span></span>")
                }, o.prototype.update = function(e) {
                    if (0 !== e.length) {
                        var t = e[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(t, n);
                        n.empty().append(i), n.prop("title", t.title || t.text)
                    } else this.clear()
                }, o
            }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(i, e, a) {
                function o(e, t) {
                    o.__super__.constructor.apply(this, arguments)
                }
                return a.Extend(o, e), o.prototype.render = function() {
                    var e = o.__super__.render.call(this);
                    return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                }, o.prototype.bind = function(e, t) {
                    var n = this;
                    o.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                        n.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
                        if (!n.options.get("disabled")) {
                            var t = i(this).parent().data("data");
                            n.trigger("unselect", {
                                originalEvent: e,
                                data: t
                            })
                        }
                    })
                }, o.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, o.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, o.prototype.selectionContainer = function() {
                    return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, o.prototype.update = function(e) {
                    if (this.clear(), 0 !== e.length) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var i = e[n],
                                o = this.selectionContainer(),
                                s = this.display(i, o);
                            o.append(s), o.prop("title", i.title || i.text), o.data("data", i), t.push(o)
                        }
                        var r = this.$selection.find(".select2-selection__rendered");
                        a.appendMany(r, t)
                    }
                }, o
            }), e.define("select2/selection/placeholder", ["../utils"], function(e) {
                function t(e, t, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                }
                return t.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, t.prototype.createPlaceholder = function(e, t) {
                    var n = this.selectionContainer();
                    return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                }, t.prototype.update = function(e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id;
                    if (1 < t.length || n) return e.call(this, t);
                    this.clear();
                    var i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i)
                }, t
            }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(i, o) {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                        i._handleClear(e)
                    }), t.on("keypress", function(e) {
                        i._handleKeyboardClear(e, t)
                    })
                }, e.prototype._handleClear = function(e, t) {
                    if (!this.options.get("disabled")) {
                        var n = this.$selection.find(".select2-selection__clear");
                        if (0 !== n.length) {
                            t.stopPropagation();
                            for (var i = n.data("data"), o = 0; o < i.length; o++) {
                                var s = {
                                    data: i[o]
                                };
                                if (this.trigger("unselect", s), s.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }, e.prototype._handleKeyboardClear = function(e, t, n) {
                    n.isOpen() || (t.which == o.DELETE || t.which == o.BACKSPACE) && this._handleClear(t)
                }, e.prototype.update = function(e, t) {
                    if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
                        var n = i('<span class="select2-selection__clear">&times;</span>');
                        n.data("data", t), this.$selection.find(".select2-selection__rendered").prepend(n)
                    }
                }, e
            }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(i, e, r) {
                function t(e, t, n) {
                    e.call(this, t, n)
                }
                return t.prototype.render = function(e) {
                    var t = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = t, this.$search = t.find("input");
                    var n = e.call(this);
                    return this._transferTabIndex(), n
                }, t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("open", function() {
                        i.$search.trigger("focus")
                    }), t.on("close", function() {
                        i.$search.val(""), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus")
                    }), t.on("enable", function() {
                        i.$search.prop("disabled", !1), i._transferTabIndex()
                    }), t.on("disable", function() {
                        i.$search.prop("disabled", !0)
                    }), t.on("focus", function(e) {
                        i.$search.trigger("focus")
                    }), t.on("results:focus", function(e) {
                        i.$search.attr("aria-activedescendant", e.id)
                    }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                        i.trigger("focus", e)
                    }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                        i._handleBlur(e)
                    }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                        if (e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === r.BACKSPACE && "" === i.$search.val()) {
                            var t = i.$searchContainer.prev(".select2-selection__choice");
                            if (0 < t.length) {
                                var n = t.data("data");
                                i.searchRemoveChoice(n), e.preventDefault()
                            }
                        }
                    });
                    var o = document.documentMode,
                        s = o && o <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                        return s ? void i.$selection.off("input.search input.searchcheck") : void i.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                        if (s && "input" === e.type) i.$selection.off("input.search input.searchcheck");
                        else {
                            var t = e.which;
                            t != r.SHIFT && t != r.CTRL && t != r.ALT && t != r.TAB && i.handleSearch(e)
                        }
                    })
                }, t.prototype._transferTabIndex = function(e) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, t.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text)
                }, t.prototype.update = function(e, t) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                }, t.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, t.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }), this.$search.val(t.text), this.handleSearch()
                }, t.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "";
                    "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").innerWidth() : e = .75 * (this.$search.val().length + 1) + "em";
                    this.$search.css("width", e)
                }, t
            }), e.define("select2/selection/eventRelay", ["jquery"], function(r) {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this,
                        o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        s = ["opening", "closing", "selecting", "unselecting"];
                    e.call(this, t, n), t.on("*", function(e, t) {
                        if (-1 !== r.inArray(e, o)) {
                            t = t || {};
                            var n = r.Event("select2:" + e, {
                                params: t
                            });
                            i.$element.trigger(n), -1 !== r.inArray(e, s) && (t.prevented = n.isDefaultPrevented())
                        }
                    })
                }, e
            }), e.define("select2/translation", ["jquery", "require"], function(t, n) {
                function i(e) {
                    this.dict = e || {}
                }
                return i.prototype.all = function() {
                    return this.dict
                }, i.prototype.get = function(e) {
                    return this.dict[e]
                }, i.prototype.extend = function(e) {
                    this.dict = t.extend({}, e.all(), this.dict)
                }, i._cache = {}, i.loadPath = function(e) {
                    if (!(e in i._cache)) {
                        var t = n(e);
                        i._cache[e] = t
                    }
                    return new i(i._cache[e])
                }, i
            }), e.define("select2/diacritics", [], function() {
                return {
                    "â’¶": "A",
                    "ï¼¡": "A",
                    "Ã€": "A",
                    "Ã": "A",
                    "Ã‚": "A",
                    "áº¦": "A",
                    "áº¤": "A",
                    "áºª": "A",
                    "áº¨": "A",
                    "Ãƒ": "A",
                    "Ä€": "A",
                    "Ä‚": "A",
                    "áº°": "A",
                    "áº®": "A",
                    "áº´": "A",
                    "áº²": "A",
                    "È¦": "A",
                    "Ç ": "A",
                    "Ã„": "A",
                    "Çž": "A",
                    "áº¢": "A",
                    "Ã…": "A",
                    "Çº": "A",
                    "Ç": "A",
                    "È€": "A",
                    "È‚": "A",
                    "áº ": "A",
                    "áº¬": "A",
                    "áº¶": "A",
                    "á¸€": "A",
                    "Ä„": "A",
                    "Èº": "A",
                    "â±¯": "A",
                    "êœ²": "AA",
                    "Ã†": "AE",
                    "Ç¼": "AE",
                    "Ç¢": "AE",
                    "êœ´": "AO",
                    "êœ¶": "AU",
                    "êœ¸": "AV",
                    "êœº": "AV",
                    "êœ¼": "AY",
                    "â’·": "B",
                    "ï¼¢": "B",
                    "á¸‚": "B",
                    "á¸„": "B",
                    "á¸†": "B",
                    "Éƒ": "B",
                    "Æ‚": "B",
                    "Æ": "B",
                    "â’¸": "C",
                    "ï¼£": "C",
                    "Ä†": "C",
                    "Äˆ": "C",
                    "ÄŠ": "C",
                    "ÄŒ": "C",
                    "Ã‡": "C",
                    "á¸ˆ": "C",
                    "Æ‡": "C",
                    "È»": "C",
                    "êœ¾": "C",
                    "â’¹": "D",
                    "ï¼¤": "D",
                    "á¸Š": "D",
                    "ÄŽ": "D",
                    "á¸Œ": "D",
                    "á¸": "D",
                    "á¸’": "D",
                    "á¸Ž": "D",
                    "Ä": "D",
                    "Æ‹": "D",
                    "ÆŠ": "D",
                    "Æ‰": "D",
                    "ê¹": "D",
                    "Ç±": "DZ",
                    "Ç„": "DZ",
                    "Ç²": "Dz",
                    "Ç…": "Dz",
                    "â’º": "E",
                    "ï¼¥": "E",
                    "Ãˆ": "E",
                    "Ã‰": "E",
                    "ÃŠ": "E",
                    "á»€": "E",
                    "áº¾": "E",
                    "á»„": "E",
                    "á»‚": "E",
                    "áº¼": "E",
                    "Ä’": "E",
                    "á¸”": "E",
                    "á¸–": "E",
                    "Ä”": "E",
                    "Ä–": "E",
                    "Ã‹": "E",
                    "áºº": "E",
                    "Äš": "E",
                    "È„": "E",
                    "È†": "E",
                    "áº¸": "E",
                    "á»†": "E",
                    "È¨": "E",
                    "á¸œ": "E",
                    "Ä˜": "E",
                    "á¸˜": "E",
                    "á¸š": "E",
                    "Æ": "E",
                    "ÆŽ": "E",
                    "â’»": "F",
                    "ï¼¦": "F",
                    "á¸ž": "F",
                    "Æ‘": "F",
                    "ê»": "F",
                    "â’¼": "G",
                    "ï¼§": "G",
                    "Ç´": "G",
                    "Äœ": "G",
                    "á¸ ": "G",
                    "Äž": "G",
                    "Ä ": "G",
                    "Ç¦": "G",
                    "Ä¢": "G",
                    "Ç¤": "G",
                    "Æ“": "G",
                    "êž ": "G",
                    "ê½": "G",
                    "ê¾": "G",
                    "â’½": "H",
                    "ï¼¨": "H",
                    "Ä¤": "H",
                    "á¸¢": "H",
                    "á¸¦": "H",
                    "Èž": "H",
                    "á¸¤": "H",
                    "á¸¨": "H",
                    "á¸ª": "H",
                    "Ä¦": "H",
                    "â±§": "H",
                    "â±µ": "H",
                    "êž": "H",
                    "â’¾": "I",
                    "ï¼©": "I",
                    "ÃŒ": "I",
                    "Ã": "I",
                    "ÃŽ": "I",
                    "Ä¨": "I",
                    "Äª": "I",
                    "Ä¬": "I",
                    "Ä°": "I",
                    "Ã": "I",
                    "á¸®": "I",
                    "á»ˆ": "I",
                    "Ç": "I",
                    "Èˆ": "I",
                    "ÈŠ": "I",
                    "á»Š": "I",
                    "Ä®": "I",
                    "á¸¬": "I",
                    "Æ—": "I",
                    "â’¿": "J",
                    "ï¼ª": "J",
                    "Ä´": "J",
                    "Éˆ": "J",
                    "â“€": "K",
                    "ï¼«": "K",
                    "á¸°": "K",
                    "Ç¨": "K",
                    "á¸²": "K",
                    "Ä¶": "K",
                    "á¸´": "K",
                    "Æ˜": "K",
                    "â±©": "K",
                    "ê€": "K",
                    "ê‚": "K",
                    "ê„": "K",
                    "êž¢": "K",
                    "â“": "L",
                    "ï¼¬": "L",
                    "Ä¿": "L",
                    "Ä¹": "L",
                    "Ä½": "L",
                    "á¸¶": "L",
                    "á¸¸": "L",
                    "Ä»": "L",
                    "á¸¼": "L",
                    "á¸º": "L",
                    "Å": "L",
                    "È½": "L",
                    "â±¢": "L",
                    "â± ": "L",
                    "êˆ": "L",
                    "ê†": "L",
                    "êž€": "L",
                    "Ç‡": "LJ",
                    "Çˆ": "Lj",
                    "â“‚": "M",
                    "ï¼­": "M",
                    "á¸¾": "M",
                    "á¹€": "M",
                    "á¹‚": "M",
                    "â±®": "M",
                    "Æœ": "M",
                    "â“ƒ": "N",
                    "ï¼®": "N",
                    "Ç¸": "N",
                    "Åƒ": "N",
                    "Ã‘": "N",
                    "á¹„": "N",
                    "Å‡": "N",
                    "á¹†": "N",
                    "Å…": "N",
                    "á¹Š": "N",
                    "á¹ˆ": "N",
                    "È ": "N",
                    "Æ": "N",
                    "êž": "N",
                    "êž¤": "N",
                    "ÇŠ": "NJ",
                    "Ç‹": "Nj",
                    "â“„": "O",
                    "ï¼¯": "O",
                    "Ã’": "O",
                    "Ã“": "O",
                    "Ã”": "O",
                    "á»’": "O",
                    "á»": "O",
                    "á»–": "O",
                    "á»”": "O",
                    "Ã•": "O",
                    "á¹Œ": "O",
                    "È¬": "O",
                    "á¹Ž": "O",
                    "ÅŒ": "O",
                    "á¹": "O",
                    "á¹’": "O",
                    "ÅŽ": "O",
                    "È®": "O",
                    "È°": "O",
                    "Ã–": "O",
                    "Èª": "O",
                    "á»Ž": "O",
                    "Å": "O",
                    "Ç‘": "O",
                    "ÈŒ": "O",
                    "ÈŽ": "O",
                    "Æ ": "O",
                    "á»œ": "O",
                    "á»š": "O",
                    "á» ": "O",
                    "á»ž": "O",
                    "á»¢": "O",
                    "á»Œ": "O",
                    "á»˜": "O",
                    "Çª": "O",
                    "Ç¬": "O",
                    "Ã˜": "O",
                    "Ç¾": "O",
                    "Æ†": "O",
                    "ÆŸ": "O",
                    "êŠ": "O",
                    "êŒ": "O",
                    "Æ¢": "OI",
                    "êŽ": "OO",
                    "È¢": "OU",
                    "â“…": "P",
                    "ï¼°": "P",
                    "á¹”": "P",
                    "á¹–": "P",
                    "Æ¤": "P",
                    "â±£": "P",
                    "ê": "P",
                    "ê’": "P",
                    "ê”": "P",
                    "â“†": "Q",
                    "ï¼±": "Q",
                    "ê–": "Q",
                    "ê˜": "Q",
                    "ÉŠ": "Q",
                    "â“‡": "R",
                    "ï¼²": "R",
                    "Å”": "R",
                    "á¹˜": "R",
                    "Å˜": "R",
                    "È": "R",
                    "È’": "R",
                    "á¹š": "R",
                    "á¹œ": "R",
                    "Å–": "R",
                    "á¹ž": "R",
                    "ÉŒ": "R",
                    "â±¤": "R",
                    "êš": "R",
                    "êž¦": "R",
                    "êž‚": "R",
                    "â“ˆ": "S",
                    "ï¼³": "S",
                    "áºž": "S",
                    "Åš": "S",
                    "á¹¤": "S",
                    "Åœ": "S",
                    "á¹ ": "S",
                    "Å ": "S",
                    "á¹¦": "S",
                    "á¹¢": "S",
                    "á¹¨": "S",
                    "È˜": "S",
                    "Åž": "S",
                    "â±¾": "S",
                    "êž¨": "S",
                    "êž„": "S",
                    "â“‰": "T",
                    "ï¼´": "T",
                    "á¹ª": "T",
                    "Å¤": "T",
                    "á¹¬": "T",
                    "Èš": "T",
                    "Å¢": "T",
                    "á¹°": "T",
                    "á¹®": "T",
                    "Å¦": "T",
                    "Æ¬": "T",
                    "Æ®": "T",
                    "È¾": "T",
                    "êž†": "T",
                    "êœ¨": "TZ",
                    "â“Š": "U",
                    "ï¼µ": "U",
                    "Ã™": "U",
                    "Ãš": "U",
                    "Ã›": "U",
                    "Å¨": "U",
                    "á¹¸": "U",
                    "Åª": "U",
                    "á¹º": "U",
                    "Å¬": "U",
                    "Ãœ": "U",
                    "Ç›": "U",
                    "Ç—": "U",
                    "Ç•": "U",
                    "Ç™": "U",
                    "á»¦": "U",
                    "Å®": "U",
                    "Å°": "U",
                    "Ç“": "U",
                    "È”": "U",
                    "È–": "U",
                    "Æ¯": "U",
                    "á»ª": "U",
                    "á»¨": "U",
                    "á»®": "U",
                    "á»¬": "U",
                    "á»°": "U",
                    "á»¤": "U",
                    "á¹²": "U",
                    "Å²": "U",
                    "á¹¶": "U",
                    "á¹´": "U",
                    "É„": "U",
                    "â“‹": "V",
                    "ï¼¶": "V",
                    "á¹¼": "V",
                    "á¹¾": "V",
                    "Æ²": "V",
                    "êž": "V",
                    "É…": "V",
                    "ê ": "VY",
                    "â“Œ": "W",
                    "ï¼·": "W",
                    "áº€": "W",
                    "áº‚": "W",
                    "Å´": "W",
                    "áº†": "W",
                    "áº„": "W",
                    "áºˆ": "W",
                    "â±²": "W",
                    "â“": "X",
                    "ï¼¸": "X",
                    "áºŠ": "X",
                    "áºŒ": "X",
                    "â“Ž": "Y",
                    "ï¼¹": "Y",
                    "á»²": "Y",
                    "Ã": "Y",
                    "Å¶": "Y",
                    "á»¸": "Y",
                    "È²": "Y",
                    "áºŽ": "Y",
                    "Å¸": "Y",
                    "á»¶": "Y",
                    "á»´": "Y",
                    "Æ³": "Y",
                    "ÉŽ": "Y",
                    "á»¾": "Y",
                    "â“": "Z",
                    "ï¼º": "Z",
                    "Å¹": "Z",
                    "áº": "Z",
                    "Å»": "Z",
                    "Å½": "Z",
                    "áº’": "Z",
                    "áº”": "Z",
                    "Æµ": "Z",
                    "È¤": "Z",
                    "â±¿": "Z",
                    "â±«": "Z",
                    "ê¢": "Z",
                    "â“": "a",
                    "ï½": "a",
                    "áºš": "a",
                    "Ã ": "a",
                    "Ã¡": "a",
                    "Ã¢": "a",
                    "áº§": "a",
                    "áº¥": "a",
                    "áº«": "a",
                    "áº©": "a",
                    "Ã£": "a",
                    "Ä": "a",
                    "Äƒ": "a",
                    "áº±": "a",
                    "áº¯": "a",
                    "áºµ": "a",
                    "áº³": "a",
                    "È§": "a",
                    "Ç¡": "a",
                    "Ã¤": "a",
                    "ÇŸ": "a",
                    "áº£": "a",
                    "Ã¥": "a",
                    "Ç»": "a",
                    "ÇŽ": "a",
                    "È": "a",
                    "Èƒ": "a",
                    "áº¡": "a",
                    "áº­": "a",
                    "áº·": "a",
                    "á¸": "a",
                    "Ä…": "a",
                    "â±¥": "a",
                    "É": "a",
                    "êœ³": "aa",
                    "Ã¦": "ae",
                    "Ç½": "ae",
                    "Ç£": "ae",
                    "êœµ": "ao",
                    "êœ·": "au",
                    "êœ¹": "av",
                    "êœ»": "av",
                    "êœ½": "ay",
                    "â“‘": "b",
                    "ï½‚": "b",
                    "á¸ƒ": "b",
                    "á¸…": "b",
                    "á¸‡": "b",
                    "Æ€": "b",
                    "Æƒ": "b",
                    "É“": "b",
                    "â“’": "c",
                    "ï½ƒ": "c",
                    "Ä‡": "c",
                    "Ä‰": "c",
                    "Ä‹": "c",
                    "Ä": "c",
                    "Ã§": "c",
                    "á¸‰": "c",
                    "Æˆ": "c",
                    "È¼": "c",
                    "êœ¿": "c",
                    "â†„": "c",
                    "â““": "d",
                    "ï½„": "d",
                    "á¸‹": "d",
                    "Ä": "d",
                    "á¸": "d",
                    "á¸‘": "d",
                    "á¸“": "d",
                    "á¸": "d",
                    "Ä‘": "d",
                    "ÆŒ": "d",
                    "É–": "d",
                    "É—": "d",
                    "êº": "d",
                    "Ç³": "dz",
                    "Ç†": "dz",
                    "â“”": "e",
                    "ï½…": "e",
                    "Ã¨": "e",
                    "Ã©": "e",
                    "Ãª": "e",
                    "á»": "e",
                    "áº¿": "e",
                    "á»…": "e",
                    "á»ƒ": "e",
                    "áº½": "e",
                    "Ä“": "e",
                    "á¸•": "e",
                    "á¸—": "e",
                    "Ä•": "e",
                    "Ä—": "e",
                    "Ã«": "e",
                    "áº»": "e",
                    "Ä›": "e",
                    "È…": "e",
                    "È‡": "e",
                    "áº¹": "e",
                    "á»‡": "e",
                    "È©": "e",
                    "á¸": "e",
                    "Ä™": "e",
                    "á¸™": "e",
                    "á¸›": "e",
                    "É‡": "e",
                    "É›": "e",
                    "Ç": "e",
                    "â“•": "f",
                    "ï½†": "f",
                    "á¸Ÿ": "f",
                    "Æ’": "f",
                    "ê¼": "f",
                    "â“–": "g",
                    "ï½‡": "g",
                    "Çµ": "g",
                    "Ä": "g",
                    "á¸¡": "g",
                    "ÄŸ": "g",
                    "Ä¡": "g",
                    "Ç§": "g",
                    "Ä£": "g",
                    "Ç¥": "g",
                    "É ": "g",
                    "êž¡": "g",
                    "áµ¹": "g",
                    "ê¿": "g",
                    "â“—": "h",
                    "ï½ˆ": "h",
                    "Ä¥": "h",
                    "á¸£": "h",
                    "á¸§": "h",
                    "ÈŸ": "h",
                    "á¸¥": "h",
                    "á¸©": "h",
                    "á¸«": "h",
                    "áº–": "h",
                    "Ä§": "h",
                    "â±¨": "h",
                    "â±¶": "h",
                    "É¥": "h",
                    "Æ•": "hv",
                    "â“˜": "i",
                    "ï½‰": "i",
                    "Ã¬": "i",
                    "Ã­": "i",
                    "Ã®": "i",
                    "Ä©": "i",
                    "Ä«": "i",
                    "Ä­": "i",
                    "Ã¯": "i",
                    "á¸¯": "i",
                    "á»‰": "i",
                    "Ç": "i",
                    "È‰": "i",
                    "È‹": "i",
                    "á»‹": "i",
                    "Ä¯": "i",
                    "á¸­": "i",
                    "É¨": "i",
                    "Ä±": "i",
                    "â“™": "j",
                    "ï½Š": "j",
                    "Äµ": "j",
                    "Ç°": "j",
                    "É‰": "j",
                    "â“š": "k",
                    "ï½‹": "k",
                    "á¸±": "k",
                    "Ç©": "k",
                    "á¸³": "k",
                    "Ä·": "k",
                    "á¸µ": "k",
                    "Æ™": "k",
                    "â±ª": "k",
                    "ê": "k",
                    "êƒ": "k",
                    "ê…": "k",
                    "êž£": "k",
                    "â“›": "l",
                    "ï½Œ": "l",
                    "Å€": "l",
                    "Äº": "l",
                    "Ä¾": "l",
                    "á¸·": "l",
                    "á¸¹": "l",
                    "Ä¼": "l",
                    "á¸½": "l",
                    "á¸»": "l",
                    "Å¿": "l",
                    "Å‚": "l",
                    "Æš": "l",
                    "É«": "l",
                    "â±¡": "l",
                    "ê‰": "l",
                    "êž": "l",
                    "ê‡": "l",
                    "Ç‰": "lj",
                    "â“œ": "m",
                    "ï½": "m",
                    "á¸¿": "m",
                    "á¹": "m",
                    "á¹ƒ": "m",
                    "É±": "m",
                    "É¯": "m",
                    "â“": "n",
                    "ï½Ž": "n",
                    "Ç¹": "n",
                    "Å„": "n",
                    "Ã±": "n",
                    "á¹…": "n",
                    "Åˆ": "n",
                    "á¹‡": "n",
                    "Å†": "n",
                    "á¹‹": "n",
                    "á¹‰": "n",
                    "Æž": "n",
                    "É²": "n",
                    "Å‰": "n",
                    "êž‘": "n",
                    "êž¥": "n",
                    "ÇŒ": "nj",
                    "â“ž": "o",
                    "ï½": "o",
                    "Ã²": "o",
                    "Ã³": "o",
                    "Ã´": "o",
                    "á»“": "o",
                    "á»‘": "o",
                    "á»—": "o",
                    "á»•": "o",
                    "Ãµ": "o",
                    "á¹": "o",
                    "È­": "o",
                    "á¹": "o",
                    "Å": "o",
                    "á¹‘": "o",
                    "á¹“": "o",
                    "Å": "o",
                    "È¯": "o",
                    "È±": "o",
                    "Ã¶": "o",
                    "È«": "o",
                    "á»": "o",
                    "Å‘": "o",
                    "Ç’": "o",
                    "È": "o",
                    "È": "o",
                    "Æ¡": "o",
                    "á»": "o",
                    "á»›": "o",
                    "á»¡": "o",
                    "á»Ÿ": "o",
                    "á»£": "o",
                    "á»": "o",
                    "á»™": "o",
                    "Ç«": "o",
                    "Ç­": "o",
                    "Ã¸": "o",
                    "Ç¿": "o",
                    "É”": "o",
                    "ê‹": "o",
                    "ê": "o",
                    "Éµ": "o",
                    "Æ£": "oi",
                    "È£": "ou",
                    "ê": "oo",
                    "â“Ÿ": "p",
                    "ï½": "p",
                    "á¹•": "p",
                    "á¹—": "p",
                    "Æ¥": "p",
                    "áµ½": "p",
                    "ê‘": "p",
                    "ê“": "p",
                    "ê•": "p",
                    "â“ ": "q",
                    "ï½‘": "q",
                    "É‹": "q",
                    "ê—": "q",
                    "ê™": "q",
                    "â“¡": "r",
                    "ï½’": "r",
                    "Å•": "r",
                    "á¹™": "r",
                    "Å™": "r",
                    "È‘": "r",
                    "È“": "r",
                    "á¹›": "r",
                    "á¹": "r",
                    "Å—": "r",
                    "á¹Ÿ": "r",
                    "É": "r",
                    "É½": "r",
                    "ê›": "r",
                    "êž§": "r",
                    "êžƒ": "r",
                    "â“¢": "s",
                    "ï½“": "s",
                    "ÃŸ": "s",
                    "Å›": "s",
                    "á¹¥": "s",
                    "Å": "s",
                    "á¹¡": "s",
                    "Å¡": "s",
                    "á¹§": "s",
                    "á¹£": "s",
                    "á¹©": "s",
                    "È™": "s",
                    "ÅŸ": "s",
                    "È¿": "s",
                    "êž©": "s",
                    "êž…": "s",
                    "áº›": "s",
                    "â“£": "t",
                    "ï½”": "t",
                    "á¹«": "t",
                    "áº—": "t",
                    "Å¥": "t",
                    "á¹­": "t",
                    "È›": "t",
                    "Å£": "t",
                    "á¹±": "t",
                    "á¹¯": "t",
                    "Å§": "t",
                    "Æ­": "t",
                    "Êˆ": "t",
                    "â±¦": "t",
                    "êž‡": "t",
                    "êœ©": "tz",
                    "â“¤": "u",
                    "ï½•": "u",
                    "Ã¹": "u",
                    "Ãº": "u",
                    "Ã»": "u",
                    "Å©": "u",
                    "á¹¹": "u",
                    "Å«": "u",
                    "á¹»": "u",
                    "Å­": "u",
                    "Ã¼": "u",
                    "Çœ": "u",
                    "Ç˜": "u",
                    "Ç–": "u",
                    "Çš": "u",
                    "á»§": "u",
                    "Å¯": "u",
                    "Å±": "u",
                    "Ç”": "u",
                    "È•": "u",
                    "È—": "u",
                    "Æ°": "u",
                    "á»«": "u",
                    "á»©": "u",
                    "á»¯": "u",
                    "á»­": "u",
                    "á»±": "u",
                    "á»¥": "u",
                    "á¹³": "u",
                    "Å³": "u",
                    "á¹·": "u",
                    "á¹µ": "u",
                    "Ê‰": "u",
                    "â“¥": "v",
                    "ï½–": "v",
                    "á¹½": "v",
                    "á¹¿": "v",
                    "Ê‹": "v",
                    "êŸ": "v",
                    "ÊŒ": "v",
                    "ê¡": "vy",
                    "â“¦": "w",
                    "ï½—": "w",
                    "áº": "w",
                    "áºƒ": "w",
                    "Åµ": "w",
                    "áº‡": "w",
                    "áº…": "w",
                    "áº˜": "w",
                    "áº‰": "w",
                    "â±³": "w",
                    "â“§": "x",
                    "ï½˜": "x",
                    "áº‹": "x",
                    "áº": "x",
                    "â“¨": "y",
                    "ï½™": "y",
                    "á»³": "y",
                    "Ã½": "y",
                    "Å·": "y",
                    "á»¹": "y",
                    "È³": "y",
                    "áº": "y",
                    "Ã¿": "y",
                    "á»·": "y",
                    "áº™": "y",
                    "á»µ": "y",
                    "Æ´": "y",
                    "É": "y",
                    "á»¿": "y",
                    "â“©": "z",
                    "ï½š": "z",
                    "Åº": "z",
                    "áº‘": "z",
                    "Å¼": "z",
                    "Å¾": "z",
                    "áº“": "z",
                    "áº•": "z",
                    "Æ¶": "z",
                    "È¥": "z",
                    "É€": "z",
                    "â±¬": "z",
                    "ê£": "z",
                    "Î†": "Î‘",
                    "Îˆ": "Î•",
                    "Î‰": "Î—",
                    "ÎŠ": "Î™",
                    "Îª": "Î™",
                    "ÎŒ": "ÎŸ",
                    "ÎŽ": "Î¥",
                    "Î«": "Î¥",
                    "Î": "Î©",
                    "Î¬": "Î±",
                    "Î­": "Îµ",
                    "Î®": "Î·",
                    "Î¯": "Î¹",
                    "ÏŠ": "Î¹",
                    "Î": "Î¹",
                    "ÏŒ": "Î¿",
                    "Ï": "Ï…",
                    "Ï‹": "Ï…",
                    "Î°": "Ï…",
                    "Ï‰": "Ï‰",
                    "Ï‚": "Ïƒ"
                }
            }), e.define("select2/data/base", ["../utils"], function(i) {
                function n(e, t) {
                    n.__super__.constructor.call(this)
                }
                return i.Extend(n, i.Observable), n.prototype.current = function(e) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, n.prototype.query = function(e, t) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, n.prototype.bind = function(e, t) {}, n.prototype.destroy = function() {}, n.prototype.generateResultId = function(e, t) {
                    var n = e.id + "-result-";
                    return (n += i.generateChars(4)) + (null != t.id ? "-" + t.id.toString() : "-" + i.generateChars(4))
                }, n
            }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, a) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, e), n.prototype.current = function(e) {
                    var n = [],
                        i = this;
                    this.$element.find(":selected").each(function() {
                        var e = a(this),
                            t = i.item(e);
                        n.push(t)
                    }), e(n)
                }, n.prototype.select = function(o) {
                    var s = this;
                    if (o.selected = !0, a(o.element).is("option")) return o.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(e) {
                        var t = [];
                        (o = [o]).push.apply(o, e);
                        for (var n = 0; n < o.length; n++) {
                            var i = o[n].id; - 1 === a.inArray(i, t) && t.push(i)
                        }
                        s.$element.val(t), s.$element.trigger("change")
                    });
                    else {
                        var e = o.id;
                        this.$element.val(e), this.$element.trigger("change")
                    }
                }, n.prototype.unselect = function(o) {
                    var s = this;
                    if (this.$element.prop("multiple")) return o.selected = !1, a(o.element).is("option") ? (o.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var i = e[n].id;
                            i !== o.id && -1 === a.inArray(i, t) && t.push(i)
                        }
                        s.$element.val(t), s.$element.trigger("change")
                    })
                }, n.prototype.bind = function(e, t) {
                    var n = this;
                    (this.container = e).on("select", function(e) {
                        n.select(e.data)
                    }), e.on("unselect", function(e) {
                        n.unselect(e.data)
                    })
                }, n.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        a.removeData(this, "data")
                    })
                }, n.prototype.query = function(i, e) {
                    var o = [],
                        s = this;
                    this.$element.children().each(function() {
                        var e = a(this);
                        if (e.is("option") || e.is("optgroup")) {
                            var t = s.item(e),
                                n = s.matches(i, t);
                            null !== n && o.push(n)
                        }
                    }), e({
                        results: o
                    })
                }, n.prototype.addOptions = function(e) {
                    t.appendMany(this.$element, e)
                }, n.prototype.option = function(e) {
                    var t;
                    e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                    var n = a(t),
                        i = this._normalizeItem(e);
                    return i.element = t, a.data(t, "data", i), n
                }, n.prototype.item = function(e) {
                    var t = {};
                    if (null != (t = a.data(e[0], "data"))) return t;
                    if (e.is("option")) t = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                    else if (e.is("optgroup")) {
                        t = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var n = e.children("option"), i = [], o = 0; o < n.length; o++) {
                            var s = a(n[o]),
                                r = this.item(s);
                            i.push(r)
                        }
                        t.children = i
                    }
                    return (t = this._normalizeItem(t)).element = e[0], a.data(e[0], "data", t), t
                }, n.prototype._normalizeItem = function(e) {
                    a.isPlainObject(e) || (e = {
                        id: e,
                        text: e
                    });
                    return null != (e = a.extend({}, {
                        text: ""
                    }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), a.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, e)
                }, n.prototype.matches = function(e, t) {
                    return this.options.get("matcher")(e, t)
                }, n
            }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, f, m) {
                function i(e, t) {
                    var n = t.get("data") || [];
                    i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                }
                return f.Extend(i, e), i.prototype.select = function(n) {
                    var e = this.$element.find("option").filter(function(e, t) {
                        return t.value == n.id.toString()
                    });
                    0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n)
                }, i.prototype.convertToOptions = function(e) {
                    function t(e) {
                        return function() {
                            return m(this).val() == e.id
                        }
                    }
                    for (var n = this, i = this.$element.find("option"), o = i.map(function() {
                            return n.item(m(this)).id
                        }).get(), s = [], r = 0; r < e.length; r++) {
                        var a = this._normalizeItem(e[r]);
                        if (0 <= m.inArray(a.id, o)) {
                            var l = i.filter(t(a)),
                                c = this.item(l),
                                u = m.extend(!0, {}, a, c),
                                d = this.option(u);
                            l.replaceWith(d)
                        } else {
                            var h = this.option(a);
                            if (a.children) {
                                var p = this.convertToOptions(a.children);
                                f.appendMany(h, p)
                            }
                            s.push(h)
                        }
                    }
                    return s
                }, i
            }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, s) {
                function n(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t)
                }
                return t.Extend(n, e), n.prototype._applyDefaults = function(e) {
                    var t = {
                        data: function(e) {
                            return s.extend({}, e, {
                                q: e.term
                            })
                        },
                        transport: function(e, t, n) {
                            var i = s.ajax(e);
                            return i.then(t), i.fail(n), i
                        }
                    };
                    return s.extend({}, t, e, !0)
                }, n.prototype.processResults = function(e) {
                    return e
                }, n.prototype.query = function(n, i) {
                    function e() {
                        var e = t.transport(t, function(e) {
                            var t = o.processResults(e, n);
                            o.options.get("debug") && window.console && console.error && (t && t.results && s.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(t)
                        }, function() {
                            e.status && "0" === e.status || o.trigger("results:message", {
                                message: "errorLoading"
                            })
                        });
                        o._request = e
                    }
                    var o = this;
                    null != this._request && (s.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var t = s.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
                }, n
            }), e.define("select2/data/tags", ["jquery"], function(u) {
                function e(e, t, n) {
                    var i = n.get("tags"),
                        o = n.get("createTag");
                    void 0 !== o && (this.createTag = o);
                    var s = n.get("insertTag");
                    if (void 0 !== s && (this.insertTag = s), e.call(this, t, n), u.isArray(i))
                        for (var r = 0; r < i.length; r++) {
                            var a = i[r],
                                l = this._normalizeItem(a),
                                c = this.option(l);
                            this.$element.append(c)
                        }
                }
                return e.prototype.query = function(e, c, u) {
                    var d = this;
                    return this._removeOldTags(), null == c.term || null != c.page ? void e.call(this, c, u) : void e.call(this, c, function e(t, n) {
                        for (var i = t.results, o = 0; o < i.length; o++) {
                            var s = i[o],
                                r = null != s.children && !e({
                                    results: s.children
                                }, !0);
                            if (s.text === c.term || r) return !n && (t.data = i, void u(t))
                        }
                        if (n) return !0;
                        var a = d.createTag(c);
                        if (null != a) {
                            var l = d.option(a);
                            l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(i, a)
                        }
                        t.results = i, u(t)
                    })
                }, e.prototype.createTag = function(e, t) {
                    var n = u.trim(t.term);
                    return "" === n ? null : {
                        id: n,
                        text: n
                    }
                }, e.prototype.insertTag = function(e, t, n) {
                    t.unshift(n)
                }, e.prototype._removeOldTags = function(e) {
                    (this._lastTag, this.$element.find("option[data-select2-tag]")).each(function() {
                        this.selected || u(this).remove()
                    })
                }, e
            }), e.define("select2/data/tokenizer", ["jquery"], function(d) {
                function e(e, t, n) {
                    var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                }
                return e.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                }, e.prototype.query = function(e, t, n) {
                    var o = this;
                    t.term = t.term || "";
                    var i = this.tokenizer(t, this.options, function(e) {
                        var t, n = o._normalizeItem(e);
                        if (!o.$element.find("option").filter(function() {
                                return d(this).val() === n.id
                            }).length) {
                            var i = o.option(n);
                            i.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([i])
                        }
                        t = n, o.trigger("select", {
                            data: t
                        })
                    });
                    i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.focus()), t.term = i.term), e.call(this, t, n)
                }, e.prototype.tokenizer = function(e, t, n, i) {
                    for (var o = n.get("tokenSeparators") || [], s = t.term, r = 0, a = this.createTag || function(e) {
                            return {
                                id: e.term,
                                text: e.term
                            }
                        }; r < s.length;) {
                        var l = s[r];
                        if (-1 !== d.inArray(l, o)) {
                            var c = s.substr(0, r),
                                u = a(d.extend({}, t, {
                                    term: c
                                }));
                            null != u ? (i(u), s = s.substr(r + 1) || "", r = 0) : r++
                        } else r++
                    }
                    return {
                        term: s
                    }
                }, e
            }), e.define("select2/data/minimumInputLength", [], function() {
                function e(e, t, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : void e.call(this, t, n)
                }, e
            }), e.define("select2/data/maximumInputLength", [], function() {
                function e(e, t, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    return t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : void e.call(this, t, n)
                }, e
            }), e.define("select2/data/maximumSelectionLength", [], function() {
                function e(e, t, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(n, i, o) {
                    var s = this;
                    this.current(function(e) {
                        var t = null != e ? e.length : 0;
                        return 0 < s.maximumSelectionLength && t >= s.maximumSelectionLength ? void s.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: s.maximumSelectionLength
                            }
                        }) : void n.call(s, i, o)
                    })
                }, e
            }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return e.Extend(n, e.Observable), n.prototype.render = function() {
                    var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$dropdown = e
                }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, n
            }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(o, e) {
                function t() {}
                return t.prototype.render = function(e) {
                    var t = e.call(this),
                        n = o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = n, this.$search = n.find("input"), t.prepend(n), t
                }, t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), this.$search.on("keydown", function(e) {
                        i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented()
                    }), this.$search.on("input", function(e) {
                        o(this).off("keyup")
                    }), this.$search.on("keyup input", function(e) {
                        i.handleSearch(e)
                    }), t.on("open", function() {
                        i.$search.attr("tabindex", 0), i.$search.focus(), window.setTimeout(function() {
                            i.$search.focus()
                        }, 0)
                    }), t.on("close", function() {
                        i.$search.attr("tabindex", -1), i.$search.val("")
                    }), t.on("focus", function() {
                        t.isOpen() && i.$search.focus()
                    }), t.on("results:all", function(e) {
                        null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"))
                    })
                }, t.prototype.handleSearch = function(e) {
                    if (!this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, t.prototype.showSearch = function(e, t) {
                    return !0
                }, t
            }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                function e(e, t, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results), e.call(this, t)
                }, e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, e.prototype.removePlaceholder = function(e, t) {
                    for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                        var o = t[i];
                        this.placeholder.id === o.id && n.splice(i, 1)
                    }
                    return n
                }, e
            }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(o) {
                function e(e, t, n, i) {
                    this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return e.prototype.append = function(e, t) {
                    this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                }, e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("query", function(e) {
                        i.lastParams = e, i.loading = !0
                    }), t.on("query:append", function(e) {
                        i.lastParams = e, i.loading = !0
                    }), this.$results.on("scroll", function() {
                        var e = o.contains(document.documentElement, i.$loadingMore[0]);
                        if (!i.loading && e) {
                            var t = i.$results.offset().top + i.$results.outerHeight(!1);
                            i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1) <= t + 50 && i.loadMore()
                        }
                    })
                }, e.prototype.loadMore = function() {
                    this.loading = !0;
                    var e = o.extend({}, {
                        page: 1
                    }, this.lastParams);
                    e.page++, this.trigger("query:append", e)
                }, e.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more
                }, e.prototype.createLoadingMore = function() {
                    var e = o('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        t = this.options.get("translations").get("loadingMore");
                    return e.html(t(this.lastParams)), e
                }, e
            }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(f, a) {
                function e(e, t, n) {
                    this.$dropdownParent = n.get("dropdownParent") || f(document.body), e.call(this, t, n)
                }
                return e.prototype.bind = function(e, t, n) {
                    var i = this,
                        o = !1;
                    e.call(this, t, n), t.on("open", function() {
                        i._showDropdown(), i._attachPositioningHandler(t), o || (o = !0, t.on("results:all", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }), t.on("results:append", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }))
                    }), t.on("close", function() {
                        i._hideDropdown(), i._detachPositioningHandler(t)
                    }), this.$dropdownContainer.on("mousedown", function(e) {
                        e.stopPropagation()
                    })
                }, e.prototype.destroy = function(e) {
                    e.call(this), this.$dropdownContainer.remove()
                }, e.prototype.position = function(e, t, n) {
                    t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n
                }, e.prototype.render = function(e) {
                    var t = f("<span></span>"),
                        n = e.call(this);
                    return t.append(n), this.$dropdownContainer = t
                }, e.prototype._hideDropdown = function(e) {
                    this.$dropdownContainer.detach()
                }, e.prototype._attachPositioningHandler = function(e, t) {
                    var n = this,
                        i = "scroll.select2." + t.id,
                        o = "resize.select2." + t.id,
                        s = "orientationchange.select2." + t.id,
                        r = this.$container.parents().filter(a.hasScroll);
                    r.each(function() {
                        f(this).data("select2-scroll-position", {
                            x: f(this).scrollLeft(),
                            y: f(this).scrollTop()
                        })
                    }), r.on(i, function(e) {
                        var t = f(this).data("select2-scroll-position");
                        f(this).scrollTop(t.y)
                    }), f(window).on(i + " " + o + " " + s, function(e) {
                        n._positionDropdown(), n._resizeDropdown()
                    })
                }, e.prototype._detachPositioningHandler = function(e, t) {
                    var n = "scroll.select2." + t.id,
                        i = "resize.select2." + t.id,
                        o = "orientationchange.select2." + t.id;
                    this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + o)
                }, e.prototype._positionDropdown = function() {
                    var e = f(window),
                        t = this.$dropdown.hasClass("select2-dropdown--above"),
                        n = this.$dropdown.hasClass("select2-dropdown--below"),
                        i = null,
                        o = this.$container.offset();
                    o.bottom = o.top + this.$container.outerHeight(!1);
                    var s = {
                        height: this.$container.outerHeight(!1)
                    };
                    s.top = o.top, s.bottom = o.top + s.height;
                    var r = this.$dropdown.outerHeight(!1),
                        a = e.scrollTop(),
                        l = e.scrollTop() + e.height(),
                        c = a < o.top - r,
                        u = l > o.bottom + r,
                        d = {
                            left: o.left,
                            top: s.bottom
                        },
                        h = this.$dropdownParent;
                    "static" === h.css("position") && (h = h.offsetParent());
                    var p = h.offset();
                    d.top -= p.top, d.left -= p.left, t || n || (i = "below"), u || !c || t ? !c && u && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (d.top = s.top - p.top - r), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(d)
                }, e.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                }, e.prototype._showDropdown = function(e) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, e
            }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function e(e, t, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                }
                return e.prototype.showSearch = function(e, t) {
                    return !(function e(t) {
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var o = t[i];
                            o.children ? n += e(o.children) : n++
                        }
                        return n
                    }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                }, e
            }), e.define("select2/dropdown/selectOnClose", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("close", function(e) {
                        i._handleSelectOnClose(e)
                    })
                }, e.prototype._handleSelectOnClose = function(e, t) {
                    if (t && null != t.originalSelect2Event) {
                        var n = t.originalSelect2Event;
                        if ("select" === n._type || "unselect" === n._type) return
                    }
                    var i = this.getHighlightedResults();
                    if (!(i.length < 1)) {
                        var o = i.data("data");
                        null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                            data: o
                        })
                    }
                }, e
            }), e.define("select2/dropdown/closeOnSelect", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("select", function(e) {
                        i._selectTriggered(e)
                    }), t.on("unselect", function(e) {
                        i._selectTriggered(e)
                    })
                }, e.prototype._selectTriggered = function(e, t) {
                    var n = t.originalEvent;
                    n && n.ctrlKey || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: t
                    })
                }, e
            }), e.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum,
                            n = "Please delete " + t + " character";
                        return 1 != t && (n += "s"), n
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more resultsâ€¦"
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searchingâ€¦"
                    }
                }
            }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(f, m, g, v, y, b, x, w, $, C, T, t, k, E, S, A, O, j, I, N, D, P, _, B, M, L, F, H, e) {
                function n() {
                    this.reset()
                }
                return n.prototype.apply = function(t) {
                    if (null == (t = f.extend(!0, {}, this.defaults, t)).dataAdapter) {
                        if (null != t.ajax ? t.dataAdapter = S : null != t.data ? t.dataAdapter = E : t.dataAdapter = k, 0 < t.minimumInputLength && (t.dataAdapter = C.Decorate(t.dataAdapter, j)), 0 < t.maximumInputLength && (t.dataAdapter = C.Decorate(t.dataAdapter, I)), 0 < t.maximumSelectionLength && (t.dataAdapter = C.Decorate(t.dataAdapter, N)), t.tags && (t.dataAdapter = C.Decorate(t.dataAdapter, A)), (null != t.tokenSeparators || null != t.tokenizer) && (t.dataAdapter = C.Decorate(t.dataAdapter, O)), null != t.query) {
                            var e = m(t.amdBase + "compat/query");
                            t.dataAdapter = C.Decorate(t.dataAdapter, e)
                        }
                        if (null != t.initSelection) {
                            var n = m(t.amdBase + "compat/initSelection");
                            t.dataAdapter = C.Decorate(t.dataAdapter, n)
                        }
                    }
                    if (null == t.resultsAdapter && (t.resultsAdapter = g, null != t.ajax && (t.resultsAdapter = C.Decorate(t.resultsAdapter, B)), null != t.placeholder && (t.resultsAdapter = C.Decorate(t.resultsAdapter, _)), t.selectOnClose && (t.resultsAdapter = C.Decorate(t.resultsAdapter, F))), null == t.dropdownAdapter) {
                        if (t.multiple) t.dropdownAdapter = D;
                        else {
                            var i = C.Decorate(D, P);
                            t.dropdownAdapter = i
                        }
                        if (0 !== t.minimumResultsForSearch && (t.dropdownAdapter = C.Decorate(t.dropdownAdapter, L)), t.closeOnSelect && (t.dropdownAdapter = C.Decorate(t.dropdownAdapter, H)), null != t.dropdownCssClass || null != t.dropdownCss || null != t.adaptDropdownCssClass) {
                            var o = m(t.amdBase + "compat/dropdownCss");
                            t.dropdownAdapter = C.Decorate(t.dropdownAdapter, o)
                        }
                        t.dropdownAdapter = C.Decorate(t.dropdownAdapter, M)
                    }
                    if (null == t.selectionAdapter) {
                        if (t.multiple ? t.selectionAdapter = y : t.selectionAdapter = v, null != t.placeholder && (t.selectionAdapter = C.Decorate(t.selectionAdapter, b)), t.allowClear && (t.selectionAdapter = C.Decorate(t.selectionAdapter, x)), t.multiple && (t.selectionAdapter = C.Decorate(t.selectionAdapter, w)), null != t.containerCssClass || null != t.containerCss || null != t.adaptContainerCssClass) {
                            var s = m(t.amdBase + "compat/containerCss");
                            t.selectionAdapter = C.Decorate(t.selectionAdapter, s)
                        }
                        t.selectionAdapter = C.Decorate(t.selectionAdapter, $)
                    }
                    if ("string" == typeof t.language)
                        if (0 < t.language.indexOf("-")) {
                            var r = t.language.split("-")[0];
                            t.language = [t.language, r]
                        } else t.language = [t.language];
                    if (f.isArray(t.language)) {
                        var a = new T;
                        t.language.push("en");
                        for (var l = t.language, c = 0; c < l.length; c++) {
                            var u = l[c],
                                d = {};
                            try {
                                d = T.loadPath(u)
                            } catch (e) {
                                try {
                                    u = this.defaults.amdLanguageBase + u, d = T.loadPath(u)
                                } catch (e) {
                                    t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + u + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            a.extend(d)
                        }
                        t.translations = a
                    } else {
                        var h = T.loadPath(this.defaults.amdLanguageBase + "en"),
                            p = new T(t.language);
                        p.extend(h), t.translations = p
                    }
                    return t
                }, n.prototype.reset = function() {
                    function a(e) {
                        return e.replace(/[^\u0000-\u007E]/g, function(e) {
                            return t[e] || e
                        })
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: C.escapeMarkup,
                        language: e,
                        matcher: function e(t, n) {
                            if ("" === f.trim(t.term)) return n;
                            if (n.children && 0 < n.children.length) {
                                for (var i = f.extend(!0, {}, n), o = n.children.length - 1; 0 <= o; o--) null == e(t, n.children[o]) && i.children.splice(o, 1);
                                return 0 < i.children.length ? i : e(t, i)
                            }
                            var s = a(n.text).toUpperCase(),
                                r = a(t.term).toUpperCase();
                            return -1 < s.indexOf(r) ? n : null
                        },
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function(e) {
                            return e
                        },
                        templateResult: function(e) {
                            return e.text
                        },
                        templateSelection: function(e) {
                            return e.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, n.prototype.set = function(e, t) {
                    var n = {};
                    n[f.camelCase(e)] = t;
                    var i = C._convertData(n);
                    f.extend(this.defaults, i)
                }, new n
            }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(i, s, o, r) {
                function e(e, t) {
                    if (this.options = e, null != t && this.fromElement(t), this.options = o.apply(this.options), t && t.is("input")) {
                        var n = i(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = r.Decorate(this.options.dataAdapter, n)
                    }
                }
                return e.prototype.fromElement = function(e) {
                    var t = ["select2"];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                    var n;
                    n = s.fn.jquery && "1." == s.fn.jquery.substr(0, 2) && e[0].dataset ? s.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                    var i = s.extend(!0, {}, n);
                    for (var o in i = r._convertData(i)) - 1 < s.inArray(o, t) || (s.isPlainObject(this.options[o]) ? s.extend(this.options[o], i[o]) : this.options[o] = i[o]);
                    return this
                }, e.prototype.get = function(e) {
                    return this.options[e]
                }, e.prototype.set = function(e, t) {
                    this.options[e] = t
                }, e
            }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(o, c, n, i) {
                var u = function(e, t) {
                    null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), u.__super__.constructor.call(this);
                    var n = e.attr("tabindex") || 0;
                    e.data("old-tabindex", n), e.attr("tabindex", "-1");
                    var i = this.options.get("dataAdapter");
                    this.dataAdapter = new i(e, this.options);
                    var o = this.render();
                    this._placeContainer(o);
                    var s = this.options.get("selectionAdapter");
                    this.selection = new s(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
                    var r = this.options.get("dropdownAdapter");
                    this.dropdown = new r(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
                    var a = this.options.get("resultsAdapter");
                    this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var l = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                        l.trigger("selection:update", {
                            data: e
                        })
                    }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                };
                return n.Extend(u, n.Observable), u.prototype._generateId = function(e) {
                    return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                }, u.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t)
                }, u.prototype._resolveWidth = function(e, t) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var i = this._resolveWidth(e, "style");
                        return null != i ? i : this._resolveWidth(e, "element")
                    }
                    if ("element" == t) {
                        var o = e.outerWidth(!1);
                        return o <= 0 ? "auto" : o + "px"
                    }
                    if ("style" == t) {
                        var s = e.attr("style");
                        if ("string" != typeof s) return null;
                        for (var r = s.split(";"), a = 0, l = r.length; a < l; a += 1) {
                            var c = r[a].replace(/\s/g, "").match(n);
                            if (null !== c && 1 <= c.length) return c[1]
                        }
                        return null
                    }
                    return t
                }, u.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, u.prototype._registerDomEvents = function() {
                    var t = this;
                    this.$element.on("change.select2", function() {
                        t.dataAdapter.current(function(e) {
                            t.trigger("selection:update", {
                                data: e
                            })
                        })
                    }), this.$element.on("focus.select2", function(e) {
                        t.trigger("focus", e)
                    }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != e ? (this._observer = new e(function(e) {
                        o.each(e, t._syncA), o.each(e, t._syncS)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                }, u.prototype._registerDataEvents = function() {
                    var n = this;
                    this.dataAdapter.on("*", function(e, t) {
                        n.trigger(e, t)
                    })
                }, u.prototype._registerSelectionEvents = function() {
                    var n = this,
                        i = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        n.toggleDropdown()
                    }), this.selection.on("focus", function(e) {
                        n.focus(e)
                    }), this.selection.on("*", function(e, t) {
                        -1 === o.inArray(e, i) && n.trigger(e, t)
                    })
                }, u.prototype._registerDropdownEvents = function() {
                    var n = this;
                    this.dropdown.on("*", function(e, t) {
                        n.trigger(e, t)
                    })
                }, u.prototype._registerResultsEvents = function() {
                    var n = this;
                    this.results.on("*", function(e, t) {
                        n.trigger(e, t)
                    })
                }, u.prototype._registerEvents = function() {
                    var n = this;
                    this.on("open", function() {
                        n.$container.addClass("select2-container--open")
                    }), this.on("close", function() {
                        n.$container.removeClass("select2-container--open")
                    }), this.on("enable", function() {
                        n.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function() {
                        n.$container.addClass("select2-container--disabled")
                    }), this.on("blur", function() {
                        n.$container.removeClass("select2-container--focus")
                    }), this.on("query", function(t) {
                        n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function(e) {
                            n.trigger("results:all", {
                                data: e,
                                query: t
                            })
                        })
                    }), this.on("query:append", function(t) {
                        this.dataAdapter.query(t, function(e) {
                            n.trigger("results:append", {
                                data: e,
                                query: t
                            })
                        })
                    }), this.on("keypress", function(e) {
                        var t = e.which;
                        n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(), e.preventDefault()) : t === i.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === i.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault())
                    })
                }, u.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, u.prototype._syncSubtree = function(e, t) {
                    var n = !1,
                        i = this;
                    if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                        if (t)
                            if (t.addedNodes && 0 < t.addedNodes.length)
                                for (var o = 0; o < t.addedNodes.length; o++) {
                                    t.addedNodes[o].selected && (n = !0)
                                } else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                            else n = !0;
                        n && this.dataAdapter.current(function(e) {
                            i.trigger("selection:update", {
                                data: e
                            })
                        })
                    }
                }, u.prototype.trigger = function(e, t) {
                    var n = u.__super__.trigger,
                        i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (void 0 === t && (t = {}), e in i) {
                        var o = i[e],
                            s = {
                                prevented: !1,
                                name: e,
                                args: t
                            };
                        if (n.call(this, o, s), s.prevented) return void(t.prevented = !0)
                    }
                    n.call(this, e, t)
                }, u.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, u.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, u.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                }, u.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, u.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, u.prototype.focus = function(e) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, u.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                    var t = !e[0];
                    this.$element.prop("disabled", t)
                }, u.prototype.data = function() {
                    this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var t = [];
                    return this.dataAdapter.current(function(e) {
                        t = e
                    }), t
                }, u.prototype.val = function(e) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                    var t = e[0];
                    o.isArray(t) && (t = o.map(t, function(e) {
                        return e.toString()
                    })), this.$element.val(t).trigger("change")
                }, u.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, u.prototype.render = function() {
                    var e = o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
                }, u
            }), e.define("jquery-mousewheel", ["jquery"], function(e) {
                return e
            }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(o, e, s, t) {
                if (null == o.fn.select2) {
                    var r = ["open", "close", "destroy"];
                    o.fn.select2 = function(t) {
                        if ("object" == typeof(t = t || {})) return this.each(function() {
                            var e = o.extend(!0, {}, t);
                            new s(o(this), e)
                        }), this;
                        if ("string" == typeof t) {
                            var n, i = Array.prototype.slice.call(arguments, 1);
                            return this.each(function() {
                                var e = o(this).data("select2");
                                null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i)
                            }), -1 < o.inArray(t, r) ? this : n
                        }
                        throw new Error("Invalid arguments for Select2: " + t)
                    }
                }
                return null == o.fn.select2.defaults && (o.fn.select2.defaults = t), s
            }), {
                define: e.define,
                require: e.require
            }
        }(),
        t = e.require("jquery.select2");
    return n.fn.select2.amd = e, t
});
var getUrlParameter = function(e) {
    var t, n, i = decodeURIComponent(window.location.search.substring(1)).split("&");
    for (n = 0; n < i.length; n++)
        if ((t = i[n].split("="))[0] === e) return void 0 === t[1] || t[1]
},
aff = getUrlParameter("aff"),
a_aid = getUrlParameter("a_aid");

function setarCookie(e, t, n) {
var i = new Date;
i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
var o = "expires=" + i.toUTCString();
return document.cookie = e + "=" + t + "; path=/;" + o + "; domain=www.editorasanar.com.br", cookieafiliado
}
if (null != aff) var cookieafiliado = setarCookie("sanar_afiliado", aff, 7);
else if (null != a_aid) cookieafiliado = setarCookie("sanar_afiliado", a_aid, 7);

function validaCPF(e) {
if (cpf = e.value, cpf = cpf.replace(/[^\d]+/g, ""), "" == cpf) return e.style.backgroundColor = "#ffcece";
if (11 != cpf.length || "00000000000" == cpf || "11111111111" == cpf || "22222222222" == cpf || "33333333333" == cpf || "44444444444" == cpf || "55555555555" == cpf || "66666666666" == cpf || "77777777777" == cpf || "88888888888" == cpf || "99999999999" == cpf) return e.style.backgroundColor = "#ffcece";
for (add = 0, i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
if (rev = 11 - add % 11, 10 != rev && 11 != rev || (rev = 0), rev != parseInt(cpf.charAt(9))) return e.style.backgroundColor = "#ffcece";
for (add = 0, i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
return rev = 11 - add % 11, 10 != rev && 11 != rev || (rev = 0), rev != parseInt(cpf.charAt(10)) ? e.style.backgroundColor = "#ffcece" : e.style.backgroundColor = "#daf9db"
}

function validaCEP(e) {
return cep = e.value, cep = cep.replace(/[^\d]+/g, ""), 8 != cep.length ? e.style.backgroundColor = "#ffcece" : e.style.backgroundColor = ""
}

function validaEndereco() {
var e = $("#objIdent").val();
"" == document.getElementById("cliEndBairro" + e).value ? document.getElementById("cliEndBairro" + e).style.backgroundColor = "#ffcece" : document.getElementById("cliEndBairro" + e).style.backgroundColor = "", "" == document.getElementById("cliEndCidade" + e).value ? document.getElementById("cliEndCidade" + e).style.backgroundColor = "#ffcece" : document.getElementById("cliEndCidade" + e).style.backgroundColor = "", "" == document.getElementById("cliEndRua" + e).value ? document.getElementById("cliEndRua" + e).style.backgroundColor = "#ffcece" : document.getElementById("cliEndRua" + e).style.backgroundColor = ""
}

function pagamento() {
console.log("iniciando tentativa de pagamento"), console.log("setando cartao");
var e = "";
$("#frmPayDesktop input:radio[name=cartao]").each(function() {
    $(this).is(":checked") && (e = $(this).val())
});
var t = $("#frmPayDesktop #nome").val(),
    n = "";
if ($("#frmPayDesktop input:radio[name=parcela]").each(function() {
        $(this).is(":checked") && (n = $(this).val())
    }), "" == e) return !0, $("#frmPayDesktop .no-autorized").html("Selecione a bandeira do cartÃ£o."), $("#frmPayDesktop .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayDesktop .no-autorized").fadeOut()
}, 5e3);
if (t.length < 3) return !0, $("#frmPayDesktop .no-autorized").html("Informe o nome impresso no cartÃ£o."), $("#frmPayDesktop .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayDesktop .no-autorized").fadeOut()
}, 5e3);
if ("" == $("#frmPay #numero").val()) return !0, $("#frmPayDesktop .no-autorized").html("Informe o numero do cartÃ£o."), $("#frmPayDesktop .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayDesktop .no-autorized").fadeOut()
}, 5e3);
if ("01" == $("#mes").val() && "2016" == $("#ano").val()) return !0, $("#frmPayDesktop .no-autorized").html("Preencha a data de vencimento do cartÃ£o."), $("#frmPayDesktop .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayDesktop .no-autorized").fadeOut()
}, 5e3);
if ("" == $("#frmPay #codigo").val()) return !0, $("#frmPayDesktop .no-autorized").html("Informe o cÃ³digo de seguranÃ§a."), $("#frmPayDesktop .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayDesktop .no-autorized").fadeOut()
}, 5e3);
if ("" == n) return !0, $("#frmPayDesktop .no-autorized").html("Informe o parcelamento."), $("#frmPayDesktop .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayDesktop .no-autorized").fadeOut()
}, 5e3);
$("#frmPayDekstop .confirmar-cartao").fadeOut("fast"), $("#frmPayDekstop .confirmar-cartao-2").fadeIn("fast");
var i = jQuery("#frmPayDekstop").serialize();
jQuery.ajax({
    type: "POST",
    url: "_mundipagg/pagamentoCompleto.php",
    data: i,
    datatype: "json",
    cache: !1,
    success: function(e) {
        e = $.parseJSON(e), console.log(e), 1 == e.status || 31 == e.status ? (document.form1.sPayStatus.value = 1, document.form1.submit()) : ($("#frmPayDesktop .confirmar-cartao-2").fadeOut("fast"), $("#frmPayDesktop .confirmar-cartao").fadeIn("fast"), $("#frmPayDesktop .no-autorized").html(e.retornoTexto), $("#frmPayDesktop .no-autorized").fadeIn("fast"), setTimeout(function() {
            $("#frmPayDesktop .no-autorized").fadeOut()
        }, 1e4))
    },
    error: function(e) {
        $("#frmPayDesktop .confirmar-cartao-2").fadeOut("fast"), $("#frmPayDesktop .confirmar-cartao").fadeIn("fast"), $("#frmPayDesktop .no-autorized").html("Ocorreu um erro. Tente novamente."), $("#frmPayDesktop .no-autorized").fadeIn("fast"), setTimeout(function() {
            $("#frmPayDesktop .no-autorized").fadeOut()
        }, 1e4)
    }
})
}

function pagamentoMobile() {
console.log("iniciando tentativa de pagamento mobile"), console.log("setando cartao mobile");
var e = "";
$("#frmPayMobile input:radio[name=cartao]").each(function() {
    $(this).is(":checked") && (e = $(this).val())
});
var t = $("#frmPayMobile #nome").val(),
    n = "";
if ($("#frmPayMobile input:radio[name=parcela]").each(function() {
        $(this).is(":checked") && (n = $(this).val())
    }), "" == e) return !0, $("#frmPayMobile .no-autorized").html("Selecione a bandeira do cartÃ£o."), $("#frmPayMobile .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayMobile .no-autorized").fadeOut()
}, 8e3);
if (t.length < 3) return !0, $("#frmPayMobile .no-autorized").html("Informe o nome impresso no cartÃ£o."), $("#frmPayMobile .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $(".no-autorized").fadeOut()
}, 8e3);
if ("" == $("#frmPayMobile #numero").val()) return !0, $("#frmPayMobile .no-autorized").html("Informe o numero do cartÃ£o."), $("#frmPayMobile .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $(".no-autorized").fadeOut()
}, 8e3);
if ("01" == $("#frmPayMobile #mes").val() && "2016" == $("#ano").val()) return !0, $("#frmPayMobile .no-autorized").html("Preencha a data de vencimento do cartÃ£o."), $("#frmPayMobile .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayMobile .no-autorized").fadeOut()
}, 8e3);
if ("" == $("#frmPayMobile #codigo").val()) return !0, $("#frmPayMobile .no-autorized").html("Informe o cÃ³digo de seguranÃ§a."), $("#frmPayMobile .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayMobile .no-autorized").fadeOut()
}, 8e3);
if ("" == n) return !0, $("#frmPayMobile .no-autorized").html("Informe o parcelamento."), $("#frmPayMobile .no-autorized").fadeIn("fast"), void setTimeout(function() {
    $("#frmPayMobile .no-autorized").fadeOut()
}, 8e3);
$("#btn-pm").fadeOut("fast"), $("#btn-pm2").fadeIn("fast");
var i = jQuery("#frmPayMobile").serialize();
jQuery.ajax({
    type: "POST",
    url: "_mundipagg/pagamentoCompleto.php",
    data: i,
    datatype: "json",
    cache: !1,
    success: function(e) {
        e = $.parseJSON(e), console.log(e), 1 == e.status || 31 == e.status ? (document.form1.sPayStatus.value = 1, document.form1.submit()) : ($("#btn-pm2").fadeOut("fast"), $("#btn-pm").fadeIn("fast"), $("#frmPayMobile .no-autorized").html(e.retornoTexto), $("#frmPayMobile .no-autorized").fadeIn("fast"), setTimeout(function() {
            $("#frmPayMobile .no-autorized").fadeOut()
        }, 1e4))
    },
    error: function(e) {
        $("#btn-pm2").fadeOut("fast"), $("#btn-pm").fadeIn("fast"), $("#frmPayMobile .no-autorized").html("Ocorreu um erro. Tente novamente."), $("#frmPayMobile .no-autorized").fadeIn("fast"), setTimeout(function() {
            $("#frmPayMobile .no-autorized").fadeOut()
        }, 1e4)
    }
}), $("#sobre").length && $("#sobre a").click(function(e) {
    e.preventDefault(), $(this).tab("show")
})
}

function gerarBoleto(e) {
window.open("boleto/pedido/" + e, "janela", "width=700, height=800, scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no"), document.form1.boleto.value = 1, document.form1.submit()
}

function addtocart(e, t) {
document.form1.prodId.value = e, document.form1.prodId2.value = t, document.form1.command.value = "add", document.form1.submit()
}

function del(e) {
document.form1.pid.value = e, document.form1.command.value = "delete", document.form1.submit()
}

function clear_cart() {
document.form1.command.value = "clear", document.form1.submit()
}

function update_cart() {
document.form1.command.value = "update", document.form1.submit()
}

function checkCupom() {
document.form1.command.value = "cupom", document.form1.submit()
}! function(e) {
var i = /iPhone/i,
    o = /iPod/i,
    s = /iPad/i,
    r = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
    a = /Android/i,
    l = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
    c = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
    u = /IEMobile/i,
    d = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
    h = /BlackBerry/i,
    p = /BB10/i,
    f = /Opera Mini/i,
    m = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
    g = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
    v = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
    y = function(e, t) {
        return e.test(t)
    },
    t = function(e) {
        var t = e || navigator.userAgent,
            n = t.split("[FBAN");
        return void 0 !== n[1] && (t = n[0]), void 0 !== (n = t.split("Twitter"))[1] && (t = n[0]), this.apple = {
            phone: y(i, t),
            ipod: y(o, t),
            tablet: !y(i, t) && y(s, t),
            device: y(i, t) || y(o, t) || y(s, t)
        }, this.amazon = {
            phone: y(l, t),
            tablet: !y(l, t) && y(c, t),
            device: y(l, t) || y(c, t)
        }, this.android = {
            phone: y(l, t) || y(r, t),
            tablet: !y(l, t) && !y(r, t) && (y(c, t) || y(a, t)),
            device: y(l, t) || y(c, t) || y(r, t) || y(a, t)
        }, this.windows = {
            phone: y(u, t),
            tablet: y(d, t),
            device: y(u, t) || y(d, t)
        }, this.other = {
            blackberry: y(h, t),
            blackberry10: y(p, t),
            opera: y(f, t),
            firefox: y(g, t),
            chrome: y(m, t),
            device: y(h, t) || y(p, t) || y(f, t) || y(g, t) || y(m, t)
        }, this.seven_inch = y(v, t), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window ? this : void 0
    },
    n = function() {
        var e = new t;
        return e.Class = t, e
    };
"undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = t : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = n() : "function" == typeof define && define.amd ? define("isMobile", [], e.isMobile = n()) : e.isMobile = n()
}(this), $(document).ready(function() {
var o = function(e) {
        return 11 === e.replace(/\D/g, "").length ? "(00) 00000-0000" : "(00) 0000-00009"
    },
    e = {
        onKeyPress: function(e, t, n, i) {
            n.mask(o.apply({}, arguments), i)
        }
    };
if ($("#teLigaNumero").mask(o, e), $("#preencherTeLiga").on("click", function() {
        $(".te-liga-collapse").fadeIn(), $("#preencherTeLiga").hide()
    }), $("#submitTeLiga").on("click", function() {
        var e = {
            nome: $("#teLigaNome").val(),
            numero: $("#teLigaNumero").val(),
            cod_curso: $("#cod_curso").val(),
            nome_curso: $("#nome_curso").val()
        };
        $.ajax({
            url: "ajaxSanarTeLiga.php",
            type: "POST",
            cache: !1,
            data: e,
            success: function(e) {
                $("#teLigaForm").hide(), $("#teLigaSucesso").show()
            },
            error: function(e) {
                console.log("erro"), console.log(e)
            }
        })
    }), $("#busca-sanar").BuscaSanar({
        query: $query
    }), $("#busca-sanar-mobile").BuscaSanar({
        query: $query
    }), $("#cliCPF").length && ($("#cliCPF").on("keyup", function() {
        validaCPF(document.getElementById("cliCPF"))
    }), validaCPF(document.getElementById("cliCPF"))), $("#cliEndCEP").length) {
    var t = $("#objIdent").val();
    $("#cliEndCEP").on("keyup", function() {
        validaCEP(document.getElementById("cliEndCEP"))
    }), $("#cliEndBairro" + t + ",#cliEndCidade" + t + ",#cliEndRua" + t).on("keyup", function() {
        validaEndereco()
    }), validaCEP(document.getElementById("cliEndCEP")), validaEndereco()
}
if ($("#footer-form .boxForm").length && ($("#footer-form .boxForm .btEnviar").click(function() {
        var e;
        "Seu nome" != $("#footer-form .boxForm .nome").val() ? "Seu e-mail" != $("#footer-form .boxForm .email").val() && (e = $("#footer-form .boxForm .email").val(), /^[\w!#$%&amp;'*+\/=?^`{|}~-]+(\.[\w!#$%&amp;'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/.test(e)) ? "" != $("#selectAssunto").val() ? "Sua mensagem" != $("#footer-form .boxForm .mensagem").val() ? $.ajax({
            url: "ajaxSendContato.php",
            type: "POST",
            cache: !1,
            data: {
                nome: $("#footer-form .boxForm .nome").val(),
                email: $("#footer-form .boxForm .email").val(),
                assunto: $("#selectAssunto").val(),
                mensagem: $("#footer-form .boxForm .mensagem").val()
            },
            success: function(e) {
                "Sucesso" == e ? ($("#footer-form .boxForm .boxSucesso .texto").html("Mensagem enviada."), $("#footer-form .boxForm .boxSucesso").fadeIn("fast"), setTimeout(function() {
                    $(".boxSucesso").fadeOut()
                }, 2500), $("#footer-form .boxForm .nome").val("Seu nome"), $("#footer-form .boxForm .email").val("Seu e-mail"), $("#selectAssunto").val(""), $("#footer-form .boxForm .mensagem").val("Sua mensagem")) : ($("#footer-form .boxForm .boxErro .texto").html("Ocorreu um erro. Tente novamente."), $("#footer-form .boxForm .boxErro").fadeIn("fast"), setTimeout(function() {
                    $(".boxErro").fadeOut()
                }, 2500))
            },
            error: function(e) {
                $("#footer-form .boxForm .boxErro .texto").html("Ocorreu um erro. Tente novamente."), $("#footer-form .boxForm .boxErro").fadeIn("fast"), setTimeout(function() {
                    $(".boxErro").fadeOut()
                }, 2500)
            }
        }) : ($(this).parent().find(".boxAlerta .texto").html("Digite a mensagem."), $(this).parent().find(".boxAlerta").fadeIn("fast"), setTimeout(function() {
            $(".boxAlerta").fadeOut()
        }, 2500)) : ($(this).parent().find(".boxAlerta .texto").html("Informe o assunto."), $(this).parent().find(".boxAlerta").fadeIn("fast"), setTimeout(function() {
            $(".boxAlerta").fadeOut()
        }, 2500)) : ($(this).parent().find(".boxAlerta .texto").html("Digite um e-mail vÃ¡lido."), $(this).parent().find(".boxAlerta").fadeIn("fast"), setTimeout(function() {
            $(".boxAlerta").fadeOut()
        }, 2500)) : ($(this).parent().find(".boxAlerta .texto").html("Digite seu nome."), $(this).parent().find(".boxAlerta").fadeIn("fast"), setTimeout(function() {
            $(".boxAlerta").fadeOut()
        }, 2500))
    }), $("#footer-form .boxForm .boxAviso .btOk").click(function() {
        $(this).parent().fadeOut("fast")
    })), $(".blog-listagem").length && $(".box-blog").length && !isMobile.any) {
    if (console.log("Barra Fixa no blog"), $(".blog-listagem").length) var n = $(".blog-listagem").height();
    else n = $(".box-blog").height();
    $("#coluna-blog, #mais-lidas").height(n), $("#livros-blog").stick_in_parent()
}
if ($(".barra-cinza").length) {
    function i() {
        $("body").width();
        var e = $("body").scrollTop();
        $(".barra-cinza").offset().top <= e ? ($(".barra-fixa").attr("style", "position:fixed; top: 40px !important"), $(".barra-fixa").slideDown(), $("#livros-blog").hasClass("is_stuck") && $("#livros-blog").css("margin-top", "97px")) : ($(".barra-fixa").slideUp(), $("#livros-blog").css("margin-top", "5px"))
    }
    $(window).on("resize scroll", i), i()
}

if ($("#tema-header-select").length && ($("#tema-header-select").select2({
        theme: "classic",
        minimumResultsForSearch: -1
    }), $("#tema-header-select").on("select2:select", function(e) {
        option = $("#tema-header-select").select2("data"), window.location.href = "blog/" + option[0].element.className
    })), $("#tema-header-select-fixo").length && ($("#tema-header-select-fixo").select2({
        theme: "classic",
        minimumResultsForSearch: -1
    }), $("#tema-header-select-fixo").on("select2:select", function(e) {
        option = $("#tema-header-select-fixo").select2("data"), window.location.href = "blog/" + option[0].element.className
    })), $("#btnCalcularFrete").length && (window.acidade, $("#btnCalcularFrete").click(function() {
        $("#btnCalcularFrete").hide(), $("#btnLoadFrete").show();
        var e = $(".campo-frete").val(),
            t = "economico";
        $("#radio-3").is(":checked") ? t = "economico" : $("#radio-4").is(":checked") && (t = "rapido"), 5 < e.length && (jQuery.ajax({
            url: "../ajaxCEP.php",
            dataType: "json",
            type: "GET",
            cache: !1,
            data: {
                cep: e
            },
            success: function(e) {
                var t = e.logradouro + " " + e.bairro + "<br>";
                t = t + e.cidade + " " + e.uf, window.acidade = e.cidade, $("#endereco-frete").html(t)
            },
            error: function(e) {
                $(".total-frete").html("Erro"), $("#btnCalcularFrete").show(), $("#btnLoadFrete").hide()
            }
        }), jQuery.ajax({
            url: "/cart/valor-frete",
            dataType: "json",
            type: "GET",
            cache: !1,
            data: {
                cep: e,
                peso: $("#pesoTotal").val(),
                tipo: t,
                subTotal: $("#subTotal").val()
            },
            success: function(e) {
                1 == e.prazo ? $("#prazo").html("Prazo de entrega em atÃ© <br><strong>3 dias Ãºteis</strong>") : "economico" == t && "Salvador" == window.acidade ? $("#prazo").html("Prazo de entrega atÃ© <br><strong>5  dias Ãºteis (MOTOBOY)</strong>") : $("#prazo").html("Prazo de entrega <br><strong>" + e.prazo_descricao + "</strong>"), "GrÃ¡tis" == e.valor ? $("#valor-frete").html("GrÃ¡tis") : $("#valor-frete").html("R$ " + e.valor), $("#totalFrete").val(e.valor), $("#preco-final .centro").html(""), $("#preco-final .centro").html(e.total), $("#btnCalcularFrete").show(), $("#btnLoadFrete").hide()
            },
            error: function(e) {
                $("#valor-frete").html("Erro"), $("#btnCalcularFrete").show(), $("#btnLoadFrete").hide()
            }
        }))
    })), $(".menu-editoria").length && ($(".menu-editoria  a").click(function() {
        $(this).removeClass("normal").addClass("ativo"), $(".menu-editoria  a").removeClass("ativo").addClass("normal"), $(this).removeClass("normal").addClass("ativo")
    }), $(".aba:first").show(), $(".menu-editoria  a").click(function() {
        $(".aba").hide();
        var e = $(this).attr("href");
        return $(e).show(), !1
    })), $("#escolha-seguro").length && $("#escolha-seguro > a, #chamar-load2, #chamar-load3").on("click", function() {
        console.log("Chamando PagSeguro"), $(".registrando").show(), $.ajax({
            url: "_PagSeguroLibrary/createPaymentRequest.php",
            type: "GET",
            cache: !1,
            success: function(e) {
                console.log("Sucesso"), $(".registrando").hide(), PagSeguroLightbox({
                    code: e
                }, {
                    success: function(e) {
                        console.log("Compra feita"), document.form1.pedTransacao.value = e, document.form1.submit()
                    },
                    abort: function() {
                        console.log("Compra nao feita"), $(".registrando").hide()
                    }
                })
            },
            error: function(e, t, n) {
                console.log("Erro"), alert(n + "\n" + status + "\n" + e.statusText), $(".registrando").hide()
            }
        })
    }), $(".bt-recuperar-senha").length && ($(".bt-recuperar-senha").click(function() {
        "Seu e-mail" != $(".email").val() ? $.ajax({
            url: "ajaxLembrarSenha.php",
            type: "POST",
            cache: !1,
            data: {
                email: $(".email").val()
            },
            success: function(e) {
                "Sucesso" == e ? ($(".boxSucesso .texto").html("Nova senha enviada para seu e-mail!"), $(".boxSucesso").fadeIn("fast")) : ($(".boxErro .texto").html("Email nÃ£o cadastrado!"), $(".boxErro").fadeIn("fast"), setTimeout(function() {
                    $(".boxErro").fadeOut()
                }, 2e3))
            },
            error: function(e) {
                $(".boxErro .texto").html("Ocorreu um erro. Tente novamente."), $(".boxErro").fadeIn("fast"), setTimeout(function() {
                    $(".boxErro").fadeOut()
                }, 2500)
            }
        }) : ($(this).parent().find(".boxAlerta .texto").html("Digite um e-mail vÃƒÂ¡lido."), $(this).parent().find(".boxAlerta").fadeIn("fast"), setTimeout(function() {
            $(".boxAlerta").fadeOut()
        }, 2500))
    }), $(".boxAviso .btOk").click(function() {
        $(this).parent().fadeOut("fast")
    })), $("#banner-centro").length ? (console.log("achou banner centro"), $("#banner-centro").before('<div id="nav">').cycle({
        fx: "fade",
        timeout: 6600,
        speed: 800,
        pager: "#nav"
    })) : console.log("naaao achou banner centro"), $("#menuCategorias").length && ($(".categorias a, .home-post a, .box-autor").hover(function() {
        $(this).animate({
            opacity: .6
        })
    }, function() {
        $(this).animate({
            opacity: 1
        })
    }), $(".ativar").on("click", function() {
        $("#menuCategorias").show("slow"), $(this).hide(), $(".desativar").show("slow")
    }), $(".desativar").on("click", function() {
        $("#menuCategorias").hide("slow"), $(this).hide(), $(".ativar").show()
    })), $("#cliEndCEP").length) {
    t = $("#objIdent").val();
    $("#cliEndCEP").on("keyup", function() {
        var e = $("#cliEndCEP").cleanVal();
        8 == e.length && $.ajax({
            url: "ajaxCEP.php",
            dataType: "json",
            type: "GET",
            cache: !1,
            data: {
                cep: e
            },
            success: function(e) {
                "" == e.cep ? ($("#cepinvalido").fadeIn("fast"), $(".form-address").hide(), setTimeout(function() {
                    $("#cepinvalido").fadeOut()
                }, 2500)) : ($(".cliEndereco").prop("disabled", !1), $(".form-address").show(), logradouroTratado = e.logradouro.split(" - "), $("#cliEndRua" + t).val(logradouroTratado[0]), $("#cliEndBairro" + t).val(e.bairro), $("#cliEndCEP").val(e.cep), $("#cliEndCEP").unmask(), $("#cliEndCidade" + t).val(e.cidade), $("#cliEndUF" + t).val(e.uf), $("#cliEndCEP").mask("00000-000"), $("#cliEndNumero" + t).focus(), validaEndereco())
            },
            error: function(e) {}
        })
    });
    o = function(e) {
        return 11 === e.replace(/\D/g, "").length ? "(00) 00000-0000" : "(00) 0000-00009"
    }, e = {
        onKeyPress: function(e, t, n, i) {
            n.mask(o.apply({}, arguments), i)
        }
    };
    $("#cliTelefone").mask(o, e), $("#cliCPF").mask("000.000.000-00", {
        reverse: !0
    }), $("#cliEndCEP").mask("00000-000"), $("#checkboxDemo input[type=checkbox],#radioDemo input[type=radio]").prettyCheckboxes(), $(".inlineRadios input[type=radio]").prettyCheckboxes({
        display: "inline"
    })
}
}), $(document).ready(function() {
$("#config").click(function() {
    $("#confignav").slideToggle("normal")
})
}), $("#abrir_box").click(function() {
$("#cont_box").css("display", "block")
}), $("#cerrar_box").click(function() {
$("#cont_box").css("display", "none")
}), $(document).ready(function() {
$(".tabs-menu a").click(function(e) {
    e.preventDefault(), $(this).parent().addClass("current"), $(this).parent().siblings().removeClass("current");
    var t = $(this).attr("href");
    $(".tab-content").not(t).css("display", "none"), $(t).fadeIn()
})
});
var dropdown = document.querySelectorAll(".dropdown-faq"),
dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function(e) {
var t = e.querySelector('a[data-toggle="dropdown"]'),
    n = e.querySelector(".dropdown-menu-faq"),
    i = t.querySelector("i.icon-arrow");
t.onclick = function(e) {
    n.hasClass("show") ? (n.classList.remove("show"), n.classList.add("hide"), i.classList.remove("open"), i.classList.add("close")) : (n.classList.add("show"), n.classList.remove("hide"), i.classList.add("open"), i.classList.remove("close")), e.preventDefault()
}
}), Element.prototype.hasClass = function(e) {
return this.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(this.className)
}, $(document).ready(function() {
$(window).scroll(function() {
    if (995 < $(window).width() && void 0 !== $(".pagamento-curso").offset()) {
        var e = $(window).scrollTop(),
            t = ($(".pagamento-curso").offset().top, $(".rowBreakComprar").offset().top);
        $(window).height(), $(".pagamento-curso").height();
        102 < e && (e + $(".pagamento-curso").height() < t || e + 390 < t) ? ($(".pagamento-curso").attr("style", "position:sticky; top: 90px"), $(".prodNome").attr("style", "display:block;"), $(".video-curso").attr("style", "display:none"), $(".classificacao-curso").attr("style", "display:block")) : e < 102 ? ($(".prodNome").attr("style", "display:none;"), $(".pagamento-curso").attr("style", "position:absolute; top: 60px"), $(".video-curso").attr("style", "display:block"), $(".classificacao-curso").attr("style", "display:block")) : $(".pagamento-curso").attr("style", "position:absolute; top: " + (t - $(".pagamento-curso").height()) + "px")
    }
}), $(".act-more").on("click", function() {
    return $(".card-item, .more, .less").toggleClass("active"), !1
}), $(".act-more-prof").on("click", function() {
    $(".btn-more-prof").attr("class");
    return $(".btn-more-prof, .more-prof, .less-prof").toggleClass("active"), $(".profs").each(function() {
        $(this).toggleClass("rowProfIn in")
    }), !1
}), $(".tabs").click(function() {
    parseInt($(this).attr("data-tab")), $(this).attr("class");
    $(".tabs").each(function() {
        $(this).attr("class", $(this).attr("class").replace("tab-active", "tab-action"));
        var e = $(this).attr("data-content");
        $("#" + e).attr("style", "display:none")
    });
    var e = $(this).attr("data-content");
    $("#" + e).attr("style", "display:block"), $(this).attr("class", $(this).attr("class").replace("tab-action", "tab-active"))
}), $(".rowcurso").click(function() {
    var e = $(this).attr("id"),
        t = $("#lab-" + e).attr("class");
    $(".rowaula").each(function() {
        $(this).attr("style", "display:none");
        var e = $(this).attr("class").split("aula-");
        $("#lab-" + e[1]).attr("class", "demo-icon-editora icon-down-open"), $("#lab-" + e[1]).html("&#xe803;")
    }), "demo-icon-editora icon-down-open" == t ? ($(".aula-" + e).attr("style", "display:block"), $("#lab-" + e).attr("class", t.replace("open", "up")), $("#lab-" + e).html("&#xe80c;")) : ($(".aula-" + e).attr("style", "display:none"), $("#lab-" + e).attr("class", t.replace("up", "open")), $("#lab-" + e).html("&#xe803;"))
})
});
var numberOfStars = 5;
jQuery.fn.extend({
SetStars: function(e, t, n) {
    "undifined" == typeof n && (n = 20);
    var o = document.createElementNS("http://www.w3.org/2000/svg", "path");
    for (o.setAttribute("d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"), i = 1; i < e + 1; i++) this.append("<span  val='" + i + "' class='starWrap'><svg class='star star" + n + "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' ></svg></span>"), i == e && t && $(this).find("[val]").each(function() {
        $(this).attr("val") <= t && $(this).addClass("active")
    }), $(this).find("svg").append(o)
}
}), $(".starRow.one.w20").SetStars(5, 5), $(".starRow.two.w20").SetStars(5, 4), $(".starRow.three.w20").SetStars(5, 3), $(".starRow.four.w20").SetStars(5, 2), $(".starRow.five.w20").SetStars(5, 1), $(".starRow.one.w30").SetStars(5, 5, 30), $(".starRow.two.w30").SetStars(5, 4, 30), $(".starRow.three.w30").SetStars(5, 3, 30), $(".starRow.four.w30").SetStars(5, 2, 30), $(".starRow.five.w30").SetStars(5, 1, 30), $(".starRow").each(function() {
$(this).next().andSelf().wrapAll('<div class="col-md-6 nopadding"/>')
});
var urlRedirect = "",
disabled = !0;

function verificarCaptcha(e) {
$.ajax({
    url: "/captchaVerify",
    data: {
        gRecaptchaResponse: e
    },
    type: "POST",
    dataType: "json",
    success: function(e) {
        1 == e.success ? (disabled = !1, $("#criarLog").prop("disabled", !1)) : disabled = !0
    }
})
}
$(document).ready(function() {
var e = !1;
$(".menu_btn").click(function() {
    0 == e && ($("#menu_smartphone").clearQueue().animate({
        left: "0px"
    }), $("#grey_back").fadeIn("fast"), $(this).fadeOut(200), $(".close").fadeIn(300), e = !0)
}), $("#grey_back").click(function() {
    1 == e && ($("#menu_smartphone").clearQueue().animate({
        left: "-570px"
    }), $("#page").clearQueue().animate({
        "margin-left": "0px"
    }), $("#grey_back").fadeOut("fast"), $(this).fadeOut(200), $(".menu_btn").fadeIn(300), e = !1)
}), $(".iconfirmacaocriar").keyup(function(e) {
    13 == e.keyCode && $("#criarLog").trigger("click")
}), $(".isenhacriar").keyup(function(e) {
    13 == e.keyCode && $("#criarLog").trigger("click")
}), $(".isenhaentrar").keyup(function(e) {
    13 == e.keyCode && $("#criarLogin").trigger("click")
}), $(".basic-slide").keyup(function(e) {
    13 == e.keyCode && (location.href = "/busca?s=" + $(this).val())
}), $("#criarLogin, #criarLog").click(function() {
    if ("criarLog" == $(this).attr("id") && disabled) {
        var e = $(".alertas").attr("class");
        return $(".alertas").attr("class", e + " alert-warning"), $(".alertas").html("Favor clicar no botÃ£o ao lado de: Eu nÃ£o sou um robÃ´ para validar o cadastro"), $(".alertas").attr("style", "display:block; text-align:center; min-height: 40px"), void setTimeout(function() {
            $(".alertas").attr("style", "display:none")
        }, 3e3)
    }
    var t = $(this).attr("data-action"),
        n = {
            senha: $(".isenha" + t).val(),
            email: $(".iemail" + t).val()
        };
    if ("criar" == t) {
        var i = $(".iconfirmacao" + t).val(),
            o = $(".iname" + t).val();
        n.confirmacao = i, n.name = o
    }
    $.ajax({
        url: "/login/redirect",
        async: !0,
        data: n,
        type: "GET",
        dataType: "json",
        success: function(e) {
            if ($(".alertas").attr("style", "display:none"), 1 == e.status) {
                var t = $(".alertas").attr("class");
                $(".alertas").attr("class", t + " alert-success"), $(".alertas").html("Login efetuado com sucesso"), $(".alertas").attr("style", "display:block; text-align:center; min-height: 40px"), setTimeout(function() {
                    "" == urlRedirect ? location.reload() : location.href = urlRedirect
                }, 1e3)
            } else {
                t = $(".alertas").attr("class");
                $(".alertas").attr("class", t + " alert-warning"), $(".alertas").html(e.mensagem), $(".alertas").attr("style", "display:block; text-align:center; min-height: 40px"), setTimeout(function() {
                    $(".alertas").attr("style", "display:none")
                }, 6e3)
            }
        }
    })
}), $("#abrirGratuitamente").click(function() {
    $("#modal-login").modal("hide"), $("#esqueciSenha").modal("hide"), $("#CriarConta").modal("show")
}), $(".voltarModal").click(function() {
    $("#CriarConta").modal("hide"), $("#esqueciSenha").modal("hide"), $("#modal-login").modal("show")
}), $("#btnEsqueciSenha").click(function() {
    $("#modal-login").modal("hide"), $("#CriarConta").modal("hide"), $("#esqueciSenha").modal("show")
}), $(".close").click(function() {
    $("#modal-login").modal("hide"), $("#CriarConta").modal("hide"), $("#esqueciSenha").modal("hide"), $("body").attr("style", "")
}), $(".click_face").click(function() {
    var e = $(this).attr("data-url");
    $.ajax({
        url: "/register_login.php?data-url=" + e,
        async: !0,
        success: function(e) {}
    })
})
}), $(document).ready(function() {
$("#dropdownMenuLogin").click(function() {
    $(".dropdown").attr("class", "dropdown open")
})
});
var index_triangle = "",
index_antigo = "",
pos_antiga = "";

function getAddress() {
jQuery.ajax({
    url: "/Pedidos/returnsAddressData",
    dataType: "json",
    type: "GET",
    cache: !1,
    success: function(e) {
        var t = document.getElementsByClassName("base-box");
        hideBoxElements(t), showBoxElement(t[3]);
        for (var n = document.getElementsByClassName("my-address-box")[0].getElementsByTagName("div")[0], i = n.getElementsByClassName("delivery-address"); i[0];) n.removeChild(i[0]);
        var o = document.createElement("div");
        o.setAttribute("class", "delivery-address");
        var s = document.createElement("hr");
        o.appendChild(s);
        for (var r = 0; r < e.length; r++) {
            var a = {
                    description1: "DestinatÃ¡rio:",
                    description2: "CEP:",
                    description3: "Rua:",
                    value1: e[r].cliNome,
                    value2: e[r].cliEndCEP,
                    value3: e[r].cliEndRua,
                    cliEndId: e[r].cliEndId,
                    principal: e[r].Principal
                },
                l = o.cloneNode(!1),
                c = document.createElement("p");
            c.innerHTML = "EndereÃ§o de Entrega " + (r + 1), l.insertBefore(c, l.firstChild), n.appendChild(l), factoryBaseBox(l, "main-address-box", a, !0)
        }
    },
    error: function(e) {
        console.log(e)
    }
})
}

function showCreateAddressForm() {
var e = document.getElementsByClassName("base-box");
hideBoxElements(e), showBoxElement(e[4]), clearAddressForm(), document.getElementsByClassName("hidden-box-address")[0].style.cssText = "display: none"
}

function createsAddress() {
var e = $(".form-address").serializeArray();
jQuery.ajax({
    url: "/novo-painel/criar-novo-endereco",
    dataType: "json",
    type: "POST",
    cache: !1,
    data: e,
    success: function(e) {
        if (e) return document.getElementsByClassName("fa fa-map-marker")[0].parentNode.click()
    },
    error: function(e) {
        console.log(e)
    }
})
}

function updatesAddress(e) {
var n = {};
$.each($(".form-address").serializeArray(), function(e, t) {
    n[t.name] = t.value
}), n.cliEndId = e, jQuery.ajax({
    url: "novo-painel/atualizar-endereco",
    dataType: "json",
    type: "POST",
    cache: !1,
    data: n,
    success: function(e) {
        if (e) return document.getElementsByClassName("fa fa-map-marker")[0].parentNode.click()
    },
    error: function(e) {
        console.log(e)
    }
})
}

function clearAddressForm() {
for (var e = document.getElementsByClassName("form-address")[0], t = e.getElementsByTagName("input"), n = 0; n < t.length; n++) t[n].value = "";
var i = document.getElementById("update-address");
i && e.parentNode.removeChild(i)
}

function editButtonAddress(e) {
jQuery.ajax({
    url: "/Usuario/returnsDataOfOneAddress",
    dataType: "json",
    type: "GET",
    cache: !1,
    data: {
        cliEndId: e
    },
    success: function(e) {
        var t = document.getElementsByClassName("base-box");
        hideBoxElements(t), showBoxElement(t[4]), fillBlankInputsAddress(e[0])
    },
    error: function(e) {
        console.log(e)
    }
})
}

function fillBlankInputsAddress(e) {
for (var t = document.getElementsByClassName("create-new-address")[0], n = t.getElementsByTagName("form")[0], i = n.getElementsByClassName("save-address"); i[0];) n.removeChild(i[0]);
var o = document.getElementById("update-address");
o && n.parentNode.removeChild(o), document.getElementsByClassName("hidden-box-address")[0].style.cssText = "display: block";
var s = t.getElementsByTagName("input");
s[0].value = e.cliEndCEP, s[1].value = e.cliEndRua, s[2].value = e.cliEndBairro, s[3].value = e.cliEndCidade, s[4].value = e.cliEndUF, s[5].value = e.cliEndNumero, s[6].value = e.cliEndComplemento;
var r = document.createElement("button");
r.setAttribute("class", "save-address"), r.setAttribute("type", "submit"), r.innerHTML = "Salvar", n.appendChild(r);
var a = document.createElement("p");
a.setAttribute("id", "update-address"), a.setAttribute("class", e.cliEndId), t.appendChild(a)
}

function updatesMainAddress(e) {
jQuery.ajax({
    url: "/novo-painel/atualizar-endereco-principal",
    dataType: "json",
    type: "POST",
    cache: !1,
    data: {
        cliEndId: e
    },
    success: function(e) {
        if (e) return document.getElementsByClassName("fa fa-map-marker")[0].parentNode.click()
    },
    error: function(e) {
        console.log(e)
    }
})
}

function deleteAddress(e) {
jQuery.ajax({
    url: "/novo-painel/deletar-endereco",
    dataType: "json",
    type: "POST",
    cache: !1,
    data: {
        cliEndId: e
    },
    success: function(e) {
        return closeModal(), e.error ? errorMessageForm(e.errors) : e ? document.getElementsByClassName("fa fa-map-marker")[0].parentNode.click() : void 0
    },
    error: function(e) {
        return closeModal(), document.getElementsByClassName("fa fa-map-marker")[0].parentNode.click()
    }
})
}

function showCustomerSuccessBox() {
var e = document.getElementsByClassName("base-box");
hideBoxElements(e), showBoxElement(e[6])
}

function toggleCustomerBox(e, t) {
e.parentNode.getElementsByClassName("hover-active-customer-box")[0].classList.remove("hover-active-customer-box"), e.classList.add("hover-active-customer-box"), document.getElementsByClassName("show-customer-box")[0].classList.remove("show-customer-box"), document.getElementsByClassName("customer-info")[t].classList.add("show-customer-box")
}

function showChat() {
return document.getElementsByClassName("src-component-Launcher-wrapper")[0].click()
}

function getDataMyAccount() {
jQuery.ajax({
    url: "/Pedidos/returnsDataMyAccount",
    dataType: "json",
    type: "GET",
    cache: !1,
    success: function(e) {
        var t = document.getElementsByClassName("base-box");
        hideBoxElements(t), showBoxElement(t[0]);
        var n = document.getElementsByClassName("orders-box")[0].getElementsByClassName("my-orders")[0];
        if (0 === e.length) {
            for (var i = document.getElementsByClassName("without-order"); i[0];) i[0].parentNode.removeChild(i[0]);
            var o = document.createElement("div");
            o.setAttribute("class", "without-order");
            var s = document.createElement("p");
            s.innerHTML = "Nenhum pedido foi encontrado nos Ãºltimos 3 meses";
            var r = document.createElement("button");
            r.innerHTML = "Ver todos os pedidos", r.setAttribute("onClick", "getListOfOrders()"), o.style.cssText = "display: block", o.appendChild(s), o.appendChild(r), n.appendChild(o)
        }
        clearBoxes();
        for (var a = 0; a < e.length; a++) createOrderInfo(e[a], n)
    },
    error: function(e) {
        console.log(e)
    }
})
}

function createOrderInfo(e, t) {
if ("month-history" === t.className && 0 != t.getElementsByClassName("order-info").length) {
    var n = document.createElement("hr");
    t.appendChild(n)
}
if ("my-orders" === t.className) {
    n = document.createElement("hr");
    t.appendChild(n)
}
var i = document.createElement("div");
i.setAttribute("class", "order-info");
var o = document.createElement("p");
o.innerHTML = e.prodName, 1 < e.totalItens && (o.innerHTML += " + " + (e.totalItens - 1)), i.appendChild(o), generateStatusBox(i, e.pedStatus);
var s = buildMiniBox("", "Pedido:", e.pedId),
    r = buildMiniBox("", "Itens:", e.totalItens),
    a = buildMiniBox("", "Entrega:", e.pedTipoFrete);
i.appendChild(s), i.appendChild(r), i.appendChild(a);
var l = document.createElement("button");
l.innerHTML = "Detalhes", l.setAttribute("onClick", "getOrderDetail(" + e.pedId + ", " + e.cliEndId + ", " + e.cliId + ");    getOrderItens(" + e.pedId + ")"), i.appendChild(l), t.appendChild(i)
}

function getAddressMyAccount() {
jQuery.ajax({
    url: "/Pedidos/returnsAddressData",
    dataType: "json",
    type: "GET",
    cache: !1,
    success: function(e) {
        var t = document.getElementsByClassName("orders-box")[0].getElementsByClassName("main-address")[0];
        factoryBaseBox(t, "main-address-box", {
            description1: "DestinatÃ¡rio:",
            description2: "CEP:",
            description3: "Rua:",
            value1: e[0].cliNome,
            value2: e[0].cliEndCEP,
            value3: e[0].cliEndRua
        });
        var n = document.createElement("button");
        n.setAttribute("onClick", "editButtonAddress(" + e[0].cliEndId + ")"), n.innerHTML = "Mudar EndereÃ§o", t.appendChild(n)
    },
    error: function(e) {
        console.log(e)
    }
})
}

function getPersonInfoAccount() {
jQuery.ajax({
    url: "/Usuario/returnsPersonAccountData",
    dataType: "json",
    type: "GET",
    cache: !1,
    success: function(e) {
        var t = document.getElementsByClassName("orders-box")[0].getElementsByClassName("account-data")[0];
        factoryBaseBox(t, "account-data-box", {
            description1: "Nome",
            description2: "Email",
            description3: "Telefone",
            value1: e[0].cliNome,
            value2: e[0].cliEmail,
            value3: e[0].cliTelefone
        });
        var n = document.createElement("button");
        n.setAttribute("onClick", "getMyData()"), n.innerHTML = "Atualizar Dados", t.appendChild(n)
    },
    error: function(e) {
        console.log(e)
    }
})
}

function getMyData() {
jQuery.ajax({
    url: "/Usuario/returnsPersonAccountData",
    dataType: "json",
    type: "GET",
    cache: !1,
    success: function(e) {
        var t = document.getElementsByClassName("base-box");
        hideBoxElements(t), showBoxElement(t[5]), fillBlankInputsMyData(e[0])
    },
    error: function(e) {
        console.log(e)
    }
})
}

function fillBlankInputsMyData(e) {
for (var t = document.getElementsByClassName("my-data")[0], n = t.getElementsByTagName("form")[0], i = n.getElementsByClassName("save-address"); i[0];) n.removeChild(i[0]);
var o = t.getElementsByTagName("input");
o[0].value = e.cliNome, o[2].value = e.cliCPF;
for (var s = n.getElementsByTagName("option"), r = 0; r < s.length; r++) s[r].value === e.cliProfissao && s[r].setAttribute("selected", "");
if (o[3].value = e.cliEmail, o[4].value = e.cliTelefone, e.cliDtNascimento) {
    var a = e.cliDtNascimento.split("-");
    o[5].value = a[2] + "/" + a[1] + "/" + a[0]
}
"M" === e.cliSexo ? o[6].setAttribute("checked", "") : "F" === e.cliSexo ? o[7].setAttribute("checked", "") : o[8].setAttribute("checked", ""), e.cliNews && o[9].setAttribute("checked", "");
var l = document.createElement("button");
l.setAttribute("class", "save-address"), l.innerHTML = "Salvar", n.appendChild(l)
}

function updatesMyData() {
var n = {};
$.each($(".form-my-data").serializeArray(), function(e, t) {
    n[t.name] = t.value
});
var e = n.cliCPF.replace(/[^0-9]/g, "");
n.cliCPF = e;
var t = n.cliDtNascimento;
t = t.split("/"), n.cliDtNascimento = t[2] + "-" + t[1] + "-" + t[0], jQuery.ajax({
    url: "/novo-painel/atualizar-dados-usuario",
    dataType: "json",
    type: "POST",
    cache: !1,
    data: n,
    success: function(e) {
        return e.error ? errorMessageForm(e.errors) : e ? (document.getElementsByClassName("profile-name")[0].textContent = n.cliNome, document.getElementsByClassName("fa fa-address-card")[0].parentNode.click()) : void 0
    },
    error: function(e) {
        console.log(e)
    }
})
}

function getOrderDetail(e, t) {
jQuery.ajax({
    url: "/Pedidos/returnsOrderDetail",
    dataType: "json",
    type: "GET",
    cache: !1,
    data: {
        pedId: e,
        cliEndId: t
    },
    success: function(e) {
        var t = document.getElementsByClassName("base-box");
        hideBoxElements(t), showBoxElement(t[2]), createOrderDetailHeader(e), buildTimeline(e[0].pedStatus), createOrderPaymentBoxHeader(e), createOrderPaymentBoxBody(e), createOrderAddressBox(e)
    },
    error: function(e) {
        console.log(e)
    }
})
}

function createOrderDetailHeader(e) {
var t = document.getElementsByClassName("order-details")[0],
    n = t.getElementsByClassName("product-tracking")[0];
t.removeChild(n);
var i = document.createElement("div");
i.setAttribute("class", "product-tracking"), t.insertBefore(i, t.firstChild);
var o = document.createElement("i");
o.setAttribute("class", "fa fa-angle-left"), o.setAttribute("aria-hidden", "true"), o.setAttribute("onClick", "getListOfOrders()"), i.appendChild(o), generateStatusBox(i, e[0].pedStatus);
var s = document.createElement("div"),
    r = document.createElement("p"),
    a = document.createElement("p");
if (r.innerHTML = "Pedido:", a.innerHTML = e[0].pedId, s.appendChild(r), s.appendChild(a), i.appendChild(s), "BOLETO" == e[0].pedPlatPagamento && "A" == e[0].pedStatus) {
    var l = document.createElement("div"),
        c = document.createElement("a"),
        u = "/boleto/link/" + e[0].pedId;
    c.setAttribute("href", u), c.setAttribute("target", "_blank"), c.setAttribute("class", "btn btn-info"), c.innerHTML = "Gerar 2Âª via do boleto", l.appendChild(c), i.appendChild(l)
}
var d = document.createElement("div"),
    h = document.createElement("p"),
    p = document.createElement("p"),
    f = document.createElement("a");
if (d.setAttribute("class", "tracking-code"), h.innerHTML = "CÃ³digo de Rastreio", f.innerHTML = "Rastrear Pedido", e[0].envCodRastreio && 1 == e[0].transpId) {
    p.innerHTML = e[0].envCodRastreio;
    var m = "http://www.linkcorreios.com.br/?id=" + e[0].envCodRastreio;
    f.setAttribute("href", m), f.setAttribute("target", "_blank")
} else e[0].envCodRastreio && 3 == e[0].transpId ? (p.innerHTML = e[0].envCodRastreio, f.setAttribute("href", "https://www.latamcargo.com/pt/e-tracking"), f.setAttribute("target", "_blank")) : (p.innerHTML = "XXX YYY", f.setAttribute("disabled", ""), f.style.cssText = "cursor: not-allowed", d.setAttribute("class", "hidden"));
d.appendChild(h), d.appendChild(p), d.appendChild(f), i.appendChild(d)
}

function buildTimeline(e) {
var t = document.getElementsByClassName("progress-timeline")[0],
    n = document.getElementsByClassName("timeline-steps")[0].getElementsByTagName("div");
switch (e) {
    case "F":
        t.style.width = "100%";
        for (var i = 0; i < n.length; i++) n[i].classList.remove("blue-before");
        for (i = 0; i < n.length; i++) n[i].classList.add("blue-before");
        break;
    case "E":
        t.style.width = "63%";
        for (i = 0; i < n.length; i++) n[i].classList.remove("blue-before");
        for (i = 0; i < n.length - 1; i++) n[i].classList.add("blue-before");
        break;
    case "P":
        t.style.width = "38%";
        for (i = 0; i < n.length; i++) n[i].classList.remove("blue-before");
        for (i = 0; i < n.length - 2; i++) n[i].classList.add("blue-before");
        break;
    case "A":
        t.style.width = "13%";
        for (i = 0; i < n.length; i++) n[i].classList.remove("blue-before");
        for (i = 0; i < n.length - 3; i++) n[i].classList.add("blue-before");
        break;
    default:
        t.style.width = "0%";
        for (i = 0; i < n.length; i++) n[i].classList.remove("blue-before")
}
}

function getOrderItens(e) {
jQuery.ajax({
    url: "/Pedidos/returnsOrderItens",
    dataType: "json",
    type: "GET",
    cache: !1,
    data: {
        pedId: e
    },
    success: function(e) {
        createProductInfo(e)
    },
    error: function(e) {
        console.log(e)
    }
})
}

function createProductInfo(e) {
for (var t = document.getElementsByClassName("product-details")[0], n = t.getElementsByClassName("product-info"), i = t.getElementsByTagName("hr"), o = t.parentNode.getElementsByClassName("alert-course")[0]; n[0];) t.removeChild(n[0]);
for (; i[0];) t.removeChild(i[0]);
for (var s = 0; s < e.length; s++) {
    var r = document.createElement("div");
    r.setAttribute("class", "product-info");
    var a = document.createElement("div");
    a.setAttribute("class", "product-img");
    var l = e[s].prodImagem.replace(" ", "%20");
    a.setAttribute("style", "background-image: url('https://53748h.ha.azioncdn.net/images/i225/" + l + "')");
    var c = document.createElement("div");
    c.setAttribute("class", "product-title-price");
    var u = document.createElement("p");
    u.innerHTML = e[s].prodTitulo;
    var d = document.createElement("p");
    d.innerHTML = e[s].prodTipo + " - " + e[s].pedIteQtd + " unidade(s) - R$ " + e[s].pedItePreco, c.appendChild(u), c.appendChild(d);
    var h = document.createElement("div");
    h.setAttribute("class", "delivery-details");
    var p = document.createElement("p");
    p.innerHTML = "Tipo de Frete", h.appendChild(p);
    var f = document.createElement("p");
    if ("curso" === e[s].prodTipo) {
        var m = document.createElement("button");
        m.innerHTML = "Acessar", h.appendChild(m), o.style.display = "block"
    } else "economico" === e[s].pedTipoFrete && "curso" != e[s].prodTipo ? (f.innerHTML = "Normal - 5 Ã  12 dias Ãºteis", h.appendChild(f), o.style.display = "none") : "rapido" === e[s].pedTipoFrete && "curso" != e[s].prodTipo && (f.innerHTML = "Sedex - 1 Ã  3 dias Ãºteis", h.appendChild(f), o.style.display = "none");
    if (r.appendChild(a), r.appendChild(c), r.appendChild(h), t.appendChild(r), 1 < e.length && s != e.length - 1) {
        var g = document.createElement("hr");
        t.appendChild(g)
    }
}
}

function createOrderPaymentBoxHeader(e) {
var t = document.getElementsByClassName("order-details")[0].getElementsByClassName("payment-method")[0],
    n = t.getElementsByClassName("payment-header")[0];
t.removeChild(n);
var i = document.createElement("div");
i.setAttribute("class", "payment-header");
var o = document.createElement("p");
o.innerHTML = "Forma de pagamento:";
var s = document.createElement("p");
s.innerHTML = "NÃºmero de parcelas:", i.appendChild(o), i.appendChild(s), t.insertBefore(i, t.firstChild);
var r = document.createElement("p");
e[0].pedTipoPagamento ? r.innerHTML = e[0].pedTipoPagamento : r.innerHTML = "Aguardando pagamento";
var a = document.createElement("p");
e[0].pedParcelas ? a.innerHTML = e[0].pedParcelas + "x s/juros" : a.innerHTML = "NÃ£o informado", i.appendChild(r), i.appendChild(a)
}

function createOrderPaymentBoxBody(e) {
var t = document.getElementsByClassName("order-details")[0].getElementsByClassName("payment-body")[0],
    n = t.getElementsByTagName("div")[1],
    i = t.getElementsByTagName("div")[2],
    o = t.getElementsByTagName("hr")[0];
t.removeChild(n), t.removeChild(i), t.removeChild(o);
var s = document.createElement("div"),
    r = document.createElement("p");
r.innerHTML = "...", s.appendChild(r);
var a = parseFloat(e[0].pedValor).toFixed(2),
    l = parseFloat(e[0].pedTotalFrete).toFixed(2),
    c = parseFloat(e[0].pedDesconto).toFixed(2),
    u = document.createElement("p"),
    d = document.createElement("p"),
    h = document.createElement("p");
u.innerHTML = "R$ " + a, d.innerHTML = "R$ " + l, h.innerHTML = "R$ " + c, s.appendChild(u), s.appendChild(d), s.appendChild(h), t.appendChild(s);
var p = document.createElement("hr");
t.appendChild(p);
var f = document.createElement("div"),
    m = document.createElement("p");
m.innerHTML = "Total", f.appendChild(m);
var g = document.createElement("p"),
    v = Number(parseFloat(e[0].pedValor) + parseFloat(e[0].pedTotalFrete) - parseFloat(e[0].pedDesconto)).toFixed(2);
g.innerHTML = "R$ " + v, f.appendChild(g), t.appendChild(f)
}

function createOrderAddressBox(e) {
for (var t = document.getElementsByClassName("order-details")[0], n = t.getElementsByClassName("delivery-address"); n[0];) t.removeChild(n[0]);
var i = document.createElement("div"),
    o = document.createElement("p"),
    s = document.createElement("hr");
i.setAttribute("class", "delivery-address"), o.innerHTML = "EndereÃ§o de Entrega ", i.appendChild(o), i.appendChild(s);
var r = {
        description1: "DestinatÃ¡rio:",
        description2: "CEP:",
        description3: "Rua:",
        value1: e[0].cliNome,
        value2: e[0].cliEndCEP,
        value3: e[0].cliEndRua
    },
    a = i.cloneNode(!0);
t.appendChild(a), factoryBaseBox(a, "main-address-box", r, !1)
}

function getListOfOrders() {
jQuery.ajax({
    url: "/Pedidos/returnsListOfOrders",
    dataType: "json",
    type: "GET",
    cache: !1,
    success: function(e) {
        var t = document.getElementsByClassName("base-box");
        hideBoxElements(t), showBoxElement(t[1]), clearBoxes(), createOrderDateBox(e)
    },
    error: function(e) {
        console.log(e)
    }
})
}

function createOrderDateBox(e) {
var t = document.getElementsByClassName("my-orders-box")[0].getElementsByClassName("monthly-orders")[0],
    n = "foo",
    i = document.createElement("div"),
    o = {
        January: "Janeiro",
        February: "Fevereiro",
        March: "MarÃ§o",
        April: "Abril",
        May: "Maio",
        June: "Junho",
        July: "Julho",
        August: "Agosto",
        September: "Setembro",
        October: "Outubro",
        November: "Novembro",
        December: "Dezembro"
    };
if (i.setAttribute("class", "month-history"), 0 == e.length) document.getElementsByClassName("empty-order-box")[0].style.cssText = "display: block";
else
    for (var s = 0; s < e.length; s++) {
        if (document.getElementsByClassName("empty-order-box")[0].style.cssText = "display: none", n != e[s].Month) {
            var r = (n = e[s].Month).split(","),
                a = document.createElement("p");
            a.setAttribute("class", "history-order-month"), a.innerHTML = o["" + r[0]] + ", " + r[1], t.appendChild(a);
            var l = i.cloneNode(!1);
            t.appendChild(l)
        }
        createOrderInfo(e[s], l)
    }
}

function profileName() {
jQuery.ajax({
    url: "/Usuario/returnsPersonAccountData",
    dataType: "json",
    type: "GET",
    cache: !1,
    success: function(e) {
        document.getElementsByClassName("profile-name")[0].innerHTML = e[0].cliNome
    },
    error: function(e) {
        console.log(e)
    }
})
}

function hideBoxElements(e) {
for (var t = 0; t < e.length; t++) e[t].style.cssText = "display: none", e[t].style.height = "0"
}

function showBoxElement(e) {
return e.style.cssText = "display: block", e.style.height = "auto"
}

function lateralMenuSelected(e) {
for (var t = document.getElementsByClassName("lateral-menu"), n = 0; n < t.length; n++) t[n].parentNode.classList.remove("menu-selected");
return e.classList.add("menu-selected")
}

function clearBoxes() {
for (var e = document.getElementsByClassName("orders-box")[0], t = e.getElementsByClassName("my-orders")[0], n = t.getElementsByClassName("order-info"); n[0];) t.removeChild(n[0]);
for (var i = t.getElementsByTagName("hr"); i[0];) t.removeChild(i[0]);
for (var o = e.getElementsByClassName("main-address")[0], s = o.getElementsByClassName("main-address-box"), r = e.getElementsByClassName("account-data")[0], a = r.getElementsByClassName("account-data-box"); s[0] && a[0];) o.removeChild(s[0]), r.removeChild(a[0]);
for (var l = o.getElementsByTagName("button"), c = r.getElementsByTagName("button"); l[0] && c[0];) o.removeChild(l[0]), r.removeChild(c[0]);
var u = document.getElementsByClassName("my-orders-box")[0].getElementsByClassName("monthly-orders")[0];
if (u.hasChildNodes())
    for (; u.hasChildNodes();) u.removeChild(u.lastChild)
}

function buildMiniBox(e, t, n) {
var i = document.createElement("div");
i.setAttribute("class", e);
var o = document.createElement("p");
o.innerHTML = t;
var s = document.createElement("p");
return s.innerHTML = n, i.appendChild(o), i.appendChild(s), i
}

function factoryBaseBox(e, t, n, i) {
var o = buildMiniBox(t, n.description1, n.value1),
    s = buildMiniBox(t, n.description2, n.value2),
    r = buildMiniBox(t, n.description3, n.value3);
if (e.appendChild(o), e.appendChild(s), e.appendChild(r), i) {
    var a = document.createElement("button");
    a.setAttribute("class", "edit-address-button"), a.innerHTML = "Editar", a.setAttribute("onClick", "editButtonAddress(" + n.cliEndId + ")");
    var l = document.createElement("button");
    l.setAttribute("onClick", "confirmDelete(" + n.cliEndId + ")"), l.innerHTML = "Excluir";
    var c = document.createElement("p");
    c.setAttribute("onClick", "updatesMainAddress(" + n.cliEndId + ")");
    var u = document.createElement("i");
    1 == n.principal ? (c.style.backgroundColor = "#41A7EB", c.innerHTML = "  EndereÃ§o principal", u.setAttribute("class", "fa fa-dot-circle-o")) : (c.innerHTML = "  Selecionar como principal", u.setAttribute("class", "fa fa-circle-o")), c.insertBefore(u, c.firstChild), e.appendChild(a), e.appendChild(l), e.appendChild(c)
}
}

function confirmDelete(e) {
var t = document.getElementsByClassName("overlay-modal")[0];
t.style.cssText = "display: block", t.style.height = "100%", t.getElementsByClassName("modal-show-error")[0].style.cssText = "display: none", t.getElementsByClassName("modal-confirm-delete")[0].style.cssText = "display: block", t.getElementsByTagName("button")[1].setAttribute("onClick", "deleteAddress(" + e + ")")
}

function closeModal() {
var e = document.getElementsByClassName("overlay-modal")[0];
e.style.cssText = "display: none", e.style.height = "0"
}

function errorMessageForm(e) {
for (var t in e)
    if (0 < e[t].length) {
        var n = document.getElementsByClassName("modal-show-error")[0];
        return n.getElementsByTagName("p")[0].innerHTML = e[t], n.parentNode.style.cssText = "display: block", n.style.cssText = "display: block"
    }
}

function generateStatusBox(e, t) {
var n = document.createElement("div");
switch (t) {
    case "F":
        n.setAttribute("class", "order-status-base"), n.innerHTML = "Finalizado";
        break;
    case "P":
        n.setAttribute("class", "order-status-base status-paid"), n.innerHTML = "Pago";
        break;
    case "E":
        n.setAttribute("class", "order-status-base status-sent"), n.innerHTML = "Enviado";
        break;
    case "R":
        n.setAttribute("class", "order-status-base status-cancel"), n.innerHTML = "Recusado";
        break;
    case "N":
        n.setAttribute("class", "order-status-base status-abandoned"), n.innerHTML = "Abandonado";
        break;
    case "C":
        n.setAttribute("class", "order-status-base status-cancel"), n.innerHTML = "Cancelado";
        break;
    case "A":
        n.setAttribute("class", "order-status-base status-waiting"), n.innerHTML = "Aguardando<br>Pagamento"
}
return e.appendChild(n)
}
$(document).ready(function() {
var i = $(".nav-subitens").attr("class");
$(".nav-hover").hover(function() {
    var e = parseInt($(this).attr("data-index")),
        t = $("#index-active").val();
    if (0 == index_antigo || 1 == index_antigo || 2 == index_antigo ? ($(".triangle-active").remove(), $(".nav-subitens").attr("style", "display:none"), $(".nav-" + index_triangle).attr("style", "display:none")) : "" != index_antigo && $(".nav-subitens").attr("style", "display:none"), index_hover = e, $(".triangle-active").each(function() {
            $(this).remove()
        }), 1 == e || 0 == e || 2 == e) {
        if ($(".nav-" + e).attr("style", "display: block"), 1 == e) {
            var n = i.replace(" livro", "").replace(" allProducts", "") + " curso";
            $(".nav-subitens").attr("class", n), $(this).append("<div class='triangle-active triangle-curso'></div>")
        } else if (0 == e) {
            n = i.replace(" curso", "").replace(" allProducts", "") + " livro";
            $(".nav-subitens").attr("class", n), $(this).append("<div class='triangle-active triangle-livro'></div>")
        } else {
            n = i.replace(" curso", "").replace(" livro", "") + " allProducts";
            $(".nav-subitens").attr("class", n), $(this).append("<div class='triangle-active triangle-allProducts'></div>")
        }
        $(".nav-subitens").attr("style", "display:block")
    }
    index_triangle = e, "" != t && t != e && $(".nav-" + t).attr("style", "display: none")
}), $(".nav-hover").mouseout(function() {
    index_antigo = index_triangle
}), $("nav").mouseout(function() {
    var e = $("#index-active").val(),
        t = $(".nav-subitens").attr("class");
    if ("" != e && 0 != index_triangle && 1 != index_triangle && 2 != index_triangle && (0 == e || 1 == e || 4 == e || 5 == e)) {
        if ($(".nav-" + e).attr("style", "display: block"), $(".nav-" + index_triangle).attr("style", "display:none"), $(".triangle-active").remove(), 1 == e) {
            var n = t.replace(" livro", "").replace(" allProducts", "") + " curso";
            $(".nav-subitens").attr("class", n), $(".nav-click-" + e).append("<div class='triangle-active triangle-curso'></div>")
        } else if (0 == e) {
            n = t.replace(" curso", "").replace(" allProducts", "") + " livro";
            $(".nav-subitens").attr("class", n), $(".nav-click-" + e).append("<div class='triangle-active triangle-livro'></div>")
        } else {
            n = t.replace(" curso", "").replace(" livro", "") + " allProducts";
            $(".nav-subitens").attr("class", n)
        }
        $(".nav-subitens").attr("style", "display:block"), $(".nav-" + e).attr("style", "display: block")
    }
}), $(".nav-subitens").mouseleave(function() {
    var e = $("#index-active").val();
    if ("" == e || 0 != e && 1 != e && 4 != e && 5 != e) $(".nav-subitens").attr("style", "display:none"), 0 != index_triangle && 1 != index_triangle || $(".triangle-active").remove();
    else {
        if ($(".nav-" + e).attr("style", "display: block"), $(".nav-" + index_triangle).attr("style", "display:none"), $(".triangle-active").remove(), 1 == e) {
            var t = i.replace(" livro", "").replace(" allProducts", "") + " curso";
            $(".nav-subitens").attr("class", t), $(".nav-click-" + e).append("<div class='triangle-active triangle-curso'></div>")
        } else if (0 == e) {
            t = i.replace(" curso", "").replace(" allProducts", "") + " livro";
            $(".nav-subitens").attr("class", t), $(".nav-click-" + e).append("<div class='triangle-active triangle-livro'></div>")
        } else {
            t = i.replace(" curso", "").replace(" livro", "") + " allProducts";
            $(".nav-subitens").attr("class", t)
        }
        $(".nav-subitens").attr("style", "display:block"), $(".nav-" + e).attr("style", "display: block")
    }
}), $(window).scroll(function() {
    if (!busca_active) {
        var e = $(window).scrollTop();
        "" != pos_antiga && e < pos_antiga ? $(".navbar-default").fadeIn() : "" != pos_antiga && pos_antiga <= e && 100 < e ? $(".navbar-default").fadeOut() : $(".navbar-default").fadeIn(), pos_antiga = e
    }
})
}), isMobile.any && (console.log("Barra Fixa no mobile"), $(document).ready(function() {
0 < $("#barra-compra").length && ($(".box-comprar-mobile").hide(), $(window).scroll(function() {
    724 < $("#barra-compra").offset().top ? $("#barra-compra").fadeIn() : $("#barra-compra").fadeOut()
}))
})), $(document).ready(function() {
console.log("Barra Fixa"), 1 < $(".leva-junto").length && $(".leva-junto:last").remove(), $("#comprar-livro").stick_in_parent({
    offset_top: 71
})
}), $(".form-address").submit(function(e) {
return e.preventDefault(), document.getElementById("update-address") ? updatesAddress($("#update-address").attr("class")) : createsAddress()
}), $("#cepMyPanel").on("change", function() {
var e = document.getElementById("cepMyPanel").value.replace(/[^0-9]/g, "");
8 == e.length && ($.ajax({
    url: "../cart/busca-cep/" + e,
    dataType: "json",
    type: "POST",
    cache: !1,
    data: {
        cep: e
    },
    success: function(e) {
        if (!e) {
            return errorMessageForm({
                msg: "O CEP informado nÃ£o Ã© vÃ¡lido"
            })
        }
        document.getElementById("ruaMyPanel").value = e.logradouro, document.getElementById("bairroMyPanel").value = e.bairro, document.getElementById("cidadeMyPanel").value = e.cidade, document.getElementById("ufMyPanel").value = e.estado, null != e.complemento && (document.getElementById("complementoMyPanel").value = e.complemento)
    },
    error: function(e) {
        console.log(e)
    }
}), $(".hidden-box-address").show())
}), $("#cepMyPanel").mask("99999-999", {
placeholder: "00000-000"
}), $(".form-my-data").submit(function(e) {
return e.preventDefault(), updatesMyData()
}), $("#cpfMyPanel").mask("999.999.999-99", {
placeholder: "000.000.000-00"
}), $("#telefoneMyPanel").mask("(99)99999-9999", {
placeholder: "(00)00000-0000"
}), $("#dataNascimentoMyPanel").mask("99/99/9999", {
placeholder: "00/00/0000"
}), $(document).ready(function() {
if (document.getElementById("my-painel-live")) {
    profileName(), getDataMyAccount(), getAddressMyAccount(), getPersonInfoAccount();
    for (var e = document.getElementsByClassName("lateral-menu"), t = 0; t < e.length; t++) e[t].parentNode.addEventListener("click", function(e) {
        lateralMenuSelected(e.target)
    });
    document.getElementsByTagName("body")[0].style.backgroundColor = "#F8F9F9"
} else document.getElementsByTagName("body")[0].style.backgroundColor = "#ffffff"
});

