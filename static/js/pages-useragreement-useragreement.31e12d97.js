(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-useragreement-useragreement"],
  {
    "36a1": function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          "uni-page-body[data-v-0d6950c3]{background-color:#f7f7f7}body.?%PAGE?%[data-v-0d6950c3]{background-color:#f7f7f7}.empty-view[data-v-0d6950c3]{width:100%;height:%?40?%}.text-start[data-v-0d6950c3]{padding-left:%?40?%}",
          "",
        ]),
        (t.exports = e);
    },
    "36c1": function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82"),
          Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = {
          data: function () {
            return { htmlStr: "" };
          },
          onLoad: function () {
            this.GetHtmlStr();
          },
          methods: {
            GetHtmlStr: function () {
              var t = this;
              uni.request({
                url: "https://zhuli.whxinna.com/privacy-policy.html",
                header: { "content-type": "text" },
                dataType: "text",
                success: function (e) {
                  t.htmlStr = e.data;
                },
                fail: function (t) {},
              });
            },
          },
          computed: {
            iframeStyle: function () {
              var e = "height:calc(100% - ".concat(
                this.$store.state.SystemInfo.CustomBar,
                "px - 80upx);margin:40upx;width:calc(100% - 80upx)"
              );
              return t.log("-------------------------------" + e), e;
            },
          },
        };
        e.default = a;
      }).call(this, n("5a52")["default"]);
    },
    "3ffb": function (t, e, n) {
      var a = n("36a1");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var r = n("4f06").default;
      r("79ff5db2", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "87a8": function (t, e, n) {
      "use strict";
      var a = n("3ffb"),
        r = n.n(a);
      r.a;
    },
    d7b5: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("e491"),
        r = n("ecf6");
      for (var c in r)
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(c);
      n("87a8");
      var u = n("f0c5"),
        i = Object(u["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "0d6950c3",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = i.exports;
    },
    e491: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return a;
        });
      var a = { mpHtml: n("b035").default },
        r = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              e(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  e(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [this._v("服务协议及隐私政策")]
                  ),
                ],
                2
              ),
              e(
                "v-uni-scroll-view",
                { style: this.iframeStyle, attrs: { "scroll-y": "true" } },
                [
                  e("mp-html", {
                    attrs: { content: this.htmlStr, selectable: !0 },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        c = [];
    },
    ecf6: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("36c1"),
        r = n.n(a);
      for (var c in a)
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(c);
      e["default"] = r.a;
    },
  },
]);
