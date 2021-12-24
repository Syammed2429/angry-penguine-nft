

//Slider 1 Starts
jQuery(document).ready(function () {
    jQuery("#slider_2").owlCarousel({
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            980: { items: 4 },
            1200: { items: 4 },
            1500: { items: 5 },
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 300,
        fluidSpeed: 300,
        autoplaySpeed: 300,
        navSpeed: 300,
        dotsSpeed: 300,
        loop: true,
        nav: false,
        navText: ["Previous", "Next"],
        dots: false,
        responsiveRefreshRate: 200,
        slideBy: 2,
        mergeFit: true,
        autoHeight: false,
        mouseDrag: true,
        touchDrag: true,
    });
    jQuery("#slider_2").css("visibility", "visible");
    var owl_goto = jQuery("#slider_2");
    jQuery(".slider_2_goto1").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 0);
    });
    jQuery(".slider_2_goto2").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 1);
    });
    jQuery(".slider_2_goto3").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 2);
    });
    jQuery(".slider_2_goto4").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 3);
    });
    jQuery(".slider_2_goto5").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 4);
    });
    jQuery(".slider_2_goto6").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 5);
    });
    jQuery(".slider_2_goto7").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 6);
    });
    jQuery(".slider_2_goto8").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 7);
    });
    jQuery(".slider_2_goto9").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 8);
    });
    jQuery(".slider_2_goto10").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 9);
    });
    jQuery(".slider_2_goto11").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 10);
    });
    jQuery(".slider_2_goto12").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 11);
    });
    jQuery(".slider_2_goto13").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 12);
    });
    var resize_37 = jQuery(".owl-carousel");
    resize_37.on("initialized.owl.carousel", function (e) {
        if (typeof Event === "function") {
            window.dispatchEvent(new Event("resize"));
        } else {
            var evt = window.document.createEvent("UIEvents");
            evt.initUIEvent("resize", true, false, window, 0);
            window.dispatchEvent(evt);
        }
    });
});

//Slider 1 Ends

//Slider 2 Starts

jQuery(document).ready(function () {
    jQuery("#slider_1").owlCarousel({
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            980: { items: 4 },
            1200: { items: 4 },
            1500: { items: 5 },
        },
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 300,
        fluidSpeed: 300,
        autoplaySpeed: 300,
        navSpeed: 300,
        dotsSpeed: 300,
        loop: true,
        nav: false,
        navText: ["Previous", "Next"],
        dots: false,
        responsiveRefreshRate: 200,
        slideBy: 2,
        mergeFit: true,
        autoHeight: false,
        mouseDrag: true,
        touchDrag: true,
    });
    jQuery("#slider_1").css("visibility", "visible");
    var owl_goto = jQuery("#slider_1");
    jQuery(".slider_1_goto1").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 0);
    });
    jQuery(".slider_1_goto2").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 1);
    });
    jQuery(".slider_1_goto3").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 2);
    });
    jQuery(".slider_1_goto4").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 3);
    });
    jQuery(".slider_1_goto5").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 4);
    });
    jQuery(".slider_1_goto6").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 5);
    });
    jQuery(".slider_1_goto7").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 6);
    });
    jQuery(".slider_1_goto8").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 7);
    });
    jQuery(".slider_1_goto9").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 8);
    });
    jQuery(".slider_1_goto10").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 9);
    });
    jQuery(".slider_1_goto11").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 10);
    });
    jQuery(".slider_1_goto12").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 11);
    });
    jQuery(".slider_1_goto13").click(function (event) {
        owl_goto.trigger("to.owl.carousel", 12);
    });
    var resize_21 = jQuery(".owl-carousel");
    resize_21.on("initialized.owl.carousel", function (e) {
        if (typeof Event === "function") {
            window.dispatchEvent(new Event("resize"));
        } else {
            var evt = window.document.createEvent("UIEvents");
            evt.initUIEvent("resize", true, false, window, 0);
            window.dispatchEvent(evt);
        }
    });
});

//Slider 2 Ends



window._wpemojiSettings = {
    baseUrl: "https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/72x72\/",
    ext: ".png",
    svgUrl: "https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/svg\/",
    svgExt: ".svg",
    source: {
        concatemoji:
            "https:\/\/angrypenguins.club\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.8.2",
    },
};
!(function (e, a, t) {
    var n,
        r,
        o,
        i = a.createElement("canvas"),
        p = i.getContext && i.getContext("2d");
    function s(e, t) {
        var a = String.fromCharCode;
        p.clearRect(0, 0, i.width, i.height),
            p.fillText(a.apply(this, e), 0, 0);
        e = i.toDataURL();
        return (
            p.clearRect(0, 0, i.width, i.height),
            p.fillText(a.apply(this, t), 0, 0),
            e === i.toDataURL()
        );
    }
    function c(e) {
        var t = a.createElement("script");
        (t.src = e),
            (t.defer = t.type = "text/javascript"),
            a.getElementsByTagName("head")[0].appendChild(t);
    }
    for (
        o = Array("flag", "emoji"),
        t.supports = { everything: !0, everythingExceptFlag: !0 },
        r = 0;
        r < o.length;
        r++
    )
        (t.supports[o[r]] = (function (e) {
            if (!p || !p.fillText) return !1;
            switch (
            ((p.textBaseline = "top"), (p.font = "600 32px Arial"), e)
            ) {
                case "flag":
                    return s(
                        [127987, 65039, 8205, 9895, 65039],
                        [127987, 65039, 8203, 9895, 65039]
                    )
                        ? !1
                        : !s(
                            [55356, 56826, 55356, 56819],
                            [55356, 56826, 8203, 55356, 56819]
                        ) &&
                        !s(
                            [
                                55356, 57332, 56128, 56423, 56128, 56418, 56128,
                                56421, 56128, 56430, 56128, 56423, 56128, 56447,
                            ],
                            [
                                55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418,
                                8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128,
                                56423, 8203, 56128, 56447,
                            ]
                        );
                case "emoji":
                    return !s(
                        [10084, 65039, 8205, 55357, 56613],
                        [10084, 65039, 8203, 55357, 56613]
                    );
            }
            return !1;
        })(o[r])),
            (t.supports.everything = t.supports.everything && t.supports[o[r]]),
            "flag" !== o[r] &&
            (t.supports.everythingExceptFlag =
                t.supports.everythingExceptFlag && t.supports[o[r]]);
    (t.supports.everythingExceptFlag =
        t.supports.everythingExceptFlag && !t.supports.flag),
        (t.DOMReady = !1),
        (t.readyCallback = function () {
            t.DOMReady = !0;
        }),
        t.supports.everything ||
        ((n = function () {
            t.readyCallback();
        }),
            a.addEventListener
                ? (a.addEventListener("DOMContentLoaded", n, !1),
                    e.addEventListener("load", n, !1))
                : (e.attachEvent("onload", n),
                    a.attachEvent("onreadystatechange", function () {
                        "complete" === a.readyState && t.readyCallback();
                    })),
            (n = t.source || {}).concatemoji
                ? c(n.concatemoji)
                : n.wpemoji && n.twemoji && (c(n.twemoji), c(n.wpemoji)));
})(window, document, window._wpemojiSettings);
