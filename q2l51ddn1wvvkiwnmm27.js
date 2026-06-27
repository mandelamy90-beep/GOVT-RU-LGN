!function() {
    var e = {
        89: function(e) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        },
        548: function(e, t, r) {
            "use strict";
            var n = r(89);
            t.darken = u,
            t.getContrastRatio = function(e, t) {
                var r = l(e)
                  , n = l(t);
                return (Math.max(r, n) + .05) / (Math.min(r, n) + .05)
            }
            ,
            t.lighten = f;
            var o = n(r(637))
              , i = n(r(746));
            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return (0,
                i.default)(e, t, r)
            }
            function c(e) {
                if (e.type)
                    return e;
                if ("#" === e.charAt(0)) {
                    var t, r, n;
                    return c((t = (t = e).slice(1),
                    r = RegExp(".{1,".concat(t.length >= 6 ? 2 : 1, "}"), "g"),
                    (n = t.match(r)) && 1 === n[0].length && (n = n.map(function(e) {
                        return e + e
                    })),
                    n ? "rgb".concat(4 === n.length ? "a" : "", "(").concat(n.map(function(e, t) {
                        return t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3
                    }).join(", "), ")") : ""))
                }
                var i, a = e.indexOf("("), s = e.substring(0, a);
                if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(s))
                    throw Error((0,
                    o.default)(9, e));
                var l = e.substring(a + 1, e.length - 1);
                if ("color" === s) {
                    if (i = (l = l.split(" ")).shift(),
                    4 === l.length && "/" === l[3].charAt(0) && (l[3] = l[3].slice(1)),
                    -1 === ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i))
                        throw Error((0,
                        o.default)(10, i))
                } else
                    l = l.split(",");
                return {
                    type: s,
                    values: l = l.map(function(e) {
                        return parseFloat(e)
                    }),
                    colorSpace: i
                }
            }
            function s(e) {
                var t = e.type
                  , r = e.colorSpace
                  , n = e.values;
                return -1 !== t.indexOf("rgb") ? n = n.map(function(e, t) {
                    return t < 3 ? parseInt(e, 10) : e
                }) : -1 !== t.indexOf("hsl") && (n[1] = "".concat(n[1], "%"),
                n[2] = "".concat(n[2], "%")),
                n = -1 !== t.indexOf("color") ? "".concat(r, " ").concat(n.join(" ")) : "".concat(n.join(", ")),
                "".concat(t, "(").concat(n, ")")
            }
            function l(e) {
                var t, r, n, o, i, a, l, u, f, d = "hsl" === (e = c(e)).type || "hsla" === e.type ? c((n = (r = (t = c(t = e)).values)[0],
                o = r[1] / 100,
                a = o * Math.min(i = r[2] / 100, 1 - i),
                u = "rgb",
                f = [Math.round(255 * (l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + n / 30) % 12;
                    return i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1)
                }
                )(0)), Math.round(255 * l(8)), Math.round(255 * l(4))],
                "hsla" === t.type && (u += "a",
                f.push(r[3])),
                s({
                    type: u,
                    values: f
                }))).values : e.values;
                return Number((.2126 * (d = d.map(function(t) {
                    return "color" !== e.type && (t /= 255),
                    t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                }))[0] + .7152 * d[1] + .0722 * d[2]).toFixed(3))
            }
            function u(e, t) {
                if (e = c(e),
                t = a(t),
                -1 !== e.type.indexOf("hsl"))
                    e.values[2] *= 1 - t;
                else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color"))
                    for (var r = 0; r < 3; r += 1)
                        e.values[r] *= 1 - t;
                return s(e)
            }
            function f(e, t) {
                if (e = c(e),
                t = a(t),
                -1 !== e.type.indexOf("hsl"))
                    e.values[2] += (100 - e.values[2]) * t;
                else if (-1 !== e.type.indexOf("rgb"))
                    for (var r = 0; r < 3; r += 1)
                        e.values[r] += (255 - e.values[r]) * t;
                else if (-1 !== e.type.indexOf("color"))
                    for (var n = 0; n < 3; n += 1)
                        e.values[n] += (1 - e.values[n]) * t;
                return s(e)
            }
        },
        746: function(e, t, r) {
            "use strict";
            r.r(t),
            r.d(t, {
                default: function() {
                    return n
                }
            });
            var n = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_SAFE_INTEGER;
                return Math.max(t, Math.min(e, r))
            }
        },
        118: function(e, t, r) {
            "use strict";
            function n(e) {
                for (var t = "https://mui.com/production-error/?code=" + e, r = 1; r < arguments.length; r += 1)
                    t += "&args[]=" + encodeURIComponent(arguments[r]);
                return "Minified MUI error #" + e + "; visit " + t + " for the full message."
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        637: function(e, t, r) {
            "use strict";
            r.r(t),
            r.d(t, {
                default: function() {
                    return n.Z
                }
            });
            var n = r(118)
        },
        671: function(e) {
            function t(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }
        }
    }
}


const originalText = {};

let locale = "en";

function changeText(changes) {
    for (const selector in changes) {
        const element = document.querySelector(selector);

        if (!element) continue;

        if (!(selector in originalText)) {
            originalText[selector] = element.textContent;
        }

        element.textContent = changes[selector];
    }
}

function restoreText() {
    for (const selector in originalText) {
        const element = document.querySelector(selector);

        if (element) {
            element.textContent = originalText[selector];
        }
    }
}

document.getElementById("changeLocale").addEventListener("click", () => {
    if (locale == "en") {
        locale = "ru"
        changeText({
            "#banner": "Это защищенная компьютерная система, предназначенная «ТОЛЬКО ДЛЯ СЛУЖЕБНОГО ПОЛЬЗОВАНИЯ». Система находится под наблюдением. Поэтому не следует рассчитывать на сохранение конфиденциальности. Лица, уличенные в совершении несанкционированных действий, могут быть подвергнуты дисциплинарным мерам, включая уголовное преследование.",
            "#changeLocale": "EN",
            "#usrnmtag": "Имя пользователя",
            "#psswdtag": "Пароль",
            "#sbmttag": "Представлять на рассмотрение"
        });
        document.documentElement.style.setProperty("--login", "rgb(48, 48, 180)");
        document.documentElement.style.setProperty("--button1", "green");
        document.documentElement.style.setProperty("--button2", "rgb(7, 89, 0)");
    } else{
        locale = "en"
        restoreText();
        document.documentElement.style.setProperty("--login", "green");
        document.documentElement.style.setProperty("--button1", "rgb(48, 48, 180)");
        document.documentElement.style.setProperty("--button2", "rgb(0, 27, 89)");
    }
});