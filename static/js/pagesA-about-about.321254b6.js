(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-about-about"],
  {
    1004: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("7fc2"),
        o = n.n(a);
      for (var i in a)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(i);
      e["default"] = o.a;
    },
    "7fc2": function (t, e, n) {
      "use strict";
      n("7a82");
      var a = n("4a46").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = a(n("8b00")),
        i = {
          data: function () {
            return { version: "" };
          },
          onLoad: function () {
            this.version = this.$store.getters.AppVersion;
          },
          methods: {
            showuseragreement: function () {
              uni.navigateTo({ url: "/pages/useragreement/useragreement" });
            },
            checkupdate: function () {
              (0, o.default)(!0, !0);
            },
          },
        };
      e.default = i;
    },
    8367: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("e856"),
        o = n("1004");
      for (var i in o)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(i);
      n("c089");
      var s = n("f0c5"),
        r = Object(s["a"])(
          o["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "7771916f",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = r.exports;
    },
    c089: function (t, e, n) {
      "use strict";
      var a = n("c413"),
        o = n.n(a);
      o.a;
    },
    c413: function (t, e, n) {
      var a = n("cd05");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var o = n("4f06").default;
      o("ed1550a6", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    cd05: function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ".about-content[data-v-7771916f]{position:absolute;left:50%;top:30%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.about-footer[data-v-7771916f]{margin:0 auto;color:#ccc;position:absolute;left:50%;bottom:%?40?%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100%}.logoimg[data-v-7771916f]{width:100%}.center[data-v-7771916f]{text-align:center;line-height:%?40?%}",
          "",
        ]),
        (t.exports = e);
    },
    e856: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticStyle: { position: "relative", height: "100%" } },
            [
              n(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("关于")]
                  ),
                ],
                2
              ),
              n("div", { staticClass: "about-content" }, [
                n(
                  "div",
                  { staticClass: "center" },
                  [
                    n("v-uni-image", {
                      staticStyle: { width: "300upx", height: "300upx" },
                      attrs: { src: "/static/appcode.png", alt: "" },
                    }),
                    n("p", { staticClass: "version-info" }, [
                      t._v("住理生活" + t._s(t.version)),
                    ]),
                    n(
                      "v-uni-button",
                      {
                        staticClass: "cu-btn confirm-btn",
                        staticStyle: { "margin-top": "20upx", color: "white" },
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.checkupdate();
                          },
                        },
                      },
                      [t._v("检查更新")]
                    ),
                  ],
                  1
                ),
              ]),
              n("div", { staticClass: "about-footer" }, [
                n(
                  "p",
                  {
                    staticClass: "center user-agreement",
                    staticStyle: { color: "#32B1FE" },
                    on: {
                      click: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          t.showuseragreement.apply(void 0, arguments);
                      },
                    },
                  },
                  [t._v("《住理生活服务协议及隐私政策》")]
                ),
                n("p", { staticClass: "center beian-number" }, [
                  t._v("教APP备4200113号"),
                ]),
                n("p", { staticClass: "center copyright" }, [
                  t._v("Copyright ©2024"),
                ]),
                n("p", { staticClass: "center conpany-name" }, [
                  t._v("武汉市辛纳电子科技有限公司 | 027-65524889"),
                ]),
              ]),
            ],
            1
          );
        },
        o = [];
    },
  },
]);
