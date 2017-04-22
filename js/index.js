$(function () {
    //"use strict";
    function t() {
        var t = {
            _BASE_MARGIN_LEFT: -316,
            _BASE_MARGIN_TOP: -220,
            _MOVE_DISTANCE_V: 200,
            _MOVE_DISTANCE_H: 500,
            _MOVE_SPEED: 300,
            _ltie9: !!$("#ltie9").length,
            _busy: !1,
            _currWindowEl: null,
        };
    }

    function n() {
        function t() {
            $(window).scrollTop() <= 55 ? ($(".sandt").css({
                position: "absolute",
                "margin-top": "55px"
            }), $(".streamer").css({position: "absolute", "margin-top": "55px"})) : ($(".sandt").css({
                position: "fixed",
                "margin-top": "0"
            }), $(".streamer").css({position: "fixed", "margin-top": "0"}))
        }

        function i(t, i, n) {
            if (3456 > t) {
                var o = i * t / 970;
                n.css({marginTop: -o})
            }
        }

        function n(t, i, n, o) {
            if (3456 > t) {
                var e = i * t / 970;
                n.css(o ? {marginLeft: -e} : {marginRight: -e})
            }
        }

        function download() {
            $(window).height() <= 867 ? ($("#download").addClass("download-area_Pos"), $("#download").css("top", $(window).height() - 212 + "px")) : $("#download").removeClass("download-area_Pos").css("top", "710px")
        }


        function init() {
                var t = this, i = '';
                return this.windowEl = $(i).appendTo("body"), this.windowEl.find("a").eq(0).click(function () {
                    return t.close(), !1
                }), this
            }

        init(), $(".head-area").click(function () {
            return e.open($(this).data("src")), !1
        }), $(window).scroll(function () {
            var o = $(window).scrollTop();
            i(o, 700, $(".speed1")), i(o, 300, $(".speed2")), i(o, 80, $(".speed4")), n(o, 15, $(".sandl"), !0), n(o, 15, $(".sandr"), !1), t()
        }), download();
        var r;
        $(window).bind("resize", function () {
            clearTimeout(r), r = setTimeout(function () {
                download()
            }, 300)
        })
    }
//²Î¿¼
    var u = null, c = window.location.href;
    nie.define(function () {
        var t = nie.require("nie.util.shareV5");
        u = t({fat: ".share-btn-set", type: 6, defShow: [23, 22, 2, 1, 4, 3], title: h, url: c, img: l, content: d})
    }), t(), n();
    var p = function (t) {
        for (var i = $(t).find("img"), n = [], o = i.length; o-- > 0;)n.push(i.eq(o).data("src"));
        return n
    }, s = function (t, i, n) {
        this.list = t, this.loader.addEventListener("progress", function (t) {
            n && n(t.progress)
        })
    };
    s.prototype = {
        get: function (t) {
            return this._loader.getResult(t)
        }, load: function () {
            return $("body").attr("style", "overflow:hidden;"), this.loader.loadManifest(this.list)
        }
    }, $("#ltie9").length ? a() : new s(p("#preload_list"), function () {
        a()
    }, function () {
    }).load()
});