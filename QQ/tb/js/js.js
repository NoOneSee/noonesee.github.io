!
function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t),
        i.l = !0,
        i.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    },
    t.n = function(e) {
        var n = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return t.d(n, "a", n),
        n
    },
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    t.p = "",
    t(t.s = 0)
} ([function(e, t, n) {
    n(1),
    n(12)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        var t = n(3),
        r = n.n(t),
        i = n(4),
        o = n.n(i),
        a = "https://qr.alipay.com/c1x03886tbpongddeka2faf",
        s = {
            isWeixin: function() {
                return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
            },
            isSjQQ: function() {
                return ! ("qq/" != navigator.userAgent.toLowerCase().match(/qq\//i) || !this.isMobile())
            },
            isAndroid: function() {
                var e = navigator.userAgent.toLowerCase();
                return e.indexOf("android") > -1 || e.indexOf("adr") > -1
            },
            isIphone: function() {
                return !! /(iphone|ipad|ipod|ios)/i.test(navigator.userAgent.toLowerCase())
            },
            isMobile: function() {
                return this.isAndroid() || this.isIphone()
            },
            isPc: function() {}
        };
        e(function() {
            if (s.isMobile()) {
                if (r.a.attach(document.body), e("body").click(function() {
                    new o.a("body", {
                        text: function(e) {
                            return "蹇潵棰嗗彇鏀粯瀹濊法骞寸孩鍖咃紒1鏈�1鏃ヨ捣杩樻湁鏈轰細棰濆鑾峰緱涓撲韩绾㈠寘鍝︼紒澶嶅埗姝ゆ秷鎭紝鎵撳紑鏈€鏂扮増鏀粯瀹濆氨鑳介鍙栵紒M5IIJz78hz"
                        }
                    })
                }), s.isWeixin()) return e(".modal-tip").css("height", e(window).height),
                void e(".modal-tip").show();
                if (s.isSjQQ()) return e(".modal-tip").css("height", e(window).height),
                e(".modal-tip").show(),
                void(void 0 !== mqq.ui.openUrl && mqq.ui.openUrl({
                    target: 2,
                    url: a
                }));
                setTimeout(function() {
                    window.location.href = a
                },
                500)
            }
            e("#wrapper-pc").removeClass("hide")
        })
    }.call(t, n(2))
},
function(e, t, n) {
    var r, i; !
    function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        }: n(t)
    } ("undefined" != typeof window ? window: this,
    function(n, o) {
        "use strict";
        function a(e, t) {
            t = t || ae;
            var n = t.createElement("script");
            n.text = e,
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        function s(e) {
            var t = !!e && "length" in e && e.length,
            n = ye.type(e);
            return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function u(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        function c(e, t, n) {
            return ye.isFunction(t) ? ye.grep(e,
            function(e, r) {
                return !! t.call(e, r, e) !== n
            }) : t.nodeType ? ye.grep(e,
            function(e) {
                return e === t !== n
            }) : "string" != typeof t ? ye.grep(e,
            function(e) {
                return fe.call(t, e) > -1 !== n
            }) : Ne.test(t) ? ye.filter(t, e, n) : (t = ye.filter(t, e), ye.grep(e,
            function(e) {
                return fe.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }
        function l(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        function f(e) {
            var t = {};
            return ye.each(e.match(Oe) || [],
            function(e, n) {
                t[n] = !0
            }),
            t
        }
        function p(e) {
            return e
        }
        function d(e) {
            throw e
        }
        function h(e, t, n, r) {
            var i;
            try {
                e && ye.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && ye.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch(e) {
                n.apply(void 0, [e])
            }
        }
        function g() {
            ae.removeEventListener("DOMContentLoaded", g),
            n.removeEventListener("load", g),
            ye.ready()
        }
        function m() {
            this.expando = ye.expando + m.uid++
        }
        function v(e) {
            return "true" === e || "false" !== e && ("null" === e ? null: e === +e + "" ? +e: We.test(e) ? JSON.parse(e) : e)
        }
        function y(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(_e, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = v(n)
                } catch(e) {}
                Ie.set(e, t, n)
            } else n = void 0;
            return n
        }
        function x(e, t, n, r) {
            var i, o = 1,
            a = 20,
            s = r ?
            function() {
                return r.cur()
            }: function() {
                return ye.css(e, t, "")
            },
            u = s(),
            c = n && n[3] || (ye.cssNumber[t] ? "": "px"),
            l = (ye.cssNumber[t] || "px" !== c && +u) && $e.exec(ye.css(e, t));
            if (l && l[3] !== c) {
                c = c || l[3],
                n = n || [],
                l = +u || 1;
                do {
                    o = o || ".5", l /= o, ye.style(e, t, l + c)
                } while ( o !== ( o = s () / u) && 1 !== o && --a)
            }
            return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)),
            i
        }
        function b(e) {
            var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Ye[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = ye.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ye[r] = i, i)
        }
        function w(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++) r = e[o],
            r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Re.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ze(r) && (i[o] = b(r))) : "none" !== n && (i[o] = "none", Re.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }
        function T(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && u(e, t) ? ye.merge([e], n) : n
        }
        function k(e, t) {
            for (var n = 0,
            r = e.length; n < r; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
        }
        function C(e, t, n, r, i) {
            for (var o, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === ye.type(o)) ye.merge(p, o.nodeType ? [o] : o);
            else if (Ke.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (Qe.exec(o) || ["", ""])[1].toLowerCase(), u = Je[s] || Je._default, a.innerHTML = u[1] + ye.htmlPrefilter(o) + u[2], l = u[0]; l--;) a = a.lastChild;
                ye.merge(p, a.childNodes),
                a = f.firstChild,
                a.textContent = ""
            } else p.push(t.createTextNode(o));
            for (f.textContent = "", d = 0; o = p[d++];) if (r && ye.inArray(o, r) > -1) i && i.push(o);
            else if (c = ye.contains(o.ownerDocument, o), a = T(f.appendChild(o), "script"), c && k(a), n) for (l = 0; o = a[l++];) Ge.test(o.type || "") && n.push(o);
            return f
        }
        function E() {
            return ! 0
        }
        function S() {
            return ! 1
        }
        function A() {
            try {
                return ae.activeElement
            } catch(e) {}
        }
        function N(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in t) N(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = S;
            else if (!i) return e;
            return 1 === o && (a = i, i = function(e) {
                return ye().off(e),
                a.apply(this, arguments)
            },
            i.guid = a.guid || (a.guid = ye.guid++)),
            e.each(function() {
                ye.event.add(this, t, i, r, n)
            })
        }
        function j(e, t) {
            return u(e, "table") && u(11 !== t.nodeType ? t: t.firstChild, "tr") ? ye(">tbody", e)[0] || e: e
        }
        function L(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function D(e) {
            var t = at.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function q(e, t) {
            var n, r, i, o, a, s, u, c;
            if (1 === t.nodeType) {
                if (Re.hasData(e) && (o = Re.access(e), a = Re.set(t, o), c = o.events)) {
                    delete a.handle,
                    a.events = {};
                    for (i in c) for (n = 0, r = c[i].length; n < r; n++) ye.event.add(t, i, c[i][n])
                }
                Ie.hasData(e) && (s = Ie.access(e), u = ye.extend({},
                s), Ie.set(t, u))
            }
        }
        function O(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ve.test(e.type) ? t.checked = e.checked: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function H(e, t, n, r) {
            t = ce.apply([], t);
            var i, o, s, u, c, l, f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = ye.isFunction(h);
            if (g || p > 1 && "string" == typeof h && !ve.checkClone && ot.test(h)) return e.each(function(i) {
                var o = e.eq(i);
                g && (t[0] = h.call(this, i, o.html())),
                H(o, t, n, r)
            });
            if (p && (i = C(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (s = ye.map(T(i, "script"), L), u = s.length; f < p; f++) c = i,
                f !== d && (c = ye.clone(c, !0, !0), u && ye.merge(s, T(c, "script"))),
                n.call(e[f], c, f);
                if (u) for (l = s[s.length - 1].ownerDocument, ye.map(s, D), f = 0; f < u; f++) c = s[f],
                Ge.test(c.type || "") && !Re.access(c, "globalEval") && ye.contains(l, c) && (c.src ? ye._evalUrl && ye._evalUrl(c.src) : a(c.textContent.replace(st, ""), l))
            }
            return e
        }
        function F(e, t, n) {
            for (var r, i = t ? ye.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ye.cleanData(T(r)),
            r.parentNode && (n && ye.contains(r.ownerDocument, r) && k(T(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        function M(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || lt(e),
            n && (a = n.getPropertyValue(t) || n[t], "" !== a || ye.contains(e.ownerDocument, e) || (a = ye.style(e, t)), !ve.pixelMarginRight() && ct.test(a) && ut.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)),
            void 0 !== a ? a + "": a
        }
        function P(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get: (this.get = t).apply(this, arguments)
                }
            }
        }
        function R(e) {
            if (e in mt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--;) if ((e = gt[n] + t) in mt) return e
        }
        function I(e) {
            var t = ye.cssProps[e];
            return t || (t = ye.cssProps[e] = R(e) || e),
            t
        }
        function W(e, t, n) {
            var r = $e.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function _(e, t, n, r, i) {
            var o, a = 0;
            for (o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)"margin" === n && (a += ye.css(e, n + Xe[o], !0, i)),
            r ? ("content" === n && (a -= ye.css(e, "padding" + Xe[o], !0, i)), "margin" !== n && (a -= ye.css(e, "border" + Xe[o] + "Width", !0, i))) : (a += ye.css(e, "padding" + Xe[o], !0, i), "padding" !== n && (a += ye.css(e, "border" + Xe[o] + "Width", !0, i)));
            return a
        }
        function B(e, t, n) {
            var r, i = lt(e),
            o = M(e, t, i),
            a = "border-box" === ye.css(e, "boxSizing", !1, i);
            return ct.test(o) ? o: (r = a && (ve.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + _(e, t, n || (a ? "border": "content"), r, i) + "px")
        }
        function $(e, t, n, r, i) {
            return new $.prototype.init(e, t, n, r, i)
        }
        function X() {
            yt && (!1 === ae.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(X) : n.setTimeout(X, ye.fx.interval), ye.fx.tick())
        }
        function z() {
            return n.setTimeout(function() {
                vt = void 0
            }),
            vt = ye.now()
        }
        function U(e, t) {
            var n, r = 0,
            i = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Xe[r],
            i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function Y(e, t, n) {
            for (var r, i = (G.tweeners[t] || []).concat(G.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
        }
        function V(e, t, n) {
            var r, i, o, a, s, u, c, l, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ze(e),
            m = Re.get(e, "fxshow");
            n.queue || (a = ye._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s()
            }), a.unqueued++, p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    ye.queue(e, "fx").length || a.empty.fire()
                })
            }));
            for (r in t) if (i = t[r], xt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide": "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0
                }
                d[r] = m && m[r] || ye.style(e, r)
            }
            if ((u = !ye.isEmptyObject(t)) || !ye.isEmptyObject(d)) {
                f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = m && m.display, null == c && (c = Re.get(e, "display")), l = ye.css(e, "display"), "none" === l && (c ? l = c: (w([e], !0), c = e.style.display || c, l = ye.css(e, "display"), w([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === ye.css(e, "float") && (u || (p.done(function() {
                    h.display = c
                }), null == c && (l = h.display, c = "none" === l ? "": l)), h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden", p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1;
                for (r in d) u || (m ? "hidden" in m && (g = m.hidden) : m = Re.access(e, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && w([e], !0), p.done(function() {
                    g || w([e]),
                    Re.remove(e, "fxshow");
                    for (r in d) ye.style(e, r, d[r])
                })),
                u = Y(g ? m[r] : 0, r, p),
                r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
            }
        }
        function Q(e, t) {
            var n, r, i, o, a;
            for (n in e) if (r = ye.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ye.cssHooks[r]) && "expand" in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
        }
        function G(e, t, n) {
            var r, i, o = 0,
            a = G.prefilters.length,
            s = ye.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return ! 1;
                for (var t = vt || z(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; a < u; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, n]),
                o < 1 && u ? n: (u || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: ye.extend({},
                t),
                opts: ye.extend(!0, {
                    specialEasing: {},
                    easing: ye.easing._default
                },
                n),
                originalProperties: t,
                originalOptions: n,
                startTime: vt || z(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ye.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0,
                    r = t ? c.tweens.length: 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                    this
                }
            }),
            l = c.props;
            for (Q(l, c.opts.specialEasing); o < a; o++) if (r = G.prefilters[o].call(c, e, l, c.opts)) return ye.isFunction(r.stop) && (ye._queueHooks(c.elem, c.opts.queue).stop = ye.proxy(r.stop, r)),
            r;
            return ye.map(l, Y, c),
            ye.isFunction(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            ye.fx.timer(ye.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c
        }
        function J(e) {
            return (e.match(Oe) || []).join(" ")
        }
        function K(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function Z(e, t, n, r) {
            var i;
            if (Array.isArray(t)) ye.each(t,
            function(t, i) {
                n || Lt.test(e) ? r(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t: "") + "]", i, n, r)
            });
            else if (n || "object" !== ye.type(t)) r(e, t);
            else for (i in t) Z(e + "[" + i + "]", t[i], n, r)
        }
        function ee(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                o = t.toLowerCase().match(Oe) || [];
                if (ye.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function te(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0,
                ye.each(e[s] || [],
                function(e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                }),
                u
            }
            var o = {},
            a = e === Bt;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }
        function ne(e, t) {
            var n, r, i = ye.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e: r || (r = {}))[n] = t[n]);
            return r && ye.extend(!0, e, r),
            e
        }
        function re(e, t, n) {
            for (var r, i, o, a, s = e.contents,
            u = e.dataTypes;
            "*" === u[0];) u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break
            }
            if (u[0] in n) o = u[0];
            else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    a || (a = i)
                }
                o = o || a
            }
            if (o) return o !== u[0] && u.unshift(o),
            n[o]
        }
        function ie(e, t, n, r) {
            var i, o, a, s, u, c = {},
            l = e.dataTypes.slice();
            if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u;
            else if ("*" !== u && u !== o) {
                if (! (a = c[u + " " + o] || c["* " + o])) for (i in c) if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) { ! 0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], l.unshift(s[1]));
                    break
                }
                if (!0 !== a) if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch(e) {
                    return {
                        state: "parsererror",
                        error: a ? e: "No conversion from " + u + " to " + o
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        var oe = [],
        ae = n.document,
        se = Object.getPrototypeOf,
        ue = oe.slice,
        ce = oe.concat,
        le = oe.push,
        fe = oe.indexOf,
        pe = {},
        de = pe.toString,
        he = pe.hasOwnProperty,
        ge = he.toString,
        me = ge.call(Object),
        ve = {},
        ye = function(e, t) {
            return new ye.fn.init(e, t)
        },
        xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        be = /^-ms-/,
        we = /-([a-z])/g,
        Te = function(e, t) {
            return t.toUpperCase()
        };
        ye.fn = ye.prototype = {
            jquery: "3.2.1",
            constructor: ye,
            length: 0,
            toArray: function() {
                return ue.call(this)
            },
            get: function(e) {
                return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = ye.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return ye.each(this, e)
            },
            map: function(e) {
                return this.pushStack(ye.map(this,
                function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ue.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(e) {
                var t = this.length,
                n = +e + (e < 0 ? t: 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: le,
            sort: oe.sort,
            splice: oe.splice
        },
        ye.extend = ye.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {},
            s++), "object" == typeof a || ye.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t],
            r = e[t],
            a !== r && (c && r && (ye.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n: []) : o = n && ye.isPlainObject(n) ? n: {},
            a[t] = ye.extend(c, o, r)) : void 0 !== r && (a[t] = r));
            return a
        },
        ye.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ye.type(e)
            },
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = ye.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return ! (!e || "[object Object]" !== de.call(e) || (t = se(e)) && ("function" != typeof(n = he.call(t, "constructor") && t.constructor) || ge.call(n) !== me))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return ! 1;
                return ! 0
            },
            type: function(e) {
                return null == e ? e + "": "object" == typeof e || "function" == typeof e ? pe[de.call(e)] || "object": typeof e
            },
            globalEval: function(e) {
                a(e)
            },
            camelCase: function(e) {
                return e.replace(be, "ms-").replace(we, Te)
            },
            each: function(e, t) {
                var n, r = 0;
                if (s(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "": (e + "").replace(xe, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : fe.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length,
                r = 0,
                i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) ! t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                a = [];
                if (s(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return ce.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), ye.isFunction(e)) return r = ue.call(arguments, 2),
                i = function() {
                    return e.apply(t || this, r.concat(ue.call(arguments)))
                },
                i.guid = e.guid = e.guid || ye.guid++,
                i
            },
            now: Date.now,
            support: ve
        }),
        "function" == typeof Symbol && (ye.fn[Symbol.iterator] = oe[Symbol.iterator]),
        ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e, t) {
            pe["[object " + t + "]"] = t.toLowerCase()
        });
        var ke = function(e) {
            function t(e, t, n, r) {
                var i, o, a, s, u, l, p, d = t && t.ownerDocument,
                h = t ? t.nodeType: 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!r && ((t ? t.ownerDocument || t: I) !== D && L(t), t = t || D, O)) {
                    if (11 !== h && (u = ge.exec(e))) if (i = u[1]) {
                        if (9 === h) {
                            if (! (a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a),
                            n
                        } else if (d && (a = d.getElementById(i)) && P(t, a) && a.id === i) return n.push(a),
                        n
                    } else {
                        if (u[2]) return G.apply(n, t.getElementsByTagName(e)),
                        n;
                        if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(i)),
                        n
                    }
                    if (b.qsa && !X[e + " "] && (!H || !H.test(e))) {
                        if (1 !== h) d = t,
                        p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = R), l = C(e), o = l.length; o--;) l[o] = "#" + s + " " + f(l[o]);
                            p = l.join(","),
                            d = me.test(e) && c(t.parentNode) || t
                        }
                        if (p) try {
                            return G.apply(n, d.querySelectorAll(p)),
                            n
                        } catch(e) {} finally {
                            s === R && t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(oe, "$1"), t, n, r)
            }
            function n() {
                function e(n, r) {
                    return t.push(n + " ") > w.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
                }
                var t = [];
                return e
            }
            function r(e) {
                return e[R] = !0,
                e
            }
            function i(e) {
                var t = D.createElement("fieldset");
                try {
                    return !! e(t)
                } catch(e) {
                    return ! 1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function o(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
            }
            function a(e, t) {
                var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                return e ? 1 : -1
            }
            function s(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e: t.disabled === e: t.isDisabled === e || t.isDisabled !== !e && Te(t) === e: t.disabled === e: "label" in t && t.disabled === e
                }
            }
            function u(e) {
                return r(function(t) {
                    return t = +t,
                    r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function c(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            function l() {}
            function f(e) {
                for (var t = 0,
                n = e.length,
                r = ""; t < n; t++) r += e[t].value;
                return r
            }
            function p(e, t, n) {
                var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = _++;
                return t.first ?
                function(t, n, i) {
                    for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                    return ! 1
                }: function(t, n, u) {
                    var c, l, f, p = [W, s];
                    if (u) {
                        for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, u)) return ! 0
                    } else for (; t = t[r];) if (1 === t.nodeType || a) if (f = t[R] || (t[R] = {}), l = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                    else {
                        if ((c = l[o]) && c[0] === W && c[1] === s) return p[2] = c[2];
                        if (l[o] = p, p[2] = e(t, n, u)) return ! 0
                    }
                    return ! 1
                }
            }
            function d(e) {
                return e.length > 1 ?
                function(t, n, r) {
                    for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                    return ! 0
                }: e[0]
            }
            function h(e, n, r) {
                for (var i = 0,
                o = n.length; i < o; i++) t(e, n[i], r);
                return r
            }
            function g(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
                return a
            }
            function m(e, t, n, i, o, a) {
                return i && !i[R] && (i = m(i)),
                o && !o[R] && (o = m(o, a)),
                r(function(r, a, s, u) {
                    var c, l, f, p = [],
                    d = [],
                    m = a.length,
                    v = r || h(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v: g(v, p, e, s, u),
                    x = n ? o || (r ? e: m || i) ? [] : a: y;
                    if (n && n(y, x, s, u), i) for (c = g(x, d), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && (x[d[l]] = !(y[d[l]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [], l = x.length; l--;)(f = x[l]) && c.push(y[l] = f);
                                o(null, x = [], c, u)
                            }
                            for (l = x.length; l--;)(f = x[l]) && (c = o ? K(r, f) : p[l]) > -1 && (r[c] = !(a[c] = f))
                        }
                    } else x = g(x === a ? x.splice(m, x.length) : x),
                    o ? o(null, a, x, u) : G.apply(a, x)
                })
            }
            function v(e) {
                for (var t, n, r, i = e.length,
                o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                    return e === t
                },
                a, !0), c = p(function(e) {
                    return K(t, e) > -1
                },
                a, !0), l = [function(e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                    return t = null,
                    i
                }]; s < i; s++) if (n = w.relative[e[s].type]) l = [p(d(l), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (r = ++s; r < i && !w.relative[e[r].type]; r++);
                        return m(s > 1 && d(l), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*": ""
                        })).replace(oe, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && f(e))
                    }
                    l.push(n)
                }
                return d(l)
            }
            function y(e, n) {
                var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, c) {
                    var l, f, p, d = 0,
                    h = "0",
                    m = r && [],
                    v = [],
                    y = A,
                    x = r || o && w.find.TAG("*", c),
                    b = W += null == y ? 1 : Math.random() || .1,
                    T = x.length;
                    for (c && (A = a === D || a || c); h !== T && null != (l = x[h]); h++) {
                        if (o && l) {
                            for (f = 0, a || l.ownerDocument === D || (L(l), s = !O); p = e[f++];) if (p(l, a || D, s)) {
                                u.push(l);
                                break
                            }
                            c && (W = b)
                        }
                        i && ((l = !p && l) && d--, r && m.push(l))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(m, v, a, s);
                        if (r) {
                            if (d > 0) for (; h--;) m[h] || v[h] || (v[h] = V.call(u));
                            v = g(v)
                        }
                        G.apply(u, v),
                        c && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return c && (W = b, A = y),
                    m
                };
                return i ? r(a) : a
            }
            var x, b, w, T, k, C, E, S, A, N, j, L, D, q, O, H, F, M, P, R = "sizzle" + 1 * new Date,
            I = e.document,
            W = 0,
            _ = 0,
            B = n(),
            $ = n(),
            X = n(),
            z = function(e, t) {
                return e === t && (j = !0),
                0
            },
            U = {}.hasOwnProperty,
            Y = [],
            V = Y.pop,
            Q = Y.push,
            G = Y.push,
            J = Y.slice,
            K = function(e, t) {
                for (var n = 0,
                r = e.length; n < r; n++) if (e[n] === t) return n;
                return - 1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(re),
            le = new RegExp("^" + te + "$"),
            fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            de = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t: r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            be = function(e, t) {
                return t ? "\0" === e ? "锟�": e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ": "\\" + e
            },
            we = function() {
                L()
            },
            Te = p(function(e) {
                return ! 0 === e.disabled && ("form" in e || "label" in e)
            },
            {
                dir: "parentNode",
                next: "legend"
            });
            try {
                G.apply(Y = J.call(I.childNodes), I.childNodes),
                Y[I.childNodes.length].nodeType
            } catch(e) {
                G = {
                    apply: Y.length ?
                    function(e, t) {
                        Q.apply(e, J.call(t))
                    }: function(e, t) {
                        for (var n = e.length,
                        r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            b = t.support = {},
            k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !! t && "HTML" !== t.nodeName
            },
            L = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e: I;
                return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, q = D.documentElement, O = !k(D), I !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }), b.getElementsByTagName = i(function(e) {
                    return e.appendChild(D.createComment("")),
                    !e.getElementsByTagName("*").length
                }), b.getElementsByClassName = he.test(D.getElementsByClassName), b.getById = i(function(e) {
                    return q.appendChild(e).id = R,
                    !D.getElementsByName || !D.getElementsByName(R).length
                }), b.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(ve, ye);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                },
                w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && O) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (w.filter.ID = function(e) {
                    var t = e.replace(ve, ye);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                },
                w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && O) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), w.find.TAG = b.getElementsByTagName ?
                function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                }: function(e, t) {
                    var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                },
                w.find.CLASS = b.getElementsByClassName &&
                function(e, t) {
                    if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e)
                },
                F = [], H = [], (b.qsa = he.test(D.querySelectorAll)) && (i(function(e) {
                    q.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + Z + ")"),
                    e.querySelectorAll("[id~=" + R + "-]").length || H.push("~="),
                    e.querySelectorAll(":checked").length || H.push(":checked"),
                    e.querySelectorAll("a#" + R + "+*").length || H.push(".#.+[+~]")
                }), i(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = D.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"),
                    q.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    H.push(",.*:")
                })), (b.matchesSelector = he.test(M = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                    b.disconnectedMatch = M.call(e, "*"),
                    M.call(e, "[s!='']:x"),
                    F.push("!=", re)
                }), H = H.length && new RegExp(H.join("|")), F = F.length && new RegExp(F.join("|")), t = he.test(q.compareDocumentPosition), P = t || he.test(q.contains) ?
                function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement: e,
                    r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }: function(e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                    return ! 1
                },
                z = t ?
                function(e, t) {
                    if (e === t) return j = !0,
                    0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === I && P(I, e) ? -1 : t === D || t.ownerDocument === I && P(I, t) ? 1 : N ? K(N, e) - K(N, t) : 0 : 4 & n ? -1 : 1)
                }: function(e, t) {
                    if (e === t) return j = !0,
                    0;
                    var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                    if (!i || !o) return e === D ? -1 : t === D ? 1 : i ? -1 : o ? 1 : N ? K(N, e) - K(N, t) : 0;
                    if (i === o) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; s[r] === u[r];) r++;
                    return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0
                },
                D) : D
            },
            t.matches = function(e, n) {
                return t(e, null, null, n)
            },
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== D && L(e), n = n.replace(ue, "='$1']"), b.matchesSelector && O && !X[n + " "] && (!F || !F.test(n)) && (!H || !H.test(n))) try {
                    var r = M.call(e, n);
                    if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch(e) {}
                return t(n, D, null, [e]).length > 0
            },
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== D && L(e),
                P(e, t)
            },
            t.attr = function(e, t) { (e.ownerDocument || e) !== D && L(e);
                var n = w.attrHandle[t.toLowerCase()],
                r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== r ? r: b.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
            },
            t.escape = function(e) {
                return (e + "").replace(xe, be)
            },
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            },
            t.uniqueSort = function(e) {
                var t, n = [],
                r = 0,
                i = 0;
                if (j = !b.detectDuplicates, N = !b.sortStable && e.slice(0), e.sort(z), j) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return N = null,
                e
            },
            T = t.getText = function(e) {
                var t, n = "",
                r = 0,
                i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else for (; t = e[r++];) n += T(t);
                return n
            },
            w = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: fe,
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
                        return e[1] = e[1].replace(ve, ye),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ve, ye).toLowerCase();
                        return "*" === e ?
                        function() {
                            return ! 0
                        }: function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e,
                        function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n: !n || (o += "", "=" === n ? o === r: "!=" === n ? o !== r: "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice( - r.length) === r: "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice( - 4),
                        s = "of-type" === t;
                        return 1 === r && 0 === i ?
                        function(e) {
                            return !! e.parentNode
                        }: function(t, n, u) {
                            var c, l, f, p, d, h, g = o !== a ? "nextSibling": "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            x = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];) if (s ? p.nodeName.toLowerCase() === v: 1 === p.nodeType) return ! 1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return ! 0
                                }
                                if (h = [a ? m.firstChild: m.lastChild], a && y) {
                                    for (p = m, f = p[R] || (p[R] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], d = c[0] === W && c[1], x = d && c[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) if (1 === p.nodeType && ++x && p === t) {
                                        l[e] = [W, d, x];
                                        break
                                    }
                                } else if (y && (p = t, f = p[R] || (p[R] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], d = c[0] === W && c[1], x = d), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v: 1 !== p.nodeType) || !++x || (y && (f = p[R] || (p[R] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), l[e] = [W, x]), p !== t)););
                                return (x -= i) === r || x % r == 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, i = o(e, n), a = i.length; a--;) r = K(e, i[a]),
                            e[r] = !(t[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                        n = [],
                        i = E(e.replace(oe, "$1"));
                        return i[R] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e,
                            i(t, null, o, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(ve, ye),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function(e) {
                        return le.test(e || "") || t.error("unsupported lang: " + e),
                        e = e.replace(ve, ye).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = O ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while (( t = t . parentNode ) && 1 === t.nodeType);
                            return ! 1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === q
                    },
                    focus: function(e) {
                        return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                        return ! 0
                    },
                    parent: function(e) {
                        return ! w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return de.test(e.nodeName)
                    },
                    input: function(e) {
                        return pe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [n < 0 ? n + t: n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var r = n < 0 ? n + t: n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var r = n < 0 ? n + t: n; ++r < t;) e.push(r);
                        return e
                    })
                }
            },
            w.pseudos.nth = w.pseudos.eq;
            for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[x] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            } (x);
            for (x in {
                submit: !0,
                reset: !0
            }) w.pseudos[x] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            } (x);
            return l.prototype = w.filters = w.pseudos,
            w.setFilters = new l,
            C = t.tokenize = function(e, n) {
                var r, i, o, a, s, u, c, l = $[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (s = e, u = [], c = w.preFilter; s;) {
                    r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])),
                    r = !1,
                    (i = se.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(oe, " ")
                    }), s = s.slice(r.length));
                    for (a in w.filter) ! (i = fe[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length: s ? t.error(e) : $(e, u).slice(0)
            },
            E = t.compile = function(e, t) {
                var n, r = [],
                i = [],
                o = X[e + " "];
                if (!o) {
                    for (t || (t = C(e)), n = t.length; n--;) o = v(t[n]),
                    o[R] ? r.push(o) : i.push(o);
                    o = X(e, y(i, r)),
                    o.selector = e
                }
                return o
            },
            S = t.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e,
                p = !r && C(e = l.selector || e);
                if (n = n || [], 1 === p.length) {
                    if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && O && w.relative[o[1].type]) {
                        if (! (t = (w.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return n;
                        l && (t = t.parentNode),
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = fe.needsContext.test(e) ? 0 : o.length; i--&&(a = o[i], !w.relative[s = a.type]);) if ((u = w.find[s]) && (r = u(a.matches[0].replace(ve, ye), me.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && f(o))) return G.apply(n, r),
                        n;
                        break
                    }
                }
                return (l || E(e, p))(r, t, !O, n, !t || me.test(e) && c(t.parentNode) || t),
                n
            },
            b.sortStable = R.split("").sort(z).join("") === R,
            b.detectDuplicates = !!j,
            L(),
            b.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(D.createElement("fieldset"))
            }),
            i(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width",
            function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            b.attributes && i(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || o("value",
            function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }),
            i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(Z,
            function(e, t, n) {
                var r;
                if (!n) return ! 0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
            }),
            t
        } (n);
        ye.find = ke,
        ye.expr = ke.selectors,
        ye.expr[":"] = ye.expr.pseudos,
        ye.uniqueSort = ye.unique = ke.uniqueSort,
        ye.text = ke.getText,
        ye.isXMLDoc = ke.isXML,
        ye.contains = ke.contains,
        ye.escapeSelector = ke.escape;
        var Ce = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && ye(e).is(n)) break;
                r.push(e)
            }
            return r
        },
        Ee = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Se = ye.expr.match.needsContext,
        Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ne = /^.[^:#\[\.,]*$/;
        ye.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? ye.find.matchesSelector(r, e) ? [r] : [] : ye.find.matches(e, ye.grep(t,
            function(e) {
                return 1 === e.nodeType
            }))
        },
        ye.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                i = this;
                if ("string" != typeof e) return this.pushStack(ye(e).filter(function() {
                    for (t = 0; t < r; t++) if (ye.contains(i[t], this)) return ! 0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) ye.find(e, i[t], n);
                return r > 1 ? ye.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(c(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(c(this, e || [], !0))
            },
            is: function(e) {
                return !! c(this, "string" == typeof e && Se.test(e) ? ye(e) : e || [], !1).length
            }
        });
        var je, Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (ye.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || je, "string" == typeof e) {
                if (! (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Le.exec(e)) || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: ae, !0)), Ae.test(r[1]) && ye.isPlainObject(t)) for (r in t) ye.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = ae.getElementById(r[2]),
                i && (this[0] = i, this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ye.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ye) : ye.makeArray(e, this)
        }).prototype = ye.fn,
        je = ye(ae);
        var De = /^(?:parents|prev(?:Until|All))/,
        qe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ye.fn.extend({
            has: function(e) {
                var t = ye(e, this),
                n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++) if (ye.contains(this, t[e])) return ! 0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && ye(e);
                if (!Se.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? ye.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? fe.call(ye(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
            },
            add: function(e, t) {
                return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
            }
        }),
        ye.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t: null
            },
            parents: function(e) {
                return Ce(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Ce(e, "parentNode", n)
            },
            next: function(e) {
                return l(e, "nextSibling")
            },
            prev: function(e) {
                return l(e, "previousSibling")
            },
            nextAll: function(e) {
                return Ce(e, "nextSibling")
            },
            prevAll: function(e) {
                return Ce(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Ce(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Ce(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ee((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ee(e.firstChild)
            },
            contents: function(e) {
                return u(e, "iframe") ? e.contentDocument: (u(e, "template") && (e = e.content || e), ye.merge([], e.childNodes))
            }
        },
        function(e, t) {
            ye.fn[e] = function(n, r) {
                var i = ye.map(this, t, n);
                return "Until" !== e.slice( - 5) && (r = n),
                r && "string" == typeof r && (i = ye.filter(r, i)),
                this.length > 1 && (qe[e] || ye.uniqueSort(i), De.test(e) && i.reverse()),
                this.pushStack(i)
            }
        });
        var Oe = /[^\x20\t\r\n\f]+/g;
        ye.Callbacks = function(e) {
            e = "string" == typeof e ? f(e) : ye.extend({},
            e);
            var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) ! 1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1),
                t = !1,
                i && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)),
                    function t(n) {
                        ye.each(n,
                        function(n, r) {
                            ye.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== ye.type(r) && t(r)
                        })
                    } (arguments), n && !t && u()),
                    this
                },
                remove: function() {
                    return ye.each(arguments,
                    function(e, t) {
                        for (var n; (n = ye.inArray(t, o, n)) > -1;) o.splice(n, 1),
                        n <= s && s--
                    }),
                    this
                },
                has: function(e) {
                    return e ? ye.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []),
                    this
                },
                disable: function() {
                    return i = a = [],
                    o = n = "",
                    this
                },
                disabled: function() {
                    return ! o
                },
                lock: function() {
                    return i = a = [],
                    n || t || (o = n = ""),
                    this
                },
                locked: function() {
                    return !! i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !! r
                }
            };
            return c
        },
        ye.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", ye.Callbacks("memory"), ye.Callbacks("memory"), 2], ["resolve", "done", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return ye.Deferred(function(n) {
                            ye.each(t,
                            function(t, r) {
                                var i = ye.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(e, r, i) {
                        function o(e, t, r, i) {
                            return function() {
                                var s = this,
                                u = arguments,
                                c = function() {
                                    var n, c;
                                    if (! (e < a)) {
                                        if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                        c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        ye.isFunction(c) ? i ? c.call(n, o(a, t, p, i), o(a, t, d, i)) : (a++, c.call(n, o(a, t, p, i), o(a, t, d, i), o(a, t, p, t.notifyWith))) : (r !== p && (s = void 0, u = [n]), (i || t.resolveWith)(s, u))
                                    }
                                },
                                l = i ? c: function() {
                                    try {
                                        c()
                                    } catch(n) {
                                        ye.Deferred.exceptionHook && ye.Deferred.exceptionHook(n, l.stackTrace),
                                        e + 1 >= a && (r !== d && (s = void 0, u = [n]), t.rejectWith(s, u))
                                    }
                                };
                                e ? l() : (ye.Deferred.getStackHook && (l.stackTrace = ye.Deferred.getStackHook()), n.setTimeout(l))
                            }
                        }
                        var a = 0;
                        return ye.Deferred(function(n) {
                            t[0][3].add(o(0, n, ye.isFunction(i) ? i: p, n.notifyWith)),
                            t[1][3].add(o(0, n, ye.isFunction(e) ? e: p)),
                            t[2][3].add(o(0, n, ye.isFunction(r) ? r: d))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ye.extend(e, i) : i
                    }
                },
                o = {};
                return ye.each(t,
                function(e, n) {
                    var a = n[2],
                    s = n[5];
                    i[n[1]] = a.add,
                    s && a.add(function() {
                        r = s
                    },
                    t[3 - e][2].disable, t[0][2].lock),
                    a.add(n[3].fire),
                    o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                    },
                    o[n[0] + "With"] = a.fireWith
                }),
                i.promise(o),
                e && e.call(o, o),
                o
            },
            when: function(e) {
                var t = arguments.length,
                n = t,
                r = Array(n),
                i = ue.call(arguments),
                o = ye.Deferred(),
                a = function(e) {
                    return function(n) {
                        r[e] = this,
                        i[e] = arguments.length > 1 ? ue.call(arguments) : n,
                        --t || o.resolveWith(r, i)
                    }
                };
                if (t <= 1 && (h(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || ye.isFunction(i[n] && i[n].then))) return o.then();
                for (; n--;) h(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var He = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ye.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && He.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        },
        ye.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var Fe = ye.Deferred();
        ye.fn.ready = function(e) {
            return Fe.then(e).
            catch(function(e) {
                ye.readyException(e)
            }),
            this
        },
        ye.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) { (!0 === e ? --ye.readyWait: ye.isReady) || (ye.isReady = !0, !0 !== e && --ye.readyWait > 0 || Fe.resolveWith(ae, [ye]))
            }
        }),
        ye.ready.then = Fe.then,
        "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll ? n.setTimeout(ye.ready) : (ae.addEventListener("DOMContentLoaded", g), n.addEventListener("load", g));
        var Me = function(e, t, n, r, i, o, a) {
            var s = 0,
            u = e.length,
            c = null == n;
            if ("object" === ye.type(n)) {
                i = !0;
                for (s in n) Me(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, ye.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                return c.call(ye(e), n)
            })), t)) for (; s < u; s++) t(e[s], n, a ? r: r.call(e[s], s, t(e[s], n)));
            return i ? e: c ? t.call(e) : u ? t(e[0], n) : o
        },
        Pe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        m.uid = 1,
        m.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                Pe(e) && (e.nodeType ? e[this.expando] = t: Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[ye.camelCase(t)] = n;
                else for (r in t) i[ye.camelCase(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ye.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n: t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(ye.camelCase) : (t = ye.camelCase(t), t = t in r ? [t] : t.match(Oe) || []),
                        n = t.length;
                        for (; n--;) delete r[t[n]]
                    } (void 0 === t || ye.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !ye.isEmptyObject(t)
            }
        };
        var Re = new m,
        Ie = new m,
        We = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /[A-Z]/g;
        ye.extend({
            hasData: function(e) {
                return Ie.hasData(e) || Re.hasData(e)
            },
            data: function(e, t, n) {
                return Ie.access(e, t, n)
            },
            removeData: function(e, t) {
                Ie.remove(e, t)
            },
            _data: function(e, t, n) {
                return Re.access(e, t, n)
            },
            _removeData: function(e, t) {
                Re.remove(e, t)
            }
        }),
        ye.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Ie.get(o), 1 === o.nodeType && !Re.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ye.camelCase(r.slice(5)), y(o, r, i[r])));
                        Re.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    Ie.set(this, e)
                }) : Me(this,
                function(t) {
                    var n;
                    if (o && void 0 === t) {
                        if (void 0 !== (n = Ie.get(o, e))) return n;
                        if (void 0 !== (n = y(o, e))) return n
                    } else this.each(function() {
                        Ie.set(this, e, t)
                    })
                },
                null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Ie.remove(this, e)
                })
            }
        }),
        ye.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue",
                r = Re.get(e, t),
                n && (!r || Array.isArray(n) ? r = Re.access(e, t, ye.makeArray(n)) : r.push(n)),
                r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ye.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ye._queueHooks(e, t),
                a = function() {
                    ye.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(), r--),
                i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Re.get(e, n) || Re.access(e, n, {
                    empty: ye.Callbacks("once memory").add(function() {
                        Re.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        ye.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--),
                arguments.length < n ? ye.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                    var n = ye.queue(this, e, t);
                    ye._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ye.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                i = ye.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Re.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(),
                i.promise(t)
            }
        });
        var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $e = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
        Xe = ["Top", "Right", "Bottom", "Left"],
        ze = function(e, t) {
            return e = t || e,
            "none" === e.style.display || "" === e.style.display && ye.contains(e.ownerDocument, e) && "none" === ye.css(e, "display")
        },
        Ue = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o],
            e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        Ye = {};
        ye.fn.extend({
            show: function() {
                return w(this, !0)
            },
            hide: function() {
                return w(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ze(this) ? ye(this).show() : ye(this).hide()
                })
            }
        });
        var Ve = /^(?:checkbox|radio)$/i,
        Qe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ge = /^$|\/(?:java|ecma)script/i,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Je.optgroup = Je.option,
        Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead,
        Je.th = Je.td;
        var Ke = /<|&#?\w+;/; !
        function() {
            var e = ae.createDocumentFragment(),
            t = e.appendChild(ae.createElement("div")),
            n = ae.createElement("input");
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            ve.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            ve.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        } ();
        var Ze = ae.documentElement,
        et = /^key/,
        tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        nt = /^([^.]*)(?:\.(.+)|)/;
        ye.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, u, c, l, f, p, d, h, g, m = Re.get(e);
                if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), i && ye.find.matchesSelector(Ze, i), n.guid || (n.guid = ye.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                    return void 0 !== ye && ye.event.triggered !== t.type ? ye.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(Oe) || [""], c = t.length; c--;) s = nt.exec(t[c]) || [],
                d = g = s[1],
                h = (s[2] || "").split(".").sort(),
                d && (f = ye.event.special[d] || {},
                d = (i ? f.delegateType: f.bindType) || d, f = ye.event.special[d] || {},
                l = ye.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ye.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                },
                o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), ye.event.global[d] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, c, l, f, p, d, h, g, m = Re.hasData(e) && Re.get(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(Oe) || [""], c = t.length; c--;) if (s = nt.exec(t[c]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = ye.event.special[d] || {},
                        d = (r ? f.delegateType: f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) l = p[o],
                        !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || ye.removeEvent(e, d, m.handle), delete u[d])
                    } else for (d in u) ye.event.remove(e, d + t[c], n, r, !0);
                    ye.isEmptyObject(u) && Re.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = ye.event.fix(e),
                u = new Array(arguments.length),
                c = (Re.get(this, "events") || {})[s.type] || [],
                l = ye.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                    for (a = ye.event.handlers.call(this, s, c), t = 0; (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((ye.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s),
                    s.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [],
                u = t.delegateCount,
                c = e.target;
                if (u && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                    for (o = [], a = {},
                    n = 0; n < u; n++) r = t[n],
                    i = r.selector + " ",
                    void 0 === a[i] && (a[i] = r.needsContext ? ye(i, this).index(c) > -1 : ye.find(i, this, null, [c]).length),
                    a[i] && o.push(r);
                    o.length && s.push({
                        elem: c,
                        handlers: o
                    })
                }
                return c = this,
                u < t.length && s.push({
                    elem: c,
                    handlers: t.slice(u)
                }),
                s
            },
            addProp: function(e, t) {
                Object.defineProperty(ye.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: ye.isFunction(t) ?
                    function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    }: function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[ye.expando] ? e: new ye.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== A() && this.focus) return this.focus(),
                        !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === A() && this.blur) return this.blur(),
                        !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && u(this, "input")) return this.click(),
                        !1
                    },
                    _default: function(e) {
                        return u(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        ye.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        },
        ye.Event = function(e, t) {
            if (! (this instanceof ye.Event)) return new ye.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? E: S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode: e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
            t && ye.extend(this, t),
            this.timeStamp = e && e.timeStamp || ye.now(),
            this[ye.expando] = !0
        },
        ye.Event.prototype = {
            constructor: ye.Event,
            isDefaultPrevented: S,
            isPropagationStopped: S,
            isImmediatePropagationStopped: S,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = E,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = E,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = E,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        ye.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && et.test(e.type) ? null != e.charCode ? e.charCode: e.keyCode: !e.which && void 0 !== t && tt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        },
        ye.event.addProp),
        ye.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        },
        function(e, t) {
            ye.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                    return i && (i === r || ye.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                    n
                }
            }
        }),
        ye.fn.extend({
            on: function(e, t, n, r) {
                return N(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return N(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
                ye(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
                this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return ! 1 !== t && "function" != typeof t || (n = t, t = void 0),
                !1 === n && (n = S),
                this.each(function() {
                    ye.event.remove(this, e, n, t)
                })
            }
        });
        var rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        it = /<script|<style|<link/i,
        ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        at = /^true\/(.*)/,
        st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ye.extend({
            htmlPrefilter: function(e) {
                return e.replace(rt, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0),
                u = ye.contains(e.ownerDocument, e);
                if (! (ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ye.isXMLDoc(e))) for (a = T(s), o = T(e), r = 0, i = o.length; r < i; r++) O(o[r], a[r]);
                if (t) if (n) for (o = o || T(e), a = a || T(s), r = 0, i = o.length; r < i; r++) q(o[r], a[r]);
                else q(e, s);
                return a = T(s, "script"),
                a.length > 0 && k(a, !u && T(e, "script")),
                s
            },
            cleanData: function(e) {
                for (var t, n, r, i = ye.event.special,
                o = 0; void 0 !== (n = e[o]); o++) if (Pe(n)) {
                    if (t = n[Re.expando]) {
                        if (t.events) for (r in t.events) i[r] ? ye.event.remove(n, r) : ye.removeEvent(n, r, t.handle);
                        n[Re.expando] = void 0
                    }
                    n[Ie.expando] && (n[Ie.expando] = void 0)
                }
            }
        }),
        ye.fn.extend({
            detach: function(e) {
                return F(this, e, !0)
            },
            remove: function(e) {
                return F(this, e)
            },
            text: function(e) {
                return Me(this,
                function(e) {
                    return void 0 === e ? ye.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                },
                null, e, arguments.length)
            },
            append: function() {
                return H(this, arguments,
                function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || j(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return H(this, arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = j(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return H(this, arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return H(this, arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ye.cleanData(T(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e: t,
                this.map(function() {
                    return ye.clone(this, e, t)
                })
            },
            html: function(e) {
                return Me(this,
                function(e) {
                    var t = this[0] || {},
                    n = 0,
                    r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !it.test(e) && !Je[(Qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ye.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) t = this[n] || {},
                            1 === t.nodeType && (ye.cleanData(T(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch(e) {}
                    }
                    t && this.empty().append(e)
                },
                null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return H(this, arguments,
                function(t) {
                    var n = this.parentNode;
                    ye.inArray(this, e) < 0 && (ye.cleanData(T(this)), n && n.replaceChild(t, this))
                },
                e)
            }
        }),
        ye.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(e, t) {
            ye.fn[e] = function(e) {
                for (var n, r = [], i = ye(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this: this.clone(!0),
                ye(i[a])[t](n),
                le.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ut = /^margin/,
        ct = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
        lt = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }; !
        function() {
            function e() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    s.innerHTML = "",
                    Ze.appendChild(a);
                    var e = n.getComputedStyle(s);
                    t = "1%" !== e.top,
                    o = "2px" === e.marginLeft,
                    r = "4px" === e.width,
                    s.style.marginRight = "50%",
                    i = "4px" === e.marginRight,
                    Ze.removeChild(a),
                    s = null
                }
            }
            var t, r, i, o, a = ae.createElement("div"),
            s = ae.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ye.extend(ve, {
                pixelPosition: function() {
                    return e(),
                    t
                },
                boxSizingReliable: function() {
                    return e(),
                    r
                },
                pixelMarginRight: function() {
                    return e(),
                    i
                },
                reliableMarginLeft: function() {
                    return e(),
                    o
                }
            }))
        } ();
        var ft = /^(none|table(?!-c[ea]).+)/,
        pt = /^--/,
        dt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ht = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        gt = ["Webkit", "Moz", "ms"],
        mt = ae.createElement("div").style;
        ye.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = M(e, "opacity");
                            return "" === n ? "1": n
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
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = ye.camelCase(t),
                    u = pt.test(t),
                    c = e.style;
                    if (u || (t = I(s)), a = ye.cssHooks[t] || ye.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i: c[t];
                    o = typeof n,
                    "string" === o && (i = $e.exec(n)) && i[1] && (n = x(e, t, i), o = "number"),
                    null != n && n === n && ("number" === o && (n += i && i[3] || (ye.cssNumber[s] ? "": "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = ye.camelCase(t);
                return pt.test(t) || (t = I(s)),
                a = ye.cssHooks[t] || ye.cssHooks[s],
                a && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = M(e, t, r)),
                "normal" === i && t in ht && (i = ht[t]),
                "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }),
        ye.each(["height", "width"],
        function(e, t) {
            ye.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return ! ft.test(ye.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? B(e, t, r) : Ue(e, dt,
                    function() {
                        return B(e, t, r)
                    })
                },
                set: function(e, n, r) {
                    var i, o = r && lt(e),
                    a = r && _(e, t, r, "border-box" === ye.css(e, "boxSizing", !1, o), o);
                    return a && (i = $e.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ye.css(e, t)),
                    W(e, n, a)
                }
            }
        }),
        ye.cssHooks.marginLeft = P(ve.reliableMarginLeft,
        function(e, t) {
            if (t) return (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
                marginLeft: 0
            },
            function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }),
        ye.each({
            margin: "",
            padding: "",
            border: "Width"
        },
        function(e, t) {
            ye.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Xe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            ut.test(e) || (ye.cssHooks[e + t].set = W)
        }),
        ye.fn.extend({
            css: function(e, t) {
                return Me(this,
                function(e, t, n) {
                    var r, i, o = {},
                    a = 0;
                    if (Array.isArray(t)) {
                        for (r = lt(e), i = t.length; a < i; a++) o[t[a]] = ye.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t)
                },
                e, t, arguments.length > 1)
            }
        }),
        ye.Tween = $,
        $.prototype = {
            constructor: $,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || ye.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (ye.cssNumber[n] ? "": "px")
            },
            cur: function() {
                var e = $.propHooks[this.prop];
                return e && e.get ? e.get(this) : $.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = $.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : $.propHooks._default.set(this),
                this
            }
        },
        $.prototype.init.prototype = $.prototype,
        $.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0)
                },
                set: function(e) {
                    ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now: ye.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        $.propHooks.scrollTop = $.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        ye.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return.5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        ye.fx = $.prototype.init,
        ye.fx.step = {};
        var vt, yt, xt = /^(?:toggle|show|hide)$/,
        bt = /queueHooks$/;
        ye.Animation = ye.extend(G, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return x(n.elem, e, $e.exec(t), n),
                    n
                }]
            },
            tweener: function(e, t) {
                ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
                for (var n, r = 0,
                i = e.length; r < i; r++) n = e[r],
                G.tweeners[n] = G.tweeners[n] || [],
                G.tweeners[n].unshift(t)
            },
            prefilters: [V],
            prefilter: function(e, t) {
                t ? G.prefilters.unshift(e) : G.prefilters.push(e)
            }
        }),
        ye.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ye.extend({},
            e) : {
                complete: n || !n && t || ye.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ye.isFunction(t) && t
            };
            return ye.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ye.fx.speeds ? r.duration = ye.fx.speeds[r.duration] : r.duration = ye.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                ye.isFunction(r.old) && r.old.call(this),
                r.queue && ye.dequeue(this, r.queue)
            },
            r
        },
        ye.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ze).css("opacity", 0).show().end().animate({
                    opacity: t
                },
                e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = ye.isEmptyObject(e),
                o = ye.speed(t, n, r),
                a = function() {
                    var t = G(this, ye.extend({},
                    e), o); (i || Re.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0,
                    i = null != e && e + "queueHooks",
                    o = ye.timers,
                    a = Re.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else for (i in a) a[i] && a[i].stop && bt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); ! t && n || ye.dequeue(this, e)
                })
            },
            finish: function(e) {
                return ! 1 !== e && (e = e || "fx"),
                this.each(function() {
                    var t, n = Re.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ye.timers,
                    a = r ? r.length: 0;
                    for (n.finish = !0, ye.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        ye.each(["toggle", "show", "hide"],
        function(e, t) {
            var n = ye.fn[t];
            ye.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, i)
            }
        }),
        ye.each({
            slideDown: U("show"),
            slideUp: U("hide"),
            slideToggle: U("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        },
        function(e, t) {
            ye.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        ye.timers = [],
        ye.fx.tick = function() {
            var e, t = 0,
            n = ye.timers;
            for (vt = ye.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || ye.fx.stop(),
            vt = void 0
        },
        ye.fx.timer = function(e) {
            ye.timers.push(e),
            ye.fx.start()
        },
        ye.fx.interval = 13,
        ye.fx.start = function() {
            yt || (yt = !0, X())
        },
        ye.fx.stop = function() {
            yt = null
        },
        ye.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        ye.fn.delay = function(e, t) {
            return e = ye.fx ? ye.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(i)
                }
            })
        },
        function() {
            var e = ae.createElement("input"),
            t = ae.createElement("select"),
            n = t.appendChild(ae.createElement("option"));
            e.type = "checkbox",
            ve.checkOn = "" !== e.value,
            ve.optSelected = n.selected,
            e = ae.createElement("input"),
            e.value = "t",
            e.type = "radio",
            ve.radioValue = "t" === e.value
        } ();
        var wt, Tt = ye.expr.attrHandle;
        ye.fn.extend({
            attr: function(e, t) {
                return Me(this, ye.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ye.removeAttr(this, e)
                })
            }
        }),
        ye.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ye.prop(e, t, n) : (1 === o && ye.isXMLDoc(e) || (i = ye.attrHooks[t.toLowerCase()] || (ye.expr.match.bool.test(t) ? wt: void 0)), void 0 !== n ? null === n ? void ye.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r: (r = ye.find.attr(e, t), null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ve.radioValue && "radio" === t && u(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                i = t && t.match(Oe);
                if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
            }
        }),
        wt = {
            set: function(e, t, n) {
                return ! 1 === t ? ye.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        ye.each(ye.expr.match.bool.source.match(/\w+/g),
        function(e, t) {
            var n = Tt[t] || ye.find.attr;
            Tt[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = Tt[a], Tt[a] = i, i = null != n(e, t, r) ? a: null, Tt[a] = o),
                i
            }
        });
        var kt = /^(?:input|select|textarea|button)$/i,
        Ct = /^(?:a|area)$/i;
        ye.fn.extend({
            prop: function(e, t) {
                return Me(this, ye.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[ye.propFix[e] || e]
                })
            }
        }),
        ye.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, i = ye.propHooks[t]),
                void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ye.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : kt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        ve.optSelected || (ye.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
        function() {
            ye.propFix[this.toLowerCase()] = this
        }),
        ye.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ye.isFunction(e)) return this.each(function(t) {
                    ye(this).addClass(e.call(this, t, K(this)))
                });
                if ("string" == typeof e && e) for (t = e.match(Oe) || []; n = this[u++];) if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                    for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    s = J(r),
                    i !== s && n.setAttribute("class", s)
                }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ye.isFunction(e)) return this.each(function(t) {
                    ye(this).removeClass(e.call(this, t, K(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e) for (t = e.match(Oe) || []; n = this[u++];) if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                    for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                    s = J(r),
                    i !== s && n.setAttribute("class", s)
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function(n) {
                    ye(this).toggleClass(e.call(this, n, K(this), t), t)
                }) : this.each(function() {
                    var t, r, i, o;
                    if ("string" === n) for (r = 0, i = ye(this), o = e.match(Oe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = K(this), t && Re.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "": Re.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + J(K(n)) + " ").indexOf(t) > -1) return ! 0;
                return ! 1
            }
        });
        var Et = /\r/g;
        ye.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = ye.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, ye(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": Array.isArray(i) && (i = ye.map(i,
                    function(e) {
                        return null == e ? "": e + ""
                    })), (t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = ye.valHooks[i.type] || ye.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "": n) : void 0
            }
        }),
        ye.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ye.find.attr(e, "value");
                        return null != t ? t: J(ye.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null: [],
                        c = a ? o + 1 : i.length;
                        for (r = o < 0 ? c: a ? o: 0; r < c; r++) if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))) {
                            if (t = ye(n).val(), a) return t;
                            s.push(t)
                        }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options,
                        o = ye.makeArray(t), a = i.length; a--;) r = i[a],
                        (r.selected = ye.inArray(ye.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        ye.each(["radio", "checkbox"],
        function() {
            ye.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = ye.inArray(ye(e).val(), t) > -1
                }
            },
            ve.checkOn || (ye.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            })
        });
        var St = /^(?:focusinfocus|focusoutblur)$/;
        ye.extend(ye.event, {
            trigger: function(e, t, r, i) {
                var o, a, s, u, c, l, f, p = [r || ae],
                d = he.call(e, "type") ? e.type: e,
                h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = s = r = r || ae, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(d + ye.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), c = d.indexOf(":") < 0 && "on" + d, e = e[ye.expando] ? e: new ye.Event(d, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ye.makeArray(t, [e]), f = ye.event.special[d] || {},
                i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                    if (!i && !f.noBubble && !ye.isWindow(r)) {
                        for (u = f.delegateType || d, St.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a),
                        s = a;
                        s === (r.ownerDocument || ae) && p.push(s.defaultView || s.parentWindow || n)
                    }
                    for (o = 0; (a = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u: f.bindType || d,
                    l = (Re.get(a, "events") || {})[e.type] && Re.get(a, "handle"),
                    l && l.apply(a, t),
                    (l = c && a[c]) && l.apply && Pe(a) && (e.result = l.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = d,
                    i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), t) || !Pe(r) || c && ye.isFunction(r[d]) && !ye.isWindow(r) && (s = r[c], s && (r[c] = null), ye.event.triggered = d, r[d](), ye.event.triggered = void 0, s && (r[c] = s)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = ye.extend(new ye.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ye.event.trigger(r, null, t)
            }
        }),
        ye.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    ye.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return ye.event.trigger(e, t, n, !0)
            }
        }),
        ye.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(e, t) {
            ye.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        ye.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        ve.focusin = "onfocusin" in n,
        ve.focusin || ye.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(e, t) {
            var n = function(e) {
                ye.event.simulate(t, e.target, ye.event.fix(e))
            };
            ye.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                    i = Re.access(r, t);
                    i || r.addEventListener(e, n, !0),
                    Re.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                    i = Re.access(r, t) - 1;
                    i ? Re.access(r, t, i) : (r.removeEventListener(e, n, !0), Re.remove(r, t))
                }
            }
        });
        var At = n.location,
        Nt = ye.now(),
        jt = /\?/;
        ye.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch(e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || ye.error("Invalid XML: " + e),
            t
        };
        var Lt = /\[\]$/,
        Dt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
        ye.param = function(e, t) {
            var n, r = [],
            i = function(e, t) {
                var n = ye.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "": n)
            };
            if (Array.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e,
            function() {
                i(this.name, this.value)
            });
            else for (n in e) Z(n, e[n], t, i);
            return r.join("&")
        },
        ye.fn.extend({
            serialize: function() {
                return ye.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ye.prop(this, "elements");
                    return e ? ye.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ye(this).is(":disabled") && Ot.test(this.nodeName) && !qt.test(e) && (this.checked || !Ve.test(e))
                }).map(function(e, t) {
                    var n = ye(this).val();
                    return null == n ? null: Array.isArray(n) ? ye.map(n,
                    function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Dt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Dt, "\r\n")
                    }
                }).get()
            }
        });
        var Ht = /%20/g,
        Ft = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        _t = {},
        Bt = {},
        $t = "*/".concat("*"),
        Xt = ae.createElement("a");
        Xt.href = At.href,
        ye.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal: Rt.test(At.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
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
                    "text json": JSON.parse,
                    "text xml": ye.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? ne(ne(e, ye.ajaxSettings), t) : ne(ye.ajaxSettings, e)
            },
            ajaxPrefilter: ee(_t),
            ajaxTransport: ee(Bt),
            ajax: function(e, t) {
                function r(e, t, r, s) {
                    var c, p, d, b, w, T = t;
                    l || (l = !0, u && n.clearTimeout(u), i = void 0, a = s || "", k.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (b = re(h, k, r)), b = ie(h, b, k, c), c ? (h.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (ye.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (ye.etag[o] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent": 304 === e ? T = "notmodified": (T = b.state, p = b.data, d = b.error, c = !d)) : (d = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || T) + "", c ? v.resolveWith(g, [p, T, k]) : v.rejectWith(g, [k, T, d]), k.statusCode(x), x = void 0, f && m.trigger(c ? "ajaxSuccess": "ajaxError", [k, h, c ? p: d]), y.fireWith(g, [k, T]), f && (m.trigger("ajaxComplete", [k, h]), --ye.active || ye.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0),
                t = t || {};
                var i, o, a, s, u, c, l, f, p, d, h = ye.ajaxSetup({},
                t),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? ye(g) : ye.event,
                v = ye.Deferred(),
                y = ye.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                w = {},
                T = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!s) for (s = {}; t = Pt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null: t
                    },
                    getAllResponseHeaders: function() {
                        return l ? a: null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (h.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) if (l) k.always(e[k.status]);
                        else for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t),
                        r(0, t),
                        this
                    }
                };
                if (v.promise(k), h.url = ((e || h.url || At.href) + "").replace(Wt, At.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [""], null == h.crossDomain) {
                    c = ae.createElement("a");
                    try {
                        c.href = h.url,
                        c.href = c.href,
                        h.crossDomain = Xt.protocol + "//" + Xt.host != c.protocol + "//" + c.host
                    } catch(e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = ye.param(h.data, h.traditional)), te(_t, h, t, k), l) return k;
                f = ye.event && h.global,
                f && 0 == ye.active++&&ye.event.trigger("ajaxStart"),
                h.type = h.type.toUpperCase(),
                h.hasContent = !It.test(h.type),
                o = h.url.replace(Ft, ""),
                h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ht, "+")) : (d = h.url.slice(o.length), h.data && (o += (jt.test(o) ? "&": "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Mt, "$1"), d = (jt.test(o) ? "&": "?") + "_=" + Nt+++d), h.url = o + d),
                h.ifModified && (ye.lastModified[o] && k.setRequestHeader("If-Modified-Since", ye.lastModified[o]), ye.etag[o] && k.setRequestHeader("If-None-Match", ye.etag[o])),
                (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType),
                k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01": "") : h.accepts["*"]);
                for (p in h.headers) k.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || l)) return k.abort();
                if (T = "abort", y.add(h.complete), k.done(h.success), k.fail(h.error), i = te(Bt, h, t, k)) {
                    if (k.readyState = 1, f && m.trigger("ajaxSend", [k, h]), l) return k;
                    h.async && h.timeout > 0 && (u = n.setTimeout(function() {
                        k.abort("timeout")
                    },
                    h.timeout));
                    try {
                        l = !1,
                        i.send(b, r)
                    } catch(e) {
                        if (l) throw e;
                        r( - 1, e)
                    }
                } else r( - 1, "No Transport");
                return k
            },
            getJSON: function(e, t, n) {
                return ye.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ye.get(e, void 0, t, "script")
            }
        }),
        ye.each(["get", "post"],
        function(e, t) {
            ye[t] = function(e, n, r, i) {
                return ye.isFunction(n) && (i = i || r, r = n, n = void 0),
                ye.ajax(ye.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                },
                ye.isPlainObject(e) && e))
            }
        }),
        ye._evalUrl = function(e) {
            return ye.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        },
        ye.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (ye.isFunction(e) && (e = e.call(this[0])), t = ye(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(e) {
                return ye.isFunction(e) ? this.each(function(t) {
                    ye(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ye(this),
                    n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ye.isFunction(e);
                return this.each(function(n) {
                    ye(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    ye(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        ye.expr.pseudos.hidden = function(e) {
            return ! ye.expr.pseudos.visible(e)
        },
        ye.expr.pseudos.visible = function(e) {
            return !! (e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        },
        ye.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch(e) {}
        };
        var zt = {
            0 : 200,
            1223 : 204
        },
        Ut = ye.ajaxSettings.xhr();
        ve.cors = !!Ut && "withCredentials" in Ut,
        ve.ajax = Ut = !!Ut,
        ye.ajaxTransport(function(e) {
            var t, r;
            if (ve.cors || Ut && !e.crossDomain) return {
                send: function(i, o) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                    e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i) s.setRequestHeader(a, i[a]);
                    t = function(e) {
                        return function() {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            }: {
                                text: s.responseText
                            },
                            s.getAllResponseHeaders()))
                        }
                    },
                    s.onload = t(),
                    r = s.onerror = t("error"),
                    void 0 !== s.onabort ? s.onabort = r: s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            t && r()
                        })
                    },
                    t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch(e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }),
        ye.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        ye.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return ye.globalEval(e),
                    e
                }
            }
        }),
        ye.ajaxPrefilter("script",
        function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        ye.ajaxTransport("script",
        function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = ye("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && i("error" === e.type ? 404 : 200, e.type)
                        }),
                        ae.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Yt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
        ye.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Yt.pop() || ye.expando + "_" + Nt++;
                return this[e] = !0,
                e
            }
        }),
        ye.ajaxPrefilter("json jsonp",
        function(e, t, r) {
            var i, o, a, s = !1 !== e.jsonp && (Vt.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&": "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return a || ye.error(i + " was not called"),
                a[0]
            },
            e.dataTypes[0] = "json",
            o = n[i],
            n[i] = function() {
                a = arguments
            },
            r.always(function() {
                void 0 === o ? ye(n).removeProp(i) : n[i] = o,
                e[i] && (e.jsonpCallback = t.jsonpCallback, Yt.push(i)),
                a && ye.isFunction(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
        }),
        ve.createHTMLDocument = function() {
            var e = ae.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        } (),
        ye.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var r, i, o;
            return t || (ve.createHTMLDocument ? (t = ae.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ae.location.href, t.head.appendChild(r)) : t = ae),
            i = Ae.exec(e),
            o = !n && [],
            i ? [t.createElement(i[1])] : (i = C([e], t, o), o && o.length && ye(o).remove(), ye.merge([], i.childNodes))
        },
        ye.fn.load = function(e, t, n) {
            var r, i, o, a = this,
            s = e.indexOf(" ");
            return s > -1 && (r = J(e.slice(s)), e = e.slice(0, s)),
            ye.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"),
            a.length > 0 && ye.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                a.html(r ? ye("<div>").append(ye.parseHTML(e)).find(r) : e)
            }).always(n &&
            function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }),
            this
        },
        ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
        function(e, t) {
            ye.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        ye.expr.pseudos.animated = function(e) {
            return ye.grep(ye.timers,
            function(t) {
                return e === t.elem
            }).length
        },
        ye.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, c, l = ye.css(e, "position"),
                f = ye(e),
                p = {};
                "static" === l && (e.style.position = "relative"),
                s = f.offset(),
                o = ye.css(e, "top"),
                u = ye.css(e, "left"),
                c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1,
                c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
                ye.isFunction(t) && (t = t.call(e, n, ye.extend({},
                s))),
                null != t.top && (p.top = t.top - s.top + a),
                null != t.left && (p.left = t.left - s.left + i),
                "using" in t ? t.using.call(e, p) : f.css(p)
            }
        },
        ye.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                    ye.offset.setOffset(this, e, t)
                });
                var t, n, r, i, o = this[0];
                return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                    top: r.top + i.pageYOffset - n.clientTop,
                    left: r.left + i.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }: void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === ye.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), u(e[0], "html") || (r = e.offset()), r = {
                        top: r.top + ye.css(e[0], "borderTopWidth", !0),
                        left: r.left + ye.css(e[0], "borderLeftWidth", !0)
                    }),
                    {
                        top: t.top - r.top - ye.css(n, "marginTop", !0),
                        left: t.left - r.left - ye.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === ye.css(e, "position");) e = e.offsetParent;
                    return e || Ze
                })
            }
        }),
        ye.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        },
        function(e, t) {
            var n = "pageYOffset" === t;
            ye.fn[e] = function(r) {
                return Me(this,
                function(e, r, i) {
                    var o;
                    if (ye.isWindow(e) ? o = e: 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset: i, n ? i: o.pageYOffset) : e[r] = i
                },
                e, r, arguments.length)
            }
        }),
        ye.each(["top", "left"],
        function(e, t) {
            ye.cssHooks[t] = P(ve.pixelPosition,
            function(e, n) {
                if (n) return n = M(e, t),
                ct.test(n) ? ye(e).position()[t] + "px": n
            })
        }),
        ye.each({
            Height: "height",
            Width: "width"
        },
        function(e, t) {
            ye.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            },
            function(n, r) {
                ye.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin": "border");
                    return Me(this,
                    function(t, n, i) {
                        var o;
                        return ye.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ye.css(t, n, s) : ye.style(t, n, i, s)
                    },
                    t, a ? i: void 0, a)
                }
            })
        }),
        ye.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        ye.holdReady = function(e) {
            e ? ye.readyWait++:ye.ready(!0)
        },
        ye.isArray = Array.isArray,
        ye.parseJSON = JSON.parse,
        ye.nodeName = u,
        r = [],
        void 0 !== (i = function() {
            return ye
        }.apply(t, r)) && (e.exports = i);
        var Qt = n.jQuery,
        Gt = n.$;
        return ye.noConflict = function(e) {
            return n.$ === ye && (n.$ = Gt),
            e && n.jQuery === ye && (n.jQuery = Qt),
            ye
        },
        o || (n.jQuery = n.$ = ye),
        ye
    })
},
function(e, t, n) {
    var r; !
    function() {
        "use strict";
        function i(e, t) {
            var n;
            if (t = t || {},
            this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, this.tapTimeout = t.tapTimeout || 700, !i.notNeeded(e)) {
                for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], o = this, s = 0, u = r.length; s < u; s++) o[r[s]] = function(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                } (o[r[s]], o);
                a && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)),
                e.addEventListener("click", this.onClick, !0),
                e.addEventListener("touchstart", this.onTouchStart, !1),
                e.addEventListener("touchmove", this.onTouchMove, !1),
                e.addEventListener("touchend", this.onTouchEnd, !1),
                e.addEventListener("touchcancel", this.onTouchCancel, !1),
                Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
                    var i = Node.prototype.removeEventListener;
                    "click" === t ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r)
                },
                e.addEventListener = function(t, n, r) {
                    var i = Node.prototype.addEventListener;
                    "click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function(e) {
                        e.propagationStopped || n(e)
                    }), r) : i.call(e, t, n, r)
                }),
                "function" == typeof e.onclick && (n = e.onclick, e.addEventListener("click",
                function(e) {
                    n(e)
                },
                !1), e.onclick = null)
            }
        }
        var o = navigator.userAgent.indexOf("Windows Phone") >= 0,
        a = navigator.userAgent.indexOf("Android") > 0 && !o,
        s = /iP(ad|hone|od)/.test(navigator.userAgent) && !o,
        u = s && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        c = s && /OS [6-7]_\d/.test(navigator.userAgent),
        l = navigator.userAgent.indexOf("BB10") > 0;
        i.prototype.needsClick = function(e) {
            switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return ! 0;
                break;
            case "input":
                if (s && "file" === e.type || e.disabled) return ! 0;
                break;
            case "label":
            case "iframe":
            case "video":
                return ! 0
            }
            return /\bneedsclick\b/.test(e.className)
        },
        i.prototype.needsFocus = function(e) {
            switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return ! 0;
            case "select":
                return ! a;
            case "input":
                switch (e.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return ! 1
                }
                return ! e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
            }
        },
        i.prototype.sendClick = function(e, t) {
            var n, r;
            document.activeElement && document.activeElement !== e && document.activeElement.blur(),
            r = t.changedTouches[0],
            n = document.createEvent("MouseEvents"),
            n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
            n.forwardedTouchEvent = !0,
            e.dispatchEvent(n)
        },
        i.prototype.determineEventType = function(e) {
            return a && "select" === e.tagName.toLowerCase() ? "mousedown": "click"
        },
        i.prototype.focus = function(e) {
            var t;
            s && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
        },
        i.prototype.updateScrollParent = function(e) {
            var t, n;
            if (! (t = e.fastClickScrollParent) || !t.contains(e)) {
                n = e;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        t = n,
                        e.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while ( n )
            }
            t && (t.fastClickLastScrollTop = t.scrollTop)
        },
        i.prototype.getTargetElementFromEventTarget = function(e) {
            return e.nodeType === Node.TEXT_NODE ? e.parentNode: e
        },
        i.prototype.onTouchStart = function(e) {
            var t, n, r;
            if (e.targetTouches.length > 1) return ! 0;
            if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], s) {
                if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return ! 0;
                if (!u) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(),
                    !1;
                    this.lastTouchIdentifier = n.identifier,
                    this.updateScrollParent(t)
                }
            }
            return this.trackingClick = !0,
            this.trackingClickStart = e.timeStamp,
            this.targetElement = t,
            this.touchStartX = n.pageX,
            this.touchStartY = n.pageY,
            e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
            !0
        },
        i.prototype.touchHasMoved = function(e) {
            var t = e.changedTouches[0],
            n = this.touchBoundary;
            return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
        },
        i.prototype.onTouchMove = function(e) {
            return ! this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
        },
        i.prototype.findControl = function(e) {
            return void 0 !== e.control ? e.control: e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        },
        i.prototype.onTouchEnd = function(e) {
            var t, n, r, i, o, l = this.targetElement;
            if (!this.trackingClick) return ! 0;
            if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0,
            !0;
            if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return ! 0;
            if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, c && (o = e.changedTouches[0], l = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (r = l.tagName.toLowerCase())) {
                if (t = this.findControl(l)) {
                    if (this.focus(l), a) return ! 1;
                    l = t
                }
            } else if (this.needsFocus(l)) return e.timeStamp - n > 100 || s && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(l), this.sendClick(l, e), s && "select" === r || (this.targetElement = null, e.preventDefault()), !1);
            return ! (!s || u || !(i = l.fastClickScrollParent) || i.fastClickLastScrollTop === i.scrollTop) || (this.needsClick(l) || (e.preventDefault(), this.sendClick(l, e)), !1)
        },
        i.prototype.onTouchCancel = function() {
            this.trackingClick = !1,
            this.targetElement = null
        },
        i.prototype.onMouse = function(e) {
            return ! (this.targetElement && !e.forwardedTouchEvent && e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), 1))
        },
        i.prototype.onClick = function(e) {
            var t;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
        },
        i.prototype.destroy = function() {
            var e = this.layer;
            a && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)),
            e.removeEventListener("click", this.onClick, !0),
            e.removeEventListener("touchstart", this.onTouchStart, !1),
            e.removeEventListener("touchmove", this.onTouchMove, !1),
            e.removeEventListener("touchend", this.onTouchEnd, !1),
            e.removeEventListener("touchcancel", this.onTouchCancel, !1)
        },
        i.notNeeded = function(e) {
            var t, n, r;
            if (void 0 === window.ontouchstart) return ! 0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!a) return ! 0;
                if (t = document.querySelector("meta[name=viewport]")) {
                    if ( - 1 !== t.content.indexOf("user-scalable=no")) return ! 0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return ! 0
                }
            }
            if (l && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
                if ( - 1 !== t.content.indexOf("user-scalable=no")) return ! 0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return ! 0
            }
            return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || !!( + (/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && ( - 1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || "none" === e.style.touchAction || "manipulation" === e.style.touchAction
        },
        i.attach = function(e, t) {
            return new i(e, t)
        },
        void 0 !== (r = function() {
            return i
        }.call(t, n, t, e)) && (e.exports = r)
    } ()
},
function(e, t, n) {
    var r, i, o; !
    function(a, s) {
        i = [e, n(5), n(7), n(8)],
        r = s,
        void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o)
    } (0,
    function(e, t, n, r) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function o(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function u(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n)) return t.getAttribute(n)
        }
        var c = i(t),
        l = i(n),
        f = i(r),
        p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        d = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        } (),
        h = function(e) {
            function t(e, n) {
                o(this, t);
                var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r.resolveOptions(n),
                r.listenClick(e),
                r
            }
            return s(t, e),
            d(t, [{
                key: "resolveOptions",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof e.action ? e.action: this.defaultAction,
                    this.target = "function" == typeof e.target ? e.target: this.defaultTarget,
                    this.text = "function" == typeof e.text ? e.text: this.defaultText,
                    this.container = "object" === p(e.container) ? e.container: document.body
                }
            },
            {
                key: "listenClick",
                value: function(e) {
                    var t = this;
                    this.listener = (0, f.
                default)(e, "click",
                    function(e) {
                        return t.onClick(e)
                    })
                }
            },
            {
                key: "onClick",
                value: function(e) {
                    var t = e.delegateTarget || e.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null),
                    this.clipboardAction = new c.
                default({
                        action:
                        this.action(t),
                        target: this.target(t),
                        text: this.text(t),
                        container: this.container,
                        trigger: t,
                        emitter: this
                    })
                }
            },
            {
                key: "defaultAction",
                value: function(e) {
                    return u("action", e)
                }
            },
            {
                key: "defaultTarget",
                value: function(e) {
                    var t = u("target", e);
                    if (t) return document.querySelector(t)
                }
            },
            {
                key: "defaultText",
                value: function(e) {
                    return u("text", e)
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.listener.destroy(),
                    this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                    t = "string" == typeof e ? [e] : e,
                    n = !!document.queryCommandSupported;
                    return t.forEach(function(e) {
                        n = n && !!document.queryCommandSupported(e)
                    }),
                    n
                }
            }]),
            t
        } (l.
    default);
        e.exports = h
    })
},
function(e, t, n) {
    var r, i, o; !
    function(a, s) {
        i = [e, n(6)],
        r = s,
        void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o)
    } (0,
    function(e, t) {
        "use strict";
        function n(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (t),
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        } (),
        a = function() {
            function e(t) {
                n(this, e),
                this.resolveOptions(t),
                this.initSelection()
            }
            return o(e, [{
                key: "resolveOptions",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = e.action,
                    this.container = e.container,
                    this.emitter = e.emitter,
                    this.target = e.target,
                    this.text = e.text,
                    this.trigger = e.trigger,
                    this.selectedText = ""
                }
            },
            {
                key: "initSelection",
                value: function() {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            },
            {
                key: "selectFake",
                value: function() {
                    var e = this,
                    t = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(),
                    this.fakeHandlerCallback = function() {
                        return e.removeFake()
                    },
                    this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                    this.fakeElem = document.createElement("textarea"),
                    this.fakeElem.style.fontSize = "12pt",
                    this.fakeElem.style.border = "0",
                    this.fakeElem.style.padding = "0",
                    this.fakeElem.style.margin = "0",
                    this.fakeElem.style.position = "absolute",
                    this.fakeElem.style[t ? "right": "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px",
                    this.fakeElem.setAttribute("readonly", ""),
                    this.fakeElem.value = this.text,
                    this.container.appendChild(this.fakeElem),
                    this.selectedText = (0, r.
                default)(this.fakeElem),
                    this.copyText()
                }
            },
            {
                key: "removeFake",
                value: function() {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null),
                    this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                }
            },
            {
                key: "selectTarget",
                value: function() {
                    this.selectedText = (0, r.
                default)(this.target),
                    this.copyText()
                }
            },
            {
                key: "copyText",
                value: function() {
                    var e = void 0;
                    try {
                        e = document.execCommand(this.action)
                    } catch(t) {
                        e = !1
                    }
                    this.handleResult(e)
                }
            },
            {
                key: "handleResult",
                value: function(e) {
                    this.emitter.emit(e ? "success": "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            },
            {
                key: "clearSelection",
                value: function() {
                    this.trigger && this.trigger.focus(),
                    window.getSelection().removeAllRanges()
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.removeFake()
                }
            },
            {
                key: "action",
                set: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                },
                get: function() {
                    return this._action
                }
            },
            {
                key: "target",
                set: function(e) {
                    if (void 0 !== e) {
                        if (!e || "object" !== (void 0 === e ? "undefined": i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = e
                    }
                },
                get: function() {
                    return this._target
                }
            }]),
            e
        } ();
        e.exports = a
    })
},
function(e, t) {
    function n(e) {
        var t;
        if ("SELECT" === e.nodeName) e.focus(),
        t = e.value;
        else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
            var n = e.hasAttribute("readonly");
            n || e.setAttribute("readonly", ""),
            e.select(),
            e.setSelectionRange(0, e.value.length),
            n || e.removeAttribute("readonly"),
            t = e.value
        } else {
            e.hasAttribute("contenteditable") && e.focus();
            var r = window.getSelection(),
            i = document.createRange();
            i.selectNodeContents(e),
            r.removeAllRanges(),
            r.addRange(i),
            t = r.toString()
        }
        return t
    }
    e.exports = n
},
function(e, t) {
    function n() {}
    n.prototype = {
        on: function(e, t, n) {
            var r = this.e || (this.e = {});
            return (r[e] || (r[e] = [])).push({
                fn: t,
                ctx: n
            }),
            this
        },
        once: function(e, t, n) {
            function r() {
                i.off(e, r),
                t.apply(n, arguments)
            }
            var i = this;
            return r._ = t,
            this.on(e, r, n)
        },
        emit: function(e) {
            var t = [].slice.call(arguments, 1),
            n = ((this.e || (this.e = {}))[e] || []).slice(),
            r = 0,
            i = n.length;
            for (r; r < i; r++) n[r].fn.apply(n[r].ctx, t);
            return this
        },
        off: function(e, t) {
            var n = this.e || (this.e = {}),
            r = n[e],
            i = [];
            if (r && t) for (var o = 0,
            a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
            return i.length ? n[e] = i: delete n[e],
            this
        }
    },
    e.exports = n
},
function(e, t, n) {
    function r(e, t, n) {
        if (!e && !t && !n) throw new Error("Missing required arguments");
        if (!s.string(t)) throw new TypeError("Second argument must be a String");
        if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
        if (s.node(e)) return i(e, t, n);
        if (s.nodeList(e)) return o(e, t, n);
        if (s.string(e)) return a(e, t, n);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
    }
    function i(e, t, n) {
        return e.addEventListener(t, n),
        {
            destroy: function() {
                e.removeEventListener(t, n)
            }
        }
    }
    function o(e, t, n) {
        return Array.prototype.forEach.call(e,
        function(e) {
            e.addEventListener(t, n)
        }),
        {
            destroy: function() {
                Array.prototype.forEach.call(e,
                function(e) {
                    e.removeEventListener(t, n)
                })
            }
        }
    }
    function a(e, t, n) {
        return u(document.body, e, t, n)
    }
    var s = n(9),
    u = n(10);
    e.exports = r
},
function(e, t) {
    t.node = function(e) {
        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
    },
    t.nodeList = function(e) {
        var n = Object.prototype.toString.call(e);
        return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
    },
    t.string = function(e) {
        return "string" == typeof e || e instanceof String
    },
    t.fn = function(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }
},
function(e, t, n) {
    function r(e, t, n, r, i) {
        var a = o.apply(this, arguments);
        return e.addEventListener(n, a, i),
        {
            destroy: function() {
                e.removeEventListener(n, a, i)
            }
        }
    }
    function i(e, t, n, i, o) {
        return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e,
        function(e) {
            return r(e, t, n, i, o)
        }))
    }
    function o(e, t, n, r) {
        return function(n) {
            n.delegateTarget = a(n.target, t),
            n.delegateTarget && r.call(e, n)
        }
    }
    var a = n(11);
    e.exports = i
},
function(e, t) {
    function n(e, t) {
        for (; e && e.nodeType !== r;) {
            if ("function" == typeof e.matches && e.matches(t)) return e;
            e = e.parentNode
        }
    }
    var r = 9;
    if ("undefined" != typeof Element && !Element.prototype.matches) {
        var i = Element.prototype;
        i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
    }
    e.exports = n
},
function(e, t) {}]);